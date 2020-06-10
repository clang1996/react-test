import echarts from 'echarts';
import React, {useEffect, useRef} from 'react';

export function ReactEchart(props: any) {
		const container = useRef<any>(null);
		const width = document.documentElement.clientWidth;
		const height = (document.documentElement.clientWidth) * 1.2;
		// const {} = props.value;
		useEffect(() => {
				container.current.style = `width: ${width}px;height:${height}px`;
				const myChart = echarts.init(container.current, 'dark');
				// // const option = {
				// // 		tooltip: {
				// // 				show: true,
				// // 				trigger: 'axis'
				// // 		},
				// // 		legend: {
				// // 				data: ['支出', '收入']
				// // 		},
				// // 		xAxis: {
				// // 				type: 'category',
				// // 				data: xArray
				// // 		},
				// // 		yAxis: {
				// // 				axisLabel: {
				// // 						rotate: -45
				// // 				},
				// // 				type: 'value'
				// // 		},
				// // 		visualMap: {
				// // 				top: 10,
				// // 				right: 10,
				// // 				pieces: [{
				// // 						gt: 50,
				// // 						lte: 100,
				// // 						color: '#ffde33'
				// // 				}, {
				// // 						gt: 100,
				// {/*						lte: 150,*/}
				// // 						color: '#ff9933'
				// // 				}]
				// // 		},
				// // 		series: [{
				// // 				name: '支出',
				// // 				data: expenseArray,
				// // 				type: 'line',
				// // 				itemStyle: {
				// // 						normal: {
				// // 								lineStyle: {
				// // 										color: '#FF0000'
				// // 								}
				// // 						}
				// // 				},
				// // 		}, {
				// // 				name: '收入',
				// // 				data: incomeArray,
				// // 				type: 'line',
				// // 				itemStyle: {
				// // 						normal: {
				// // 								lineStyle: {
				// // 										color: '#029292'
				// // 								}
				// // 						}
				// // 				},
				// // 		}
				// // 		]
				// // };
				// @ts-ignore
				// myChart.setOption(option);
		}, []);
		return (
			<div ref={container}/>
		);
}



