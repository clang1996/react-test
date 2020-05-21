import styled from 'styled-components';
import React, {useRef, useState} from 'react';

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
const NoteSection: React.FC = () => {
  const [note,setNote] = useState('')
  const refInput = useRef<HTMLInputElement>(null)
  const X = ()=>{
    if (refInput.current !== null){
      setNote(refInput.current.value)
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