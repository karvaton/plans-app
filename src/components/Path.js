import '../styles/path.sass';
import { useDispatch, useSelector } from "react-redux";
import { findPlanById } from '../tools/planSearch';
import { closePath } from '../state/actions/plans';

function Path() {
    const dispatch = useDispatch();
    const path = useSelector(state => state.path);
    const pathTitles = path.map(item => findPlanById(item));

    function moveTo(path = -1) {
        dispatch(closePath(path + 1));
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