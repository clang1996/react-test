import {Chart} from './Count/Chart';
import React from 'react';
import {Layout} from '../components/Layout';
import styled from 'styled-components';

const Topbar = styled.div`
			height: 54px;
			background: #4ebf80;
`;
const Total = styled.div`
		 display: flex;
		 height: 60px;
`;

export function Count() {
		return (
			<Layout>
					<Topbar></Topbar>
					<Chart/>
					<Total><span>123</span></Total>
			</Layout>
		);
}