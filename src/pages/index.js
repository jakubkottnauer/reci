import React, { useState, useRef } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'
import { filter as filterBy, groupBy, toPairs, pipe, sort } from 'ramda'
import { AiOutlineClose, AiOutlineArrowUp } from 'react-icons/ai'
import { GiKnifeFork } from 'react-icons/gi'

const IndexPage = ({ data }) => {
  const [filter, setFilter] = useState('')
  const filterInput = useRef(null)

  const resetFilter = () => {
    setFilter('')
    filterInput.current.focus()
  }

  const recipeGroups = pipe(
    filterBy(
      ({ node }) =>
        node.frontmatter.title.toLowerCase().indexOf(filter.toLowerCase()) > -1
    ),
    groupBy((recipe) => recipe.node.frontmatter.title[0]),
    toPairs,
    sort((a, b) => a[0].localeCompare(b[0]))
  )(data.allMarkdownRemark.edges)

  return (
    <Layout>
      <Helmet title="Home" />
      <div className="jump-top-button" onClick={() => window.scrollTo(0, 0)}>
        <AiOutlineArrowUp />
      </div>
      <div>
        <input
          className="recipe-filter"
          onChange={(e) => setFilter(e.currentTarget.value)}
          placeholder="Search..."
          value={filter}
          ref={filterInput}
        />
        <span className="clear-recipe-filter" onClick={resetFilter}>
          <AiOutlineClose />
        </span>
      </div>
      <div className="recipe-alphabet">
        {[...new Array(26)]
          .map((x, i) => {
            const letter = (i + 10).toString(36).toUpperCase()
            const exists = recipeGroups.find((g) => g[0] === letter)
            const className = !exists ? 'disabled' : undefined
            return (
              <a href={`#${letter}`} className={className} key={letter}>
                {letter}
              </a>
            )
          })
          .reduce((prev, curr) => [prev, ' | ', curr])}
      </div>
      <div className="recipe-list">
        {recipeGroups.map((group) => (
          <div className="recipe-group" key={group[0]}>
            <div className="recipe-group-heading" name={group[0]}>
              <h2>{group[0]}</h2>
            </div>
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
                      <div className="placeholder-image">
                        <GiKnifeFork />
                      </div>
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
                fluid(maxHeight: 180, maxWidth: 180) {
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
