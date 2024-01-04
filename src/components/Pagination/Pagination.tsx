import usePagination from "components/Pagination/usePagination";
import {StPaginationButton, StPaginationContainer} from "components/Pagination/style";


import {FaArrowLeft, FaArrowRight} from "react-icons/fa6";

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
        <StPaginationContainer>
            <StPaginationButton isActive={hasPreviousPage}
                                onClick={() => onPrev(hasPreviousPage, currentPage)}>
                <FaArrowLeft/>
            </StPaginationButton>
            <span>{currentPage} / {pageCount}</span>
            <StPaginationButton isActive={hasNextPage}
                                onClick={() => onNext(hasNextPage, currentPage)}>
                <FaArrowRight/>
            </StPaginationButton>
        </StPaginationContainer>
    )
}

export default Pagination;
