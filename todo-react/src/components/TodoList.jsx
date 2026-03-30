import TodoItem from "./TodoItem";

const TodoList = (props) => {

  const {
      tasks=[],
      onDeleteTaskButtonClick,
      onClickTaskDoneButton,
      filteredTasks
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
          onDeleteButtonClick={onDeleteTaskButtonClick} 
          onClickTaskDoneButton={onClickTaskDoneButton} 
        />
      ))} 
    </ul>
  );
};

export default TodoList;