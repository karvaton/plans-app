import { useState } from "react";
import { EditProps } from "../../constants/props";
import TextArea from "../common/TextArea";


function EditFrom(props: EditProps) {
    const [title, changeTitle] = useState(props.title);
    const [description, changeDescription] = useState(props.description || '');
    
    return (
        <form className="plan-editing plan-header">
            <input 
                type="text" 
                className="plan-title" 
                value={title} 
                onChange={e => changeTitle(e.target.value)} 
                autoFocus 
            />
            <TextArea
                onChange={changeDescription}
                value={description}
                className="plan-description"
                minRows={1}
                maxRows={3}
            />
            <div className="controll-buttons">
                <input 
                    type="button"
                    className="cancel" 
                    value="Скасувати"
                    onClick={() => props.cancel(props)}
                />
                <input 
                    type="button"
                    className="done" 
                    value="Зберегти" 
                    onClick={() => props.save({title, description})}
                    disabled={!description && !title}
                />
            </div>
        </form>
    )
}

export default EditFrom;