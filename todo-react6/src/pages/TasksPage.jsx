import { TasksProvider } from '../context/taskContext';
import Todo from "../components/Todo/Todo";

const TasksPage = () => {
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  )
};

export default TasksPage; 