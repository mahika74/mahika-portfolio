import Reveal from '../../components/Reveal';

export const metadata = { title: 'Journey — Mahika Bommana' };

const timeline = [
  ['2024 → 2028', 'B.Tech · Computer Science Engineering (AI/ML)', 'MLR Institute of Technology · Current CGPA: 8.80'],
  ['2026', 'Building deeper AI systems', 'Agentic AI, RAG, machine learning APIs, computer vision, and robotics projects.'],
  ['Activities', 'Learning beyond coursework', 'Hackathons, technical events, department involvement, coding workshops, and hands-on project building.'],
  ['Leadership', 'Communication + coordination', 'Active AIM Department Club member and Event Anchor for AIMERSION’25.'],
];

export default function Journey() {
  return (
    <section className="page shell">
      <Reveal><div className="page-hero"><div className="section-kicker">JOURNEY</div><h1>A student timeline,<br/><em>without pretending otherwise.</em></h1><p>I’m building experience through education, technical projects, hackathons, leadership, and consistent hands-on learning.</p></div></Reveal>
      <div className="timeline">{timeline.map(([time, title, text], i) => <Reveal key={title} delay={i*.04}><div className="timeline-row"><div className="timeline-time">{time}</div><div><h2>{title}</h2><p>{text}</p></div></div></Reveal>)}</div>
      <Reveal className="quote-panel"><blockquote>Growth is visible in the systems I can build today that I could not build a few months ago.</blockquote></Reveal>
    </section>
  );
}
