import Link from 'next/link';
import Reveal from '../../../components/Reveal';

export const metadata = { title: 'ASTRAARM ROS2 — Mahika Bommana' };

const stack = ['ROS 2', 'Python', 'OpenCV', 'YOLO', 'URDF / Xacro', 'TF2', 'RViz', 'Computer Vision', 'Robotics'];

export default function AstraArm() {
  return (
    <section className="page shell case-study">
      <Reveal><div className="page-hero project-hero"><div className="section-kicker">FLAGSHIP CASE STUDY · ROBOTICS</div><h1>ASTRAARM<br/><em>ROS2</em></h1><p>A robotics engineering project exploring how perception, robot modeling, transforms, visualization, and intelligent software can work together as one system.</p><div className="tag-row large">{stack.map(x => <span key={x}>{x}</span>)}</div></div></Reveal>
      <div className="case-grid">
        <Reveal><aside className="case-index"><span>01 / Motivation</span><span>02 / System thinking</span><span>03 / Technology</span><span>04 / Challenges</span><span>05 / Next</span></aside></Reveal>
        <div className="case-body">
          <Reveal><section><div className="section-kicker">01 · MOTIVATION</div><h2>Learning robotics as a system, not as isolated tools.</h2><p>ASTRAARM is the project where software, perception, and robotics meet. The goal is to build practical understanding of the ROS 2 ecosystem and the relationships between robot description, coordinate transforms, visual perception, visualization, and manipulation workflows.</p></section></Reveal>
          <Reveal><section><div className="section-kicker">02 · SYSTEM THINKING</div><h2>From perception to action.</h2><p>The project is approached as a pipeline: describe the robot, establish frames and transforms, visualize the system, process visual information, and connect perception outputs to robotic behavior. Each layer is treated as an engineering problem with observable inputs and outputs.</p><div className="architecture"><span>Camera / Scene</span><b>→</b><span>Vision + Detection</span><b>→</b><span>ROS 2 Nodes</span><b>→</b><span>TF2 / Robot Model</span><b>→</b><span>Manipulation Logic</span></div></section></Reveal>
          <Reveal><section><div className="section-kicker">03 · TECHNOLOGY</div><h2>A robotics-first technical stack.</h2><div className="tag-row large">{stack.map(x => <span key={x}>{x}</span>)}</div></section></Reveal>
          <Reveal><section><div className="section-kicker">04 · ENGINEERING CHALLENGES</div><h2>Where the learning becomes real.</h2><p>Robotics forces multiple subsystems to agree on timing, geometry, coordinate frames, data formats, and real-world assumptions. That makes debugging more than fixing syntax — it becomes understanding how the whole system represents reality.</p></section></Reveal>
          <Reveal><section><div className="section-kicker">05 · NEXT</div><h2>Keep extending the system.</h2><p>Future iterations can deepen manipulation, perception robustness, autonomy, testing, and system-level integration as the project evolves.</p><div className="hero-actions"><a className="button primary" href="https://github.com/mahika74" target="_blank" rel="noreferrer">Visit GitHub ↗</a><Link className="button ghost" href="/projects">Back to projects</Link></div></section></Reveal>
        </div>
      </div>
    </section>
  );
}
