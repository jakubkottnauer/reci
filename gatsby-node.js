const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
const { uniqBy } = require('ramda')
const remark = require('remark')
const remarkHTML = require('remark-html')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const recipeTemplate = path.resolve(`src/templates/recipeTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              source
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: recipeTemplate,
        context: {
          slug: node.fields.slug,
        }, // additional data can be passed via context
      })
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'recipes' })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }

  if (node.frontmatter && node.frontmatter.ingredients) {
    const ingredients = node.frontmatter.ingredients
    const value = remark().use(remarkHTML).processSync(ingredients).toString()

    createNodeField({
      name: 'ingredients',
      node,
      value,
    })
  }
}

exports.sourceNodes = ({ actions, getNodes, getNode }) => {
  const { createNodeField } = actions

  const relatedRecipes = {}

  const getRecipeById = (id) =>
    getNodes().find(
      (n) => n.internal.type === 'MarkdownRemark' && n.fields.slug === `/${id}/`
    )
  const extractData = (node) => ({
    id: node.id,
    slug: node.fields.slug,
    title: node.frontmatter.title,
  })

  const markdownNodes = getNodes()
    .filter((node) => node.internal.type === 'MarkdownRemark')
    .forEach((node) => {
      if (node.frontmatter.related) {
        const found =
          node.frontmatter.related instanceof Array
            ? node.frontmatter.related.map(getRecipeById)
            : [getRecipeById(node.frontmatter.related)]

        found
          .filter((n) => n)
          .map((n) => {
            // if it's first time for this author init empty array for his books
            if (!relatedRecipes[n.id]) {
              relatedRecipes[n.id] = []
            }

            if (!relatedRecipes[node.id]) {
              relatedRecipes[node.id] = []
            }

            relatedRecipes[n.id].push(extractData(node))
            relatedRecipes[node.id].push(extractData(n))
          })
      }
    })

  Object.entries(relatedRecipes).forEach(([recipeId, data]) => {
    const currentRecipe = getNode(recipeId)
    const filteredData = uniqBy((x) => x.id, data)
    createNodeField({
      node: currentRecipe,
      name: 'relatedRecipes',
      value: filteredData,
    })
  })
}
