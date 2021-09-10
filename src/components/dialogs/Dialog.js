import { useSelector } from "react-redux";
import * as CreatePlan from "../plans/CreatePlan";

function Dialog() {
    const dialog = useSelector(state => state.dialog);

    switch (dialog) {
        case 'add':
            return (
                <dialog open>
                    <CreatePlan.Dialog />
                </dialog>
            );
    
        default:
            return <dialog></dialog>;
    }
}

export default Dialog;