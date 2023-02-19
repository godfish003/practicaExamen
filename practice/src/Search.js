import {useState, useEffect} from 'react'

function Search({ searchTerm, setSearchTerm }) {

    const [value, setValue] = useState(searchTerm);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setSearchTerm(value);
        }, 20);
        return function () {
            clearTimeout(timeoutId);
        }
    }, [value, setSearchTerm]);

    const handleChange = (e) => {
        setValue(e.target.value);
        e.preventDefault();
    };



    return (
        <>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" defaultValue={searchTerm} onChange={handleChange} />

            <p>
                Searching for <strong>{searchTerm}</strong>.
            </p>

        </>
    );
}


export default Search;
