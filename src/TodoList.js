import React, { useState, useEffect } from 'react';



const TodoList = ()=> {

  const [input, setinput] = useState(3);

  // const handleInputChange = (e)=> {
  //   setinput(()=>)
  // }

  return (
    <>
      <button
        onChange={handleInputChange}>提交</button> 
      <ul>
        <li>react</li>
        <li>{input}</li>
      </ul>
    </>
  )
  
}

export default TodoList