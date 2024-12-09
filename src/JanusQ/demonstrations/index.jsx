import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { useParams, useNavigate } from 'react-router-dom'
import { Row, Col, Tree, Affix } from 'antd'
import { IpynbRenderer } from 'react-ipynb-renderer'
import 'react-ipynb-renderer/dist/styles/default.css'
import {
  CarryOutOutlined,
  CheckOutlined,
  FormOutlined,
} from '@ant-design/icons'
import JanusHeader from '../layout/components/header'
import NProgress from '@/components/Nprogress'
export default function Demonstrations() {
  const navigate = useNavigate()
  let { fileName } = useParams()

  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState(fileName)
  const start = [
    {
      name: 'Install JanusQ',
      link: '1-1.install_janusq',
    },
  ]
  const Janus_CT = [
    { name: 'Vectorization model of Janus-CT', link: '2-1.vectorization' },
    {
      name: 'Fidelity prediction of JanusQ-CT on quantum simulators',
      link: '2-2.fidelity_prediction_simulator',
    },
    {
      name: 'Fidelity prediction of JanusQ-CT on real quantum devices',
      link: '2-3.fidelity_prediction_realqc',
    },
    {
      name: 'Noise optimization based on JanusQ-CT',
      link: '2-4.fidelity_optimization',
    },
    {
      name: 'Unitary decomposition based on JanusQ-CT',
      link: '2-5.unitary_decomposition',
    },
    {
      name: 'extend_framework_bug_identification',
      link: '2-6.extend_framework_bug_identification',
    },
  ]
  const Janus_FEM = [
    {
      name: 'Readout calibration of Janus-FEM on quantum simulators',
      link: '3-1.readout_calibration_simulator',
    },
    {
      name: 'Readout calibration of Janus-FEM on real quantum devices',
      link: '3-2.readout_calibration_realqc',
    },
  ]
  const Janus_SAT = [
    {
      name: 'solve_sat_domain_problem',
      link: '4-1.solve_sat_domain_problem',
    },
    {
      name: 'simulate_time_crystal',
      link: '4-2.simulate_time_crystal',
    },
  ]
  const treeData = [
    {
      title: 'Getting Started',
      key: '0-0',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: 'Install JanusQ',
          key: '1-1.install_janusq',
          icon: <CarryOutOutlined />,
        },
        {
          title: 'submit to cloud',
          key: '2-1.submit_to_cloud',
          icon: <CarryOutOutlined />,
        },
      ],
    },
    {
      title: 'Janus-CT',
      key: '0-2',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: 'Vectorization model of Janus-CT',
          key: '3-1.vectorization',
          icon: <CarryOutOutlined />,
        },
        {
          title: 'Fidelity prediction of JanusQ-CT on quantum simulators',
          key: '3-2.fidelity_prediction_simulator',
          icon: <CarryOutOutlined />,
        },
        {
          title: 'Fidelity prediction of JanusQ-CT on real quantum devices',
          key: '3-3.fidelity_prediction_realqc',
          icon: <CarryOutOutlined />,
        },
        {
          title: 'Noise optimization based on JanusQ-CT',
          key: '3-4.fidelity_optimization',
          icon: <CarryOutOutlined />,
        },
        {
          title: 'Unitary decomposition based on JanusQ-CT',
          key: '3-5.unitary_decomposition',
          icon: <CarryOutOutlined />,
        },
        {
          title: 'extend framework bug identification',
          key: '3-6.extend_framework_bug_identification',
          icon: <CarryOutOutlined />,
        },
      ],
    },
    {
      title: 'Janus-FEM',
      key: '0-3',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: 'Readout calibration of Janus-FEM on quantum simulators',
          key: '4-1.readout_calibration_simulator',
          icon: <CarryOutOutlined />,
        },
        {
          title: 'Readout calibration of Janus-FEM on real quantum devices',
          key: '4-2.readout_calibration_realqc',
          icon: <CarryOutOutlined />,
        },
      ],
    },
    {
      title: 'Janus-SAT & CT',
      key: '0-4',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: 'Hybrid Quantum-Classical SAT solver (Janus-SAT)',
          key: '5-1.solve_sat_domain_problem',
          icon: <CarryOutOutlined />,
        },
        {
          title: 'Time crystal simulation (Janus-FEM)',
          key: '5-2.simulate_time_crystal',
          icon: <CarryOutOutlined />,
        },
      ],
    },
  ]
  const [showIpynb, setShowIpynb] = useState('')
  const loadipynb = async (name) => {
    NProgress.start()
    const response = await fetch(`/HPCA_2025_Tutorial/Ipynb/${name}.ipynb`)
    const ipynbBlob = await response.blob()
    const reader = new FileReader()
    reader.onload = function () {
      try {
        // 将读取到的文本内容解析为 JSON
        // console.log(99, reader.result, 88)
        if (reader.result) {
          const ipynbJSON = JSON.parse(reader.result)
          // console.log(ipynbJSON)
          // 打印 JSON 内容

          setShowIpynb(ipynbJSON)
          NProgress.done()
        } else {
          const nodata = {
            cells: [
              {
                cell_type: 'markdown',
                metadata: {},
                source: ['# 暂无内容'],
              },
            ],
          }
          setShowIpynb(nodata)
          NProgress.done()
        }

        // console.log(reader.result, 88)
      } catch (error) {
        console.error('Failed to parse JSON:', error)
      }
    }
    reader.readAsText(ipynbBlob)
    // setipy(response)
  }
  const onSelect = (selectedKeys, info) => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    // console.log('selected', selectedKeys, info)
    navigate(`/Demonstrations/${selectedKeys[0]}`)
    setDefaultSelectedKeys()
    // loadipynb(selectedKeys[0])
  }
  useEffect(() => {
    if (fileName) {
      loadipynb(fileName)
    } else {
      navigate('/Demonstrations/1-1.install_janusq')
      // loadipynb('1-1.install_janusq')
    }
  }, [fileName])

  return (
    <div className={styles.root}>
      <JanusHeader />
      <div className="placeholder" style={{ height: 60 }}></div>

      <div className="demonstrations">
        <div className="left_menu">
          <Affix offsetTop={80}>
            <Tree
              defaultSelectedKeys={[defaultSelectedKeys]}
              showLine={true}
              onSelect={onSelect}
              treeData={treeData}
              defaultExpandAll={true}
            />
          </Affix>
        </div>

        {showIpynb ? (
          <div className="IpynbRenderer_content">
            <IpynbRenderer
              syntaxTheme={'darcula'}
              onLoad={() => {
                console.log('loaded')
              }}
              ipynb={showIpynb}
            />
          </div>
        ) : (
          ''
          // <div className="domo_container">
          //   <div className="start">
          //     <div className="title">Getting Started</div>
          //     <div className="list_content">
          //       {start.map((item, index) => (
          //         // <div className="list_item" key={index}>
          //         //   <Link
          //         //     to={'/tutorial_liealgebra'}
          //         //     state={{ name: item.link }}
          //         //   >
          //         //     {' '}
          //         //     {item.name}
          //         //   </Link>
          //         // </div>
          //         <div className="list_item" key={index}>
          //           {item.name}
          //         </div>
          //       ))}
          //     </div>
          //   </div>
          //   <div className="Janus-CT">
          //     <div className="title">Janus-CT</div>
          //     <div className="list_content">
          //       {Janus_CT.map((item, index) => (
          //         <div className="list_item" key={index}>
          //           {item.name}
          //         </div>
          //       ))}
          //     </div>
          //   </div>
          //   <div className="Janus-FEM">
          //     <div className="title">Janus-FEM</div>
          //     <div className="list_content">
          //       {Janus_FEM.map((item, index) => (
          //         <div className="list_item" key={index}>
          //           {item.name}
          //         </div>
          //       ))}
          //     </div>
          //   </div>
          //   <div className="Janus-SAt">
          //     <div className="title">Janus-SAT & CT</div>
          //     <div className="list_content">
          //       {Janus_SAT.map((item, index) => (
          //         <div className="list_item" key={index}>
          //           {item.name}
          //         </div>
          //       ))}
          //     </div>
          //   </div>
          // </div>
        )}
      </div>
    </div>
  )
}
