export * from './context'
export * from './reducer'

export const ContextProvider = ({children, context, reducer}) => {
  const MyContext = context
  const MyReducer = reducer
  const [state, dispatch] = MyReducer();
  
  return (
    <MyContext.Provider value={{state, dispatch}} >
      {children}
    </MyContext.Provider>
  )
}
