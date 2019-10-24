import React, { useState, useEffect } from 'react';
import Drawer from 'react-motion-drawer';
import NavChart from './NavChart'
import { useAuth0 } from '../../../react-auth0-wrapper';
import { MDBBtn, MDBJumbotron, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import './index.css'

const Sidebar = (props) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState({nickname: 'Log In', percent: 0})
  const [sidebarData, setSidebarData] = useState(false)
  const Link = props.link
  const closeSidebar = () => {
    if (isOpen) setIsOpen(false);
  };

  const fetchIt = async (user, cb) => {
    fetch('/api/sidebar/'+user['_id'])
    .then(async (data)=>{
      cb(await data.json())
    })
  }

  useEffect(() => {
    if (props.user && props.user!==undefined){
      setUser(props.user);
      fetchIt(props.user,(data)=>{
        console.log(data);
        setSidebarData(data)
      });
    }
  }, [props.user])

  let percent = 5;
  return (<div className="sidebar">
    {!isOpen ?

      <MDBBtn className="dynamic-MDBBtn blue-gradient" onClick={() => setIsOpen(true)}>
           <i className="fas fa-bars 2x p-1"></i> {user['nickname']} ${user['account_value']} 
      </MDBBtn> 
      
      : null}
      {/* 
            This is to show user data
      <code>{JSON.stringify(user, null, 2)}</code> */}

    <Drawer open={isOpen} onChange={() => { if (isOpen) setIsOpen(false); }} className="overflow-hidden shadow-box-example z-depth-5">
      <MDBJumbotron className="w-100 h-100 d-inline-block text-center">
        {/* Page Nav */}
        <MDBNav>
          <MDBNavItem className="col-6">
            <MDBNavLink active to="/" onClick={closeSidebar}>
              <i className="nav-icon fa fa-fw fa-home" />
              <p>Home</p>
            </MDBNavLink>
          </MDBNavItem>
          
          {isAuthenticated && user!==undefined? 
          <MDBNavItem className="col-6">
            <MDBNavLink to={"/StockSave"} onClick={closeSidebar}>
              <i className="nav-icon fas fa-exchange-alt" />
              <p>Trade</p>
            </MDBNavLink>
          </MDBNavItem>
          :null}

          <MDBNavItem className="col-6">
            <MDBNavLink to="/research" onClick={closeSidebar}>
              <i className="nav-icon fas fa-chart-bar" />
              <p>Research</p>
            </MDBNavLink>
          </MDBNavItem>
          
            {isAuthenticated && user!==undefined? 
            <MDBNavItem className="col-6">
            <MDBNavLink to="/portfolio" onClick={closeSidebar}>
              <i className="nav-icon fas fa-user" />
              <p>Profile</p>
            </MDBNavLink>
            </MDBNavItem>
            : 
            <MDBNavItem className="col-12">
            <MDBNavLink to="/portfolio" onClick={() =>
              loginWithRedirect({})}>
              <i className="nav-icon fas fa-user" />
              <p>Log in</p>
            </MDBNavLink>
            </MDBNavItem>}
          
        </MDBNav>

        <NavChart data={sidebarData}/>

        {isAuthenticated? <button onClick={logout}>Log out</button> : null}

      </MDBJumbotron>
    </Drawer>
  </div>)
}

export default Sidebar;