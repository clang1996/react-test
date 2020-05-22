import styled from 'styled-components';
import React, {useRef} from 'react';

const Wrapper = styled.section`
    background-color: #f5f5f5;
    font-size: 14px;
    padding:12px 16px ;
    >label {
    display: flex;
    align-items: center;
        > span{
        margin-right: 16px;
        white-space: nowrap;
        }
        > input {
        display: block;
        width: 100%;
        height: 72px;
        background: none ;
        border: none;
        }
    }
 `;

type Props ={
  value:string,
  onChange: (value:string)=>void
}
const NoteSection: React.FC<Props> = (props) => {
  const note = props.value
  const refInput = useRef<HTMLInputElement>(null)
  const X = ()=>{
    if (refInput.current !== null){
    props.onChange(refInput.current.value)
      console.log(refInput.current.value);
    }
  }
  return (
    <Wrapper>
      <label>
        <span> 备注</span>
        <input type="text" placeholder="请在这里写备注噢~"
               ref={refInput}
               defaultValue={note}
               onBlur={X}
          />
      </label>
    </Wrapper>
  );
};
export {NoteSection};