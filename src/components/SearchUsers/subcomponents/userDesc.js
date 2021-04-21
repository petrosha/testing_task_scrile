import styles from './userDesc.module.css';

let UserDesc = ({
                  user = {name:"Unknown", login:"@Unknown", pic: "" },
                  selectClb=()=>{}, 
                  highlighted = false, 
                  highlightOn=()=>{},
                  highlightOff=()=>{},
                }) => {
  let selectedStyle = !highlighted ? styles.userDiv : `${styles.userDiv} ${styles.userDivSelected}`;
  return (
    <div className={selectedStyle} onClick={selectClb(user)} onMouseEnter={highlightOn} onMouseLeave={highlightOff}>
      <img className={styles.userPic} src={user.pic} alt="pic"/>
      <div className={styles.userInfoDiv}>
        <p className={styles.userName}>{user.name}</p>
        <p className={styles.userLogin}>@{user.login}</p>
      </div>
    </div>
  )
}

export default UserDesc;