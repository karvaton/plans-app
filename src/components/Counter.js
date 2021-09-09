// import { useSelector } from "react-redux";

import { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
    // const cash = useSelector(state => state.cash);
    render() {
        const {cash} = this.props;
        return (
            <div className="col">
                <div className="row">
                    <h1>{cash}</h1>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        cash: store.cash,
    };
};

export default connect(mapStateToProps)(Counter);