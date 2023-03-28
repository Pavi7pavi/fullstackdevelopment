import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/event"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Event
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/list"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              List
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/props"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Props
            </NavLink>
          </li>
        
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
