import React from 'react';

function FAQPage() {
  const faqs = [
    {
      id: 1,
      question: 'How do I create a new ticket?',
      answer: 'Click the "New Ticket" button in the top right corner, fill in the required details including title, description, and customer name, then submit the form.'
    },
    {
      id: 2,
      question: 'How can I search for a specific ticket?',
      answer: 'Use the search bar in the Customer Tickets section. Type any part of the ticket title and the results will filter in real-time.'
    },
    {
      id: 3,
      question: 'What does "In Process" mean?',
      answer: 'When you click "Add to Task", a ticket is moved to the Task Status section as "In Process", meaning you\'re currently working on it.'
    },
    {
      id: 4,
      question: 'How do I mark a ticket as completed?',
      answer: 'Navigate to the Task Status section on the right, find the ticket you completed, and click the "Complete" button. It will move to the Resolved Task section.'
    },
    {
      id: 5,
      question: 'Can I delete tickets?',
      answer: 'Tickets are automatically removed from the list when completed. Completed tickets appear in the Resolved Task section for your reference.'
    },
    {
      id: 6,
      question: 'What priority levels are available?',
      answer: 'There are three priority levels: Low, Medium, and High. Choose based on the urgency and impact of the issue.'
    }
  ];

  return (
    <div className="w-11/12 mx-auto py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0F172A] mb-2">Frequently Asked Questions</h1>
        <p className="text-gray-600 mb-8">Find answers to common questions about using the CS-Ticket System.</p>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition duration-200 cursor-pointer">
              <summary className="font-semibold text-[#0F172A] text-lg hover:text-[#3752FD] transition">
                {faq.question}
              </summary>
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
