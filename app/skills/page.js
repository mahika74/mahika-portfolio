import Reveal from '../../components/Reveal';

export const metadata = { title: 'Technology — Mahika Bommana' };

const groups = [
  ['AI / Machine Learning', ['Machine Learning', 'Generative AI', 'Agentic AI', 'RAG Systems', 'Scikit-learn', 'Data Preprocessing', 'EDA']],
  ['Agentic Systems', ['LangChain', 'LangGraph', 'Intelligent Assistants', 'Tool-using workflows']],
  ['Computer Vision / Robotics', ['OpenCV', 'YOLO', 'ROS 2', 'Robotics Systems', 'Autonomous Systems']],
  ['Programming / Data', ['Python', 'Java', 'C', 'SQL', 'Pandas', 'NumPy', 'Matplotlib']],
  ['Software Engineering', ['Git', 'GitHub', 'VS Code', 'Postman', 'API Development', 'MySQL']],
  ['Core CS', ['Data Structures', 'OOP', 'DBMS', 'Operating Systems']],
];

export default function Skills() {
  return (
    <section className="page shell">
      <Reveal><div className="page-hero"><div className="section-kicker">TECHNOLOGY</div><h1>Not a skill bar.<br/><em>A working ecosystem.</em></h1><p>These are the technologies and concepts I use to move from data and models to software, agents, perception, and robotic systems.</p></div></Reveal>
      <div className="skill-map">{groups.map(([title, items], i) => <Reveal key={title} delay={i*.04}><article className="skill-cluster"><div className="cluster-index">0{i+1}</div><h2>{title}</h2><div className="skill-cloud">{items.map(x => <span key={x}>{x}</span>)}</div></article></Reveal>)}</div>
    </section>
  );
}
