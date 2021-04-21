import styles from './App.module.css';
import SearchUsers from './components/SearchUsers/SearchUsers.js';

function App() {

  return (
    <div className={styles.App}>
      <SearchUsers/>

      Какой-то текст, который будет закрыт dropdown. 
    </div>
  );
}

export default App;
