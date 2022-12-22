import React, { useContext } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">School Management</div>
      </a>

      <hr class="sidebar-divider my-0" />

      <li class="nav-item active">
        <Link class="nav-link" to="/portal/home">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Home</span>
        </Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/portal/teachers">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Teachers</span>
        </Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/portal/students">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Students</span>
        </Link>
      </li>
    </ul>
  );
}

export default Sidebar;
