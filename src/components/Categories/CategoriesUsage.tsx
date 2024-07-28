import React from "react";
import Categories from "./Categories"

const CategoriesUsage = ({categoryList, selectedCategory, onChange}: any) => {

    return (
        <Categories>
            {
                categoryList?.map((list: any, index: number) => {
                    return (
                        <Categories.Item
                            key={index}
                            active={selectedCategory === list}
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