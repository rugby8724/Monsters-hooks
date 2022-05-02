
import './search-bar.styles.css'

const SearchBar = ({ className, placeholder, onChangeHandler }) =>{

    return(
      <input 
      className={`search-bar ${className}`} 
      type='search' 
      placeholder={placeholder} 
      onChange={onChangeHandler}>

      </input>
    )
}

export default SearchBar