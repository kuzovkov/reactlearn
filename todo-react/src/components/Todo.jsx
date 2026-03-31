import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";
import Button from "./Button";
import {useState, useEffect, useRef, useCallback, useMemo} from "react";

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

  // useCallback - это хук, который позволяет мемоизировать функцию,
  //  чтобы она не пересоздавалась при каждом рендере, если ее зависимости не изменились. 
  // Это может быть полезно для оптимизации производительности, особенно при передаче функции 
  // в дочерние компоненты, которые зависят от нее и могут вызывать повторные рендеры.
  // const memorizedFn = useCallback(() => {
  //   console.log('memorized function');
  // }, [/*зависимости*/]);

  const deleteAllTasks = useCallback(() => {
    const isConfirmed = window.confirm('Are you sure you want to delete all tasks?');
    if (isConfirmed) {
      setTasks([]);
    }
  }, []);

  // const deleteAllTasks = () => {
  //   const isConfirmed = window.confirm('Are you sure you want to delete all tasks?');
  //   if (isConfirmed) {
  //     setTasks([]);
  //   }
  // }

  const deleteTask = useCallback((id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this task?');
    if (isConfirmed) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  }, [tasks]); 


  // const deleteTask = (id) => {
  //   const isConfirmed = window.confirm('Are you sure you want to delete this task?');
  //   if (isConfirmed) {
  //     setTasks(tasks.filter(task => task.id !== id));
  //   }
  // }

  const toggleTaskDone = useCallback((id, isDone) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          isDone
        }
      }
      return task;
    }));
  }, [tasks]);

  // const toggleTaskDone = (id, isDone) => {
  //   setTasks(tasks.map(task => {
  //     if (task.id === id) {
  //       return {
  //         ...task,
  //         isDone
  //       }
  //     }
  //     return task;
  //   }));
  // }

  const addTask = useCallback(() => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false
      }
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTaskTitle('');
      setSearchQuery('');
      newTaskInputRef.current.focus();
    }
  }, [newTaskTitle]);

  // const addTask = () => {
  //   if (newTaskTitle.trim().length > 0) {
  //     const newTask = {
  //       id: crypto?.randomUUID() ?? Date.now().toString(),
  //       title: newTaskTitle,
  //       isDone: false
  //     }
  //     setTasks([...tasks, newTask]);
  //     setNewTaskTitle('');
  //     setSearchQuery('');
  //     newTaskInputRef.current.focus();
  //   }
  // };

  useEffect(() => {
    console.log('tasks have been updated', tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
  }, [tasks]);

  useEffect(() => {
    newTaskInputRef.current.focus();
  }, []);

  useEffect(() => {
    renderCountRef.current = renderCountRef.current + 1;
    //console.log('render count', renderCountRef.current);
  });

  // useMemo - это хук, который позволяет мемоизировать результат вычисления функции,
  //  чтобы он не пересчитывался при каждом рендере, если его зависимости не изменились. 
  // Это может быть полезно для оптимизации производительности, особенно при выполнении 
  // дорогих вычислений или при рендеринге больших списков данных. 
  // const clearSearchQuery = searchQuery.trim().toLowerCase();
  const filteredTasks = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().toLowerCase();
    return clearSearchQuery ? tasks.filter(task => task.title.toLowerCase().includes(clearSearchQuery)) : null;
  }, [tasks, searchQuery]);
  //
  // const filteredTasks = clearSearchQuery? tasks.filter(task => task.title.toLowerCase().includes(clearSearchQuery)) : null;

  const tasksDoneCount = useMemo(() => {
    return tasks.filter(task => task.isDone).length;
  }, [tasks]);

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
        done={tasksDoneCount} 
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