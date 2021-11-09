import '../styles/path.sass';
import { useDispatch, useSelector } from "react-redux";
import { findPlanById, findPlanByPath } from '../tools/planSearch';
import { closePath, save } from '../state/actions/plans';
import Icon from "./common/Icon";

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

    function back() {
        const upperPathStep = path.length - 2;
        moveTo(upperPathStep);
    }

    return ([
        <nav key="path" className="path">
            <li>
                <span onClick={() => moveTo()}>Список планів</span>
            </li>
            {path.map((item, index) => (
                <li key={item}>
                    <span onClick={() => moveTo(index)}>{pathTitles[index]}</span>
                </li>
            ))}
        </nav>,
        path.length ? (
            <Icon key="back" type="arrowLeft" click={() => back()} />
        ) : null
    ]);
}

export default Path;