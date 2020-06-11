import echarts from 'echarts';
import React, {useEffect, useRef} from 'react';

export function ReactEchart(props: any) {
		const container = useRef<any>(null);
		const width = document.documentElement.clientWidth;
		const height = (document.documentElement.clientWidth)*0.8;
		useEffect(() => {
				container.current.style = `width: ${width}px;height:${height}px`;
				const myChart = echarts.init(container.current, 'dark');
		}, []);
		return (
			<div ref={container} style={{border:"1px solid red"}}/>
		);
}



