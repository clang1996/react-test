import {Layout} from 'components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {TypeSection} from './Money/TypeSection';
import {useRecords} from '../hooks/useRecords';

const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
`;

type Type = '-' | '+'

const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  type: '-' as Type,
  amount: 0
};

function Money() {
  const [selected, setSelected] = useState(defaultFormData);
  const onChange = (obj: Partial<typeof selected>) => {   //obj是selected类型的部分类型
    setSelected({...selected, ...obj});
  };
  const {addRecord} = useRecords();

  const submit = () => {
    if (addRecord(selected)) {
      alert('保存成功');
      setSelected(defaultFormData);
    }
  };
  return (
    <MyLayout>
      <TagsSection value={selected.tagIds} onChange={tagIds => onChange({tagIds})}/>
      <NoteSection value={selected.note} onChange={note => onChange({note})}/>
      <TypeSection value={selected.type} onChange={type => onChange({type})}/>
      <NumberPadSection value={selected.amount}
                        onOk={submit}
                        onChange={(amount) => onChange({amount})}/>
    </MyLayout>
  );
}

export {Money};