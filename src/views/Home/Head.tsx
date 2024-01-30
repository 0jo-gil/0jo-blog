import Seo from "components/Seo"

export const Head = ({location: {pathname}, data: {site}}: any) => {
    const {title, description} = site.siteMetadata;

    return <Seo title={title} description={description} pathname={pathname} />
}