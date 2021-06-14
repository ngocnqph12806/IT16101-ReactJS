import React from 'react'

const Search = () => {

    return (
        <form action='/search/name/'className="d-flex">
            <input className="form-control me-2" name='keyword' type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    )
}

export default Search
