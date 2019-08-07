import {ADD_TODO, REMOVE_TODO} from './'

export const addTodo    = text => ({type:ADD_TODO,    text})
export const removeTodo = todo => ({type:REMOVE_TODO, todo})
