// бібліотеки
import "bootstrap-icons/font/bootstrap-icons.css";
// стилі
import "./styles/App.sass";
import "./styles/common.sass";
import "./styles/mobile.css";
// компоненти
// import Menu from "./components/Menu";
import Content from "./components/Content";
import Planes from "./components/plans/Plans";
import Dialog from "./components/dialogs/Dialog";

function App() {
    return (
        <div className="App">
            <Content>
                <Planes />
            </Content>
            <Dialog />
        </div>
    );
}

export default App;
