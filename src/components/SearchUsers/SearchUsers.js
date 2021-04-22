import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBox from './subcomponents/searchBox.js'
import DropBox from './subcomponents/dropBox.js'
import styles from './SearchUsers.module.css'

const userApi="https://jsonplaceholder.typicode.com/users"
const picsApi="https://jsonplaceholder.typicode.com/photos"


let SearchUsers = () => {
  let [searchValue,setSearchValue]=useState("");
  let [changed,setChanged]=useState(false);
  let [usersList,setUsersList]=useState([]);
  let [selected,setSelected]=useState(false);
  let [highlightedIdx,setHighlightedIdx]=useState(-1);

  const searchValueClb = (e)=>{
    setSearchValue(e.target.value);
    setChanged(true);
    setSelected(false);
  }
  
  const selectByClickClb =(el)=>{return ()=>{
    setSearchValue(el.name);
    setSelected(true);
  }}

  const highlightOnByMouseInClb =(idx)=>{return ()=>{
    setHighlightedIdx(idx);
  }}

  const highlightOffByMouseOutClb =()=>{
    setHighlightedIdx(-1);
  }

  const highlightOnByKey = (e)=>{
    if(usersList.length>0){
      let idx=highlightedIdx;
      if(e.keyCode === 38) idx--;
      if(e.keyCode === 40) idx++;
      if(idx >= -1 && idx < usersList.length) {
        setHighlightedIdx(idx)
        if(e.keyCode === 13) {
          setSearchValue(usersList[idx].name);
          setSelected(true);
        };
      
      };  
    }
  }
  
  const getData = async () => { 
    try{
      let usersReply = await axios
                              .get(userApi)
                              .then(res => res.data);
      let picsReply = await axios
                              .get(picsApi)
                              .then(res => res.data);   

      let usersToReturn=usersReply.filter(el=>el.name.includes(searchValue)).map(el=>{return {id:el.id, name: el.name, login: el.username}});
      usersToReturn.forEach(el=>{el.pic = picsReply.find(el1=>el.id===el1.id).thumbnailUrl});
      setUsersList(usersToReturn);
      if(usersToReturn.length>0) setHighlightedIdx(0);
      setChanged(false);
    } 
    catch(error){
      console.log("Connection error! ",error);
    } 
  }

  useEffect(()=>{
    if(changed) getData();
  },[changed]);

  return (
    <div className={styles.mainDiv}>
      <SearchBox 
        value={searchValue} 
        inputCallBack={searchValueClb}
        keyCallBack={highlightOnByKey}
      />
      {searchValue.length > 0 && !selected ? 
        <DropBox 
          users={usersList} 
          changed={changed} 
          selectClb={selectByClickClb} 
          highlighted={highlightedIdx}
          highlightOn={highlightOnByMouseInClb}
          highlightOff={highlightOffByMouseOutClb}
        /> : 
        ""}
    </div>
  );
}

export default SearchUsers;
