import Field from "./Field"
import Button from "./Button"
import { useContext } from "react";
import { TaskContext } from '../context/taskContext'; 

// используем useContext для получения данных из контекста, чтобы не 
// прокидывать пропсы через все уровни компонентов

// const AddTaskForm = (props) => {
const AddTaskForm = (pros) => {
  const { 
    addTask, 
    newTaskTitle,  
     setNewTaskTitle,
     newTaskInputRef 
    } = useContext(TaskContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target.data);
    addTask(formData);
  }

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field 
      className="todo__field"
      id="new-task"
      label="New task title"
      value={newTaskTitle}
      onInput={(e) => setNewTaskTitle(e.target.value)}
      ref={newTaskInputRef} 
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddTaskForm;