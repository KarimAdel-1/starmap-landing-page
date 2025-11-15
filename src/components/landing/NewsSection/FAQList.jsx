import FAQItem from './FAQItem';

export default function FAQList() {
  const faqs = [
    {
      question: 'How do I customize my star map?',
      answer: 'Simply enter the date, time, and location of your special moment. Our system will generate an accurate star map showing exactly how the night sky looked at that moment.',
      bgColor: 'bg-blue-100'
    },
    {
      question: 'What products can I get my star map on?',
      answer: 'We offer star maps on various products including jewelry (necklaces, bracelets, rings), posters, canvas prints, and more. Each product is carefully crafted to preserve your special moment.',
      bgColor: 'bg-blue-200'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 5-7 business days. Express shipping options are available at checkout for faster delivery. All orders are carefully packaged to ensure your star map arrives in perfect condition.',
      bgColor: 'bg-blue-300'
    }
  ];

  return (
    <div className="box-border caret-transparent max-w-4xl mx-auto">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          bgColor={faq.bgColor}
        />
      ))}
    </div>
  );
}
