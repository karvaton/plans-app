import { Component } from "react";
import CreatePlane from "./CreatePlane";
import Plane from "./Plane";

class Planes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    id: 1,
                    title: "Почистити зуби",
                    text: "Взяти зубну щітку і вичистити зуби до блиску",
                    date: '26-08-2021',
                    time: '21:25'
                },
                {
                    id: 2,
                    title: "Попрасувати одяг",
                    date: '26-08-2021',
                    time: '21:25'
                },
            ]
        }
        this.create = this.create.bind(this);
    }

    create(plan) {
        const { list } = this.state;
        list.push(plan);
        this.setState({ plan });
    }

    render() {
        const { list } = this.state;
        return (
            <div className="container-md">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-9">
                        <h2 className="task-title">Список задач</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <ul className="nav list-group">
                            <CreatePlane create={this.create} />
                        </ul>
                    </div>
                    <div className="col-9">
                        <ul className="list-group">
                            {list
                                .reverse()
                                .map(({ id, title, text, date, time }) => (
                                    <Plane
                                        key={id}
                                        id={id}
                                        title={title}
                                        comment={text}
                                        date={date}
                                        time={time}
                                    />
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }   
}

export default Planes;