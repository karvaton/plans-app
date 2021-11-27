const Contenteditable = ({text, className = '', onChange}) => (
    <div
        contentEditable="true"
        className={className}
        onInput={e => onChange(e.currentTarget.innerText)}
        dangerouslySetInnerHTML={{ __html: text || '' }}
    />
)

export default Contenteditable;