interface props {
    value: number
    max: number
    text?: string
}

const ProgressBar = ({value, max, text = ''}: props) => (
    <div className="progress-bar">
        <progress value={value} max={max}>{text}</progress>
        <span>{Math.round(value*100/max)}%</span>
    </div>
);

export default ProgressBar;