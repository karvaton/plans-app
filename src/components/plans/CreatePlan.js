import { useDispatch } from "react-redux";
import { open } from "../../state/actions/dialog";


export function Button() {
    const dispatch = useDispatch();
    const addLayer = open('add');

    return (
        <button onClick={() => dispatch(addLayer)}>Додати план</button>
    );
}

export function Dialog() {
    return (
        <div className="create-plan">
            <textarea></textarea>
        </div>
    );
};