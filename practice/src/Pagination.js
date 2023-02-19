import Page from "./Page"

function Pagination({ totalPages, actualPage, setActualPage }) {

    const pages = [];

    const style = {
        display: "inline-block",
        listStyle: "none"
    }

    for (let i = 0; i < totalPages; i++) {
        pages.push(<li style={style} key={i}><Page numPage={i} selected={actualPage === i} selectPage={setActualPage} /></li>)
    }

    return <ul>{pages}</ul>;
}

export default Pagination;
