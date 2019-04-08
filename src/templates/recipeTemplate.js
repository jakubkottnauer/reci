import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

import Helmet from 'react-helmet'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
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
            {frontmatter.related && (
              <span>
                | Related recipe:
                <Link to={frontmatter.related}>{frontmatter.related}</Link>
              </span>
            )}
          </div>
          <div
            className="recipe-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query RecipeQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        source
        related
      }
    }
  }
`
