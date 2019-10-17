import React, {useState} from 'react';
import Drawer from 'react-motion-drawer';
import {MDBBtn} from 'mdbreact'
import './index.css'

const Sidebar = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const Link = props.link


  return (<div className="sidebar">
    <MDBBtn></MDBBtn>
    <Drawer open={isOpen}>
    <ul>
      <li><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /></li>
      <li><i className="fas fa-exchange-alt" style={{ fontSize: '1.75em' }} /></li>
      <li><i className="fas fa-chart-bar" style={{ fontSize: '1.75em' }} /></li>
    </ul>
  </Drawer>
  </div>)
}

export default Sidebar;