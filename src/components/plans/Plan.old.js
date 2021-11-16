import { useDispatch, useSelector } from "react-redux";
import { check, openPath, remove } from "../../state/actions/plans";
import ProgressBar from "./Progres";
import Task from "./Task";

function Plan({ plan }) {
    const dispatch = useDispatch();
    const path = useSelector((state) => state.path);
    
    const { id, title, description, tasks, checked } = plan;
    const checkedTasksNumber = tasks.filter(({checked}) => !!checked).length;

    return (
        <li className="plan">
            <h4>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => dispatch(check(id, path))}
                />
                <span onClick={() => dispatch(openPath(id))}>{title}</span>
            </h4>
            <p className="plan-description">{description || ""}</p>
            {tasks.length ? <ProgressBar value={checkedTasksNumber} max={tasks.length} /> : null}
            {tasks.length ? (
                <ol>
                    <u>Задачі</u>
                    {tasks.map(({ title, id, checked }) => (
                        <Task key={id} text={title} checked={checked} />
                    ))}
                </ol>
            ) : null}
            <button
                className="delete-plan"
                onClick={() => dispatch(remove(id, path))}
            >
                <div>&#215;</div>
            </button>
        </li>
    );
}

export default Plan;