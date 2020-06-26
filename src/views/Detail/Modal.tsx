import React, {useState} from 'react';
import styled from 'styled-components';
import {Icon} from '../../components/Icon';
import {Input} from '../../components/Input';

const Mask = styled.div`
		position: fixed;  
		top: 0;  
		left: 0;  
		right: 0;  
		bottom: 0; 
    background: #2d2a2e;
    opacity: 0.5;
    z-index: 100;
   
`;
const Container = styled.div`
     position: fixed; 
     top: 50%;  
     left: 50%;  
     transform: translate(-50%, -50%); 
     background: white;  
     width: 300px; 
     min-height: 250px;
     border-radius: 4px;
     z-index: 200;
     > header{
     	 padding: 10px 30px;
       color: black; 
       font-size: 20px; 
       border-bottom: 1px solid #e8e8e8;
     }
     >.body{
       margin: 30px 0;
       padding: 30px;
       font-size: 18px;
       overflow: hidden;
       text-overflow:ellipsis;
       > div{
       		padding: 10px 0;
       		 > span{
       		    color: #aaaaaa;
       		 }
       }
     }
     .footer{
        border-top: 1px solid #e8e8e8;
     		text-align: center;
     		padding: 10px 30px;
     		display: flex;
     		>.btn {
     			flex-grow:  1; 
     			height: 32px; 
     		  &.cancel{
      	  	margin-right: 30px;
      	  	padding: 2px 5px;
      	  	border-radius: 5px;
      	  	background: #221f22;
      	  	color: white;
  
      	  }
      	  &.ok{
      	  	color: white;
      	  	padding: 2px 5px;
      	  	background: #221f22;
      	  	border-radius: 5px;
     	 	  }
     		}
      	
     }
`;
type Props = {
		children: React.ReactChild[],  //records内容
		title: React.ReactChild,  //标题
		onOk?: () => void,
		onCancel?: () => void,
}
const Modal = (props: Props) => {
		const [visible, setVisible] = useState(false);
		const onclick = () => {
				setVisible(true);
				// setTimeout(() => {
				// 		setVisible(false);
				// }, 2000);
		};

		const onCancel = () => {
				setVisible(false);
		};
		const onOk = () => {
				setVisible(false);
		};

		return (
			<div>
					<div onClick={onclick}><Icon name="more"/></div>
					{visible ?
						<div>
								<Mask/>
								<Container>
										<header className="title">
												 {props.title}
										</header>
										<section className="body">
												<div>金额: ￥{props.children[0]}</div>
												<div> <Input label="备注: "
												             placeholder="没有备注噢~"
												             value={props.children[1].toString()}
												             onChange={() => {}}
												/></div>
										</section>
										<footer className="footer">
												<button className="cancel btn"
												        onClick={()=> {onCancel()
												}}>取消</button>
												<button className="ok btn" onClick={onOk}>确认</button>
										</footer>
								</Container>
						</div>
						: ''}
			</div>
		);
};
export {Modal};