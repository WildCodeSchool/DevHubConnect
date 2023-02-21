import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard/my-project">My project</Link>
        </li>
        <li>
          <Link to="/dashboard/my-calendar">My calendar</Link>
        </li>
        <li>
          <Link to="/dashboard/my-setting">My setting</Link>
        </li>
      </ul>
    </nav>
  );
}
