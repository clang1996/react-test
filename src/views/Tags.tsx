import {Layout} from '../components/Layout';
import React from 'react';
import {useTags} from 'views/useTags';
import styled from 'styled-components';
import {Icon} from '../components/Icon';
import {Link} from 'react-router-dom';

const TagList = styled.ol`
  font-size: 16px;
  background: #fff;
  > li{
      border-bottom: 2px solid #d5d5d5;
      line-height: 20px;
      margin-left: 16px;
      > a{
      display: flex;
      padding: 12px 16px 12px 0; 
      align-items: center;
      justify-content: space-between;
      }
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
`;

function Tags() {
  // eslint-disable-next-line
  const {tags, setTags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={'/tags/' + tag.id}>
              <span className="onLine"> {tag.name}</span>
              <Icon name="right"/>
            </Link>
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

export {Tags};