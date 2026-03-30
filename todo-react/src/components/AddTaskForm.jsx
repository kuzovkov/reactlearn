import Field from "./Field"
import Button from "./Button"

const AddTaskForm = (props) => {
  const { 
    addTask, 
    newTaskTitle,
     setNewTaskTitle,
     newTaskInputRef 
    } = props;

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