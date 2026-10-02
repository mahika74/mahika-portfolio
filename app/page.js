import Link from 'next/link';
import IntroVideo from '../components/IntroVideo';
import Reveal from '../components/Reveal';
import { featuredProjects } from '../lib/projects';

export default function Home() {
  return (
    <>
      <section className="home-hero shell">
        <Reveal className="home-hero-copy">
          <div className="hero-index"><span>01</span><span>INTRODUCTION</span></div>
          <p className="hero-role">AI / ML ENGINEERING STUDENT · SOFTWARE DEVELOPER</p>
          <h1>Mahika<br/><em>Bommana.</em></h1>
          <p className="hero-statement">I build intelligent systems to understand technology deeply — from machine learning and agents to computer vision and robotics.</p>
          <div className="hero-actions">
            <Link className="button primary" href="/projects">Explore projects <span>↗</span></Link>
            <a className="button ghost" href="/resume-mahika-bommana.pdf" download>Résumé <span>↓</span></a>
          </div>
          <div className="hero-footnote"><span>MLR Institute of Technology</span><span>2028</span><span>CGPA 8.80</span></div>
        </Reveal>

        <Reveal className="home-hero-media" delay={0.08}>
          <div className="media-label"><span>MY DIGITAL WORKSPACE</span><span>12 SEC INTRO ↓</span></div>
          <IntroVideo />
          <div className="media-caption">The best way to learn technology is to build with it.</div>
        </Reveal>
      </section>

      <section className="statement-section">
        <div className="shell statement-inner">
          <Reveal>
            <div className="hero-index"><span>02</span><span>MINDSET</span></div>
            <h2 className="statement-title">I BUILD<br/><em>TO LEARN.</em></h2>
          </Reveal>
          <Reveal className="statement-copy" delay={0.08}>
            <p>I’m interested in the moment AI stops being an idea and becomes a useful system — something that can perceive, retrieve, predict, explain, assist, or automate.</p>
            <p>This portfolio is a record of that process: experiments, engineering decisions, projects that worked, and the questions that pushed me toward the next build.</p>
            <Link className="inline-arrow" href="/about">Read my story <span>↗</span></Link>
          </Reveal>
        </div>
      </section>

      <section className="section shell projects-home">
        <Reveal className="section-heading editorial-heading">
          <div>
            <div className="hero-index"><span>03</span><span>SELECTED WORK</span></div>
            <h2>Projects with<br/><em>a reason to exist.</em></h2>
          </div>
          <Link href="/projects" className="text-link">View all work ↗</Link>
        </Reveal>

        <div className="project-editorial-list">
          {featuredProjects.slice(0, 3).map((project, index) => (
            <Reveal key={project.slug} delay={index * .05}>
              <Link href={project.href} className={`project-editorial ${index === 0 ? 'feature' : ''}`}>
                <div className="project-editorial-top">
                  <span>{project.number}</span>
                  <span>{project.type}</span>
                  <span>↗</span>
                </div>
                {index === 0 && (
                  <div className="project-feature-image">
                    <img src="/astraarm-project.webp" alt="ASTRAARM robotic arm prototype" />
                  </div>
                )}
                <div className="project-editorial-body">
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="tag-row">{project.tags.slice(0, 5).map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="technology-band">
        <div className="shell technology-inner">
          <Reveal>
            <div className="hero-index"><span>04</span><span>TECHNICAL ECOSYSTEM</span></div>
            <h2 className="technology-title">ONE STACK.<br/><em>MANY WAYS TO THINK.</em></h2>
          </Reveal>
          <Reveal className="technology-grid" delay={.08}>
            <div><span>01</span><h3>AI & ML</h3><p>Machine Learning · Scikit-learn · Generative AI · Data</p></div>
            <div><span>02</span><h3>Agents</h3><p>LangChain · LangGraph · RAG · Tool-using workflows</p></div>
            <div><span>03</span><h3>Vision & Robotics</h3><p>OpenCV · YOLO · ROS 2 · Autonomous systems</p></div>
            <div><span>04</span><h3>Software</h3><p>Python · Java · SQL · APIs · Git · MySQL</p></div>
          </Reveal>
          <Reveal delay={.12}><Link className="inline-arrow" href="/skills">Explore the full technology map <span>↗</span></Link></Reveal>
        </div>
      </section>

      <section className="closing-section shell">
        <Reveal>
          <div className="hero-index"><span>05</span><span>NEXT</span></div>
          <h2>Curious about the work?<br/><em>Let’s build what’s next.</em></h2>
          <p>I’m open to conversations around AI/ML, engineering projects, internships, collaboration, and interesting technical problems.</p>
          <div className="hero-actions"><Link className="button primary" href="/contact">Start a conversation <span>↗</span></Link><a className="button ghost" href="https://github.com/mahika74" target="_blank" rel="noreferrer">GitHub <span>↗</span></a></div>
        </Reveal>
      </section>
    </>
  );
}
