import React from 'react';
import {useTags} from './useTags';
import {useParams} from 'react-router-dom';
import {Layout} from '../components/Layout';
import {Icon} from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';

type Params = {
  id: string
}
const Topbar = styled.header`
    display: flex;
    justify-content: space-between;
    line-height: 20px;
    padding: 12px 18px;
    font-size: 16px;
    background: #fff;
    align-items: center;
`
const Tag: React.FC = (props) => {
  const {findTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <Topbar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <div></div>
      </Topbar>
      <div>
        <label>
          <span>标签名</span>
          <input type="text" placeholder="请在这里写备注噢~"/>
        </label>
      </div>
      <Button>
        <span>删除标签</span>
      </Button>
    </Layout>
  );
};
export {Tag};