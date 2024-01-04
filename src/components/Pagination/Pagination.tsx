import usePagination from "components/Pagination/usePagination";

type Props = {
    currentPage: number;
    pageCount: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}

const Pagination = ({
                        currentPage,
                        pageCount,
                        hasNextPage,
                        hasPreviousPage,
                    }: Props) => {
    const {onNext, onPrev} = usePagination();

    return (
        <div>
            <button onClick={() => onPrev(hasPreviousPage, currentPage)}>prev</button>
            <span>{currentPage} / {pageCount}</span>
            <button onClick={() => onNext(hasNextPage, currentPage)}>next</button>
        </div>
    )
}

export default Pagination;
