import TodoItem from "./TodoItem";
import {memo} from 'react';

const TodoList = (props) => {
  console.log('TodoList');
  const {
      tasks=[],
      onDeleteTaskButtonClick,
      onClickTaskDoneButton,
      filteredTasks,
      firstIncompleteTaskRef,
      firstIncompleteTaskId
  } = props;
  const hasTasks = tasks.length > 0;
  const isEmptyFilteredTasks = filteredTasks?.length === 0;
  
  if (!hasTasks) {
    return(<div className="todo__empty-message">There are not tasks yet</div>)
  }

  if (isEmptyFilteredTasks && hasTasks) {
    return(<div className="todo__empty-message">Tasks not found</div>)
  }
  
  return (
    <ul className="todo__list">
      {(filteredTasks ?? tasks).map((task) => (
        <TodoItem 
          key={task.id} {...task} 
          className="todo__item"
          ref = {task.id === firstIncompleteTaskId ? firstIncompleteTaskRef : null} 
          onDeleteButtonClick={onDeleteTaskButtonClick} 
          onClickTaskDoneButton={onClickTaskDoneButton} 
        />
      ))} 
    </ul>
  );
};

export default memo(TodoList);