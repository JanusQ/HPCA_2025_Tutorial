import React, { useEffect, useState, useRef } from "react"
import { Space, Table, Tag, Col, Row, Affix, Divider, Avatar } from "antd"
import styles from "./index.module.scss"

import janus from "../../assets/image/janusSwiper/Frame 3.svg"
import paper from "../../assets/image/janusSwiper/paper.png"
import Lightning from "../../assets/image/janusSwiper/Lightning.png"
import { LinkOutlined, FileOutlined, FilePdfOutlined } from "@ant-design/icons"
import {
  dataSource,
  columns1,
  organizerData,
  papersData,
  participatorData,
} from "./data"
import Title from "@/components/Title"
import { downloadPdf } from "@/util/util"
export default function JanusHomePage() {
  const articleContent = useRef()
  const Overview = useRef()
  const Schedule = useRef()
  const Organizer = useRef()
  const Speakers = useRef()
  const Links = useRef()
  // const JanusQCloud = useRef()
  const RealtedPapers = useRef()
  // const gitRpepos = useRef()
  const [windowHeight, setWindowHeight] = useState(0)
  const [showArticContentNav, setshowArticContentNav] = useState(false)

  const articleNav = [
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
      id: "RealtedPapers",
      name: "Realted Papers",
    },

    {
      id: "OrganizersAndPresenters",
      name: "Organizers",
    },
    // {
    //   id: 'JanusQCloud',
    //   name: 'JanusQ Cloud',
    // },
    // {
    //   id: 'gitRpepos',
    //   name: 'Repository',
    // },
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
      case "OrganizersAndPresenters":
        topPosition = Organizer.current.offsetTop
        setnavAcitve("OrganizersAndPresenters")

        break
      case "Speakers":
        topPosition = Speakers.current.offsetTop
        setnavAcitve("Speakers")

        break

      case "RealtedPapers":
        topPosition = RealtedPapers.current.offsetTop
        setnavAcitve("RealtedPapers")

        break
      case "Links":
        topPosition = Links.current.offsetTop
        setnavAcitve("Links")

        break
      default:
        break
    }
    window.scrollTo({ top: topPosition + 300, behavior: "smooth" })
  }
  useEffect(() => {
    setWindowHeight(document.body.clientHeight)
    window.addEventListener("scroll", articleContentOnScroll)
    return () => {
      window.removeEventListener("scroll", articleContentOnScroll)
    }
  }, [])

  const articleContentOnScroll = () => {
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
    if (scrollTop > RealtedPapers.current.offsetTop) {
      setnavAcitve("RealtedPapers")
    }
    if (scrollTop > Organizer.current.offsetTop) {
      setnavAcitve("OrganizersAndPresenters")
    }
  }
  return (
    <div className={styles.root}>
      <div className="home_content">
        <div className="home_conten_item_1">
          <Row justify="center">
            <Col span={18} offset={1}>
              <div className="entry_header">
                <div className="header_title">
                  <span>
                    Janus 2.0: A Software Framework for Analyzing Optimizing and
                    Implementing Quantum Circuit
                  </span>
                </div>

                {/* <h1 style={{ fontSize: "2.6rem" }}>Implementing Quantum Circuit</h1> */}
              </div>
              <div className="entry_image">
                <img src={janus} alt=""></img>
              </div>
            </Col>
          </Row>
        </div>
        <div className="home_conten_item_2">
          <Row>
            <Col span={4}>
              <div className="article_nav">
                <Affix offsetTop={0}>
                  <div className="article_nav_content">
                    {articleNav.map((item, index) => (
                      <div className="articleNav" key={index}>
                        <span
                          onClick={() => toClickContent(item.id)}
                          className={
                            navAcitve === item.id
                              ? "articleNav_active articleNav_item"
                              : "articleNav_item"
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
                className="article_content"
                onScroll={articleContentOnScroll}
                ref={articleContent}
              >
                <div className="article_overView" ref={Overview}>
                  <div className="article_overView_titel">
                    <h1
                      style={{
                        textAlign: "left",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                      }}
                    >
                      Overview
                    </h1>
                  </div>
                  <div className="articcle_overView_content">
                    The paradigm of quantum computing exhibits a high potential
                    to outperform classical computing in solving complex
                    problems, e.g., cryptology, combinatorial optimization, and
                    network analysis. However, achieving end-to-end speedup on
                    the real-world quantum device is difficult as it involves a
                    high degree of noise, high compilation overhead, and high
                    cost of managing the quantum device. In this tutorial, we
                    present Janus 2.0, an open-source framework for analyzing
                    and optimizing quantum circuits. This tutorial begins with a
                    brief introduction to the JanusQ cloud platform, which is
                    equipped with superconducting quantum processors developed
                    by Zhejiang University (Science, 2019). Then, we present the
                    tutorial of the Janus 2.0 toolkit, from the application
                    level to the hardware level. We will introduce Janus-CT, a
                    unified compilation framework that decouples analysis tasks
                    into an upstream vectorization model and downstream models
                    (MICRO 2023). We will provide the code and demo of two
                    representative downstream tasks, including fidelity
                    optimization and unitary decomposition. We then introduce
                    Janus-FEM, a scalable quantum readout calibration based on
                    the finite element method. Finally, we introduce Janus-SAT
                    and Janus-CT. Janus-SAT is an application-software codesign
                    technique for accelerating the solving of Boolean
                    satisfiability (SAT) problems (HPCA 2023). Janus-TC is an
                    example of simulating time crystal on a superconducting
                    quantum computer. We will provide the code and demo to
                    demonstrate the speedup of Janus-SAT.
                  </div>
                </div>
                <div className="article_Scheule" ref={Schedule}>
                  <div className="shedule_title">
                    It is the first time to hold this tutorial!
                  </div>
                  <div className="article_Scheule_titel">
                    <h1
                      style={{
                        textAlign: "left",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                      }}
                    >
                      Schedule
                    </h1>
                  </div>
                  <div className="articcle_Scheule_content">
                    <Table
                      styles={{ fontSize: "1.8rem" }}
                      pagination={false}
                      dataSource={dataSource}
                      columns={columns1}
                    ></Table>
                  </div>
                </div>
                <div className="janusq_clound_platform" ref={Links}>
                  <div className="title">
                    <h1> Links:</h1>
                  </div>
                  <div className="janusQ">
                    <div className="Janusq_clound">
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
                    <h4>
                      <a
                        target="_blank"
                        href="https://github.com/JanusQ/JanusQ/tree/main"
                        rel="noreferrer"
                      >
                        Source code of JanusQ
                      </a>
                    </h4>
                    <h4>
                      <a
                        target="_blank"
                        href="https://janusq.github.io/team/home"
                        rel="noreferrer"
                      >
                        Website of our team
                      </a>
                    </h4>
                  </div>
                  <Divider />
                  <div className="realted_papers" ref={RealtedPapers}>
                    <div className="realted_papers_title">
                      <h1
                        style={{
                          textAlign: "left",
                          fontSize: "1.5rem",
                          fontWeight: 700,
                        }}
                      >
                        Related papers
                      </h1>
                    </div>
                    {papersData.map((item, index) => (
                      <div className="realted_papers_content" key={index}>
                        <div className="paper_title">{item.title}</div>
                        <div className="paper_team">{item.team}</div>
                        <div className="link">
                          <a href={item.link} target="_blank">
                            <div className="link_boder">
                              <FileOutlined
                                className="paper_icon"
                                style={{ marginRight: 10 }}
                              />
                              {/* <img
                                className="paper_icon"
                                src={paper}
                                alt=""
                              ></img> */}
                              URL
                            </div>
                          </a>

                          <div
                            className="link_boder"
                            onClick={() => downloadPdf(item.pdf, item.title)}
                          >
                            {/* <img
                              className="lighting_icon"
                              src={Lightning}
                              alt=""
                            ></img> */}
                            <FilePdfOutlined style={{ marginRight: 10 }} />
                            Download PDF
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Divider />
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

                <div ref={Organizer} className="speakers">
                  <div className="speaker_title">
                    <h1
                      style={{ textAlign: "left", fontSize: "1.5rem" }}
                      ref={Speakers}
                    >
                      Organizers
                    </h1>
                  </div>
                  <Divider />

                  {organizerData.map((item, index) => (
                    <div className="organizer_item" key={index}>
                      <div className="speakers_1 speaker">
                        <div className="photo">
                          {/* <img src={item.photo} alt="" /> */}
                          <Avatar src={item.photo} shape="square" size={100} />
                        </div>
                        <div className="speakers_1_content speaker_content">
                          <div className="name">{item.name}</div>
                          {item.introduce}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="participant">
                  <div className="participant_content">
                    Team members:
                    {participatorData.map((item, index) => (
                      <div className="participant_item" key={index}>
                        {item}
                        {index !== participatorData.length - 1 ? "," : ""}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="participant">
                  <div className="participant_content">
                    Acknowledgment:
                    <div className="participant_item">
                      We thank Haohua Wang, Chao Song, Zhen Wang, and Qiujiang
                      Guo for providing quantum hardware and essential support
                      for the tutorial.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={12}></Col>
          </Row>

          {/* <div className="article_content_right"></div> */}
        </div>
      </div>
    </div>
  )
}
