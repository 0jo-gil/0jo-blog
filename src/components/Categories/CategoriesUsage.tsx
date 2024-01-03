import React from "react";
import Categories from "./Categories"

const CategoriesUsage = ({nodes}: any) => {
    return (
        <Categories>
            {
                nodes?.map((node: any) => {
                    return (
                        <Categories.Item
                            key={node.node.frontmatter.title}
                            category={node.node.frontmatter.category}
                        />
                    )
                })
            }
        </Categories>
    )
}

export default CategoriesUsage;