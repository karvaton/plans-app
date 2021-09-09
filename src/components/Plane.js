import PropTypes from "prop-types";
import { Component } from "react";

class Plane extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        comment: PropTypes.string,
        date: PropTypes.string,
        time: PropTypes.string,
    };

    render() {
        const { title, comment, date, time } = this.props;
        return (
            <li className="list-group-item">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        {comment && (
                            <p className="card-subtitle mb-2">{comment}</p>
                        )}
                        <p className="card-text card-time">
                            <small className="text-muted">{date}</small>
                            <small className="text-muted">{time}</small>
                        </p>
                    </div>
                </div>
            </li>
        );
    }
}

export default Plane;