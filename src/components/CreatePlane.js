import { Component } from "react";

class CreatePlane extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            active: false,
            plan: {
                title: '',
                text: '',
            },
        };
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.input = this.input.bind(this);
        this.save = this.save.bind(this);
    }

    open(e) {
        e.preventDefault();
        this.setState({active: true});
    }
    
    close(e) {
        e.preventDefault();
        this.setState({active: false});
    }

    toDefault() {
        const plan = {
            title: '',
            text: ''
        };
        this.setState({ plan });
    }

    input(e) {
        e.preventDefault();
        const {name, value} = e.target;
        const { plan } = this.state;
        plan[name] = value;
        this.setState({ plan });
    }

    save(e) {
        e.preventDefault();
        const plan = this.state.plan;
        let date = new Date();
        plan.id = date.getTime().toString().slice(6, -3);
        plan.date = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
        plan.time = `${date.getHours()}:${date.getMinutes()}`;
        this.props.create(plan);
        this.close(e);
        this.toDefault(e);
    }

    render() {
        const { active, plan: {title, text} } = this.state;
        return (
            <div>
                <li className="list-group-item">
                    <button
                        className="btn btn-primary"
                        onClick={(event) => this.open(event)}
                    >
                        Створити &nbsp;
                        <i className="bi bi-plus-lg"></i>
                    </button>
                </li>

                {active && (
                    <div className="modal" tabIndex="-1">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">
                                        <input
                                            type="text"
                                            name="title"
                                            value={title}
                                            onChange={this.input}
                                        />
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                        onClick={this.close}
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <textarea
                                        name="text"
                                        value={text}
                                        onChange={this.input}
                                    />
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                        onClick={this.close}
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={this.save}
                                    >
                                        Save changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default CreatePlane;