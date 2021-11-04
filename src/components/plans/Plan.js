import { useDispatch, useSelector } from "react-redux";
import { openPath, remove } from "../../state/actions/plans";
import Task from "./Task";

function Plan({ plan }) {
    const dispatch = useDispatch();
    const path = useSelector((state) => state.path);
    
    const {id, title, description, tasks} = plan;

    return (
        <li className="plan">
            <h4>
                <span onClick={() => dispatch(openPath(id))}>{title}</span>
            </h4>
            <p className="plan-description">{description || ''}</p>
            {tasks.length ? (
                <ol>
                    <u>Задачі</u>
                    {tasks.map(({title, id}) => <Task key={id} text={title} />)}
                </ol>
            ) : null}
            <button className="delete-plan" onClick={() => dispatch(remove(id, path))}>
                <div>&#215;</div>
            </button>
        </li>
    );
}

export default Plan;