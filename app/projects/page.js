import Link from 'next/link';
import Reveal from '../../components/Reveal';
import { featuredProjects, additionalProjects } from '../../lib/projects';

export const metadata = { title: 'Projects — Mahika Bommana' };

export default function Projects() {
  return (
    <section className="page shell">
      <Reveal><div className="page-hero"><div className="section-kicker">PROJECTS</div><h1>Built to understand.<br/><em>Built to solve.</em></h1><p>A curated selection of AI, ML, robotics, data, and software work. The focus is not project count — it is what each project taught me to engineer better.</p></div></Reveal>
      <div className="project-list">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.slug} delay={index * .04}>
            <Link href={project.href} className={`project-row ${index === 0 ? 'flagship' : ''}`}>
              <div className="project-number">{project.number}</div><div className="project-main"><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.summary}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><div className="project-arrow">↗</div>
            </Link>
          </Reveal>
        ))}
      </div>
      <Reveal className="section-heading mini-heading"><div><div className="section-kicker">MORE BUILDS</div><h2>Supporting work.</h2></div></Reveal>
      <div className="mini-project-grid">{additionalProjects.map(([title, text]) => <Reveal key={title}><article className="mini-project"><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div>
    </section>
  );
}
