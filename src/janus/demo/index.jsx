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
  const treeData = [
    {
      title: 'Getting Started',
      key: '1',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: 'Install JanusQ',
          key: '1_1_install_janusq',
          icon: <CarryOutOutlined />,
        },
        {
          title: 'Submit to cloud',
          key: '1_2_submit_to_cloud',
          icon: <CarryOutOutlined />,
        },
      ],
    },
    {
      title: 'Janus-CT',
      key: '2',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: 'Vectorization model of Janus-CT',
          key: '2_1_vectorization',
          icon: <CarryOutOutlined />,
        },
        {
          title: 'Fidelity prediction of JanusQ-CT on quantum simulators',
          key: '2_2_fidelity_prediction_simulator',
          icon: <CarryOutOutlined />,
        },
        {
          title: 'Fidelity prediction of JanusQ-CT on real quantum devices',
          key: '2_3_fidelity_prediction_realqc',
          icon: <CarryOutOutlined />,
        },
        {
          title: 'Fidelity optimization based on JanusQ-CT',
          key: '2_4_fidelity_optimization',
          icon: <CarryOutOutlined />,
        },
        {
          title: 'Unitary decomposition based on JanusQ-CT',
          key: '2_5_unitary_decomposition',
          icon: <CarryOutOutlined />,
        },
        {
          title: 'Extending framework for bug identification',
          key: '2_6_extend_framework_bug_identification',
          icon: <CarryOutOutlined />,
        },
      ],
    },
    {
      title: 'Janus-QPV',
      key: '3',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: 'Assertion statement of Janus-QPV',
          key: '3_1_assertion_statement',
          icon: <CarryOutOutlined />,
        },
      ],
    },
    {
      title: 'Janus-FEM',
      key: '4',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: 'Readout calibration of Janus-FEM on quantum simulators',
          key: '4_1_readout_calibration_simulator',
          icon: <CarryOutOutlined />,
        },
        {
          title: 'Readout calibration of Janus-FEM on real quantum devices',
          key: '4_2_readout_calibration_realqc',
          icon: <CarryOutOutlined />,
        },
      ],
    },
    {
      title: 'Janus-SAT',
      key: '5',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: 'Hybrid quantum-classical SAT solver',
          key: '5_1_solve_sat_domain_problem',
          icon: <CarryOutOutlined />,
        },
      ],
    },
    {
      title: 'Janus-QAOA',
      key: '6',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: 'Constained binary optimization with QAOA',
          key: '6_1_solve_constained_binary_optimization_problem',
          icon: <CarryOutOutlined />,
        },
      ],
    },
  ]
  const [showIpynb, setShowIpynb] = useState('')
  const loadipynb = async (name) => {
    NProgress.start()
    const response = await fetch(`/HPCA_2025_Tutorial/demo/ipynb/${name}.ipynb`)
    const ipynbBlob = await response.blob()
    const reader = new FileReader()
    reader.onload = function () {
      try {
        // resolve the read text to JSON
        // console.log(99, reader.result, 88)
        if (reader.result) {
          const ipynbJSON = JSON.parse(reader.result)
          // print JSON content
          // console.log(ipynbJSON)
          setShowIpynb(ipynbJSON)
          NProgress.done()
        } else {
          const nodata = {
            cells: [
              {
                cell_type: 'markdown',
                metadata: {},
                source: ['TBD'],
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
    navigate(`/demo/${selectedKeys[0]}`)
    setDefaultSelectedKeys()
    // loadipynb(selectedKeys[0])
  }
  useEffect(() => {
    if (fileName) {
      loadipynb(fileName)
    } else {
      navigate('/demo/1_1_install_janusq')
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
          ""        
        )}
      </div>
    </div>
  )
}
