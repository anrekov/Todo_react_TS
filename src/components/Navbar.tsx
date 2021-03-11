import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledMenu = styled(Menu)`
  & li:nth-child(2) {
    margin-left: 21vw !important;
  }
`;

const StyledMenuItem = styled(Menu.Item)`
  font-size: 1.5rem;
`;

export const Navbar: React.FunctionComponent = () => (
  <StyledMenu mode='horizontal'>
    <StyledMenuItem key='main'>
      <NavLink to='/'>Main page</NavLink>
    </StyledMenuItem>

    <StyledMenuItem key='info'>
      <NavLink to='/about'>About</NavLink>
    </StyledMenuItem>
  </StyledMenu>
);
