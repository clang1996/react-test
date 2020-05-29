import {useEffect, useState} from 'react';
import {createId} from '../lib/createId';
import {useUpdate} from './useUpdate';

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {id: createId(), name: '衣'},

      ];
    }
    setTags(localTags);
  }, []); //第一次渲染
  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, tags);
  const onAddTag = () => {
    const tagName = window.prompt('新标签的名称为');
    if (tagName !== null) {
      if (tagName.trim().length===0){
        window.alert('标签名不能为空哦~')
        return false;
      }
      if (tagName.length > 8) {
        window.alert('标签名长度不能大于8个字哦~');
        return false;
      }
      setTags([...tags, {id: createId(), name: tagName}]);
      return true;
    }
    return true;
  };
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, {name}: { name: string }) => {
    setTags(tags.map(tag => tag.id === id ? {id, name: name} : tag));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };
  const getName = (id: number) => {
    const tag = tags.filter(tag => tag.id === id)[0];
    return tag ? tag.name : '';
  };
  return {tags, setTags, getName, findTag, onAddTag, updateTag, findTagIndex, deleteTag};
};

export {useTags};