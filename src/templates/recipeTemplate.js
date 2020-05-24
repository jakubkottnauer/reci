import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { remarkForm } from 'gatsby-tinacms-remark'
import Layout from '../components/layout'

function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html, fields } = markdownRemark

  return (
    <Layout>
      <Helmet title={frontmatter.title} />

      <div className="recipe-container">
        <div className="recipe">
          <h1>{frontmatter.title}</h1>
          <div className="recipe-meta">
            {frontmatter.source && (
              <a
                target="_blank"
                href={frontmatter.source}
                rel="noopener noreferrer"
              >
                Original recipe
              </a>
            )}
            {frontmatter.serves && (
              <span>
                {' | '}
                <span role="img" aria-label="Servings">
                  👤
                </span>
                {frontmatter.serves}
              </span>
            )}
            {frontmatter.tags && (
              <div style={{ display: 'inline-block', float: 'right' }}>
                Tags:{' '}
                {frontmatter.tags.split(' ').map((tag) => (
                  <span
                    style={{
                      display: 'inline-block',
                      boxSizing: 'content-box',
                      padding: 2,
                      marginLeft: 5,
                      color: 'white',
                      backgroundColor: 'red',
                      borderRadius: 5,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          {fields.relatedRecipes && (
            <div className="recipe-meta">
              <ul>
                Related recipe{fields.relatedRecipes.length > 1 ? 's' : ''}:
                {fields.relatedRecipes.map((r) => (
                  <li key={r.slug}>
                    <Link to={r.slug}>{r.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <Recipe text={html} ingredients={fields.ingredients} />
        </div>
      </div>
    </Layout>
  )
}

const RecipeForm = {
  fields: [
    {
      label: 'Name',
      name: 'frontmatter.title',
      description: 'Name of the recipe',
      component: 'text',
    },
    {
      label: 'Date',
      name: 'rawFrontmatter.date',
      component: 'date',
      dateFormat: 'YYYY-MM-DD',
      timeFormat: false,
      description: 'Date when the recipe was created, YYYY-MM-DD',
    },
    {
      label: 'Serves',
      name: 'frontmatter.serves',
      component: 'text',
    },
    {
      label: 'Source',
      name: 'frontmatter.source',
      component: 'text',
    },
    {
      label: 'Tags',
      name: 'frontmatter.tags',
      component: 'text',
    },
    {
      label: 'Image',
      name: 'frontmatter.image',
      component: 'text',
    },
    {
      label: 'Ingredients',
      name: 'rawFrontmatter.ingredients',
      component: 'markdown',
    },
    {
      label: 'Text',
      name: 'rawMarkdownBody',
      component: 'markdown',
    },
  ],
}

export default remarkForm(Template, RecipeForm)

const Recipe = ({ text, ingredients: sourceIngredients }) => {
  let recipe = text
  let ingredients = sourceIngredients
  // Try to split by end of ingredient list
  const splitBy = '</ul>'
  const idx = text.lastIndexOf(splitBy)

  // if individual ingredients aren't specified, extract them from recipe text
  if (idx > -1 && !ingredients) {
    ingredients = text.substr(0, idx + splitBy.length)
    recipe = text.substr(idx + splitBy.length)
  }

  return (
    <div className="recipe-content">
      {ingredients && (
        <div
          className="recipe-ingredients"
          dangerouslySetInnerHTML={{ __html: ingredients }}
        />
      )}
      <div
        classNAme="recipe-text"
        dangerouslySetInnerHTML={{ __html: recipe }}
      />
    </div>
  )
}

export const pageQuery = graphql`
  query RecipeQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        serves
        source
        tags
      }
      fields {
        ingredients
        relatedRecipes {
          slug
          title
        }
      }
      ...TinaRemark
    }
  }
`
