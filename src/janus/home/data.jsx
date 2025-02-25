import { Tag } from "antd"
import jianweiyin from "@/assets/image/janus_swiper/jianweiyin.png"
import liqianglu from "@/assets/image/janus_swiper/liqianglu.jpg"
import tansiwei from "@/assets/image/janus_swiper/tansiwei.png"
import tianyaochu from "@/assets/image/janus_swiper/tianyaochu.jpg"
import kaiwenzhou from "@/assets/image/janus_swiper/kaiwenzhou.jpg"
import { downloadPdfWithProgress } from "@/utils/utils"
export const columns = [
  {
    title: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        Time
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
        1:00pm - 1:30pm
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
              // downloadPdfWithProgress("slide/0_Prologue", "0_Prologue")
              downloadPdfWithProgress("slide/1_Introduction", "1_Introduction")
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
        1:30pm - 2:15pm
      </div>
    ),
    Agenda: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        2. QuCT Details
      </div>
    ),
    Presenter: "Tianyao Chu",
    Resource: (
      <span>
        <Tag
          color={"green"}
          style={{ cursor: "pointer" }}
          onClick={() =>
            downloadPdfWithProgress("slide/2_QuCT", "2_QuCT")
          }
        >
          slide
        </Tag>
      </span>
    ),
  },
  {
    key: "3",
    Time: "15 min",
    Agenda: "Vectorization model and code examples",
  },
  {
    key: "4",
    Time: "15 min",
    Agenda: "Fidelity optimization & Unitary decomposition using gate vectors",
  },
  {
    key: "5",
    Time: "15 min",
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
        2:15pm - 3:00pm
      </div>
    ),
    Agenda: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        3. MorphQPV Details
      </div>
    ),
    Presenter: "Siwei Tan",
    Resource: (
      <span>
        <Tag
          color={"green"}
          style={{ cursor: "pointer" }}
          onClick={() =>
            downloadPdfWithProgress("slide/3_MorphQPV", "3_MorphQPV")
          }
        >
          slide
        </Tag>
      </span>
    ),
  },
  {
    key: "7",
    Time: "15 min",
    Agenda: "MorphQPV overview",
  },
  {
    key: "8",
    Time: "15 min",
    Agenda: "Assertion statement",
  },
  {
    key: "9",
    Time: "15 min",
    Agenda: "Implementation details of automatic verification and repair",
  },
  {
    key: "10",
    Time: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        3:00pm - 3:30pm
      </div>
    ),
    Agenda: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        Afternoon break
      </div>
    ),
    Presenter: "",
  },
  {
    key: "11",
    Time: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        3:30pm - 4:00pm
      </div>
    ),
    Agenda: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        4. QuFEM Details
      </div>
    ),
    Presenter: "Kaiwen Zhou",
    Resource: (
      <span>
        <Tag
          color={"green"}
          style={{ cursor: "pointer" }}
          onClick={() =>
            downloadPdfWithProgress("slide/4_QuFEM", "4_QuFEM")
          }
        >
          slide
        </Tag>
      </span>
    ),
  },
  {
    key: "12",
    Time: "15 min",
    Agenda: "Characterization of readout error",
  },
  {
    key: "13",
    Time: "15 min",
    Agenda: "Readout calibration using QuFEM",
  },
  // {
  //   key: "13",
  //   Time: (
  //     <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
  //       0.5 hour
  //     </div>
  //   ),
  //   Agenda: (
  //     <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
  //       5. HyQSAT Details
  //     </div>
  //   ),
  //   Presenter: "Tianyao Chu",
  //   Resource: (
  //     <span>
  //       <Tag
  //         color={"green"}
  //         style={{ cursor: "pointer" }}
  //         onClick={() =>
  //           downloadPdfWithProgress("slide/5_HyQSAT", "5_HyQSAT")
  //         }
  //       >
  //         slide
  //       </Tag>
  //     </span>
  //   ),
  // },
  // {
  //   key: "14",
  //   Time: "0.125 hour",
  //   Agenda: "Introduction of SAT problem",
  // },
  // {
  //   key: "15",
  //   Time: "0.25 hour",
  //   Agenda: "HyQSAT overview",
  // },
  // {
  //   key: "16",
  //   Time: "0.125 hour",
  //   Agenda: "Achieving speedup on real-world problems",
  // },
  {
    key: "14",
    Time: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        4:00pm - 4:45pm
      </div>
    ),
    Agenda: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        5. Choco-Q Details
      </div>
    ),
    Presenter: "Liqiang Lu",
    Resource: (
      <span>
        <Tag
          color={"green"}
          style={{ cursor: "pointer" }}
          onClick={() =>
            downloadPdfWithProgress("slide/5_Choco-Q", "5_Choco-Q")
          }
        >
          slide
        </Tag>
      </span>
    ),
  },
  {
    key: "15",
    Time: "15 min",
    Agenda: "Introduction of constained binary optimization problem",
  },
  {
    key: "16",
    Time: "15 min",
    Agenda: "Choco-Q overview",
  },
  {
    key: "17",
    Time: "15 min",
    Agenda: "Solve real-world problems with Choco-Q",
  },
  {
    key: "18",
    Time: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        4:45pm - 5:00pm
      </div>
    ),
    Agenda: (
      <div style={{ fontWeight: 800, fontFamily: "PingFang_HEAVY" }}>
        Q & A
      </div>
    ),
    Presenter: "All",
  },
]
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
  // {
  //   title: `[HPCA 2023] HyQSAT: A Hybrid Approach for 3-SAT Problems by Integrating Quantum Annealer with CDCL`,
  //   team: `Siwei Tan, Mingqian Yu, Andre Python, Yongheng Shang, Tingting Li, Liqiang Lu, and Jianwei Yin (Zhejiang University)`,
  //   link: "https://ieeexplore.ieee.org/document/10071022",
  //   pdf: "paper/HPCA_2023_HyQSAT",
  //   download_name: "HPCA_2023_HyQSAT",
  // },
  {
    title: `[HPCA 2025] Choco-Q: Commute Hamiltonian-based QAOA for Constrained Binary Optimization`,
    team: `Debin Xiang, Qifan Jiang, Liqiang Lu, Siwei Tan, Jianwei Yin (Zhejiang University)`,
    link: "https://hpca-conf.org/2025/main-program",
    pdf: "paper/HPCA_2025_Choco-Q",
    download_name: "HPCA_2025_Choco-Q",
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
      "Siwei Tan is a tenure-track assistant professor in the School of Software Technology, Zhejiang University (ZJU), China. He is interested in the quantum software, quantum hardware, and machine learning. He has developed the quantum control system that is deployed on the 121-qubit quantum hardware. He has published more than 20 papers in top international journals and conferences such as ASPLOS, MICRO, HPCA, DAC, ICCAD, FSE, TVCG, et al.",
  },
  {
    name: "Tianyao Chu",
    photo: tianyaochu,
    introduce:
      "Tianyao Chu is a first year PhD student at Zhejiang University. His interests include multinode quantum computing and quantum communication network. His project was funded by National Natural Science Foundation of China - the first Basic Research Project for Young Students (Undergraduate).",
  },
  {
    name: "Kaiwen Zhou",
    photo: kaiwenzhou,
    introduce:
      "Kaiwen Zhou is a first-year PhD student at Zhejiang University. He is interested in quantum computer architecture and high-performance computing. He is currently working on designing a QLDPC decoding accelerator.",
  },
]
export const participantData = [
  "Chenning Tao",
  "Yifan Guo",
  "Xinghui Jia",
  "Hanyu Zhang",
  "Congliang Lang",
  "Debing Xiang",
]
