import {memo, useMemo} from 'react';
import { useContext } from 'react';
import { TaskContext } from '../../entities/todo'; 

// используем useContext для получения данных из контекста, чтобы не 
// прокидывать пропсы через все уровни компонентов
// const TodoInfo = (props) => {
const TodoInfo = (props) => {
  console.log('TodoInfo');
  const {
    styles
  } = props;
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
    <div className={styles['todo__info']}>
      <div className={styles['todo__total-tasks']}>
        Done {tasksDoneCount} of {total}
      </div>
        {hasTasks && (
          <button 
          className={styles['todo__delete-all-button']} 
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