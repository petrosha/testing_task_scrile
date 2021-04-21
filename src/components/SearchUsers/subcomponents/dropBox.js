import styles from './dropBox.module.css';
import SpinnerBox from './spinner.js';
import UserDesc from './userDesc.js';

let DropBox = ({  
                  users = [],
                  changed = false,
                  highlighted=-1,
                  selectClb=()=>{},
                  highlightOn=()=>{},
                  highlightOff=()=>{}                
                }) => {
  return (
    <div className={styles.dropDiv}>
      { !changed ?  users.map((el,idx)=>{
          return (
            <UserDesc 
              key={el.login} 
              user={el} 
              selectClb={selectClb} 
              highlighted={idx === highlighted}
              highlightOn={highlightOn(idx)}
              highlightOff={highlightOff}/>)
            }) : 
            <SpinnerBox/> }
    </div>
  )
}

export default DropBox;