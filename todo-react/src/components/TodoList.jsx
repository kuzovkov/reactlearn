import TodoItem from "./TodoItem";

const TodoList = (props) => {

  const {
      tasks=[],
      onDeleteTaskButtonClick,
      onClickTaskDoneButton
  } = props;
  const hasTasks = tasks.length > 0;
  
  if (!hasTasks) {
    <div className="todo__empty-message"></div>
  }
  
  return (
    <ul className="todo__list">
      {tasks.map((task) => (
        <TodoItem key={task.id} {...task} className="todo__item" onDeleteButtonClick={onDeleteTaskButtonClick} onClickTaskDoneButton={onClickTaskDoneButton} />
      ))} 
    </ul>
  );
};

export default TodoList;