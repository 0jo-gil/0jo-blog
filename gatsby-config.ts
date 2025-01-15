import dotenv from "dotenv"
import { GatsbyConfig } from "gatsby"

dotenv.config()

const config: GatsbyConfig = {
  siteMetadata: {
    title: `0jo's blog`,
    description: `2025 0jo's development blog`,
    author: `0jo`,
    siteUrl: `https://tech.0jo.site`,
  },
  plugins: [
    `gatsby-plugin-image`,
    "gatsby-plugin-typescript",
    "gatsby-plugin-postcss",
    "gatsby-plugin-emotion",
    "gatsby-plugin-cname",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-H4CKQGN494", // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://tech.0jo.site",
        sitemap: "https://tech.0jo.site/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-seo",
      options: {
        siteName: "Example Company",
        defaultSiteImage: "/img/logo.png",
        siteUrl: "https://tech.0jo.site",
        globalSchema: `{
            "@type": "WebSite",
            "@id": "https://example.com/#website",
            "url": "https://example.com/",
            "name": "Example Site Title",
            "publisher": {
              "@id": "https://example.com/about/#organization"
            },
            "image": {
              "@type": "ImageObject",
              "@id": "https://example.com/#logo",
              "url": "https://example.com/img/logo.png",
              "caption": "Example Company Logo"
            }
          }`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}

export default config
