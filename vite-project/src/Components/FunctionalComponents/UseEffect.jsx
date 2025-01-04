import React, { useState, useEffect } from "react";
import axios from 'axios';

const UseEffect = () => {
  /*const [text, setText] = useState("Kongu");

  useEffect(() => {
    setText("KEC");
  }, []);

  return (
    <section>
      <h1>Use Effect Example</h1>
      <input 
        type="text" 
        placeholder="Enter your text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <h2>Text typed is {text}</h2>
    </section>
  );
*/

var [post,setPost] = useState([])
useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/post').then((res)=>console.log(res)).catch((err) => console.log(err));
    
},[])
return (
    <section>
        <h1>Fetching the data from Json Placeholder API.</h1>
        <h2>Post are {post}</h2>
    </section>
);

};


export default UseEffect;
