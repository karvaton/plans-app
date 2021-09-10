import { useDispatch } from "react-redux";
import { open, close } from "../../state/actions/dialog";


export function Button() {
    const dispatch = useDispatch();
    const addLayer = open('add');

    return (
        <button onClick={() => dispatch(addLayer)}>Додати план</button>
    );
}

export function Dialog() {
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button 
                    className="close"
                    onClick={() => dispatch(close)}
                >x</button>
            </div>
            <button className="ok">Додати</button>
            <button 
                className="cancel"
                onClick={() => dispatch(close)}
            >Скасувати</button>
        </div>
    );
};