import '../../styles/plans.sass';
import { useDispatch, useSelector } from "react-redux";
import { PropTypes } from 'prop-types';
import Plan from './Plan';
import AddPlan from './AddPlan';
import { findPlanByPath } from "../../tools/planSearch";
import { edit, save } from '../../state/actions/plans';
import Icon from '../common/Icon';
import EditFrom from './EditForm';
import { useEffect, useRef } from 'react';
import { scrollShadowEffect } from '../../tools/effects';
import AdaptiveList from '../common/AdaptiveList';


// function scrollShadowEffect(ref, ...exeptions) {
//     const fullHeight = ref.current.scrollHeight;
//     const visibleHeight = ref.current.clientHeight;
//     const top = ref.current.scrollTop;
//     const scrolledList = fullHeight > visibleHeight;
//     const classList = ref.current.classList;
//     console.log(top);

//     classList.forEach(classItem => {
//         if (!exeptions.includes(classItem)) {
//             classList.remove(classItem);
//         }
//     });
//     if (scrolledList) {
//         switch (Math.floor(top)) {
//             case 0:
//                 classList.add("scrolled-bottom");
//                 break;
//             case fullHeight - visibleHeight:
//                 classList.add("scrolled-top");
//                 break;
//             default:
//                 classList.add("scrolled-top");
//                 classList.add("scrolled-bottom");
//                 break;
//         }
//     }
// }


function Plans() {
    const plans = useSelector(state => state.plans);
    const path = useSelector(state => state.path);
    const plan = path.length ? findPlanByPath(plans, path) : null;
    const tasks = plan ? [...plan.tasks] : [...plans];
    const editing = plan ? plan.editing : false;
    // dispatcher
    const dispatch = useDispatch();
    // refs
    const list = useRef(null);
    // controllers
    function saveEdits(planProps = {}) {
        const {title = '', description = ''} = planProps;
        const upperPath = [...path].slice(0, -1);
        dispatch(save(plan.id, upperPath, { title, description }));
    }

    function startEdit() {
        const upperPath = [...path].slice(0, -1);
        dispatch(edit(plan.id, upperPath));
    }

    useEffect(() => scrollShadowEffect(list.current, "plans-list"));
    // variables
    const editBtn = <Icon type="edit" click={startEdit} />;
    const planDescription =
        plan && plan.description ? (
            <span onDoubleClick={() => startEdit()}>{plan.description}</span>
        ) : (
            <p onClick={() => startEdit()}>
                <span className="add-plan-description">[Додати опис]</span>
            </p>
        );

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
                        <h3 onDoubleClick={() => startEdit()}>{plan.title}</h3>
                        {planDescription}
                    </div>
                )
            ) : (
                <h3>Усі плани</h3>
            )}
            <AdaptiveList
                dataSource={tasks}
                renderItem={(plan) => (
                    <Plan plan={plan} />
                )}
                className="plans-list"
                itemClass="plan"
            />
            <AddPlan />
            {path.length && !editing ? editBtn : null}
        </section>
    );
}
Plans.propTypes = {
    plans: PropTypes.arrayOf(PropTypes.object),
};


export default Plans;