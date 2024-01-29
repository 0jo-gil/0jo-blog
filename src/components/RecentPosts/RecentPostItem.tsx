const RecentPostItem = ({post}: any) => {
    const {title, summary, date, slug} = post.frontmatter;
    /**
     * {
        "title": "커링",
        "summary": "함수형 프로그래밍에서 활용가능한 커링에 대해 알아보자",
        "date": "2024.01.29",
        "slug": "currying-patterns"
    }
     * 
     */
    return (
        <div>
            <div>{title}</div>
            <div>{summary}</div>
            <div>{slug}</div>
            <div>{date}</div>

            <br />
        </div>
    )
}

export default RecentPostItem;