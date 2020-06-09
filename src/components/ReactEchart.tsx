import echarts from 'echarts';
import React, {useEffect, useRef} from 'react';

export function ReactEchart(props: any) {
		const container = useRef<any>(null);
		const width = document.documentElement.clientWidth;
		const height = (document.documentElement.clientWidth) * 1.2;
		const {expenseArray, incomeArray, xArray} = props.value;
		useEffect(() => {
				container.current.style = `width: ${width}px;height:${height}px`;
				const myChart = echarts.init(container.current);
				const option = {
						tooltip: {},
						legend: {
								data: ['支出', '收入']
						},
						xAxis: {
								type: 'category',
								data: xArray
						},
						yAxis: {
								axisLabel: {
										rotate: -45
								},
								type: 'value'
						},
						series: [{
								name: '支出',
								data: expenseArray,
								type: 'line',
								itemStyle: {
										normal: {
												lineStyle: {
														color: '#FF0000'
												}
										}
								},
						}, {
								name: '收入',
								data: incomeArray,
								type: 'line',
								itemStyle: {
										normal: {
												lineStyle: {
														color: '#029292'
												}
										}
								},
						}
						]
				};
				// @ts-ignore
				myChart.setOption(option);
		}, [expenseArray, height, incomeArray, width, xArray]);
		return (
			<div ref={container}/>
		);
}



