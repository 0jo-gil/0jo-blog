/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)
const { graphql } = require("gatsby")

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {}

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
        utils: path.resolve(__dirname, "src/utils"),
        hooks: path.resolve(__dirname, "src/hooks"),
      },
    },
  })
}

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: `@babel/plugin-transform-react-jsx`,
    options: {
      runtime: `automatic`,
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
    }
  `)

  const postList = result.data.allMarkdownRemark.group

  const PostListTemplate = path.resolve(
    __dirname,
    "./src/templates/PostListTemplate.tsx"
  )

  postList.forEach(({ fieldValue }) => {
    createPage({
      path: `/posts/${fieldValue}`,
      component: PostListTemplate,
      context: {
        category: fieldValue,
      },
    })
  })
}
