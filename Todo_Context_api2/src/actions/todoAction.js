export const todoFinished = ((chekedVal,e) => ({type:"finished_todo",payload:{checkVal:chekedVal,todo:e}}))

export const todoDelete = ((e) => ({type:'delete_todo', payload:{todo:e}}))

export const todoEdit = ((todotext,e) => ({type: 'edit_todo' ,payload:{todo:e,todoText:todotext}}))

export const addTodo = ((inputText) => ({type: 'add_todo', payload: {todoText: inputText}}))