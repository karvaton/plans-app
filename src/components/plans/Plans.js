import '../../styles/plans.sass';
// import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { PropTypes } from 'prop-types';
import Plan from './Plan';
import AddPlan from './AddPlan';
import { findPlanByPath } from "../../tools/planSearch";
import { edit, save } from '../../state/actions/plans';
import Icon from '../common/Icon';
import EditFrom from './EditForm';

function Plans() {
    const plans = useSelector(state => state.plans);
    const path = useSelector(state => state.path);
    const plan = path.length ? findPlanByPath(plans, path) : null;
    // console.log(plans[1].checked);
    const tasks = plan ? [...plan.tasks] : [...plans];
    const editing = plan ? plan.editing : false;
    // dispatcher
    const dispatch = useDispatch();
    // controllers
    function saveEdits(planProps = {}) {
        const {title, description = ''} = planProps;
        const upperPath = [...path].slice(0, -1);
        dispatch(save(plan.id, upperPath, { title, description }));
    }

    function startEdit() {
        const upperPath = [...path].slice(0, -1);
        dispatch(edit(plan.id, upperPath));
    }
    // variables
    const editBtn = <Icon type="edit" click={startEdit} />;
    const planDescription = plan && plan.description ? (
            <span onDoubleClick={() => startEdit()}>
                {plan.description}
            </span>
        ) : (
            <p
                className="add-plan-description"
                onClick={() => startEdit()}
            >[Додати опис]</p>
        )

    return (
        <section id="plans-list" className={path.length ? "active-plan" : ""}>
            {path.length ? (
                editing ? (
                    <EditFrom
                        title={plan.title || ""}
                        description={plan.description}
                        save={saveEdits}
                        cancel={saveEdits}
                    />
                ) : (
                    <div className="plan-header">
                        <h3 onDoubleClick={() => startEdit()}>{plan?.title}</h3>
                        {planDescription}
                    </div>
                )
            ) : (
                <h3>Усі плани</h3>
            )}
            <ul className="plans-list">
                {tasks.map((plan) => (
                    <Plan key={plan.id} plan={plan} />
                ))}
                <AddPlan />
            </ul>
            {path.length && !editing ? editBtn : null}
        </section>
    );
}
Plans.propTypes = {
    plans: PropTypes.arrayOf(PropTypes.object),
};



// const planForm = {path.length ? (
//                 editTitle ? (
//                     <input
//                         type="text"
//                         name="title"
//                         value={title}
//                         onChange={(e) => changeTitle(e.target.value)}
//                         onKeyDown={(event) => saveEdits(event)}
//                     />
//                 ) : (
//                     <h3 onDoubleClick={() => activateTitle(true)}>
//                         {plan?.title}
//                     </h3>
//                 )
//             ) : (
//                 <h3>Усі плани</h3>
//             )}

//             <p className="plans-description">
//                 {path.length ? (
//                     editDescription ? (
//                         <textarea
//                             ref={ref}
//                             name="description"
//                             className="autosize"
//                             onChange={(e) => changeDescription(e.target.value)}
//                             onKeyDown={(event) => saveEdits(event)}
//                             defaultValue={description}
//                             rows="1"
//                         />                        
//                     ) : plan.description ? (
//                         <span onDoubleClick={() => activateDescription(true)}>
//                             {plan.description}
//                         </span>
//                     ) : (
//                         <p
//                             className="add-plan-description"
//                             onClick={() => activateDescription(true)}
//                         >[Додати опис]</p>
//                     )
//                 ) : null}
//             </p>



export default Plans;