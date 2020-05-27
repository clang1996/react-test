import {Layout} from '../components/Layout';
import React, {useState} from 'react';
import {TypeSection} from './Money/TypeSection';
import styled from 'styled-components';
import {useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';

const TypeWrapper = styled.div`
    background: #fff;

`;
const Item = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    background: #fff;
    line-height: 20px;
    padding: 10px 16px;
    > .note{
      margin-right: auto;
      margin-left: 16px;
      color: #aaa;
    }
`;


function Statistics() {
  const [type, setType] = useState<'+' | '-'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  return (
    <Layout>
      <TypeWrapper>
        <TypeSection value={type} onChange={value => setType(value)}/>
      </TypeWrapper>
      <div>
        {records.map(r => {
          return <Item>
            <div className="tags">
              {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
            </div>
            {r.note && <div className="note">{r.note}</div>}
            <div className="amount">
              ￥{r.amount}
            </div>
            {/*<div className="date">*/}
            {/*  {day(r.createAt).format('YYYY年MM月DD日')}*/}
            {/*</div>*/}
          </Item>;
        })}
      </div>
    </Layout>
  );
}

export {Statistics};