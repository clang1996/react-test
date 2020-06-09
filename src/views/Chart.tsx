import React, {useState} from 'react';
import {Layout} from 'components/Layout';
import {ReactEchart} from '../components/ReactEchart';
import styled from 'styled-components';
import {useRecords} from '../hooks/useRecords';
import dayjs from 'dayjs';

const Topbar = styled.div`
			height: 60px;
			background: #4ebf80;
`;
const Chart = () => {
		const {records} = useRecords();
		const monthLastDay = dayjs().endOf('month').format('DD');
		const expenseRecords = records.filter((records) => {return records.type === '-';}); //支出记录
		const incomeRecords = records.filter((records) => {return records.type === '+';});  //收入记录
		const array = () => {
				const expenseArray = [];
				const incomeArray = [];
				const xArray = [];
				for (let i = 0; i < parseInt(monthLastDay); i++) {
						expenseArray[i] = 0;
						incomeArray[i] = 0;
						xArray[i] = i + 1;
				}
				for (let i = 0; i < expenseRecords.length; i++) {
						const index = parseInt(dayjs(expenseRecords[i].createAt).format('MM'));
						expenseArray[index + 1] += expenseRecords[i].amount;
				}
				for (let i = 0; i < incomeRecords.length; i++) {
						const index = parseInt(dayjs(incomeRecords[i].createAt).format('MM'));
						incomeArray[index] += incomeRecords[i].amount;
				}
				return {expenseArray, incomeArray, xArray};
		};
		return (
			<Layout>
					<Topbar></Topbar>
					<div>

							<ReactEchart
								// @ts-ignore
								value={array()}/>
					</div>
			</Layout>
		);
};
export {Chart};