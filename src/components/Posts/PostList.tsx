import styled from "styled-components";
import { PropsWithChildren } from "react";


type Props = {
    variant?: 'vertical' | 'horizon';
    // posts: any;
}

// , posts
const PostList = ({ variant = 'horizon', children }: PropsWithChildren<Props>) => {
    return (
        <StPostListContainer variant={variant}>
            {children}
        </StPostListContainer>
    )
}

export default PostList;


const StPostListContainer = styled.div<Pick<Props, 'variant'>>`
    width: 100%;
    display: flex;
    flex-direction: ${({variant}) => variant === 'vertical' ? 'column' : 'row'};
`