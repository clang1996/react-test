import React, {useState} from 'react';
import {Layout} from '../components/Layout';
import styled from 'styled-components';
import {TypeSection} from './Money/TypeSection';
import {ReactEchart} from './Count/ReactEchart';


const DetailWrapper = styled.div`
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    > div {
    		margin: 10px 16px;
    }
`;
const SelectWrapper = styled.div`
    background: #f5f5f5;
    > ul{
      background: #4ebf80;
      display: flex;
      font-size: 18px;
      justify-content: center;
      flex-direction: row;
      text-align: center;
        > li{
        	color: #f5f5f5;
          width: 100px;
          border:1px solid black;
          padding: 0 20px;
          	&.left{
          		  border-radius: 5px 0 0 5px ;
          	}
            &.right{
          			border-radius: 0 5px 5px 0;
             }
             &.selected{
            		background: black;
             }
        }
    }
    
`;

export function Count() {
		const [type, setType] = useState<'+' | '-'>('-');
		return (
			<Layout>
					<TypeSection value={type} onChange={value => setType(value)}></TypeSection>
					<SelectWrapper>
							<ul>
									<li className="selected left">周</li>
									<li>月</li>
									<li className="right">年</li>
							</ul>
					</SelectWrapper>
					<DetailWrapper>
							<div><span>本周</span></div>
							<hr/>
							<div><span>总支出: ￥2000</span></div>
					</DetailWrapper>
					<ReactEchart/>
			</Layout>
		);
}