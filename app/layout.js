import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Mahika Bommana — AI/ML Engineering Student',
  description: 'Portfolio of Mahika Bommana — AI/ML engineering student, software developer, and builder of intelligent systems.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
