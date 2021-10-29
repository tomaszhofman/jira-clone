import React from 'react';
import styled from 'styled-components';
import { Board } from './Board';
import SideBar from './SideBar/SideBar';
import TopBar from './TopBar/TopBar';

const Project = () => {
  return (
    <div>
      <TopBar />
      <SideBar>
        <Board />
      </SideBar>
    </div>
  );
};

export default Project;
