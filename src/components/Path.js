import '../styles/path.sass';
import { useDispatch, useSelector } from "react-redux";
import { findPlanById, findPlanByPath } from '../tools/planSearch';
import { closePath, save } from '../state/actions/plans';

function Path() {
    const dispatch = useDispatch();
    const path = useSelector(state => state.path);
    const plans = useSelector(state => state.plans);
    const pathTitles = path.map(item => findPlanById(item).title);
    const activePlan = path.length
        ? findPlanByPath(plans, path)
        : { editing: false };

    function moveTo(step = -1) {
        const unsave = activePlan.editing ? window.confirm("Вийти без збереження?") : true;
        if (unsave) {
            const id = activePlan.id;
            const upperPath = [...path].slice(0, -1);
            dispatch(save(id, upperPath, activePlan));
            dispatch(closePath(step + 1));
        }
    }

    return (
        <nav className="path">
            <li>
                <span onClick={() => moveTo()}>Список планів</span>
            </li>
            {path.map((item, index) => (
                <li key={item}>
                    <span onClick={() => moveTo(index)}>{pathTitles[index]}</span>
                </li>
            ))}
        </nav>
    );
}

export default Path;