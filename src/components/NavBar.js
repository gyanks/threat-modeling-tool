import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/assets">Assets</Link>
        </li>
        <li>
          <Link to="/threats">Threats</Link>
        </li>
        <li>
          <Link to="/goals">Security Goals</Link>
        </li>
        <li>
          <Link to="/claims">Security claims</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;