import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";
import {useState, useEffect} from "react";

const Todo = () => {
  
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [{
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
    }];
  });



  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

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

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false
      }
      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
      setSearchQuery('');
    }
  };

  useEffect(() => {
    console.log('tasks have been updated', tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
  }, [tasks]);

  const clearSearchQuery = searchQuery.trim().toLowerCase();
  const filteredTasks = clearSearchQuery? tasks.filter(task => task.title.toLowerCase().includes(clearSearchQuery)) : null;

  return (
     <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm 
        addTask={addTask} 
        newTaskTitle={newTaskTitle} 
        setNewTaskTitle={setNewTaskTitle} 
        />
      <SearchTaskForm  
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <TodoInfo 
        total={tasks.length} 
        done={tasks.filter(task => task.isDone).length} 
        onDeleteButtonClick={deleteAllTasks} 
        />
      <TodoList 
        tasks={tasks}
        filteredTasks={filteredTasks} 
        onDeleteTaskButtonClick={deleteTask}
        onClickTaskDoneButton={toggleTaskDone} 
       />
    </div>
  );
};

export default Todo;