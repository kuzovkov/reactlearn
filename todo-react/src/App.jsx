import Todo from "./components/Todo";
import { TasksProvider } from './context/taskContext';

const App = () => {
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  )
}

export default App
