import {Layout} from 'components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {TypeSection} from './Money/TypeSection';

const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
`;

type Type = '-' | '+'

function Money() {
  const [selected, setSelected] = useState(
    {
      tags: [] as string[],
      note: '',
      type: '-' as Type,
      amount: 0
    }
  );
  const onChange = (obj: Partial<typeof selected>) => {   //obj是selected类型的部分类型
    setSelected({...selected, ...obj});
  };
  return (
    <MyLayout>
      <TagsSection value={selected.tags} onChange={tags => onChange({tags})}/>
      <NoteSection value={selected.note} onChange={note => onChange({note})}/>
      <TypeSection value={selected.type} onChange={type => onChange({type})}/>
      <NumberPadSection value={selected.amount}
                        onOk={() => {}}
                        onChange={(amount) => onChange({amount})}/>
    </MyLayout>
  );
}

export {Money};