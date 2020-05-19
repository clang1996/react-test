import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import {Icon} from './Icon';


const NavWrapper = styled.nav`
      box-shadow: 0 0 3px rgba(0,0,0,0.3);
      > ul{
      display: flex;
      > li{
      width: 33.3333333%;
      text-align: center;
      > a{
      display: flex;
      align-items: center;
      flex-direction: column;
        > .icon{
        width: 24px;
        height: 24px;
                 }
             }
         }
      }
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/money">
            <Icon name="money"/>
            记账
          </Link>
        </li>
        <li>
          <Link to="/labels">
            <Icon name="label"/>
            标签
          </Link>
        </li>
        <li>
          <Link to="/statistics">
            <Icon name="statistics"/>
            统计
          </Link>
        </li>
      </ul>
    </NavWrapper>
  );
};
export {Nav};