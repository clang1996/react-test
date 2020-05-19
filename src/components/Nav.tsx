import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import {Icon} from './Icon';




const NavWrapper = styled.nav`
      box-shadow: 0 0 3px rgba(0,0,0,0.3);
      > ul{
      display: flex;
      > li{
      display: flex;
      width: 33.3333333%;
      text-align: center;
      align-items: center;
      flex-direction: column;
        > .icon{
        width: 24px;
        height: 24px;
             }
         }
      }
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name="money"/>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <Icon name="label"/>
          <Link to="/labels">标签</Link>
        </li>
        <li>
          <Icon name="statistics"/>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};
export {Nav};