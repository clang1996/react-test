import {Layout} from 'components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagsSection = styled.section`
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
        }
     }
     > button {
     background: none;
     border:none;
     padding: 0 4px;
     border-bottom: 1px solid #333;
     color:#666;
     }

`
const NotesSection = styled.section`
    background-color: #f5f5f5;
    font-size: 14px;
    padding:12px 16px ;
    >label {
    display: flex;
    align-items: center;
        > span{
        margin-right: 16px;
        white-space: nowrap;
        }
        > input {
        display: block;
        width: 100%;
        height: 72px;
        background: none ;
        border: none;
        }
    }

`
const TypeSection = styled.section`
    font-size: 24px;
    > ul{
    display: flex;
       > li{
       width: 50%;
       padding: 16px 0;
       text-align: center;
       background: #c4c4c4;
       position: relative;
       &.selected::after{
            display: block;
            content: '';
            height: 3px;
            background: #333;
            position: absolute;
            bottom: 0;
            width: 100%;
            left: 0;
         }
       }
    }
`
const NumberPadSection = styled.section`
     display: flex;
     flex-direction: column;
      > .output {
      background: #fff;
      font-size: 36px;
      line-height: 72px;
      text-align: right;
      padding: 0 16px;
      box-shadow: inset 0 -5px 5px -5px  rgba(0,0,0,0.25),
                  inset 0 5px 5px -5px  rgba(0,0,0,0.25);
      }
      > .pad {
         > button {
         font-size: 18px;
         float: left;
         width: 25%;
         height: 64px;
         border: none;
            &.ok{
                height: 128px;
                float: right;
            }
            &.zero{
                width: 50%;
            }
            &:nth-child(1){background: #f2f2f2;}
            &:nth-child(2),&:nth-child(5){background: #e0e0e0;}
            &:nth-child(3),&:nth-child(6),&:nth-child(9){background: #d3d3d3;}
            &:nth-child(4),&:nth-child(7),&:nth-child(10){background: #c1c1c1;}
            &:nth-child(8),&:nth-child(11),&:nth-child(13){background: #b8b8b8;}
            &:nth-child(12){background: #9a9a9a;}
            &:nth-child(14){background: #a9a9a9;}
         }
      }
`
const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
`
function Money() {
  return (
    <MyLayout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>
          新增标签
        </button>
      </TagsSection>
      <NotesSection >
        <label>
         <span> 备注</span>
          <input type="text" placeholder="请在这里写备注噢~"/>
        </label>
      </NotesSection>
      <TypeSection>
      <ul>
        <li className="selected">支出</li>
        <li>收入</li>
      </ul>
      </TypeSection>
      <NumberPadSection>
        <div className="output">100</div>
        <div className="pad">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className="delete">删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button className="clear clearfix">清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="ok">OK</button>
          <button className="zero">0</button>
          <button className="dot">.</button>
        </div>
      </NumberPadSection>
    </MyLayout>
  );
}

export {Money};