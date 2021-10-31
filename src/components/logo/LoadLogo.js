import "./Logo.css";
import logo from "../../static/loadlogo.png";

function LoadLogo() {
    return <img src={logo} className="App-load-logo" alt="nutry-logo" />;
}

export default LoadLogo;