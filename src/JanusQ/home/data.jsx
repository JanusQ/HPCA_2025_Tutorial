import { Tag } from "antd"
import jianweiyin from "@/assets/image/janusSwiper/jianweiyin.png"
import liqianglu from "@/assets/image/janusSwiper/liqianglu.jpg"
import tansiwei from "@/assets/image/janusSwiper/tansiwei.png"
import { downloadPdfWithProgress } from "@/util/util"
const downloadTow = () => {
  downloadPdfWithProgress("SllidesPdf/1.1 Introduction v3", "1.1 Introduction")
  downloadPdfWithProgress("SllidesPdf/1.2 background v2", "1.2. background")
}
export const dataSource = [
  {
    key: "1",
    TimePDT: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        1:30 PM
      </div>
    ),
    Agenda: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        Introduction of Janus quantum cloud platform
      </div>
    ),
    Presenter: "Jianwei Yin",
    Resources: (
      <span>
        <Tag
          color={"green"}
          style={{ cursor: "pointer" }}
          onClick={downloadTow}
        >
          slide
        </Tag>
      </span>
    ),
  },
  {
    key: "2",
    TimePDT: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        2:00 PM
      </div>
    ),
    Agenda: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        Installing JanusQ
      </div>
    ),
    Presenter: "Siwei Tan",
    Resources: (
      <span>
        <Tag
          color={"green"}
          style={{ cursor: "pointer" }}
          onClick={() =>
            downloadPdfWithProgress(
              "SllidesPdf/2. installation and janus cloud",
              "2. installation and janus cloud"
            )
          }
        >
          slide
        </Tag>
      </span>
    ),
  },
  {
    key: "3",
    TimePDT: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        2:10 PM
      </div>
    ),
    Agenda: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        Janus-CT Details
      </div>
    ),
    Presenter: "Siwei Tan",
    Resources: (
      <span>
        <Tag
          color={"green"}
          style={{ cursor: "pointer" }}
          onClick={() =>
            downloadPdfWithProgress("SllidesPdf/3. janus-ct", "3. janus-ct")
          }
        >
          slide
        </Tag>
      </span>
    ),
  },
  {
    key: "4",

    Agenda: "Vectorization model and code examples",
  },
  {
    key: "5",

    Agenda: "Fidelity optimization using gate vectors",
  },
  {
    key: "6",

    Agenda: "Unitary decomposition using gate vectors",
  },
  {
    key: "7",
    Agenda: "Extending the framework by yourself: other downstream tasks!",
  },
  {
    key: "8",
    TimePDT: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        3:00 PM
      </div>
    ),
    Agenda: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        Take a break
      </div>
    ),
  },
  {
    key: "9",
    TimePDT: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        3:30 PM
      </div>
    ),
    Agenda: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        Janus-FEM Details
      </div>
    ),
    Presenter: "Hanyu Zhang",
    Resources: (
      <span>
        <Tag
          color={"green"}
          style={{ cursor: "pointer" }}
          onClick={() =>
            downloadPdfWithProgress(
              "SllidesPdf/4. janus-fem v3",
              "4. janus-fem"
            )
          }
        >
          slide
        </Tag>
      </span>
    ),
  },
  {
    key: "10",
    Agenda: "Characterization of readout error",
    // Presenter: 'Tushar',
  },
  {
    key: "11",
    Agenda: "Readout calibration using Janus-FEM",
  },
  {
    key: "16",
    TimePDT: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        4:15 PM
      </div>
    ),
    Agenda: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        lmplementing quantum applications
      </div>
    ),
    Presenter: "Siwei Tan & Chenling Tao",
  },
  {
    key: "17",
    Agenda:
      "Janus-SAT: End-to-end speedup in domain problems based on quantum SAT solver",
    Resources: (
      <span>
        <Tag
          color={"green"}
          style={{ cursor: "pointer" }}
          onClick={() =>
            downloadPdfWithProgress("SllidesPdf/5.1 janus-sat", "5.1 janus-sat")
          }
        >
          slide
        </Tag>
      </span>
    ),
  },
  {
    key: "15",
    Agenda: "Janus-TC: Simulate time crystal on Janus quantum platform",
    Resources: (
      <span>
        <Tag
          color={"green"}
          style={{ cursor: "pointer" }}
          onClick={() =>
            downloadPdfWithProgress(
              "SllidesPdf/5.2 janus-tc v3",
              "5.2 janus-tc"
            )
          }
        >
          slide
        </Tag>
      </span>
    ),
  },

  {
    key: "18",
    TimePDT: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        5:15 PM
      </div>
    ),
    Agenda: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>Q & A</div>
    ),
    Presenter: "Siwei Tan",
  },
]
export const dataSource1 = [
  {
    key: "1",
    Topic: "Topic-2. Janus-CT Details",
    hour: "(2 hour)",
  },
  {
    key: "2",
    Topic: "\xa0  \xa0 \xa0 \xa0(a) Vectorization model and code examples",
    hour: "0.5 hour",
    indentSize: 20,
  },
  {
    key: "3",
    Topic: " \xa0  \xa0 \xa0 \xa0(b) Fidelity optimization using gate vectors",
    hour: "0.5 hour",
  },
  {
    key: "4",
    Topic: "\xa0  \xa0 \xa0 \xa0(c) Unitary decomposition using gate vectors",
    hour: "0.5 hour",
  },
  {
    key: "5",
    Topic:
      " \xa0  \xa0 \xa0 \xa0(d) Extending the framework yourself: other downstream tasks!",
    hour: "0.5 hour",
  },
  {
    key: "6",
    Topic: "Topic-3. Implementing quantum applications",
    hour: "(1.25 hour)",
  },
  {
    key: "7",
    Topic:
      "\xa0  \xa0 \xa0 \xa0(a) Introduction of SAT problem and time crystal",
    hour: "0.25 hour",
  },
  {
    key: "8",
    Topic:
      "\xa0  \xa0 \xa0 \xa0(b) Compilation optimizations for solving SAT problems",
    hour: "0.5 hour",
  },
  {
    key: "9",
    Topic:
      "\xa0  \xa0 \xa0 \xa0(c) Simulate time crystal on Janus quantum platform",
    hour: "0.5 hour",
  },
  {
    key: "10",
    Topic: "Topic-4. Q & A",
    hour: "0.5 hour",
  },
  {
    key: "11",
    Topic: "Total",
    hour: "4 hours(half day)",
  },
]
export const columns1 = [
  {
    title: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        Time (PDT)
      </div>
    ),
    dataIndex: "TimePDT",
    key: "Time(PDT)",
  },
  // {
  //   title: <div style={{  fontWeight: 800, fontFamily: 'PingFang_HEAVY' }}>Time (EDT)</div>,
  //   dataIndex: 'TimeEDT',
  //   key: 'TimeEDT',
  // },
  {
    title: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        Agenda
      </div>
    ),
    dataIndex: "Agenda",
    key: "Agenda",
  },
  {
    title: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        Presenter
      </div>
    ),
    dataIndex: "Presenter",
    key: "Presenter",
  },
  {
    title: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        Resources
      </div>
    ),
    dataIndex: "Resources",
    key: "Resources",
  },
  // {
  //   title: 'Topic-1. Introduction of Janus quantum cloud platform ',
  //   dataIndex: 'Topic',
  //   key: 'Topic',
  // },
  // {
  //   title: '0.25 hour',
  //   dataIndex: 'hour',
  //   key: 'hour',
  // },
]
export const organizerData = [
  {
    name: "Jianwei Yin",
    photo: jianweiyin,
    introduce:
      "Jianwei Yin is currently a full professor in the College of Computer Science, Zhejiang University (ZJU), China. He haspublished more than 100 papers in top international journals and conferences. His current research interests include quantum computing, service computing and business process management. He is also the Associate Editor of the IEEE Transactions on Services Computing.",
  },
  {
    name: "Liqiang Lu",
    photo: liqianglu,
    introduce:
      "Liqiang Lu is a ZJU100 Young Professor in the College of Computer Science, Zhejiang University (ZJU), China. His research interests include quantum computing, computer architecture, deep learning accelerator, and software-hardware codesign. He has authored more than 20 scientific publications in premier international journals and conferences in related  domains, including ISCA, MICRO, HPCA, FCCM, DAC, IEEE Micro, and TCAD. He also serves as a TPC member in the premier conferences in the related domain,including ICCAD,FPT,HPCC etc. ",
  },
  {
    name: "Siwei Tan",
    photo: tansiwei,
    introduce:
      "Siwei Tan is a 5th year PhD student at Zhejiang University. His interests include the quantum algorithm and computer architecture.He has published more than 14 papers in top journals and conferences, including MICRO, HPCA, ASPLOS, DAC, VIS and TVCG.",
  },
]
export const papersData = [
  {
    title: `[ASPLOS 2024] MorphQPV: Exploiting Isomorphism in Quantum Programs to Facilitate Confident Verification`,
    team: `Siwei Tan, Debin Xiang, Liqiang Lu, Junlin Lu (Peking University), Qiuping Jiang (Ningbo University), Mingshuai Chen, and Jianwei Yin`,
    link: "https://doi.org/10.1145/3620666.3651360",
    pdf: "MorphQPV",
  },
  {
    title: `[ASPLOS 2024] QuFEM: Fast and Accurate Quantum Readout Calibration Using the Finite Element Method`,
    team: `Siwei Tan, Hanyu Zhang, Jia Yu, Congliang Lang, Xinkui Zhao, Mingshuai Chen, Yun Liang, Liqiang Lu, and Jianwei Yin (Zhejiang University)`,
    link: "https://doi.org/10.1145/3620665.3640380",
    pdf: "QuFEM",
  },
  {
    title: `[HPCA 2023] HyQSAT: A Hybrid Approach for 3-SAT Problems by
    Integrating Quantum Annealer with CDCL`,
    team: `Siwei Tan, Mingqian Yu, Andre Python, Yongheng
    Shang, Tingting Li, Liqiang Lu, Jianwei Yin (Zhejiang
    University)`,
    link: "https://ieeexplore.ieee.org/document/10071022",
    pdf: "HyQSAT",
  },
  {
    title: `[MICRO 2023] QuCT: A Framework for Analyzing Quantum Circuit
    by Extracting Contextual and Topological Features`,
    team: `Siwei Tan, Congliang Lang, Liang Xiang; Shudi Wang, Xinghui
    Jia, Ziqi Tan, Tingting Li (Zhejiang University), Jieming
    Yin (Nanjing University of Posts and Telecommunications);
    Yongheng Shang, Andre Python, Liqiang Lu, Jianwei
    Yin (Zhejiang University)`,
    link: "https://dl.acm.org/doi/10.1145/3613424.3614274",
    pdf: "QuCT",
  },
  {
    title: `[Nature 2022] Digital Quantum Simulation of Floquet SymmetryProtected Topological Phases`,
    team: `Xu Zhang (Zhejiang University), Wenjie Jiang (Tsinghua
      University), Jinfeng Deng, Ke Wang, Jiachen Chen, Pengfei
      Zhang, Wenhui Ren, Hang Dong, Shibo Xu, Yu Gao, Feitong Jin,
      Xuhao Zhu, Qiujiang Guo, Hekang Li, Chao Song, Alexey V.
      Gorshkov, Thomas Iadecola, Fangli Liu, Zhe-Xuan Gong, Zhen
      Wang* (Zhejiang University), Dong-Ling Deng* (Tsinghua
      University) & Haohua Wang (Zhejiang University)`,
    link: "https://www.nature.com/articles/s41586-022-04854-3",
    pdf: "Digital",
  },
]

export const participatorData = [
  "Chenning Tao",
  "Yifan Guo",
  "Xinghui Jia",
  "Hanyu Zhang",
  "Congliang Lang",
  "Debing Xiang",
]
