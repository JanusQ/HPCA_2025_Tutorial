import { Tag } from "antd"
import jianweiyin from "@/assets/image/janus_swiper/jianweiyin.png"
import liqianglu from "@/assets/image/janus_swiper/liqianglu.jpg"
import tansiwei from "@/assets/image/janus_swiper/tansiwei.png"
import { downloadPdfWithProgress } from "@/utils/utils"
export const columns = [
  {
    title: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        Time (TBD)
      </div>
    ),
    dataIndex: "Time",
    key: "Time",
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
        Resource
      </div>
    ),
    dataIndex: "Resource",
    key: "Resource",
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
export const dataSource = [
  {
    key: "1",
    Time: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        0.5 hour
      </div>
    ),
    Agenda: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        1. Introduction of Janus Quantum Cloud Platform
      </div>
    ),
    Presenter: "Liqiang Lu",
    Resource: (
      <span>
        <Tag
          color={"green"}
          style={{ cursor: "pointer" }}
          onClick={() => {
              downloadPdfWithProgress("slide/1_1_Introduction", "1_1_Introduction")
              downloadPdfWithProgress("slide/1_2_Background", "1_2_Background")
              downloadPdfWithProgress("slide/1_3_Installing_JanusQ", "1_3_Installing_JanusQ")
            }
          }
        >
          slide
        </Tag>
      </span>
    ),
  },
  {
    key: "2",
    Time: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        1 hour
      </div>
    ),
    Agenda: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        2. Janus-CT Details
      </div>
    ),
    Presenter: "Tianyao Chu",
    Resource: (
      <span>
        <Tag
          color={"green"}
          style={{ cursor: "pointer" }}
          onClick={() =>
            downloadPdfWithProgress("slide/2_Janus_CT", "2_Janus_CT")
          }
        >
          slide
        </Tag>
      </span>
    ),
  },
  {
    key: "3",
    Time: "0.25 hour",
    Agenda: "Vectorization model and code examples",
  },
  {
    key: "4",
    Time: "0.5 hour",
    Agenda: "Fidelity optimization & Unitary decomposition using gate vectors",
  },
  {
    key: "5",
    Time: "0.25 hour",
    Agenda: "Extending the framework by yourself: other downstream tasks!",
  },
  // {
  //   key: "6",
  //   Time: (
  //     <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
  //       3:00 PM
  //     </div>
  //   ),
  //   Agenda: (
  //     <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
  //       Take a break
  //     </div>
  //   ),
  // },
  {
    key: "6",
    Time: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        1.25 hour
      </div>
    ),
    Agenda: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        3. Janus-QPV Details (TBD)
      </div>
    ),
    Presenter: "Debin Xiang",
    Resource: (
      <span>
        <Tag
          color={"green"}
          style={{ cursor: "pointer" }}
          onClick={() =>
            downloadPdfWithProgress("slide/3_Janus_QPV", "3_Janus_QPV")
          }
        >
          slide
        </Tag>
      </span>
    ),
  },
  {
    key: "7",
    Time: "0.5 hour",
    Agenda: "Janus-QPV overview",
  },
  {
    key: "8",
    Time: "0.25 hour",
    Agenda: "Assertion statement",
  },
  {
    key: "9",
    Time: "0.5 hour",
    Agenda: "Implementation details of the automatic verification and repair",
  },
  {
    key: "10",
    Time: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        0.5 hour
      </div>
    ),
    Agenda: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        4. Janus-FEM Details
      </div>
    ),
    Presenter: "Tianyao Chu",
    Resource: (
      <span>
        <Tag
          color={"green"}
          style={{ cursor: "pointer" }}
          onClick={() =>
            downloadPdfWithProgress("slide/4_Janus_FEM", "4_Janus_FEM")
          }
        >
          slide
        </Tag>
      </span>
    ),
  },
  {
    key: "11",
    Time: "0.25 hour",
    Agenda: "Characterization of readout error",
  },
  {
    key: "12",
    Time: "0.25 hour",
    Agenda: "Readout calibration using Janus-FEM",
  },
  {
    key: "13",
    Time: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        0.5 hour
      </div>
    ),
    Agenda: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        5. Janus-SAT Details
      </div>
    ),
    Presenter: "Siwei Tan",
    Resource: (
      <span>
        <Tag
          color={"green"}
          style={{ cursor: "pointer" }}
          onClick={() =>
            downloadPdfWithProgress("slide/5_Janus_SAT", "5_Janus_SAT")
          }
        >
          slide
        </Tag>
      </span>
    ),
  },
  {
    key: "14",
    Time: "0.125 hour",
    Agenda: "Introduction of SAT problem",
  },
  {
    key: "15",
    Time: "0.25 hour",
    Agenda: "Janus-SAT overview",
  },
  {
    key: "16",
    Time: "0.125 hour",
    Agenda: "Achieving speedup on real-world problems",
  },
  {
    key: "17",
    Time: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        0.5 hour
      </div>
    ),
    Agenda: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        6. Janus-QAOA Details (TBD)
      </div>
    ),
    Presenter: "Debin Xiang",
    Resource: (
      <span>
        <Tag
          color={"green"}
          style={{ cursor: "pointer" }}
          onClick={() =>
            downloadPdfWithProgress("slide/6_Janus_QAOA", "6_Janus_QAOA")
          }
        >
          slide
        </Tag>
      </span>
    ),
  },
  {
    key: "18",
    Time: "0.125 hour",
    Agenda: "Introduction of constained binary optimization problem",
  },
  {
    key: "19",
    Time: "0.25 hour",
    Agenda: "Janus-QAOA overview",
  },
  {
    key: "20",
    Time: "0.125 hour",
    Agenda: "Achieving speedup on real-world problems",
  },
  {
    key: "21",
    Time: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        0.75 hour
      </div>
    ),
    Agenda: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        7. Q & A
      </div>
    ),
    Presenter: "Siwei Tan",
  },
]
// export const dataSource1 = [
//   {
//     key: "1",
//     Topic: "Topic-2. Janus-CT Details",
//     hour: "(2 hour)",
//   },
//   {
//     key: "2",
//     Topic: "\xa0  \xa0 \xa0 \xa0(a) Vectorization model and code examples",
//     hour: "0.5 hour",
//     indentSize: 20,
//   },
//   {
//     key: "3",
//     Topic: " \xa0  \xa0 \xa0 \xa0(b) Fidelity optimization using gate vectors",
//     hour: "0.5 hour",
//   },
//   {
//     key: "4",
//     Topic: "\xa0  \xa0 \xa0 \xa0(c) Unitary decomposition using gate vectors",
//     hour: "0.5 hour",
//   },
//   {
//     key: "5",
//     Topic:
//       " \xa0  \xa0 \xa0 \xa0(d) Extending the framework yourself: other downstream tasks!",
//     hour: "0.5 hour",
//   },
//   {
//     key: "6",
//     Topic: "Topic-3. Implementing quantum applications",
//     hour: "(1.25 hour)",
//   },
//   {
//     key: "7",
//     Topic:
//       "\xa0  \xa0 \xa0 \xa0(a) Introduction of SAT problem and time crystal",
//     hour: "0.25 hour",
//   },
//   {
//     key: "8",
//     Topic:
//       "\xa0  \xa0 \xa0 \xa0(b) Compilation optimizations for solving SAT problems",
//     hour: "0.5 hour",
//   },
//   {
//     key: "9",
//     Topic:
//       "\xa0  \xa0 \xa0 \xa0(c) Simulate time crystal on Janus quantum platform",
//     hour: "0.5 hour",
//   },
//   {
//     key: "10",
//     Topic: "Topic-4. Q & A",
//     hour: "0.5 hour",
//   },
//   {
//     key: "11",
//     Topic: "Total",
//     hour: "4 hours(half day)",
//   },
// ]
export const paperData = [
  {
    title: `[MICRO 2023] QuCT: A Framework for Analyzing Quantum Circuit by Extracting Contextual and Topological Features`,
    team: `Siwei Tan, Congliang Lang, Liang Xiang, Shudi Wang, Xinghui Jia, Ziqi Tan, Tingting Li (Zhejiang University), Jieming Yin (Nanjing University of Posts and Telecommunications), Yongheng Shang, Andre Python, Liqiang Lu, and Jianwei Yin (Zhejiang University)`,
    link: "https://dl.acm.org/doi/10.1145/3613424.3614274",
    pdf: "paper/MICRO_2023_QuCT",
    download_name: "MICRO_2023_QuCT",
  },
  {
    title: `[ASPLOS 2024] MorphQPV: Exploiting Isomorphism in Quantum Programs to Facilitate Confident Verification`,
    team: `Siwei Tan, Debin Xiang, Liqiang Lu (Zhejiang University), Junlin Lu (Peking University), Qiuping Jiang (Ningbo University), Mingshuai Chen, and Jianwei Yin (Zhejiang University)`,
    link: "https://doi.org/10.1145/3620666.3651360",
    pdf: "paper/ASPLOS_2024_MorphQPV",
    download_name: "ASPLOS_2024_MorphQPV",
  },
  {
    title: `[ASPLOS 2024] QuFEM: Fast and Accurate Quantum Readout Calibration Using the Finite Element Method`,
    team: `Siwei Tan, Hanyu Zhang, Jia Yu, Congliang Lang, Xinkui Zhao, Mingshuai Chen (Zhejiang University), Yun Liang (Peking University), Liqiang Lu, and Jianwei Yin (Zhejiang University)`,
    link: "https://doi.org/10.1145/3620665.3640380",
    pdf: "paper/ASPLOS_2024_QuFEM",
    download_name: "ASPLOS_2024_QuFEM",
  },
  {
    title: `[HPCA 2023] HyQSAT: A Hybrid Approach for 3-SAT Problems by Integrating Quantum Annealer with CDCL`,
    team: `Siwei Tan, Mingqian Yu, Andre Python, Yongheng Shang, Tingting Li, Liqiang Lu, and Jianwei Yin (Zhejiang University)`,
    link: "https://ieeexplore.ieee.org/document/10071022",
    pdf: "paper/HPCA_2023_HyQSAT",
    download_name: "HPCA_2023_HyQSAT",
  },
  {
    title: `[HPCA 2025] Choco-Q: Commute Hamiltonian-based QAOA for Constrained Binary Optimization (Accepted)`,
    team: `Debin Xiang, Qifan Jiang, Liqiang Lu, Siwei Tan, Jianwei Yin (Zhejiang University)`,
    link: "https://ieeexplore.ieee.org/document/TBD",
    pdf: "paper/HPCA_2025_ChocoQ",
    download_name: "HPCA_2025_ChocoQ",
  },
]
export const speakerData = [
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
      "Liqiang Lu is a ZJU100 Young Professor in the College of Computer Science, Zhejiang University (ZJU), China. His research interests include quantum computing, computer architecture, deep learning accelerator, and software-hardware codesign. He has authored more than 20 scientific publications in premier international journals and conferences in related  domains, including ISCA, MICRO, HPCA, FCCM, DAC, IEEE Micro, and TCAD. He also serves as a TPC member in the premier conferences in the related domain, including ICCAD, FPT, HPCC, etc.",
  },
  {
    name: "Siwei Tan",
    photo: tansiwei,
    introduce:
      "Siwei Tan is a 5th year PhD student at Zhejiang University. His interests include the quantum algorithm and computer architecture.He has published more than 14 papers in top journals and conferences, including MICRO, HPCA, ASPLOS, DAC, VIS and TVCG.",
  },
]
export const participantData = [
  "Chenning Tao",
  "Yifan Guo",
  "Xinghui Jia",
  "Hanyu Zhang",
  "Congliang Lang",
  "Debing Xiang",
  "Tianyao Chu",
]
