import { useState } from "react";

type PlanProps = {
    title?: string
    description?: string
}

interface EditProps {
    title: string
    description?: string
    save: (plan: PlanProps) => void
    cancel: (plan: PlanProps) => void
}

function EditFrom(props: EditProps) {
    const [title, changeTitle] = useState(props.title);
    const [description, changeDescription] = useState(props.description || '');
    
    return (
        <form className="plan-editing plan-header">
            <input type="text" className="plan-title" value={title} onChange={e => changeTitle(e.target.value)} autoFocus />
            <div 
                contentEditable="true"
                className="plan-description" 
                onInput={e => changeDescription(e.currentTarget.innerText)}
                dangerouslySetInnerHTML={{__html: props.description || ''}}
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
                />
            </div>
        </form>
    )
}

export default EditFrom;