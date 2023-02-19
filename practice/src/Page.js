import "./Page.scss"

function Page({ numPage, selected, selectPage }) {

    const selectedStyle = {
        backgroundColor: "red",
        color: "white"
    }

    function handleClick(e) {
        selectPage(numPage)
    }

    return <><button onClick={handleClick} className={selected ? "page-selected" : ""}>{numPage}</button></>;

}


export default Page;