import {Nav} from './Nav';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
      border: 1px solid red;
      display: flex;
      flex-direction: column;
      height: 100vh;
`;
const Main = styled.div`
      flex-grow: 1;
      overflow: auto;
`;

// type Props={
//   children:any
// }

const Layout = (props: any) => {
  return (<Wrapper>
    <Main>
      {props.children}
    </Main>
    <Nav/>
  </Wrapper>);
};

export {Layout};