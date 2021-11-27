import { useLayoutEffect, useRef, } from "react";
import { TextArea as TextAreaProps } from "../../constants/props";


function resetHeight(node: HTMLTextAreaElement): void {
    const style = node.style;
    style.height = 'auto';
    style.height = `${node.scrollHeight - 10}px`;
}

function setMinMaxHeight(node: HTMLTextAreaElement, minRows: number, maxRows: number): void {
    const style = node.style;
    const lineHeightProp = getComputedStyle(node).lineHeight;
    const lineHeight: number = parseInt(lineHeightProp) || 20;
    if (minRows > 0 && minRows < maxRows)
        style.minHeight = lineHeight * minRows + 'px';
    if (maxRows > 0 && maxRows > minRows)
        style.maxHeight = lineHeight * maxRows + 'px';
}

function setScrollBar(node: HTMLTextAreaElement) {
    const {style, scrollHeight} = node;
    
    const scrolled = parseInt(style.maxHeight) < scrollHeight;
    if (scrolled) {
        style.overflowY = 'auto';
    } else {
        style.overflowY = 'hidden';
    }
}


function TextArea({value, className, onChange, minRows = 1, maxRows = 1, ...props}: TextAreaProps) {
    const ref = useRef<HTMLTextAreaElement>(null);
    
    useLayoutEffect(() => {
        if (ref.current) {
            resetHeight(ref.current);
            setMinMaxHeight(ref.current, minRows, maxRows);
            setScrollBar(ref.current);
        }
    }, [value, maxRows, minRows]);
    
    return (
        <textarea
            ref={ref}
            name={props.name}
            className={className ? `autosize ${className}` : "autosize"}
            onChange={e => onChange(e.target.value)}
            rows={1}
            defaultValue={value}
        />
    );
}

export default TextArea;