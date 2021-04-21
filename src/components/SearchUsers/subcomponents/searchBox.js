import styles from "./searchBox.module.css"
import lookingGlass from './lookingGlass.svg'

const SearchBox = ({value="", inputCallBack=()=>{},keyCallBack=()=>{}}) => {
    return (
      <div className={styles.searchDiv}>
        <img className={styles.searchImg}  src={lookingGlass} alt="lookingGlass"/>
        <input 
          className={styles.searchInput}
          type="search"
          placeholder="Search"
          value={value}
          onInput={inputCallBack}
          onKeyUp={keyCallBack}
        />
      </div>
    )
  }

  export default SearchBox;