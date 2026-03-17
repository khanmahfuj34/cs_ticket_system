import React from 'react';

function ChangelogPage() {
  const updates = [
    {
      version: 'v2.0.0',
      date: 'March 15, 2026',
      features: [
        'Toast notifications for all actions',
        'New Ticket modal form',
        'Smart search functionality',
        'Mobile-optimized drawer menu',
        'Button state toggle (In Process)',
        'Responsive design improvements'
      ]
    },
    {
      version: 'v1.5.0',
      date: 'March 10, 2026',
      features: [
        'Task completion tracking',
        'Resolved tasks section',
        'Priority-based filtering',
        'Customer status updates'
      ]
    },
    {
      version: 'v1.0.0',
      date: 'March 1, 2026',
      features: [
        'Initial release',
        'Ticket creation',
        'Task management dashboard',
        'Basic navigation'
      ]
    }
  ];

  return (
    <div className="w-11/12 mx-auto py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0F172A] mb-2">Changelog</h1>
        <p className="text-gray-600 mb-8">Track all updates and improvements to the CS-Ticket System.</p>
        
        <div className="space-y-8">
          {updates.map((update, index) => (
            <div key={index} className="border-l-4 border-[#3752FD] pl-6 py-4">
              <div className="bg-gradient-to-r from-[#3752FD]/10 to-[#7C3AED]/10 rounded-lg p-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">{update.version}</h2>
                <p className="text-sm text-gray-500 mt-1">{update.date}</p>
                
                <ul className="mt-4 space-y-2">
                  {update.features.map((feature, fIndex) => (
                    <li key={fIndex} className="text-gray-700 flex items-start">
                      <span className="text-[#10B981] mr-3 font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChangelogPage;
