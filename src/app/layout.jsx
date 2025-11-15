import '../global.css';
import SmoothScroll from '../components/SmoothScroll';

export const metadata = {
  title: 'Star Map Egypt',
  description: 'Star Map',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
