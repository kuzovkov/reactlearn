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

  const deleteAllTasks = () => {
    console.log('delete all tasks');
  }

  const deleteTask = (id) => {
    console.log(`delete task with id ${id}`);
  }

  const toggleTaskDone = (id, isDone) => {
    console.log(`toggle task isDone with id ${id} to ${isDone}`);
  }

  const filterTasks = (searchQuery) => {
    console.log(`filter tasks with search query ${searchQuery}`);
  }

  const addTask = (data) => {
    console.log(`add task added`, data);
  };

  return (
     <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm addTask={addTask} />
      <SearchTaskForm onSearchTasksInput={filterTasks} />
      <TodoInfo total={tasks.length} done={tasks.filter(task => task.isDone).length} onDeleteButtonClick={deleteAllTasks} />
      <TodoList tasks={tasks} onDeleteTaskButtonClick={deleteTask} onClickTaskDoneButton={toggleTaskDone} />
    </div>
  );
};

export default Todo;