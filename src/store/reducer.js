import { useReducer } from 'react'
import storeState from './state'

export function CountReducer () {
  const reducer = (storeState, action) => {
    switch (action.type) {
      case 'reset':
        return {count: 0};
      case 'inc':
        return {count: storeState.count + 1};
      case 'dec':
        return {count: storeState.count - 1};   
      default:
        return storeState;   
    }
  }
  return useReducer(reducer, storeState)
}
