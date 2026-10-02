import Reveal from '../../components/Reveal';

export const metadata = { title: 'About — Mahika Bommana' };

export default function About() {
  return (
    <section className="page shell">
      <Reveal><div className="page-hero"><div className="section-kicker">ABOUT</div><h1>Curious by default.<br/><em>Builder by practice.</em></h1><p>I’m a Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning. I’m still early in the journey — and that is exactly why I build so much.</p></div></Reveal>
      <div className="story-grid">
        <Reveal><h2>I don’t want to only understand how a system works. I want to make one.</h2></Reveal>
        <Reveal delay={.08}><div className="prose"><p>My work moves between machine learning, agentic systems, computer vision, robotics, data, and software development. Each project gives me a reason to understand the theory more deeply because the theory eventually has to survive implementation.</p><p>I’m especially drawn to intelligent systems that can use context, interact with tools, make predictions, explain their reasoning, or connect software with the physical world.</p><p>My approach is simple: learn the fundamentals, build something real, inspect what fails, and iterate with more clarity.</p></div></Reveal>
      </div>
      <Reveal className="quote-panel"><blockquote>“The best way to learn technology is to build with it.”</blockquote><span>— My working philosophy</span></Reveal>
      <Reveal className="facts-grid">
        <div><strong>2028</strong><span>Expected graduation</span></div><div><strong>8.80</strong><span>Current CGPA</span></div><div><strong>AI/ML</strong><span>Primary engineering focus</span></div><div><strong>Build → Learn</strong><span>How I work</span></div>
      </Reveal>
    </section>
  );
}
