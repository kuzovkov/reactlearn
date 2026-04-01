import Field from "./Field"
import Button from "./Button"
import { useContext, useState } from "react";
import { TaskContext } from '../context/taskContext'; 

// используем useContext для получения данных из контекста, чтобы не 
// прокидывать пропсы через все уровни компонентов

// const AddTaskForm = (props) => {
const AddTaskForm = () => {
  const { 
      addTask, 
      newTaskTitle,  
      setNewTaskTitle,
      newTaskInputRef 
    } = useContext(TaskContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isNewtaskTitleEmpty) {
      addTask(newTaskTitleCleared);
    }
  }

  const newTaskTitleCleared = newTaskTitle.trim();
  const isNewtaskTitleEmpty = newTaskTitleCleared.length === 0;

  const [error, setError] = useState('');

  const onInput = (e) => {
    const value = e.target.value;
    const hasOnlySpaces = value.trim().length === 0 && value.length > 0; 
    setNewTaskTitle(e.target.value);
    setError(hasOnlySpaces ? 'Task title cannot be empty' : '');
  }

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field 
      className="todo__field"
      id="new-task"
      label="New task title"
      value={newTaskTitle}
      onInput={onInput}
      ref={newTaskInputRef}
      error={error} 
      />
      <Button 
      type="submit"
      isDisabled={isNewtaskTitleEmpty}
      >Add</Button>
    </form>
  );
};

export default AddTaskForm;