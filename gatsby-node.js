const path = require('path')
const fs = require('fs')
const { createFilePath } = require(`gatsby-source-filesystem`)
const { uniqBy } = require('ramda')
const remark = require('remark')
const remarkHTML = require('remark-html')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const recipeTemplate = path.resolve('src/templates/recipeTemplate.js')
  const smallRecipesTemplate = path.resolve(
    'src/templates/smallRecipesTemplate.js'
  )

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
              layout
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
      const { slug } = node.fields
      createPage({
        path: slug,
        component:
          node.frontmatter.layout === 'smallrecipes'
            ? smallRecipesTemplate
            : recipeTemplate,
        context: {
          slug,
        },
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

    const absolutePath = node.fileAbsolutePath.replace('.md', '.jpg')
    if (fs.existsSync(absolutePath)) {
      createNodeField({
        node,
        name: 'image',
        value: `./${slug.replace(/\//g, '')}.jpg`,
      })
    }
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

  getNodes()
    .filter((node) => node.internal.type === 'MarkdownRemark')
    .forEach((node) => {
      if (node.frontmatter.related) {
        const found =
          node.frontmatter.related instanceof Array
            ? node.frontmatter.related.map(getRecipeById)
            : [getRecipeById(node.frontmatter.related)]
        console.log(
          node.frontmatter.title,
          found.map((x) => x.frontmatter.title)
        )
        found
          .filter((n) => n)
          .map((n) => {
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
