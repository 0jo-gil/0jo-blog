import React from "react";
import Categories from "./Categories"

const CategoriesUsage = ({categoryList}: any) => {
    return (
        <Categories>
            {
                categoryList?.map((list: any, index: number) => {
                    return (
                        <Categories.Item
                            key={index}
                            category={list}
                        />
                    )
                })
            }
        </Categories>
    )
}

export default CategoriesUsage;