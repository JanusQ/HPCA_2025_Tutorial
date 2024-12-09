import React, { useEffect, useState, useRef } from "react"
import { Space, Table, Tag, Col, Row, Affix, Divider, Avatar } from "antd"
import styles from "./index.module.scss"

import janus from "../../assets/image/janus_swiper/Frame 3.svg"
import paper from "../../assets/image/janus_swiper/paper.png"
import Lightning from "../../assets/image/janus_swiper/Lightning.png"
import { LinkOutlined, FileOutlined, FilePdfOutlined } from "@ant-design/icons"
import {
  dataSource,
  columns,
  organizerData,
  papersData,
  participantsData as participantsData,
} from "./data"
import Title from "@/components/Title"
import { downloadPdf } from "@/utils/utils"
export default function JanusHomePage() {
  const homeContent = useRef()
  const Overview = useRef()
  const Schedule = useRef()
  const Links = useRef()
  const RelatedPapers = useRef()
  const Organizer = useRef()
  const Acknowledgment = useRef()
  const [windowHeight, setWindowHeight] = useState(0)
  const [showArticContentNav, setshowArticContentNav] = useState(false)

  const homeNav = [
    {
      id: "Overview",
      name: "Overview",
    },
    {
      id: "Schedule",
      name: "Schedule",
    },
    {
      id: "Links",
      name: "Links",
    },
    {
      id: "RelatedPapers",
      name: "Related Papers",
    },
    {
      id: "Organizers",
      name: "Organizers",
    },
    {
      id: "Acknowledgment",
      name: "Acknowledgment",
    },
  ]
  const [navAcitve, setnavAcitve] = useState("Overview")
  const toClickContent = (content) => {
    let topPosition
    switch (content) {
      case "Overview":
        topPosition = Overview.current.offsetTop
        setnavAcitve("Overview")
        break
      case "Schedule":
        topPosition = Schedule.current.offsetTop
        setnavAcitve("Schedule")
        break
      case "Links":
        topPosition = Links.current.offsetTop
        setnavAcitve("Links")
        break
      case "RelatedPapers":
        topPosition = RelatedPapers.current.offsetTop
        setnavAcitve("RelatedPapers")
        break
      case "Organizers":
        topPosition = Organizer.current.offsetTop
        setnavAcitve("Organizers")
        break
      case "Acknowledgment":
        topPosition = Acknowledgment.current.offsetTop
        setnavAcitve("Acknowledgment")
      default:
        break
    }
    window.scrollTo({ top: topPosition + 300, behavior: "smooth" })
  }
  useEffect(() => {
    setWindowHeight(document.body.clientHeight)
    window.addEventListener("scroll", homeContentOnScroll)
    return () => {
      window.removeEventListener("scroll", homeContentOnScroll)
    }
  }, [])

  const homeContentOnScroll = () => {
    let scrollTop =
      window.scrollY ||
      document?.documentElement?.scrollTop ||
      document.body.scrollTop

    if (scrollTop > Overview.current.offsetTop) {
      setnavAcitve("Overview")
    }

    if (scrollTop > Schedule.current.offsetTop) {
      setnavAcitve("Schedule")
    }
    if (scrollTop > Links.current.offsetTop) {
      setnavAcitve("Links")
    }
    if (scrollTop > RelatedPapers.current.offsetTop) {
      setnavAcitve("RealtedPapers")
    }
    if (scrollTop > Organizer.current.offsetTop) {
      setnavAcitve("Organizers")
    }
    if (scrollTop > Acknowledgment.current.offsetTop) {
      setnavAcitve("Acknowledgment")
    }
  }
  return (
    <div className={styles.root}>
      <div className="home_content">
        <div className="home_content_item_1">
          <Row justify="center">
            <Col span={18} offset={1}>
              <div className="entry_header">
                <div className="header_title">
                  <span>
                    Janus 3.0: A Software Framework for Analyzing, Optimizing, Verifying, and Calibrating Quantum Circuit
                  </span>
                </div>
              </div>
              <div className="entry_image">
                <img src={janus} alt=""></img>
              </div>
            </Col>
          </Row>
        </div>
        <div className="home_content_item_2">
          <Row>
            <Col span={4}>
              <div className="home_navigate">
                <Affix offsetTop={0}>
                  <div className="home_navigate_content">
                    {homeNav.map((item, index) => (
                      <div className="home_navigate_menu" key={index}>
                        <span
                          onClick={() => toClickContent(item.id)}
                          className={
                            navAcitve === item.id
                              ? "home_navigate_active home_navigate_item"
                              : "home_navigate_item"
                          }
                        >
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </Affix>
              </div>
            </Col>
            <Col span={18}>
              <div
                className="home_content"
                onScroll={homeContentOnScroll}
                ref={homeContent}
              >
                <Divider />
                <div className="home_overview" ref={Overview}>
                  <div className="home_overview_title">
                    <h1 style={{ textAlign: "left", fontSize: "1.5rem", fontWeight: 700 }} >
                      Overview
                    </h1>
                  </div>
                  <div className="home_overview_content">
                    The paradigm of quantum computing exhibits a high potential to outperform classical computing in solving complex problems, e.g., cryptology, combinatorial optimization, and network analysis. However, achieving end-to-end speedup on the real-world quantum device is difficult as it involves a high degree of noise, high compilation overhead, and high cost of managing the quantum device. In this tutorial, we present Janus 3.0, an open-source framework with new features. This tutorial begins with a brief introduction to the Janus quantum cloud platform (janusq.zju.edu.cn), which can connect with the superconducting processors developed by Zhejiang University. Then, we provide the tutorial of the Janus 3.0 toolkit. To analyze the circuit, we introduce Janus-CT, a unified compilation framework that decouples analysis tasks into an upstream vectorization model and downstream models (MICRO 2023). Our vectorization technique helps to extract both contextual and topological features, enabling rigorous downstream optimization tasks. To optimize the circuit, we provide the code and demo of two representative downstream tasks, including fidelity optimization and unitary decomposition. To verify the correctness of the circuit, we introduce Janus-QPV, which enables confident quantum program verification and repair by exploiting the isomorphism (ASPLOS 2024). We will introduce a flexible assertion statement method with an automatic validation flow. To calibrate the circuit output, we introduce Janus-FEM, a readout calibration method inspired by the finite element method. We will introduce the characterization of the readout error on various quantum devices and our fast and accurate calibration method with a code demonstration (ASPLOS 2024). Finally, we introduce an application, Janus-SAT. It is an application-software codesign technique for accelerating solving Boolean satisfiability (SAT) problems (HPCA 2023).
                  </div>
                  <div className="home_overview_supplement">
                    It is our second time to hold this tutorial! We have hosted the tutorial at ASPLOS'24 in San Diego, USA.
                  </div>
                </div>
                <Divider />
                <div className="home_schedule" ref={Schedule}>
                  <div className="home_schedule_title">
                    <h1 style={{ textAlign: "left", fontSize: "1.5rem", fontWeight: 700 }} >
                      Schedule
                    </h1>
                  </div>
                  <div className="home_schedule_content">
                    <Table
                      styles={{ fontSize: "1.8rem" }}
                      pagination={false}
                      dataSource={dataSource}
                      columns={columns}
                    ></Table>
                  </div>
                </div>
                <div className="home_links" ref={Links}>
                  <div className="home_links_title">
                    <h1 style={{ textAlign: "left", fontSize: "1.5rem", fontWeight: 700 }} >
                      Links
                    </h1>
                  </div>
                  <div className="home_links_content">
                    <div className="home_links_outlined">
                      <h4>JanusQ cloud:</h4>
                      <a
                        href="http://janusq.zju.edu.cn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        janusq.zju.edu.cn
                        <span className="LinkOutlined">
                          <LinkOutlined />
                        </span>
                      </a>
                    </div>
                    <div className="home_links_outlined">
                      <h4>Source code of JanusQ:</h4>
                      <a
                        href="https://github.com/JanusQ/JanusQ"
                        target="_blank"
                        rel="noreferrer"
                      >
                        github.com/JanusQ/JanusQ
                        <span className="LinkOutlined">
                          <LinkOutlined />
                        </span>
                      </a>
                    </div>
                    <div className="home_links_outlined">
                      <h4>Website of our team:</h4>
                      <a
                        href="https://janusq.github.io/team/home"
                        target="_blank"
                        rel="noreferrer"
                      >
                        janusq.github.io/team/home
                        <span className="LinkOutlined">
                          <LinkOutlined />
                        </span>
                      </a>
                    </div>
                  </div>
                  {/* <div className="code">
                    <h4 className="title">Code</h4>
                    <div className="gitHub_link">
                      <a>
                        Janus-SAT
                        <span className="LinkOutlined">
                          <LinkOutlined />
                        </span>
                      </a>
                    </div>
                    <div className="gitHub_link">
                      <a>
                        Janus-CT
                        <span className="LinkOutlined">
                          <LinkOutlined />
                        </span>
                      </a>
                    </div>
                    <div className="gitHub_link">
                      <a>
                        Janus-PulseLib
                        <span className="LinkOutlined">
                          <LinkOutlined />
                        </span>
                      </a>
                    </div>
                  </div> */}
                </div>
                <Divider />
                <div className="home_related_papers" ref={RelatedPapers}>
                  <div className="home_related_papers_title">
                    <h1 style={{ textAlign: "left", fontSize: "1.5rem", fontWeight: 700 }} >
                      Related Papers
                    </h1>
                  </div>
                  {papersData.map((item, index) => (
                    <div className="home_related_papers_content" key={index}>
                      <div className="home_paper_title">{item.title}</div>
                      <div className="home_paper_team">{item.team}</div>
                      <div className="home_paper_link">
                        <a href={item.link} target="_blank">
                          <div className="link_boder">
                            <FileOutlined
                              className="paper_icon"
                              style={{ marginRight: 10 }}
                            />
                            URL
                          </div>
                        </a>
                        <div
                          className="link_boder"
                          onClick={() => downloadPdf(item.pdf, item.title)}
                        >
                          <FilePdfOutlined style={{ marginRight: 10 }} />
                          Download PDF
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Divider />
                <div className="home_organizers" ref={Organizer}>
                  <div className="home_organizers_title">
                    <h1 style={{ textAlign: "left", fontSize: "1.5rem", fontWeight: 700 }} >
                      Organizers
                    </h1>
                  </div>
                  <div className="home_speakers">
                    <div className="home_speakers_title">
                      <h2
                        style={{ textAlign: "left", fontSize: "1.35rem" }}
                      >
                        Speakers
                      </h2>
                    </div>
                    {organizerData.map((item, index) => (
                      <div className="home_speaker_item" key={index}>
                          <div className="home_speaker_photo">
                            {/* <img src={item.photo} alt="" /> */}
                            <Avatar src={item.photo} shape="square" size={100} />
                          </div>
                          <div className="home_speaker_content">
                            <div className="home_speaker_name">{item.name}</div>
                            {item.introduce}
                          </div>
                        </div>
                    ))}
                  </div>
                  <div className="home_participants">
                    <div className="home_participants_title">
                      <h2
                        style={{ textAlign: "left", fontSize: "1.35rem" }}
                      >
                        Team Members
                      </h2>
                    </div>
                    {participantsData.map((item, index) => (
                      <div className="home_participant_item" key={index}>
                        {item}
                        {/* {index !== participantsData.length - 1 ? "," : ""} */}
                      </div>
                    ))}
                  </div>
                </div>
                <Divider />
                <div className="home_acknowledgment" ref={Acknowledgment}>
                  <div className="home_acknowledgment_title">
                    <h1 style={{ textAlign: "left", fontSize: "1.5rem", fontWeight: 700 }} >
                    Acknowledgment
                    </h1>
                  </div>
                  <div className="home_acknowledgment_content">
                    We thank Haohua Wang, Chao Song, Zhen Wang, and Qiujiang Guo for providing quantum hardware and essential support for the tutorial.
                  </div>
                </div>
              </div>
            </Col>
            <Col span={12}></Col>
          </Row>
          {/* <div className="home_right"></div> */}
        </div>
      </div>
    </div>
  )
}
