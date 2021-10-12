import '../../styles/plans.sass';
import { useSelector } from "react-redux";
import { PropTypes } from 'prop-types';
import Plan from './Plan';

function Plans() {
    const plans = useSelector(state => state.plans);

    return (
        <ul className="plans-list">
            {plans.map((plan, index) =>
                <Plan key={index}>
                    {plan}
                </Plan>
            )}
        </ul>
    );
}
Plans.propTypes = {
    plans: PropTypes.arrayOf(PropTypes.string)
}

export default Plans;