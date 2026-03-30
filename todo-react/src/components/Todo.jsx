import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";
import {useState} from "react";

const Todo = () => {

  const [tasks, setTasks] = useState([
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
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');

  const deleteAllTasks = () => {
    const isConfirmed = window.confirm('Are you sure you want to delete all tasks?');
    if (isConfirmed) {
      setTasks([]);
    }
  }

  const deleteTask = (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this task?');
    if (isConfirmed) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  }

  const toggleTaskDone = (id, isDone) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          isDone
        }
      }
      return task;
    }));
  }

  const filterTasks = (searchQuery) => {
    console.log(`filter tasks with search query ${searchQuery}`);
  }

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false
      }
      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
    }
  };

  return (
     <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm 
        addTask={addTask} 
        newTaskTitle={newTaskTitle} 
        setNewTaskTitle={setNewTaskTitle} 
        />
      <SearchTaskForm 
        onSearchTasksInput={filterTasks} 
      />
      <TodoInfo 
        total={tasks.length} 
        done={tasks.filter(task => task.isDone).length} 
        onDeleteButtonClick={deleteAllTasks} 
        />
      <TodoList 
        tasks={tasks} 
        onDeleteTaskButtonClick={deleteTask}
        onClickTaskDoneButton={toggleTaskDone} 
       />
    </div>
  );
};

export default Todo;