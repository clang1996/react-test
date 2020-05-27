import React from 'react';
import {useTags} from '../hooks/useTags';
import {useParams,useHistory} from 'react-router-dom';
import {Layout} from '../components/Layout';
import {Icon} from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Center} from '../components/Center';
import {Space} from '../components/Space';

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
`;
const InputWrapper = styled.div`
  background: #fff;
  margin: 18px 0;
  padding: 12px 24px;
`;
const Tag: React.FC = () => {
  const {findTag, updateTag, deleteTag} = useTags();
  let {id: idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));
  const tagContent = (tag: { id: number, name: string }) => (
    <div>
      <InputWrapper>
        <Input label="标签名"
               type="text"
               placeholder="请输入标签名~"
               value={tag.name}
               onChange={(e) => {
                 updateTag(tag.id, {name: e.target.value});
               }}
        />
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button onClick={() => {
          deleteTag(tag.id);
        }}>
          <span>删除标签</span>
        </Button>
      </Center>
    </div>
  )
  const history = useHistory()
  const onClickBack = ()=>{
   history.goBack()
  }
  return (
    <Layout>
      <Topbar>
        <Icon name="left" onClick = {onClickBack}/>
        <span>编辑标签</span>
        <div></div>
      </Topbar>
      {tag ? tagContent(tag) : <div><Space></Space><Space></Space><Space></Space><Center>tag已删除</Center></div>}
    </Layout>
  );
};
export {Tag};