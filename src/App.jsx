import { useState } from 'react';
import './App.css'

const initialItem=[
  {id:1,description:"passports",quantity:2,packed:false},
  {id:1,description:"socks",quantity:12,packed:true}

]


function Logo(){
  return(
    <h1>🌴 TRAVEL LIST 💼</h1>
  )
}

function Form(){
  const [description,setDescription]=useState("Shubham");
  const [count,setCount]=useState(1);
  function handelSubmit(e){
    e.preventDefault()

    if(!description) return;
    const newItem = {description,count,packed:false,id:Date.now()};
    setDescription("");
    setCount(1);
  }
  
  return(
  <form className='add-form' onSubmit={handelSubmit}>
    <h3>What do you need for your trip 😊</h3>
    <select  value={count} onChange={(e)=>setCount(Number(e.target.value))}>
      {Array.from({length:20},(_,i)=>i+1).map((num=>(
      <option value={num} key={num}>{num}</option>
      )))}
    </select>
    <input type="text" placeholder='Item...' value={description}
    onChange={(e)=>setDescription(e.target.value)}/>
    <button>Add</button>
  </form>
  );
}

function PackingList(){
  return (
    <div className="list">
    <ul>
      {initialItem.map((item)=>(<Item item={item} key={item.id}/>))}
  </ul>
  </div>
  );
}
function Item({item}){
  return(
    <li>
      <span style={item.packed?{textDecoration:"line-through"}:{}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  )
}
function  Stats(){
  return (
    <div className='stats'>
      <em>You have 4 items on your list, and you already packed 0 (0%)</em>
    </div>
  )
}
function App() {

  return (
    <>
        <Logo/>
        <Form/>
        <PackingList/>
        <Stats/>
    </>
  )
}

export default App;
