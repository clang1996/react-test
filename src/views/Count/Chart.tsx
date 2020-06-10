import React from 'react';
import {ReactEchart} from './ReactEchart';
import {useRecords} from '../../hooks/useRecords';
import dayjs from 'dayjs';


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
						console.log(index);
						console.log(dayjs());
						expenseArray[index + 1] += expenseRecords[i].amount;
				}
				for (let i = 0; i < incomeRecords.length; i++) {
						const index = parseInt(dayjs(incomeRecords[i].createAt).format('MM'));
						incomeArray[index + 1] += incomeRecords[i].amount;
				}
				return {expenseArray, incomeArray, xArray};
		};
		return (
		<ReactEchart
			// @ts-ignore
			value={array()}/>
		);
};
export {Chart};