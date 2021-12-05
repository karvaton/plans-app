import { Progress as ProgressProps } from "../../constants/props";
import { hexToRGBArray, interpolateColor } from "../../tools/color-tools";

function ProgressBar({ max, value, showInfo = true, color = '#0075ff'}: ProgressProps) {
    const progress = Math.round(value/max*100);
    const width = progress + '%';
    
    let background: string;
    if (typeof color === 'string') {
        background = color;
    } else {
        const firstColor = hexToRGBArray(color[0]);
        const lastColor = hexToRGBArray(color[1]);
        const endColor = interpolateColor(firstColor, lastColor, progress);
        background = `linear-gradient(90deg, rgb(${firstColor.join(',')}) 0%, rgb(${endColor.join(',')}) 100%)`;
    }

    return (
        <div className="progress-bar">
            <div className="progress-bar-wrapper">
                <div className="progress" style={{width, background}}></div>
            </div>
            {showInfo ? <div className="progress-info">{width}</div> : null}
        </div>
    )
}

export default ProgressBar;