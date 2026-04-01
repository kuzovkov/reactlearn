import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import tasksAPI from "../api/tasksAPI"; 


const useTasks = () => {



  const [tasks, setTasks] = useState([]);
  
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const newTaskInputRef = useRef(null);
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
          tasksAPI.deleteAll(tasks)
          .then(() => {
            setTasks([]);
          })
          .catch(error => console.error('Error deleting tasks:', error));
        //setTasks([]);
      }
    }, [tasks]);
  
    // const deleteAllTasks = () => {
    //   const isConfirmed = window.confirm('Are you sure you want to delete all tasks?');
    //   if (isConfirmed) {
    //     setTasks([]);
    //   }
    // }
  
    const deleteTask = useCallback((id) => {
      const isConfirmed = window.confirm('Are you sure you want to delete this task?');
      if (isConfirmed) {
        tasksAPI.delete(id)
        .then(() => {
          setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
        })
        .catch(error => console.error('Error deleting task:', error));
        // setTasks(tasks.filter(task => task.id !== id));
      }
    }, [tasks]); 
  
  
    // const deleteTask = (id) => {
    //   const isConfirmed = window.confirm('Are you sure you want to delete this task?');
    //   if (isConfirmed) {
    //     setTasks(tasks.filter(task => task.id !== id));
    //   }
    // }
  
    const toggleTaskDone = useCallback((id, isDone) => {
      // setTasks(tasks.map(task => {
      //   if (task.id === id) {
      //     return {
      //       ...task,
      //       isDone
      //     }
      //   }
      //   return task;
      // }));

      tasksAPI.toggleComplete(id, isDone)
      .then(updatedTask => {
        setTasks((prevTasks) => prevTasks.map(task => task.id === id ? updatedTask : task));
      })
      .catch(error => console.error('Error updating task:', error));

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
  
    const addTask = useCallback((title) => {

      const newTask = {
        title,
        isDone: false
      }

      tasksAPI.add(newTask)
      .then(createdTask => {
        setTasks((prevTasks) => [...prevTasks, createdTask]);
        setNewTaskTitle('');
        setSearchQuery('');
        newTaskInputRef.current.focus();
      })
      .catch(error => console.error('Error adding task:', error));
      // setTasks((prevTasks) => [...prevTasks, newTask]);
      // setNewTaskTitle('');
      // setSearchQuery('');
      // newTaskInputRef.current.focus();
  
    }, []);
  
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
      newTaskInputRef.current.focus();
      tasksAPI.getAll().then(setTasks)
      .catch(error => console.error('Error fetching tasks:', error));
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

    return {
      tasks, 
      filteredTasks,
      deleteTask,
      deleteAllTasks,
      toggleTaskDone,
      addTask,  
      newTaskTitle,
      setNewTaskTitle,
      searchQuery,
      setSearchQuery,
      newTaskInputRef
    };
};

export default useTasks;