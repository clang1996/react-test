import {useEffect, useRef, useState} from 'react';
import {createId} from '../lib/createId';
import {useUpdate} from './useUpdate';

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]')
    if (localTags.length===0){
      localTags=[
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'},
      ]
    }
    setTags(localTags)
  }, []); //第一次渲染
  useUpdate(()=>{
    window.localStorage.setItem('tags', JSON.stringify(tags));
  },[tags])
  // const count = useRef(0);
  // useEffect(() => {
  //   count.current += 1;
  // });
  // useEffect(() => {
  //   if (count.current>1){
  //     console.log('count' + count.current);
  //     window.localStorage.setItem('tags', JSON.stringify(tags));
  //   }
  // }, [tags]);
  const onAddTag = () => {
    const tagName = window.prompt('新标签的名称为');
    if (tagName !== null) {
      setTags([...tags, {id: createId(), name: tagName}]);
    }
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
  return {tags, setTags, findTag, onAddTag, updateTag, findTagIndex, deleteTag};
};

export {useTags};