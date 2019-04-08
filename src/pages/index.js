import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import { filter as filterBy, groupBy, toPairs, pipe, sort } from 'ramda'

const IndexPage = ({ data }) => {
  const [filter, setFilter] = useState('')

  const recipeGroups = pipe(
    filterBy(({ node }) =>
      node.frontmatter.title.toLowerCase().startsWith(filter.toLowerCase())
    ),
    groupBy(recipe => recipe.node.frontmatter.title[0]),
    toPairs,
    sort((a, b) => a[0].localeCompare(b[0]))
  )(data.allMarkdownRemark.edges)

  return (
    <Layout>
      <Helmet title="Home" />
      <div>
        <input
          className="recipe-filter"
          onChange={e => setFilter(e.currentTarget.value)}
          placeholder="  🔍"
        />
      </div>
      <div className="recipe-list">
        {recipeGroups.map(group => (
          <div className="recipe-group" key={group[0]}>
            <div className="recipe-group-heading">{group[0]}</div>
            <div className="recipe-group-content">
              {group[1].map(({ node }) => (
                <Link
                  to={node.fields.slug}
                  className="link"
                  key={node.frontmatter.title}
                >
                  <div className="recipe">
                    {node.frontmatter.image ? (
                      <Img
                        fluid={node.frontmatter.image.childImageSharp.fluid}
                      />
                    ) : (
                      <Image />
                    )}
                    <span>{node.frontmatter.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxHeight: 200, maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`