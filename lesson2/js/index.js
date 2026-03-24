// Simple React App
// ReactDOM.render(
//     React.createElement('input', {
//         placeholder: "help text", 
//         onClick: () => console.log("clicked"),
//         onChange: (e) => console.log(e.target.value),
//         onMouseMove: (e) => console.log(e.clientX, e.clientY)
//     })
//     , document.getElementById('app'))


const inputClick = () => console.log("clicked");
const mouseOver = () => console.log("mouse over");
let helpText = "help text";
const elements = (<div className="name"><h1>{helpText}</h1>
<input placeholder={helpText} onClick={inputClick} onMouseOver={mouseOver}/>
</div>);
const app = document.getElementById('app');

ReactDOM.render(elements, app);

