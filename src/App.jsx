import './Main.scss';

function AddItemBtn(props) {
  function addItem() {
    console.log('I was clicked');
  }
  return (
    <button onClick={addItem} className='addItem'>Add Item</button>
  );
}
function DeleteItemBtn() {
  function deleteItem() {
    
  }
  return (
    <button onClick={deleteItem}>Delete</button>
  );
}

function App() {
  return (
    <div className="App">
      <div className="AppParent">
        <div className="Header">
          <h1>To do list</h1>
          <AddItemBtn />
        </div>
      </div>
    </div>
  );
}

export default App;
