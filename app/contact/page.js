import Reveal from '../../components/Reveal';

export const metadata = { title: 'Contact — Mahika Bommana' };

export default function Contact() {
  return (
    <section className="page shell contact-page">
      <Reveal><div className="page-hero"><div className="section-kicker">CONTACT</div><h1>Let’s build<br/><em>what’s next.</em></h1><p>If you want to talk about AI/ML, projects, collaboration, internships, or interesting engineering problems, I’d be glad to connect.</p></div></Reveal>
      <Reveal className="contact-grid">
        <a href="mailto:mahikabommana@gmail.com"><span>Email</span><strong>mahikabommana@gmail.com</strong><b>↗</b></a>
        <a href="https://www.linkedin.com/in/mahikabommana" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>mahikabommana</strong><b>↗</b></a>
        <a href="https://github.com/mahika74" target="_blank" rel="noreferrer"><span>GitHub</span><strong>mahika74</strong><b>↗</b></a>
        <a href="/resume-mahika-bommana.pdf" download><span>Résumé</span><strong>Download PDF</strong><b>↓</b></a>
      </Reveal>
    </section>
  );
}
