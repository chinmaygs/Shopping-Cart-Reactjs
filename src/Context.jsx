import React, { Children, useReducer } from 'react'
import { createContext } from 'react'

export const Contextpro = createContext(null)

function reducer(state,action){
    switch(action.type){
    }
}

function Context({children}) {
  
  return (
    <div>
<Contextpro.Provider value={{}}>{children}</Contextpro.Provider>
    </div>
  )
}

export default Context