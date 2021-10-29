import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { open, close } from "../../state/actions/dialog";
import { add } from "../../state/actions/plans";


export function Button() {
    const dispatch = useDispatch();
    const addLayer = open('add');

    return (
        <button onClick={() => dispatch(addLayer)}>Додати план</button>
    );
}

export function Dialog({ complete, editing }) {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (complete) {
            dispatch(add({ title, description }));
            editing(false);
            dispatch(close());
        }
    })

    return (
        <form className="create-plan">
            <label>Заголовок</label>
            <input
                name="plan-title"
                onChange={(e) => setTitle(e.target.value)}
            />
            <label>Опис</label>
            <textarea
                name="plan-description"
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
        </form>
    );
};