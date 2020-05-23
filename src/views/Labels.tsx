import {Layout} from '../components/Layout';
import React from 'react';
import {useTags} from 'useTags';
import styled from 'styled-components';
import {Icon} from '../components/Icon';

const TagList = styled.ol`
  font-size: 16px;
  background: #fff;
  > li{
      display: flex;
      border-bottom: 2px solid #d5d5d5;
      line-height: 20px;
      padding: 12px 16px 12px 0; 
      margin-left: 16px;
      justify-content: space-between;
      align-items: center;
  }
`;
const Button = styled.button`
    font-size: 18px ;
    border: none;
    background: #f00;
    padding: 8px 12px ;
    color: #fff;
    border-radius: 4px;
`;
const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Space = styled.div`
    height: 16px;
`

function Labels() {
  const {tags, setTags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag}>
            <span className="onLine"> {tag}</span>
            <Icon name="right"/>
          </li>)}
      </TagList>
      <Center>
        <Space/>
        <Space/>
        <Button>
          <span>新建标签</span>
        </Button>
      </Center>
    </Layout>
  );
}

export {Labels};