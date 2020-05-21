import {Layout} from 'components/Layout';
import React from 'react';
import styled from 'styled-components';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {TypeSection} from './Money/TypesSection';

const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
`;

function Money() {
  return (
    <MyLayout>
      <TagsSection/>
      <NoteSection/>
      <TypeSection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </TypeSection>
      <NumberPadSection>
        <div className="output">100</div>
        <div className="pad">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className="delete">删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button className="clear clearfix">清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="ok">OK</button>
          <button className="zero">0</button>
          <button className="dot">.</button>
        </div>
      </NumberPadSection>
    </MyLayout>
  );
}

export {Money};