import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";
import Button from "./Button";
import {useState, useEffect, useRef} from "react";

// userRef - это хук, который позволяет сохранять мутируемое значение, 
// которое не вызывает повторный рендер при изменении. 
// Он возвращает объект с единственным свойством current, которое может быть изменено.
//  Обычно useRef используется для доступа к DOM-элементам или для хранения значения,
//  которое должно сохраняться между рендерами, но не должно вызывать повторный рендер
//  при изменении.
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
  const newTaskInputRef = useRef(null);
  const firstIncompleteTaskRef = useRef(null);
  const firstIncompleteTaskId = tasks.find(task => !task.isDone).id;
  const renderCountRef = useRef(0);

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
      newTaskInputRef.current.focus();
    }
  };

  useEffect(() => {
    console.log('tasks have been updated', tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
  }, [tasks]);

  useEffect(() => {
    newTaskInputRef.current.focus();
  }, []);

  useEffect(() => {
    renderCountRef.current = renderCountRef.current + 1;
    console.log('render count', renderCountRef.current);
  });

  const clearSearchQuery = searchQuery.trim().toLowerCase();
  const filteredTasks = clearSearchQuery? tasks.filter(task => task.title.toLowerCase().includes(clearSearchQuery)) : null;

  return (
     <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm 
        addTask={addTask} 
        newTaskTitle={newTaskTitle} 
        setNewTaskTitle={setNewTaskTitle}
        newTaskInputRef={newTaskInputRef}
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
      <Button onClick={() => {firstIncompleteTaskRef.current?.scrollIntoView({ behavior: 'smooth' })}}>Show first incomplete task</Button>  
      <TodoList 
        tasks={tasks}
        filteredTasks={filteredTasks}
        firstIncompleteTaskRef={firstIncompleteTaskRef}
        firstIncompleteTaskId={firstIncompleteTaskId} 
        onDeleteTaskButtonClick={deleteTask}
        onClickTaskDoneButton={toggleTaskDone} 
       />
    </div>
  );
};

export default Todo;