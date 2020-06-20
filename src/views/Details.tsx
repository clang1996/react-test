import {Layout} from '../components/Layout';
import React, {ReactNode, useState} from 'react';
import {TypeSection} from './Money/TypeSection';
import styled from 'styled-components';
import {RecordsItem, useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';
import {Modal} from './Detail/Modal';

const DateWrapper = styled.h3`
    color: #4ebf80;
    margin-left: 16px;
`;
const Item = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    background: #fff;
    line-height: 20px;
    padding: 8px 16px;
    > div{
      width: 25%;
      }
      > .tags{
      //border:1px solid red;
      padding-top:5px ;
      }
    > .modal{
      	padding: 0 0 0 55px;
      	border:none;
      }
    
    > .note{
      color: #aaa;  
      padding-left: 35px ;
    } 
    > .amount{
      padding-left: 35px ;
    }
`;


function Details() {
		const [type, setType] = useState<'+' | '-'>('-');
		const {records} = useRecords();
		const {getName} = useTags();
		const hash: { [K: string]: RecordsItem[] } = {};
		const selectedRecords = records.filter(r => r.type === type);
		selectedRecords.forEach(r => {
				const key = day(r.createAt).toISOString();
				if (!(key in hash)) {
						hash[key] = [];
				}
				hash[key].push(r);
		});
		const array = Object.entries(hash).sort((a, b) => {
				if (a[0] === b[0]) return 0;
				if (a[0] > b[0]) return -1;
				if (a[0] < b[0]) return 1;
				return 0;
		});
		const showDate = function (date: string) {
				const now = day();
				if (day(date).isSame(now, 'day')) {
						return '今天';
				} else if (day(date).isSame(now.subtract(1, 'day'), 'day')) {
						return '昨天';
				} else if (day(date).isSame(now.subtract(2, 'day'), 'day')) {
						return '前天';
				} else {
						return day(date).format('MM月DD日');
				}
		};

		return (
			<Layout>
					<TypeSection value={type} onChange={value => setType(value)}/>
					{array.map(([date, records], index) =>
						<div key={index}>
								<DateWrapper>
										{showDate(date)}
										{}
								</DateWrapper>
								<div>
										{records.map(r => {
												return <Item key={r.createAt}>
														<div className="tags ">
																{r.tagIds.map(tagId => <span key={tagId}>{getName(tagId)}</span>)
																.reduce((result, span, index, array) =>
																	result.concat(index < array.length - 1 ? [span, ' '] : [span]), [] as ReactNode[])}
														</div>
														{/*{r.note ? <div className="note">{r.note}</div> : <div className="note onLine">无备注哦</div>}*/}
														{/*<div className="amount">*/}
														{/*		￥{r.amount}*/}
														{/*</div>*/}
														<div className="modal">
																<Modal
																	children={[records[0].amount.toString(),records[0].note?records[0].note:'没有写备注噢~']}
																	title={day(date).format('YYYY年MM月DD日')}
																	/>
														</div>
												</Item>;
										})}
								</div>
						</div>
					)}
			</Layout>
		);
}

export {Details};