import '../../styles/dialog.sass';
import { useDispatch, useSelector } from "react-redux";
import { close } from "../../state/actions/dialog";
import * as CreatePlan from "../plans/CreatePlan";

function Dialog() {
    const dialog = useSelector(state => state.dialog);
    const dispatch = useDispatch();

    let dialogWindow = null;
    if (dialog === 'add') {
        dialogWindow = <CreatePlan.Dialog />
    }
    
    return (
        <div className="background" style={{display: dialog ? 'flex' : 'none'}}>
            <dialog open={dialog !== null}>
                <div>
                    <div className="dialog-header">
                        <button
                            className="close"
                            onClick={() => dispatch(close)}
                        >
                            x
                        </button>
                    </div>
                    {dialog && dialogWindow}
                    <div className="dialog-footer">
                        <button className="ok">Додати</button>
                        <button
                            className="cancel"
                            onClick={() => dispatch(close)}
                        >
                            Скасувати
                        </button>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default Dialog;