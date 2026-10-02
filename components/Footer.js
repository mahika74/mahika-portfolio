import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="footer shell">
        <div>
          <div className="footer-brand">MAHIKA BOMMANA</div>
          <p>AI/ML engineering student building intelligent systems through hands-on work.</p>
        </div>
        <div className="footer-links">
          <a href="mailto:mahikabommana@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/mahikabommana" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/mahika74" target="_blank" rel="noreferrer">GitHub</a>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
