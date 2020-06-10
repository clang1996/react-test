import {Chart} from './Count/Chart';
import React, {useState} from 'react';
import {Layout} from '../components/Layout';
import styled from 'styled-components';
import {TypeSection} from './Money/TypeSection';
import {TypeWrapper} from '../components/TypeWrapper';


const Total = styled.div`
		 display: flex;
		 height: 60px;
`;

export function Count() {
		const [type, setType] = useState<'+' | '-'>('-');
		return (
			<Layout>
					<TypeWrapper>
							<TypeSection value={type} onChange={value => setType(value)}></TypeSection>
					</TypeWrapper>
					<Chart/>
					<Total>
					</Total>
			</Layout>
		);
}