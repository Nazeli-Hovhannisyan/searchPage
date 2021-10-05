import React from 'react'
import SearchItems from './SearchItems'
import './SearchPage.scss'


function SearchPage() {
    return (
        <div className='search'>
           <div className= 'searchPage'>
                <div className= 'searchPageSize'>
                    <SearchItems/>
                </div>
            </div>
        </div>
    )
}

export default SearchPage
