import echarts from 'echarts';
import React, {useEffect, useRef} from 'react';

export function ReactEchart() {

		const container = useRef<any>(null);
		const width = document.documentElement.clientWidth;
		const height = (document.documentElement.clientWidth) * 0.8;
		useEffect(() => {
				container.current.style = `width: ${width}px;height:${height}px`;
				// console.log(container.current);
				const chart = echarts.init(container.current, 'dark');
				const option = {
						grid: {
								top: '5%',
								bottom: '10%'
						},
						xAxis: {
								data: [],
								axisTick: {
										interval: 0,
										lineStyle: {
												opacity: 0
										}
								},
								axisLabel: {
										interval: 0,
										fontSize: 8,
										color: '#999999'
								}
						},
						yAxis: {
								axisLine: {
										lineStyle: {
												opacity: 0
										}
								},
								splitLine: {
										lineStyle: {
												opacity: 0
										}
								},
								axisLabel: undefined,
								axisTick: undefined,
						},
						series: [{
								type: 'line',
								data: [],
						}]
				};

		}, []);
		return (
			<div ref={container}/>
		);
}



