import './Main.scss';
import React, { useState } from 'react';


function App() {



  const [itemTitle, setItemTitle] = useState([]);
  const [itemTime, setItemTime] = useState([]);

  const [popUp, setpopUp] = useState(false);



  function List() {
    return (
      <div className='list'>
        {itemTitle.map(item => {
          let num = itemTitle.indexOf(item);
          console.log(num);
          return (
            <div key={num} className={'item'}>
              <div className='details'>
                <p className='title'>{item}</p>
                <p>{itemTime[num]}</p>
              </div>
              <div className='buttons'>
                <button className='editItem' onClick={() => editItem(num)}>Edit</button>
                <button className='deleteItem' onClick={() => deleteItem(num)}>Delete</button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  
  function AddItemWindow(props) {
    const [titleValue, setTitle] = useState('');
    const [timeValue, setTime] = useState('');

    function addListItem() {
      setItemTitle([...itemTitle, titleValue]);
      setItemTime([...itemTime, timeValue]);
    }

    if (popUp) {
      return (
        <div className='popup'>
          <div className='window'>
            <button onClick={() => setpopUp(false)}>X</button>
            <form action="">
              <label htmlFor="title">Title: </label>
              <input type="text" id='title' onChange={e => setTitle(e.target.value)} />
              <label htmlFor="time">Time: </label>
              <input type="time" id='time' onChange={e => setTime(e.target.value)} />
            </form>
            <button className='addItem' onClick={addListItem}>AddItem</button>
          </div>
        </div>
      );
    } else {return <></>}
  }
  

  //Functions-----------------
  function addItem() {
    if (popUp) {

    } else {
      setpopUp(true);
    }
  }
  function deleteItem(index) {
    const tempTitle = itemTitle;
    tempTitle.splice(index, 1);
    console.log(tempTitle);
    setItemTitle(tempTitle);

    const tempTime = itemTime;
    tempTime.splice(index, 1);
    console.log(tempTime);
    setItemTime(tempTime);

  }
  function editItem(index) {
    console.log(index);
  }

  //Button components----------
  function AddItemBtn() {
    return (
      <button onClick={addItem} className='addItem'>Add Item</button>
    );
  }


  return (
    <div className="App">
      <div className="AppParent">
        <div className="Header">
          <h1>To do list</h1>
          <AddItemBtn />
          <AddItemWindow />
        </div>
        <List />
      </div>
    </div>
  );
}

export default App;
