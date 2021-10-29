import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../state/actions/plans";

function AddPlan() {
    const [planTitle, setPlanTitle] = useState('');
    const path = useSelector(state => state.path);
    const dispatch = useDispatch();

    function finish(title) {
        if (title) {
            dispatch(add({title}, path));
        }
        setPlanTitle('');
    }

    return (
        <li className="add-plan">
            <form>
                <input
                    type="text"
                    className="add-plan-title"
                    value={planTitle}
                    onChange={(e) => setPlanTitle(e.target.value)}
                    placeholder="Що хочеш запланувати?"
                />
                <input
                    type="submit"
                    value="Додати"
                    className="ok"
                    onClick={() => finish(planTitle)}
                    disabled={planTitle === ""}
                />
                <input
                    type="button"
                    value="Скасувати"
                    className="cancel"
                    onClick={() => finish()}
                />
            </form>
        </li>
    );
}

export default AddPlan;