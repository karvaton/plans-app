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
    const planTitle = plan?.title ? (
        <span onDoubleClick={() => startEdit()} className="plan-header-title">{plan.title}</span>
    ) : (
        <span className="add-plan-title" onClick={() => startEdit()}>
            [Додати заголовок]
        </span>
    );
    const planDescription = plan?.description ? (
        <span onDoubleClick={() => startEdit()}>{plan.description}</span>
    ) : (
        <span className="add-plan-description" onClick={() => startEdit()}>
            [Додати опис]
        </span>
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
                        <h3>{planTitle}</h3>
                        <p>{planDescription}</p>
                    </div>
                )
            ) : (
                <h3>Усі плани</h3>
            )}
            <AdaptiveList
                dataSource={tasks}
                renderItem={(plan) => <Plan plan={plan} />}
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