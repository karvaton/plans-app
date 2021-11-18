import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../state/actions/plans";

function AddPlan() {
    const [planTitle, setPlanText] = useState('');
    const path = useSelector(state => state.path);
    const dispatch = useDispatch();

    function finish(description) {
        if (description) {
            dispatch(add({description}, path));
        }
        setPlanText('');
    }

    return (
        <form className="add-plan">
            <input
                type="text"
                className="add-plan-title"
                value={planTitle}
                onChange={(e) => setPlanText(e.target.value)}
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
    );
}

export default AddPlan;