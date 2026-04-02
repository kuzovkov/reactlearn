import { createContext } from "react";
import useTasks from "../hooks/useTasks";
import useIncompleteTaskScroll from "../hooks/useIncompleteTaskScroll";

export const TaskContext = createContext({});

export const TasksProvider = (props) =>{
  const {children} = props;

  const {
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
  } = useTasks();

  const { 
    firstIncompleteTaskRef, 
    firstIncompleteTaskId 
  } = useIncompleteTaskScroll(tasks);

  return (
    <TaskContext.Provider value={{
      tasks, 
      filteredTasks,
      firstIncompleteTaskRef,
      firstIncompleteTaskId,
      deleteTask,
      deleteAllTasks,
      toggleTaskDone,
      addTask,  
      newTaskTitle,
      setNewTaskTitle,
      searchQuery,
      setSearchQuery,
      newTaskInputRef
    }}>
      {children}
    </TaskContext.Provider>
  );
};
