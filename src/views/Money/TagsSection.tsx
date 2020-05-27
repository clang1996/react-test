import styled from 'styled-components';
import React from 'react';
import {useTags} from 'hooks/useTags';
import {createId} from '../../lib/createId';

const Wrapper = styled.section`
     background-color: #fff;
     padding:12px 16px ;
     flex-grow: 1;
     display: flex;
     flex-direction: column;
     justify-content: flex-end;
     align-items: flex-start;
     > ol {
     margin:0-12px;
        > li{
        background-color: #d9d9d9;
        border-radius:18px;
        display: inline-block;
        padding: 3px 18px;
        font-size: 14px;
        margin: 8px 12px;
        &.selected{
              background:red;
           }
        }
     }
     > button {
     background: none;
     border:none;
     padding: 0 4px;
     border-bottom: 1px solid #333;
     color:#666;
     }
`;
type Props = {
  value: number[]
  onChange: (selected: number[]) => void
}
const TagsSection: React.FC<Props> = (props) => {
  const {tags, onAddTag} = useTags();
  const selectedTagIds = props.value;
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';

  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag.id} onClick={
            () => {onToggleTag(tag.id);}}
              className={getClass(tag.id)}>
            {tag.name}
          </li>
        )}
      </ol>
      <button onClick={onAddTag}>
        新增标签
      </button>
    </Wrapper>
  );
};
export {TagsSection};