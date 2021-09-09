import Counter from "./Counter";
import Paydesk from "./Paydesk";

const Bank = () => (
    <div className="bank container">
        <div className="row">
            <Paydesk />
            <Counter />
        </div>
    </div> 
)

export default Bank;