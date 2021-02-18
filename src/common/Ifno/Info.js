import styled from 'styled-components'
import { theme } from "styled-tools";

const SearchInfo = styled.div`
  position: absolute;
  left: 30px;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  /* background: ${theme('tifiniGreen')}; */
`
const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
`;

const SearchInfoList = styled.div`
  overflow: hidden;
`;

const SearchInfoItem = styled.a`
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 15px;
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 3px;
  color: #787878;
  &:hover {
    background-color: ${props => props.hoverbg};
    color: #ddd;
  }
`
export {
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
}