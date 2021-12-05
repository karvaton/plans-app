import { Task as TaskProps } from "../../constants/props";

const Task = ({text, checked}: TaskProps) => <li className={checked ? "task task-done" : "task"}>{text}</li>

export default Task;