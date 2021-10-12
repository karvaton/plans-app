import { useSelector } from "react-redux";

function Path() {
    const path = useSelector(state => state.path);
    // const plans = useSelector(state => state.plans);

    return (
        <h3>
            <nav>
                {path.map((item) => (
                    <li>
                        <a key={item} href={`#${item}`}>{item + ' / '}</a>
                    </li>
                ))}
            </nav>
        </h3>
    );
}

export default Path;