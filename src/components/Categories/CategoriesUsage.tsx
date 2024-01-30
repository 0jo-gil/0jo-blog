import React from "react";
import Categories from "./Categories"

const CategoriesUsage = ({categoryList, onChange}: any) => {
    return (
        <Categories>
            {
                categoryList?.map((list: any, index: number) => {
                    return (
                        <Categories.Item
                            key={index}
                            onClick={() => onChange(list)}
                            category={list}
                        />
                    )
                })
            }
        </Categories>
    )
}

export default CategoriesUsage;