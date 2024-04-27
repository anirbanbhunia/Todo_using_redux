import { useSelector } from "react-redux"
import Todo from "../Todo/Todo"
import React from "react"

function TodoList({todoDelete,todoEdit,todoFinished}){
      const list = useSelector((state) => state.todo) 
      //how we know state.todo? key name is todo in store reducer so it is state.todo
      //const reducer = combineReducers({todo:todoReducer})

      function onFinished(chekedVal,e){
        todoFinished(chekedVal,e)
      }
      function onDelete(e){
        todoDelete(e)
      }
      function onEdit(todotext,e){
       todoEdit(todotext,e)
      }

    return(
        <div>
            {list.length > 0 && list.map(e => <Todo key={e.id} todoData={e.todoData} isFinished={e.finished} id={e.id} changeFinished={(chekedVal) => onFinished(chekedVal,e)}
        onDelete = {() => onDelete(e)}
        onEdit = {(todotext) => onEdit(todotext,e)}
        />
        )}
        </div>
    )
}
export default TodoList