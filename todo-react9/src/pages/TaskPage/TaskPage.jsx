import {useState, useEffect} from 'react';
import tasksAPI from '@/shared/api/tasks';


const TaskPage = (props) => {

  const {params} = props;
  const taskId = params.id; // This would typically come from the route parameters

  // For demonstration, we are hardcoding the taskId, but in a real application,
  // you would get this from the route parameters or props.
  //const taskId = 'task-1'; // This would typically come from the route parameters
  
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
     tasksAPI.getById(taskId)
      .then(data => {
        setTask(data);
        setLoading(false);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <h1>{task.title}</h1>
      <p>{task.isDone ? 'Done' : 'Not done'}</p>
    </>
  )
};

export default TaskPage; 