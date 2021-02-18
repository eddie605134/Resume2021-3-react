import React, { useContext } from 'react';
import { countContext } from './store'

function Counter () {
  const {state, dispatch} = useContext(countContext)

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type:'reset'})}>Reset</button>
      <button onClick={() => dispatch({type:'inc'})}>+</button>  
      <button onClick={() => dispatch({type:'dec'})}>-</button>  
    </>
  )
}

export default Counter