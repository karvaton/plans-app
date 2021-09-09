import { useState } from "react";
import { useDispatch } from "react-redux";

function Paydesk() {
    const [value, changeValue] = useState(0)
    const dispatch = useDispatch();

    const addCash = (input) => {
        dispatch({
            type: "ADD_CASH",
            cash: parseInt(input),
        });
        changeValue(0);
    }

    const getCash = (input) => {
        dispatch({
            type: "GET_CASH",
            cash: parseInt(input),
        });
        changeValue(0);
    };

    return (
        <div className="col">
            <div className="row">
                <input type="text" onChange={e => changeValue(e.target.value)} value={value} />
            </div>
            <div className="row">
                <button onClick={() => addCash(value)}>Додати</button>
            </div>
            <div className="row">
                <button onClick={() => getCash(value)}>Відняти</button>
            </div>
        </div>
    );
}

export default Paydesk;