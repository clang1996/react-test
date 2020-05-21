import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
    font-size: 24px;
    > ul{
    display: flex;
       > li{
       width: 50%;
       padding: 16px 0;
       text-align: center;
       background: #c4c4c4;
       position: relative;
       &.selected::after{
            display: block;
            content: '';
            height: 3px;
            background: #333;
            position: absolute;
            bottom: 0;
            width: 100%;
            left: 0;
         }
       }
    }
`;
const TypeSection: React.FC = () => {
  const typeMap = {'-':'支出','+':'收入'}
  type Keys = keyof typeof typeMap
  const [typeList] = useState<Keys[]>(['+','-'])
  const [type, setType]= useState('-')

  return (
    <Wrapper>
      <ul>
        {typeList.map(c=>
          <li className={type===c?'selected':''}
              onClick={()=>{setType(c)}}
              key={c}
        >{typeMap[c]}</li>)}
      </ul>
    </Wrapper>
  );
};
export {TypeSection};