import {navigate} from "gatsby";

const usePagination = () => {

    const onNext = (hasNext: boolean, currentIndex: number) => {
        if (!hasNext) {
            return
        }

        navigate(`/posts/list/${currentIndex + 1}`)
    }

    const onPrev = (hasPrev: boolean, currentIndex: number) => {
        if (!hasPrev || currentIndex === 1) {
            return
        }

        navigate(`/posts/list/${currentIndex - 1}`)
    }

    return {
        onNext,
        onPrev
    }
}

export default usePagination;
