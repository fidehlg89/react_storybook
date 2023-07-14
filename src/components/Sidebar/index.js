import React, { useState } from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.aside`
  height: 100%;
  width: 250px;
  position: fixed;
  top: 0;
  left: ${props => (props.isOpen ? '0' : '-250px')};
  background-color: #333;
  padding: 10px;
  transition: all 0.5s ease-in-out;
`;

const SidebarToggle = styled.button`
  position: fixed;
  top: 10px;
  right: ${props => (props.isOpen ? '250px' : '10px')};
  background-color: #333;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
  transition: all 0.5s ease-in-out;

  i {
    font-size: 20px;
  }
`;

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SidebarWrapper isOpen={isOpen}>
        {/* Contenido del sidebar aquí */}
      </SidebarWrapper>
      <SidebarToggle isOpen={isOpen} onClick={toggleSidebar}>
        <i className={`fa fa-arrow-${isOpen ? 'left' : 'right'}`}/>
      </SidebarToggle>
    </>
  );
}

export default Sidebar;