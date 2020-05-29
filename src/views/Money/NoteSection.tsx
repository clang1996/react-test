import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
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
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value.length > 9) {
      window.alert('备注不要太长哦，9个字以内就好啦~');
      return false;
    }
    props.onChange(e.target.value);
    return true;
  };
  return (
    <Wrapper>
      <Input label="备注 : "
             type="text"
             placeholder="在这里写备注~"
             value={note}
             onChange={onChange}>
      </Input>
    </Wrapper>
  );
};
export {NoteSection};