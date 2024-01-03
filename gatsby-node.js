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
        styles: path.resolve(__dirname, "src/styles"),
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


  // 각 포스트 별 상세 페이지 생성
  const postResult = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  const posts = postResult.data.allMarkdownRemark.edges

  const PostTemplate = path.resolve(
      __dirname,
      "./src/templates/PostTemplate.tsx"
  )

  posts.forEach(({ node }) => {
    createPage({
      path: `/posts/${node.frontmatter.slug}`,
      component: PostTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}

