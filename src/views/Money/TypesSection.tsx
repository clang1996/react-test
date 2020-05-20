import styled from 'styled-components';

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
export {TypeSection}