import { createContext, useMemo } from "react";
import useTasks from "./useTasks";
import useIncompleteTaskScroll from "./useIncompleteTaskScroll";

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
    newTaskInputRef,
    disappearingTaskId,
    appearingTaskId,
  } = useTasks();

  const { 
    firstIncompleteTaskRef, 
    firstIncompleteTaskId 
  } = useIncompleteTaskScroll(tasks);

  const value = useMemo(() => ({
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
    newTaskInputRef,
    disappearingTaskId,
    appearingTaskId,
  }), [
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
    newTaskInputRef,
    disappearingTaskId,
    appearingTaskId
  ]);

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
};
