/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require("path")
const {createFilePath} = require(`gatsby-source-filesystem`)
const {graphql} = require("gatsby")

exports.onCreateWebpackConfig = ({getConfig, actions}) => {
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

exports.onCreateBabelConfig = ({actions}) => {
    actions.setBabelPlugin({
        name: `@babel/plugin-transform-react-jsx`,
        options: {
            runtime: `automatic`,
        },
    })
}


exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions

    // 포스트 페이지 리스트 페이지네이션
    const postListResult = await graphql(`
        query {
            allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 1000) {
                edges {
                    node {
                        frontmatter {
                            title
                        }
                    }
                }
            }
        }
    `)

    const postList = postListResult.data.allMarkdownRemark.edges

    const PostListTemplate = path.resolve(
        __dirname,
        "./src/templates/PostListTemplate.tsx"
    )
    const perPage = 5

    const numPage = Math.ceil(postList.length / perPage)

    Array.from({length: numPage}).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/posts/list/1` : `/posts/list/${i + 1}`,
            component: PostListTemplate,
            context: {
                limit: perPage,
                skip: i * perPage,
                numPage,
                currentPage: i + 1,
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

    posts.forEach(({node}) => {
        createPage({
            path: `/posts/${node.frontmatter.slug}`,
            component: PostTemplate,
            context: {
                slug: node.frontmatter.slug,
            },
        })
    })
}

