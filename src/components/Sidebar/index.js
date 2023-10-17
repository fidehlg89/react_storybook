import React, { useState } from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100%;
  background-color: #f6f8fa;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
`;

const SidebarHeader = styled.div`
  padding: 20px;
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const SidebarMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const SidebarMenuItem = styled.li`
  padding: 10px 20px;

  &:hover {
    background-color: #ebedf0;
  }

  a {
    color: #000;
    text-decoration: none;
    font-weight: bold;
  }
`;

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarHeader>
        <CloseButton onClick={onClose}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </CloseButton>
      </SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <a href="#">Home</a>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <a href="#">Profile</a>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <a href="#">Repositories</a>
        </SidebarMenuItem>
        {/* Add more sidebar menu items as needed */}
      </SidebarMenu>
    </SidebarContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
`;

const SidebarToggle = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const SidebarExample = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <AppContainer>
      <SidebarToggle onClick={toggleSidebar}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </SidebarToggle>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      {/* Add the rest of your app content here */}
    </AppContainer>
  );
};

export default SidebarExample;
