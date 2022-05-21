import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { BsFillPeopleFill, BsLink45Deg, BsLink } from 'react-icons/bs'
import Layout from '../components/layout'

function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html, fields } = markdownRemark

  return (
    <Layout headerImage={fields.image ? fields.image : undefined}>
      <Helmet title={frontmatter.title} />

      <div className="recipe">
        <h1>{frontmatter.title}</h1>
        <div className="recipe-meta">
          <div style={{ float: 'left' }}>
            {frontmatter.source && (
              <div className="section-with-icon">
                <BsLink45Deg />
                <a
                  className="text"
                  target="_blank"
                  href={frontmatter.source}
                  rel="noopener noreferrer"
                >
                  original recipe: {frontmatter.source}
                </a>
              </div>
            )}
            {frontmatter.serves && (
              <div className="section-with-icon">
                <BsFillPeopleFill />
                <span className="text">{frontmatter.serves}</span>
              </div>
            )}
            {fields.relatedRecipes && (
              <div className="section-with-icon">
                <BsLink />
                <span className="text">
                  {fields.relatedRecipes
                    .map((r) => (
                      <Link key={r.slug} to={r.slug}>
                        {r.title}
                      </Link>
                    ))
                    .reduce((prev, curr) => [prev, ', ', curr])}
                </span>
              </div>
            )}
          </div>

          <div style={{ float: 'right' }}>
            {frontmatter.tags && (
              <div>
                {frontmatter.tags.split(' ').map((tag) => (
                  <span className="tag">{tag}</span>
                ))}
              </div>
            )}
          </div>
        </div>
        <Recipe text={html} ingredients={fields.ingredients} />
      </div>
    </Layout>
  )
}

export const recipeForm = {
  fields: [
    {
      label: 'Name',
      name: 'frontmatter.title',
      description:
        'Something short but descriptive enougg, e.g. "Chicken Curry", "Sweet and Sour Chicken"',
      component: 'text',
      required: true,
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
      name: 'frontmatter.lang',
      component: 'select',
      label: 'Language',
      description: 'Language of the recipe',
      options: ['en', 'cz', 'se'],
    },
    {
      label: 'Serves',
      name: 'frontmatter.serves',
      component: 'text',
    },
    {
      label: 'Related recipes',
      name: 'frontmatter.related',
      description: 'Space-separated list of filenames of related recipes',
      component: 'text',
    },
    {
      label: 'Source',
      name: 'frontmatter.source',
      component: 'text',
      description: 'URL of the original video/article',
    },
    {
      label: 'Tags',
      name: 'frontmatter.tags',
      component: 'text',
      description: 'Space-separated list of tags',
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
      required: true,
    },
  ],
}

export default Template

const Recipe = ({ text, ingredients: sourceIngredients }) => {
  const recipes = text.split('<hr>')

  return (
    <div className="recipe-content">
      {recipes.map((r) => (
        <div className="small-recipe" dangerouslySetInnerHTML={{ __html: r }} />
      ))}
    </div>
  )
}

export const pageQuery = graphql`
  query SmallRecipesQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        source
        tags
      }
      fields {
        ingredients
        relatedRecipes {
          slug
          title
        }
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`
