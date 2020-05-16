import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'

export default function Template({ data }) {
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
                Website
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
          </div>
          {fields.relatedRecipes && (
            <div className="recipe-meta">
              <ul>
                Related recipe{fields.relatedRecipes.length > 1 ? 's' : ''}:
                {fields.relatedRecipes.map(r => (
                  <li key={r.slug}>
                    <Link to={r.slug}>{r.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <Recipe text={html} />
        </div>
      </div>
    </Layout>
  )
}

const Recipe = ({ text }) => {
  let recipe = text
  let ingredients
  // Try to split by end of ingredient list
  const splitBy = '</ul>'
  const idx = text.lastIndexOf(splitBy)
  if (idx > -1) {
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
      }
      fields {
        relatedRecipes {
          slug
          title
        }
      }
    }
  }
`
