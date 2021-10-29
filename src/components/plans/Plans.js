import '../../styles/plans.sass';
import { useSelector } from "react-redux";
import { PropTypes } from 'prop-types';
import Plan from './Plan';
import AddPlan from './AddPlan';
import { findPlanByPath } from "../../tools/planSearch";


function Plans() {
    const plans = useSelector(state => state.plans);
    const path = useSelector(state => state.path);
    const plan = path.length ? findPlanByPath(plans, path) : {};
    const tasks = plan.tasks ? [...plan.tasks] : [...plans];

    return (
        <section id="plans-list" className={path.length ? "active-plan" : ""}>
            <h3>{path.length ? plan.title : "Усі плани"}</h3>
            {plan.description ? <p>{plan.description}</p> : null}
            <ul className="plans-list">
                {tasks.map((plan) => (
                    <Plan key={plan.id} plan={plan} />
                ))}
                <AddPlan />
            </ul>
        </section>
    );
}
Plans.propTypes = {
    plans: PropTypes.arrayOf(PropTypes.object),
};

export default Plans;