const Task = ({text, checked}) => <li className={checked ? "task task-done" : "task"}>{text}</li>

export default Task;