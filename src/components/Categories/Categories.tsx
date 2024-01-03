import React, { PropsWithChildren } from "react";
import CategoriesItem from "./CategoriesItem";

const Categories = ({children}: PropsWithChildren) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Categories;

Categories.Item = CategoriesItem;