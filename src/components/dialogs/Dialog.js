import '../../styles/dialog.sass';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { close } from "../../state/actions/dialog";
import * as CreatePlan from "../plans/CreatePlan";

function Dialog() {
    const dispatch = useDispatch();
    const dialog = useSelector(state => state.dialog);

    const [done, setDone] = useState(false);

    const dialogWindow = 
        dialog === 'add' ? <CreatePlan.Dialog complete={done} editing={setDone} /> : null;

    function submit() {
        setDone(true);
    }
    
    return (
        <div className="background" style={{display: dialog ? 'flex' : 'none'}}>
            <dialog open={dialog !== null}>
                <div>
                    <div className="dialog-header">
                        <button
                            className="close"
                            onClick={() => dispatch(close())}
                        >
                            x
                        </button>
                    </div>
                    {dialog && dialogWindow}
                    <div className="dialog-footer">
                        <button
                            className="cancel"
                            onClick={() => dispatch(close())}
                        >
                            Скасувати
                        </button>
                        <button className="ok" onClick={() => submit()}>Додати</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default Dialog;