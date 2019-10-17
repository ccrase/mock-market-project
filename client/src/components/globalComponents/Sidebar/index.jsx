import React, { useState } from 'react';
import Drawer from 'react-motion-drawer';
import NavChart from './NavChart'
import { MDBBtn, MDBJumbotron, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import './index.css'

const Sidebar = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const Link = props.link
  const closeSidebar = () => {
    if (isOpen) setIsOpen(false);
  };

  return (<div className="sidebar">
    {!isOpen ?

      <MDBBtn className="dynamic-MDBBtn peach-gradient" onClick={() => setIsOpen(true)}>
          <i className="fas fa-bars 2x p-1"></i> {props.user.username} {props.user.percent}%
      </MDBBtn> 
      
      : null}

    <Drawer open={isOpen} onChange={() => { if (isOpen) setIsOpen(false); }} className="overflow-hidden shadow-box-example z-depth-5">
      <MDBJumbotron className="w-100 h-100 d-inline-block">
        {/* Page Nav */}
        <MDBNav>
          <MDBNavItem>
            <MDBNavLink active to="/" onClick={closeSidebar}><i className="nav-icon fa fa-fw fa-home" /></MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/trade" onClick={closeSidebar}><i className="nav-icon fas fa-exchange-alt" /></MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/research" onClick={closeSidebar}><i className="nav-icon fas fa-chart-bar" /></MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/profile" onClick={closeSidebar}><i className="nav-icon fas fa-user" /></MDBNavLink>
          </MDBNavItem>
        </MDBNav>

        <NavChart />

      </MDBJumbotron>
    </Drawer>
  </div>)
}

export default Sidebar;