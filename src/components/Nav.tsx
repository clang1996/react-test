import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import {Icon} from './Icon';


const NavWrapper = styled.nav`
      background-color: #fff;
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
        .icon{
        width: 24px;
        height: 24px;
              }
           &.selected{
             color:#f00;
             .icon{
             fill: #f00;
             }
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
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/labels" activeClassName="selected">
            <Icon name="label"/>
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="statistics"/>
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};
export {Nav};