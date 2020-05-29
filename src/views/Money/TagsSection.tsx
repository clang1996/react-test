import styled from 'styled-components';
import React from 'react';
import {useTags} from 'hooks/useTags';
import {Icon} from '../../components/Icon';

const Wrapper = styled.section`
     background-color: #fff;
     padding:12px 16px ;
     flex-grow: 1;
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     flex-shrink: 1;
     overflow: auto;
     > ol {
     margin:0-12px;
        > li{
        background-color: #d9d9d9;
        border-radius:16px;
        display: inline-block;
        padding: 3px 18px;
        min-width: 158px;
        font-size: 14px;
        margin: 3px 12px;
        text-align: center;
        &.selected{
              background:#4ebf80;
           }
        
        }
     }
     .icon{
        color:#333;
        width: 50px;
        height: 50px;
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
      <div>
        <Icon name="add" onClick={onAddTag}/>
      </div>
      <ol>
        {tags.map(tag =>
          <li key={tag.id} onClick={
            () => {onToggleTag(tag.id);}}
              className={getClass(tag.id)}>
            {tag.name}
          </li>
        )}
      </ol>

    </Wrapper>
  );
};
export {TagsSection};