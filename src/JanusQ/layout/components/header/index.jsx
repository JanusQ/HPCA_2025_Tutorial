import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Popover, Dropdown, Space, Row, Col } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import logo from '@/assets/image/logo.png'
import { MenuOutlined } from '@ant-design/icons'

export default function JanusHeader({ fontColor }) {
  const [showSelect, setShowSelect] = useState(false)
  const onMouseOver = () => {}

  const headerMenu = [
    {
      name: 'Resources',
      link: <Link to="/home">Home</Link>,
    },
    {
      name: 'JanusQ',
      link: (
        <a
          target="_blank"
          href="http://janusq.zju.edu.cn/home"
          rel="noreferrer"
        >
          JanusQ
        </a>
      ),
    },
    {
      name: 'Demo',
      link: <Link to={'/Demonstrations/1-1.install_janusq'}>Demo</Link>,
    },
    {
      name: 'Resources',
      link: <Link to="/resources">Resources</Link>,
    },
    {
      name: 'Github',
      link: (
        <a
          target="_blank"
          href="https://github.com/JanusQ/JanusQ/tree/main"
          rel="noreferrer"
        >
          Github
        </a>
      ),
    },
    {
      name: 'Team',
      link: (
        <a
          target="_blank"
          href="https://janusq.github.io/team/home"
          rel="noreferrer"
        >
          Team
        </a>
      ),
    },
  ]
  const items = [
    {
      key: 1,
      label: (
        <a
          target="_blank"
          href="http://janusq.zju.edu.cn/home"
          rel="noreferrer"
        >
          JanusQ
        </a>
      ),
    },
    {
      key: 2,
      label: <Link to="/Demonstrations">Demo</Link>,
    },
    {
      key: 3,
      label: <Link to="/resources">Resources</Link>,
    },
    {
      key: 4,
      label: (
        <a
          target="_blank"
          href="https://github.com/JanusQ/JanusQ/tree/main"
          rel="noreferrer"
        >
          Github
        </a>
      ),
    },
    {
      key: 5,
      label: (
        <a
          target="_blank"
          href="https://janusq.github.io/team/home"
          rel="noreferrer"
        >
          Team
        </a>
      ),
    },
  ]
  return (
    <div className={styles.root}>
      <Row
        style={{ height: 60 }}
        justify="center"
        className="headerContent"
        align="middle"
      >
        <Col span={18} offset={1}>
          <div className="header_container">
            <div className="logo_content">
              <li className="logo">
                <Link to="/home">
                  <img className="logo" src={logo} alt="" />
                </Link>
              </li>
              <Link to="/home">
                <li className="myname">Janus Quantum</li>
              </Link>
            </div>

            <div className="menuContent">
              {headerMenu.map((item, index) => (
                <div key={index} className="menu_item">
                  <span className="header_menu_item_black">{item.link}</span>
                </div>
              ))}
            </div>
            <div className="min_menu">
              <Dropdown
                menu={{
                  items,
                }}
              >
                <MenuOutlined
                  style={{
                    fontSize: '32px',
                    color: 'black',
                    lineHeight: '74px',
                  }}
                />
              </Dropdown>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
