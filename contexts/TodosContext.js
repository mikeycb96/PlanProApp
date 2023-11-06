import React, { createContext, useState } from 'react';

export const TodosContext = createContext(null);

const TodosContextProvider = (props) =>{
    const [todos, setTodos] = useState([]);
    const contextValue= {todos, setTodos};

    return(
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider