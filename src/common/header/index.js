import styled from 'styled-components'
import { theme } from "styled-tools";
import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import logoPic from '../../static/indexlogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSearch } from '@fortawesome/free-solid-svg-icons'
import { 
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from '../Ifno/Info'



function Header (props) {

  const [focused, setFocused] = useState(false)
  const [navs, setNavs] = useState([
    {
      title: '首頁',
      class: 'left active',
    },
    {
      title: '下載APP',
      class: 'left',
    }
  ]);
  const [infoItems, setInfoItems] = useState([
    {
      title: 'vue',
      color: '#3FB27F'
    },
    {
      title: 'react',
      color: '#5ED3F3'
    },
    {
      title: 'js',
      color: '#EFD81D'
    },
    {
      title: 'git',
      color: '#E84D31'
    },
    {
      title: 'TypeScript',
      color: '#0076C6'
    },
    {
      title: 'sass',
      color: '#C76494'
    },
  ]);

  const NavItems = () => {
    return navs.map((nav, index) => <NavItem className={nav.class} key={`nav${index}`}>{nav.title}</NavItem>)
  }

  const SearchInfoItems = ()=> {
    return infoItems.map((item, index) => <SearchInfoItem key={`${index}infoItems`} hoverbg={item.color}>{item.title}</SearchInfoItem>)
  }

  return (
    <HeaderWrapper>
      <Logo/>
      <Nav>
        <NavItems />
        <SearchWrapper>
          <CSSTransition
            classNames="slide"
            in={focused}
            timeout={200}>
            <NavSearch 
              className={focused ? 'focused' : ''} 
              onFocus={()=> setFocused(true)}
              onBlur={()=> setFocused(false)}/>
          </CSSTransition>
          <FontAwesomeIcon className={focused ? 'focused' : ''} icon={faSearch} />
          {focused && 
            <SearchInfo>
              <SearchInfoTitle>
                熱門搜索
                <SearchInfoSwitch>換一批</SearchInfoSwitch>
              </SearchInfoTitle>
              <SearchInfoList>
                <SearchInfoItems />
              </SearchInfoList>
            </SearchInfo>
          }
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className='reg'>
          <FontAwesomeIcon icon={faEdit} />
          寫文章
        </Button>
        <Button className='write'>註冊</Button>
      </Addition>
      
    </HeaderWrapper>
  )

}


export default Header

const HeaderWrapper = styled.div`
  margin-top: 5px;
  position: relative;
  display: flex;
  justify-content: space-around;
  height: 56px;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
`

const Logo = styled.a.attrs({href: '/'})`
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic}) no-repeat;
  background-size: 55px;
  @media screen and (max-width: ${theme('size.sm')}) {
    display: none;
  }
`

const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  display: flex;
`

const NavItem = styled.div`
  z-index: -1;
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  white-space: nowrap;
  &.active {
    color: #6EDEFC;
  }
`

const SearchWrapper = styled.div`
  position: relative;
  svg {
    position: absolute;
    width: 30px;
    line-height: 30px;
    text-align: center;
    right: 10px;
    bottom: 18px;
    border-radius: 15px;
    color: #999;
    &.focused {
      color: #60c1db;
    }
  }
`;

const NavSearch = styled.input.attrs({
  placeholder: '搜索',
})`
  width: 160px;
  height: 38px;
  padding: 0 35px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #777;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`
const Addition = styled.div`
  width: 30%;
  display: flex;
  height: 56px;
  padding: 8px 0;
`

const Button = styled.div`
  margin-right: 20px;
  padding: 8px 20px;
  line-height: 22px;
  border-radius: 19px;
  border: 1px solid #60c1db;
  font-size: 14px;
  white-space: nowrap;
  &.reg {
    color: #60c1db;
    svg {
      margin-right: 5px;
    }
  }
  &.write {
    color: #fff;
    background: #60c1db;
  }
`

/*
1. serState改變觸發render
2. JSX classNane htmlFor
3. style 需使用 {{v:k}}
*/

