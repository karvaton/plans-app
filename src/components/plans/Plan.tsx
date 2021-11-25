import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { check, openPath, remove } from "../../state/actions/plans";
import Task from "./Task";
import { State } from '../../constants/interfaces';
import { PlanProps } from "../../constants/props";
import ProgressBar from "./Progres";
// import { Progress } from "antd";
// import 'antd/dist/antd.css'


function getTitle(text: string): string {
    return text;
}

function Plan({plan}: PlanProps) {
    const dispatch = useDispatch();
    const path: string[] = useSelector((state: State) => state.path);
    
    const { id, title, description = '', tasks, checked } = plan;
    const checkedTasksNumber = tasks.filter(({checked}) => !!checked).length;

    return (
        <>
            <h4>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => dispatch(check(id, path))}
                />
                <span onClick={() => dispatch(openPath(id))}>{title || getTitle(description)}</span>
            </h4>
            {title ? <p className="plan-description">{description || ""}</p> : null}
            {tasks.length ? <ProgressBar value={checkedTasksNumber} max={tasks.length} /> : null}
            {/* tasks.length ? 
                <div className="progress-bar">
                    <Progress
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={Math.round(checkedTasksNumber * 100 / tasks.length)}
                        trailColor={'#efefef'}
                    />
                </div>
                : null */}
            {tasks.length ? (
                <ol>
                    <u>Задачі</u>
                    {tasks.map(({ title, description, id, checked }) => (
                        <Task key={id} text={title || description} checked={checked} />
                    ))}
                </ol>
            ) : null}
            <button
                className="delete-plan"
                onClick={() => dispatch(remove(id, path))}
            >
                <div>&#215;</div>
            </button>
        </>
    );
}

export default Plan;