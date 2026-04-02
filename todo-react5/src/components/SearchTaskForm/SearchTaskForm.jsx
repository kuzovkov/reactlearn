import Field from "../Field/Field";
import { useContext } from "react";
import { TaskContext } from '../../context/taskContext'; 

// используем useContext для получения данных из контекста, чтобы не 
// прокидывать пропсы через все уровни компонентов

// const SearchTaskForm = (props) => {
const SearchTaskForm = (props) => {
  const {
    styles
  } = props;
  const { 
    searchQuery, 
    setSearchQuery 
  } = useContext(TaskContext);

  return (
    <form className={styles['todo__form']} onSubmit={(e) => e.preventDefault()}>
        <Field 
          className={styles['todo__field']}
          id="search-task"
          label="Search task"
          type="search"
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.target.value)}
        />
      </form>
  );
};

export default SearchTaskForm;