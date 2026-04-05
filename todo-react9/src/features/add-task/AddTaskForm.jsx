import Field from "@/shared/ui/Field/Field"
import Button from "@/shared/ui/Button/Button"
import { useContext, useState } from "react";
import { TaskContext } from '@/entities/todo'; 

// используем useContext для получения данных из контекста, чтобы не 
// прокидывать пропсы через все уровни компонентов

// const AddTaskForm = (props) => {
const AddTaskForm = (props) => {
  const {
    styles
  } = props;

  const { 
      addTask,  
      newTaskInputRef 
    } = useContext(TaskContext);

  // оптимизация: состояние для нового таска должно быть локальным, 
  // так как оно не нужно в других компонентах,
  // и не должно вызывать лишние рендеры при изменении  
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isNewtaskTitleEmpty) {
      addTask(
        newTaskTitleCleared,
         () => {setNewTaskTitle('');}
       );
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
    <form className={styles['todo__form']} onSubmit={onSubmit}>
      <Field 
      className={styles['todo__field']}
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