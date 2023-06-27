import React,{useState}from 'react'
import './Profile.css'
export default function Profile() {
const[name,setName] =useState("");
const[date,setDate]=useState("");
const nameHandler = (e) =>
{
  setName(e.target.value);
}
const dateHandler=(e)=>
{
  setDate(e.target.value);
}
  document.body.style = 'background: rgb(100, 101, 101))'
  return (
    <div className="App">
      <h1>{name}</h1>
      <h3>{date}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, cupiditate veniam at, sint voluptates commodi ut 
        ea deleniti excepturi reiciendis repellendus. Exercitationem, eligendi voluptate molestias s
        equi voluptates ut illum unde earum deserunt ab accusantium molestiae rerum, fuga, in perspiciatis nobis?</p>
<div className="input">
<input type='Date' value={date} onChange={dateHandler} />
<input type="text"value={name}onChange={nameHandler}/>
</div>
    </div>
  )
}
