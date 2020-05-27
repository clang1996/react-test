import {Layout} from '../components/Layout';
import React, {ReactNode, useState} from 'react';
import {TypeSection} from './Money/TypeSection';
import styled from 'styled-components';
import {RecordsItem, useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';

const TypeWrapper = styled.div`
    background: #fff;

`;
const DateWrapper = styled.h3`
    margin-left: 16px;
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
    > .date{
    margin-left: 18px;
    }
`;


function Statistics() {
  const [type, setType] = useState<'+' | '-'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  const hash: { [K: string]: RecordsItem[] } = {};
  const selectedRecords = records.filter(r => r.type === type);
  selectedRecords.forEach(r => {
    const key = day(r.createAt).format('MM月DD日');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });
  return (
    <Layout>
      <TypeWrapper>
        <TypeSection value={type} onChange={value => setType(value)}/>
      </TypeWrapper>
      {array.map(([date, records]) =>
        <div>
          <DateWrapper>{date}</DateWrapper>
          <div>
            {records.map(r => {
              return <Item>
                <div className="tags onLine">
                  {r.tagIds.map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                    .reduce((result, span, index, array) =>
                      result.concat(index < array.length - 1 ? [span, '、'] : [span]), [] as ReactNode[])}
                </div>
                {r.note && <div className="note">{r.note}</div>}
                <div className="amount">
                  ￥{r.amount}
                </div>
                <div className="date">
                  {day(r.createAt).format('MM月DD日')}
                </div>
              </Item>;
            })}
          </div>
        </div>
      )}
    </Layout>
  );
}

export {Statistics};