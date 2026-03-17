import React from 'react';
import { toast } from 'react-toastify';

function DownloadPage() {
  const handleDownload = (app) => {
    toast.info(`${app} download started! 📥`, {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  const downloads = [
    {
      name: 'Windows Desktop App',
      version: 'v2.0.0',
      size: '125 MB',
      icon: '🪟',
      description: 'Full-featured desktop application for Windows'
    },
    {
      name: 'macOS Desktop App',
      version: 'v2.0.0',
      size: '118 MB',
      icon: '🍎',
      description: 'Optimized for macOS systems'
    },
    {
      name: 'iOS App',
      version: 'v2.0.0',
      size: '85 MB',
      icon: '📱',
      description: 'Mobile app for iPhone and iPad'
    },
    {
      name: 'Android App',
      version: 'v2.0.0',
      size: '92 MB',
      icon: '🤖',
      description: 'Mobile app for Android devices'
    },
    {
      name: 'Web Version',
      version: 'v2.0.0',
      size: 'No Installation',
      icon: '🌐',
      description: 'Access directly from your browser'
    },
    {
      name: 'Documentation',
      version: 'v1.0',
      size: '5 MB',
      icon: '📚',
      description: 'Complete user guide and API documentation'
    }
  ];

  return (
    <div className="w-11/12 mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0F172A] mb-2">Download</h1>
        <p className="text-gray-600 mb-8">Get CS-Ticket System on your preferred platform.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {downloads.map((download, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition duration-300">
              <div className="flex items-start justify-between mb-4">
                <p className="text-5xl">{download.icon}</p>
                <span className="bg-[#3752FD] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {download.version}
                </span>
              </div>
              
              <h2 className="text-xl font-bold text-[#0F172A] mb-2">{download.name}</h2>
              <p className="text-sm text-gray-600 mb-4">{download.description}</p>
              
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                <span className="text-xs text-gray-500">Size: {download.size}</span>
              </div>
              
              <button
                onClick={() => handleDownload(download.name)}
                className="w-full bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] hover:from-[#6D28D9] hover:to-[#4338CA] 
                           text-white font-semibold py-2 rounded-lg transition duration-200 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-[#0F172A] mb-2">System Requirements</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>✓ Windows 7 or later for Windows app</li>
            <li>✓ macOS 10.13 or later for macOS app</li>
            <li>✓ iOS 12.0 or later for iPhone/iPad</li>
            <li>✓ Android 5.0 or later for Android</li>
            <li>✓ Chrome, Firefox, Safari, or Edge for web version</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DownloadPage;
