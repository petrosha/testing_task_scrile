import spinner from './spinner.svg'
import styles from './spinner.module.css';

let SpinnerBox = () => {
  return (
    <div className={styles.spinnerDiv}>
      <p className={styles.spinnerText}>Uploading</p>
      <img className={styles.spinnerImg}  src={spinner} alt="spinner"/>
    </div>
  )
}

export default SpinnerBox;