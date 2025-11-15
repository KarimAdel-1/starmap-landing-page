import NewsletterSection from './NewsletterSection';
import FooterContent from './FooterContent';

export default function Footer() {
  return (
    <footer className="relative box-border caret-transparent mt-[-440px] z-10 overflow-hidden pt-[120px] md:pt-[200px] ">
      <NewsletterSection />
      <FooterContent />
    </footer>
  );
}
