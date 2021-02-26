import react from 'react'
import './search-box.styles.css'

export const SearchBox = ({placeholder, HandleChange}) => {
    return (
        <div >
            <input type="search" placeholder={placeholder} onChange={HandleChange} className="search"/>
        </div>
    )
}