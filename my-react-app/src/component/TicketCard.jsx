import React from 'react';
import { toast } from 'react-toastify';

function TicketCard({ ticket, handelAddTask, selectedTask }) {
  const { title, description, customer, priority, status, createdAt } = ticket;
  
  const isTaskAdded = selectedTask.some((task) => task.id === ticket.id);

  // Get priority colors
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'from-red-500/20 to-red-600/20 border-red-200 text-red-700';
      case 'Medium':
        return 'from-orange-500/20 to-orange-600/20 border-orange-200 text-orange-700';
      case 'Low':
        return 'from-blue-500/20 to-blue-600/20 border-blue-200 text-blue-700';
      default:
        return 'from-gray-500/20 to-gray-600/20 border-gray-200 text-gray-700';
    }
  };

  // Get priority badge
  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'High':
        return { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-200', icon: '🔴' };
      case 'Medium':
        return { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-200', icon: '🟠' };
      case 'Low':
        return { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200', icon: '🔵' };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-200', icon: '⚪' };
    }
  };

  // Get status icon and color
  const getStatusInfo = (status) => {
    switch (status) {
      case 'Open':
        return { icon: '📂', color: 'bg-blue-50', border: 'border-blue-200' };
      case 'In Progress':
        return { icon: '⚙️', color: 'bg-orange-50', border: 'border-orange-200' };
      case 'Closed':
        return { icon: '✅', color: 'bg-green-50', border: 'border-green-200' };
      default:
        return { icon: '📋', color: 'bg-gray-50', border: 'border-gray-200' };
    }
  };

  const priorityBadge = getPriorityBadge(priority);
  const statusInfo = getStatusInfo(status);

  const handleAddClick = () => {
    if (!isTaskAdded) {
      toast.success('Task added to In Process! ✓', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      handelAddTask(ticket);
    } else {
      toast.info('This task is already in progress', {
        position: 'top-right',
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-200 hover:border-[#3752FD]/30 
                    shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden 
                    transform hover:scale-105 hover:-translate-y-1">
      
      {/* Decorative top accent */}
      <div className={`h-1 bg-gradient-to-r ${getPriorityColor(priority).split(' ')[0]}`}></div>

      <div className="p-6">
        {/* Header with Status */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1">
            <h3 className="text-base font-bold text-[#0F172A] leading-tight group-hover:text-[#3752FD] transition">
              {title}
            </h3>
          </div>
          <span className={`flex-shrink-0 px-3 py-1.5 text-xs font-bold rounded-lg border 
                            ${priorityBadge.bg} ${priorityBadge.text} ${priorityBadge.border} 
                            whitespace-nowrap flex items-center gap-1`}>
            {priorityBadge.icon} {priority}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2 group-hover:text-gray-700 transition">
          {description}
        </p>

        {/* Meta Information */}
        <div className="bg-gray-50 rounded-xl p-3 mb-4 space-y-2">
          {/* Customer Info */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-lg">👤</span>
            <span className="text-gray-700 font-medium">{customer}</span>
          </div>

          {/* Status and Date */}
          <div className="flex items-center justify-between text-xs">
            <div className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border 
                           ${statusInfo.color} ${statusInfo.border}`}>
              <span>{statusInfo.icon}</span>
              <span className="font-semibold text-gray-700">{status}</span>
            </div>
            <span className="text-gray-500 flex items-center gap-1">
              <span>📅</span>
              {createdAt}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <button 
          onClick={handleAddClick}
          className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 
                      flex items-center justify-center gap-2 border-2
                      ${isTaskAdded 
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-orange-600 shadow-lg hover:shadow-xl' 
                        : 'bg-gradient-to-r from-[#3752FD] to-[#7C3AED] hover:from-[#2441f0] hover:to-[#6D28D9] text-white border-[#3752FD] shadow-lg hover:shadow-xl'
                      }`}
        >
          {isTaskAdded ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              In Process
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add to Task
            </>
          )}
        </button>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3752FD]/0 via-[#3752FD]/0 to-[#7C3AED]/0 
                     group-hover:from-[#3752FD]/5 group-hover:via-[#7C3AED]/5 group-hover:to-[#3752FD]/5 
                     pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}

export default TicketCard;