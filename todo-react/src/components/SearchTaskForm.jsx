import Field from "./Field";
const SearchTaskForm = (props) => {
  const { onSearchTasksInput } = props;

  return (
    <form className="todo__form" onSubmit={(e) => e.preventDefault()}>
        <Field 
          className="todo__field"
          id="search-task"
          label="Search task"
          type="search"
          onInput={(e) => onSearchTasksInput(e.target.value)}
        />
      </form>
  );
};

export default SearchTaskForm;