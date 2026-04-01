import { useRef } from "react";

const useIncompleteTaskScroll = (tasks) => {
  // Implementation for scrolling to the first incomplete task
  const firstIncompleteTaskRef = useRef(null);
  const firstIncompleteTaskId = tasks.find(task => !task.isDone).id;
  return { firstIncompleteTaskRef, firstIncompleteTaskId };

};

export default useIncompleteTaskScroll;