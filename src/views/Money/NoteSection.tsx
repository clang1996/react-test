import styled from 'styled-components';
import React, {ChangeEventHandler, useRef} from 'react';
import {Input} from '../../components/Input';

const Wrapper = styled.section`
    background-color: #f5f5f5;
    font-size: 14px;
    padding:12px 16px ;
 `;

type Props = {
  value: string,
  onChange: (value: string) => void
}
const NoteSection: React.FC<Props> = (props) => {
  const note = props.value;
  const onChange:ChangeEventHandler<HTMLInputElement>= (e) => {
      props.onChange(e.target.value);
  };
  return (
    <Wrapper>
      <Input label="备注" type="text" value={note} onChange={onChange}>
      </Input>
    </Wrapper>
  );
};
export {NoteSection};