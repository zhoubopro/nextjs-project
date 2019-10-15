import React, { useState, useCallback } from 'react';
import Container from './Container'
import Link from 'next/link';
import { Layout, Icon, Input, Avatar } from 'antd';

const { Header, Content, Footer } = Layout;

const githubIconStyle = {
  color: 'white',
  fontSize: 40,
  display: 'block',
  paddingTop: 10,
  marginRight: 20
}

const footerStyle = {
  textAlign: 'center'
}

const Comp = ({ color, children, style }) => <p style={{ color, ...style }}>{children}</p>
export default ({ children }) => {
  const [search, setSearch] = useState('');

  const handleSearchChange = useCallback(event => {
    setSearch(event.target.value)
  }, [setSearch])

  const handleOnSearch = useCallback(event => {
    console.log(event)
  }, [])
  return (
    <Layout>
      <Header>
        <Container renderer={<div className="header-inner" />}>
          <div className="header-left">
            <div className="logo">
              <Icon type="github" style={githubIconStyle}/>
            </div>
            <div>
              <Input.Search
                placeholder="搜索仓库"
                value={search}
                onChange={handleSearchChange}
                onSearch={handleOnSearch}
              />
            </div>
          </div>
          <div className="header-right">
            <div className="user">
              <Avatar size={40} icon="user"/>
            </div>
          </div>
        </Container>
      </Header>
      <Content>
        <Container renderer={<Comp color="red" style={{height: 100}}/>}>{children}</Container>
      </Content>
      <Footer style={footerStyle}>Develop by Z.B</Footer>
      <style jsx>{`
        .header-inner{
          display: flex;
          justify-content: space-between;
        }
        .header-left{
          display: flex;
          justify-content: start;
        }
      `}</style>
      <style jsx global>{`
        #__next, .ant-layout{
          height: 100%;
        }
        .ant-layout-header{
          padding: 0;
        }
      `}</style>
    </Layout>
  )
}



