import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
    background: #4ebf80;
    font-size: 18px;
    > ul{
       display: flex;
       justify-content: center;
       height:54px;
       margin-bottom: 0;
       > li{
       display: flex;
       width: 60px;
       padding-left: 12px;
       padding-bottom: 3px;
       align-items: flex-end;
       text-align: center;
       position: relative;
       &.selected::after{
       position: absolute;
            display: block;
            content: '';
            height: 3px;
            background: #333;
            bottom: 0;
            width: 100%;
            left: 0;
         }
       }      
    }
`;
type Props = {
  value: '-' | '+',
  onChange: (value: '-' | '+') => void
}
const TypeSection: React.FC<Props> = (props) => {
  const typeMap = {'-': '支出', '+': '收入'};
  type Keys = keyof typeof typeMap
  const [typeList] = useState<Keys[]>(['+', '-']);
  const type = props.value;
  return (
    <Wrapper>
        <ul>
          {typeList.map(c =>
            <li className={type === c ? 'selected' : ''}
                onClick={() => {props.onChange(c);}}
                key={c}
            >{typeMap[c]}</li>)}
        </ul>
    </Wrapper>
  );
};
export {TypeSection};