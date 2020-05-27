import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type RecordsItem = {
  tagIds: number[]
  note: string
  type: '+' | '-'
  amount: number
  createAt: string
}
type newRecordsItem = Omit<RecordsItem, 'createAt'>
const useRecords = () => {
  const [records, setRecords] = useState<RecordsItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);
  const addRecord = (newRecord: newRecordsItem) => {
    const record = {...newRecord, createAt: (new Date().toISOString())};
    setRecords([...records, record]);
  };
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, [records]);
  return {records, addRecord};
};
export {useRecords};