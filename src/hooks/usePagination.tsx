import { useState } from "react";

const usePagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 5;

    const indexOfLast = currentPage * perPage;
    const indexOfFirst = indexOfLast - perPage;

    const onPageChange = (pageNumber: number) => setCurrentPage(pageNumber);

    return {}
}

export default usePagination;