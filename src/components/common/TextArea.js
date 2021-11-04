import { useEffect, useRef } from "react";

function TextArea(props) {
    const ref = useRef(null);
    useEffect(() => {
        if (ref?.current) {
            ref.current.style.height = "30px";
            const scrollHeight = ref.current.scrollHeight;
            ref.current.style.height = scrollHeight + "px";
        }
    }, [props.defVal]);

    return (
        <textarea
            ref={ref}
            name={props.name}
            className="autosize"
            onChange={e => props.changeDescription(e.target.value)}
            onKeyDown={(event) => props.saveEdits(event)}
            defaultValue={props.defVal}
        />
    );
}

export default TextArea;