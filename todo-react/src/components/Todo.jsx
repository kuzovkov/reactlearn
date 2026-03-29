import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";

const Todo = () => {
  const tasks = [
    {
      id: 'task-1',
      title: 'Купить молоко',
      isDone: false
    },
    {
      id: 'task-2',
      title: 'Купить хлеб',
      isDone: true
    },
    {
      id: 'task-3',
      title: 'Купить сыр',
      isDone: false
    }
  ];
  return (
     <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo total={tasks.length} done={tasks.filter(task => task.isDone).length} />
      <TodoList tasks={tasks} />
    </div>
  );
};

export default Todo;