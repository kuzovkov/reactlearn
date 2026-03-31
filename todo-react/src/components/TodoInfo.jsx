import {memo, useMemo} from 'react';
import { useContext } from 'react';
import { TaskContext } from '../context/taskContext'; 

// используем useContext для получения данных из контекста, чтобы не 
// прокидывать пропсы через все уровни компонентов
// const TodoInfo = (props) => {
const TodoInfo = () => {
  console.log('TodoInfo');
  const {
      // total,
      // done,
      // onDeleteButtonClick
      tasks,
      deleteAllTasks
  } = useContext(TaskContext);
  
  const total = tasks.length;
  const hasTasks = total > 0;
  const tasksDoneCount = useMemo(() => {
    return tasks.filter(task => task.isDone).length;
  }, [tasks]);

  return (
    <div className="todo__info">
      <div className="todo__total-tasks">
        Done {tasksDoneCount} of {total}
      </div>
        {hasTasks && (
          <button 
          className="todo__delete-all-button" 
          type="button" 
          onClick={deleteAllTasks}
          >
            Delete all
          </button>
        )}
    </div>
  );
};      

export default memo(TodoInfo);