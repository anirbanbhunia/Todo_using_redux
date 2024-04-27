import { bindActionCreators } from "redux"
import AddTodo from "./Components/AddTodo/AddTodo"
import TodoList from "./Components/TodoList/TodoList"
import { useDispatch } from "react-redux"
import { addTodo,todoDelete,todoEdit,todoFinished } from "./actions/todoAction"

function App() {
//   const [list,setList] = useState([
//     {id:1,todoData:"todo1",finished:false},
//     {id:2,todoData:"todo2",finished:true}
// ])
const dispatch = useDispatch()
const actions = bindActionCreators({addTodo,todoDelete,todoEdit,todoFinished},dispatch)

  return (
      <div>
        <AddTodo addTodo={actions.addTodo}/>
        <TodoList todoDelete={actions.todoDelete} todoEdit={actions.todoEdit} todoFinished={actions.todoFinished}/>
      </div>
  )
}


export default App
