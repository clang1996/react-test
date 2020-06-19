import React, {useState} from 'react';
import {Layout} from '../components/Layout';
import styled from 'styled-components';
import {TypeSection} from './Money/TypeSection';
import {ReactEchart} from './Count/ReactEchart';
import {Button} from '../components/Button';
import dayjs from 'dayjs';
import {RecordsItem, useRecords} from '../hooks/useRecords';
import day from 'dayjs';
import {FlavorForm} from './Count/Time';


const DetailWrapper = styled.div`
    background: #f5f5f5;
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    margin: 2px 0 2px 16px;
    > div {
    		margin-top: 10px;
    		>span{
    				color: #555;
    		}
    }
    > button {
        color: #000;
    		font-size: 14px;
    }
    
`;

type Group = {
		type: string;
		amount: number;
}

export function Count() {
		const [type, setType] = useState<'+' | '-'>('-');
		const [interval, setInterval] = useState<'week' | 'month' | 'year'>('month');
		const {records} = useRecords();
		const now = dayjs();
		//拿到记录
		const targetRecords = records.filter(r => r.type === type).filter(r => dayjs(r.createAt).isSame(now, interval));
		const days = () => {
				const [year, month] = [dayjs().year(), dayjs().month()];
				const d = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
				if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
						if (month === 1) {
								return 29;
						} else {
								return d[month];
						}
				} else {
						// console.log(d[month]);
						return d[month];
				}

		};
		const groupByType = () => {
				const result: Group[] = [];
				let r: RecordsItem;
				for (r of targetRecords) {
						if (r.type === type) {
								result.push({type: r.type, amount: r.amount,});
						}
				}
				// console.log('result');
				// console.log(result);
				return result;
		};
		// groupByType();
		const groupByWeek = () => {
				const keys = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
				const result = new Map<string, number>();
				let i: number;
				// 初始化
				for (i = 0; i < keys.length; i++) {
						result.set(keys[i], 0);
				}
				let r: RecordsItem;
				for (r of records) {
						const key = keys[dayjs(r.createAt).day()];
						// console.log(key);
						const amount = result.get(key) as number;
						// console.log(amount);
						result.set(key, amount + r.amount);
				}
				// console.log('result');
				// console.log(result);
				return result;
		};
		groupByWeek()
		const groupByMonth = () => {
				const keys: string[] = [];
				const result = new Map<string, number>();
				let i: number;
				// 初始化
				for (i = 1; i < days(); i++) {
						keys.push(i.toString());
				}
				for (i = 0; i < keys.length; i++) {
						result.set(keys[i], 0);
				}
				let r: RecordsItem;
				for (r of records) {
						const key = dayjs(r.createAt).date().toString();
						const amount = result.get(key) as number;
						result.set(key, amount + r.amount);
				}
				// console.log('result');
				// console.log(result);
				return result;
		};
		const groupByYear = () => {
				const keys = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
				const result = new Map<string, number>();
				let i: number;
				// 初始化
				for (i = 0; i < keys.length; i++) {
						result.set(keys[i], 0);
				}
				let r: RecordsItem;
				for (r of records) {
						const key = keys[dayjs(r.createAt).month()];
						const amount = result.get(key) as number;
						result.set(key, amount + r.amount);
				}
				return result;
		};
		return (
			<Layout>
					<TypeSection
						value={type}
						onChange={type => setType(type)}
					>
					</TypeSection>
					<DetailWrapper>
							<div><span>合计: ￥2000</span></div>
							<Button>
									<FlavorForm/>
							</Button>
					</DetailWrapper>
					<hr/>
					<ReactEchart />
			</Layout>
		);
}