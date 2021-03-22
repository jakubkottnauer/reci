import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { withPlugin } from 'tinacms'
import { RemarkCreatorPlugin } from 'gatsby-tinacms-remark'

import Header from './header'
import './layout.scss'
import './recipes.scss'
import { recipeForm } from '../templates/recipeTemplate'

const CreateRecipe = new RemarkCreatorPlugin({
  label: 'Create Recipe',
  fields: recipeForm.fields,
  filename: (form) => {
    const slug = form.frontmatter.title
      .trim()
      .replace(/\s+/g, '-')
      .toLowerCase()
    return `recipes/${slug}.md`
  },
  frontmatter: (form) => ({
    title: form.frontmatter.title,
    date: new Date(),
  }),
})

const Layout = ({ children, headerImage }) => {
  // TODO: render header image if specified
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <>
          <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`} />
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: '0 auto',
              maxWidth: 1300,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            <main>{children}</main>
          </div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withPlugin(Layout, CreateRecipe)
