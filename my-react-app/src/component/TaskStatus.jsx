import React from 'react';
import { toast } from 'react-toastify';

function TaskStatus ({ selectedTask, resolvedTask, handelCompleteTask }) {
  const handleCompleteClick = (task) => {
    toast.success(`${task.title} - Done ✓`, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    handelCompleteTask(task);
  };

  // Get priority color
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'from-red-500/20 to-red-600/20 border-red-200';
      case 'Medium':
        return 'from-orange-500/20 to-orange-600/20 border-orange-200';
      case 'Low':
        return 'from-blue-500/20 to-blue-600/20 border-blue-200';
      default:
        return 'from-gray-500/20 to-gray-600/20 border-gray-200';
    }
  };

  // Get priority badge color
  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-700 border border-red-200';
      case 'Medium':
        return 'bg-orange-100 text-orange-700 border border-orange-200';
      case 'Low':
        return 'bg-blue-100 text-blue-700 border border-blue-200';
      default:
        return 'bg-gray-100 text-gray-700 border border-gray-200';
    }
  };

  return (
    <div className="lg:sticky lg:top-6">
      {/* Main Container */}
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl md:rounded-2xl border border-gray-200/50 shadow-lg overflow-hidden">
        
        {/* Header with Gradient */}
        <div className="bg-gradient-to-r from-[#3752FD] to-[#7C3AED] p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg md:text-2xl font-bold text-white">Task Status</h2>
              <p className="text-xs md:text-sm text-purple-100 mt-1">
                {selectedTask.length} in progress • {resolvedTask.length} completed
              </p>
            </div>
            <div className="text-3xl md:text-4xl opacity-20">📋</div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6">
          {/* In Progress Section */}
          <div className="mb-6 md:mb-8">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <div className="w-1 h-6 bg-gradient-to-b from-[#3752FD] to-[#7C3AED] rounded-full"></div>
              <h3 className="text-base md:text-lg font-bold text-[#0F172A]">In Progress</h3>
              <span className="ml-auto bg-[#3752FD]/10 text-[#3752FD] text-xs font-semibold px-2.5 md:px-3 py-1 rounded-full">
                {selectedTask.length}
              </span>
            </div>

            {selectedTask.length === 0 ? (
              <div className="text-center py-6 md:py-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg md:rounded-xl border border-gray-200 border-dashed">
                <p className="text-3xl md:text-4xl mb-2">📭</p>
                <p className="text-xs md:text-sm text-gray-500">No tasks selected yet</p>
                <p className="text-xs text-gray-400 mt-1">Add tickets to get started</p>
              </div>
            ) : (
              <div className="space-y-2 md:space-y-3">
                {selectedTask.map((task) => (
                  <div
                    key={task.id}
                    className={`bg-gradient-to-br ${getPriorityColor(task.priority)} 
                                border-2 rounded-lg md:rounded-xl p-3 md:p-4 hover:shadow-md hover:scale-105 
                                transition duration-300 transform`}
                  >
                    {/* Task Header */}
                    <div className="flex items-start justify-between gap-2 mb-2 md:mb-3">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs md:text-sm font-bold text-[#0F172A] leading-tight truncate">
                          {task.title}
                        </h4>
                        <p className="text-xs text-gray-600 mt-1 truncate">{task.customer}</p>
                      </div>
                      <span className={`text-xs font-bold px-2 md:px-2.5 py-1 rounded-lg whitespace-nowrap flex-shrink-0 ${getPriorityBadge(task.priority)}`}>
                        {task.priority}
                      </span>
                    </div>

                    {/* Task Description */}
                    <p className="text-xs text-gray-700 mb-3 line-clamp-2">
                      {task.description}
                    </p>

                    {/* Task Meta */}
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-3 pb-3 border-b border-gray-200/50">
                      <span className="flex items-center gap-1">
                        📅 {task.createdAt}
                      </span>
                      <span className="flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                        ⏱️ Active
                      </span>
                    </div>

                    {/* Complete Button */}
                    <button
                      onClick={() => handleCompleteClick(task)}
                      className="w-full relative overflow-hidden group bg-gradient-to-r from-emerald-500 to-teal-600 
                                 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-3 px-4 rounded-xl 
                                 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl
                                 transform hover:scale-105 active:scale-95"
                    >
                      {/* Animated background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                    transform -skew-x-12 group-hover:translate-x-full transition-transform duration-500"></div>
                      
                      {/* Button content */}
                      <div className="relative flex items-center gap-2">
                        <svg className="w-5 h-5 group-hover:rotate-12 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-semibold">Mark as Complete</span>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"></div>

          {/* Resolved Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-gradient-to-b from-[#10B981] to-[#059669] rounded-full"></div>
              <h3 className="text-lg font-bold text-[#0F172A]">Completed</h3>
              <span className="ml-auto bg-[#10B981]/10 text-[#10B981] text-xs font-semibold px-3 py-1 rounded-full">
                {resolvedTask.length}
              </span>
            </div>

            {resolvedTask.length === 0 ? (
              <div className="text-center py-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 border-dashed">
                <p className="text-4xl mb-2">🎯</p>
                <p className="text-sm text-gray-500">No completed tasks yet</p>
                <p className="text-xs text-gray-400 mt-1">Complete tasks in progress</p>
              </div>
            ) : (
              <div className="space-y-2">
                {resolvedTask.map((task) => (
                  <div
                    key={task.id}
                    className="bg-gradient-to-r from-emerald-50 via-green-50 to-teal-50 border-2 border-emerald-300 
                               rounded-xl p-4 hover:shadow-lg transition-all duration-300 group hover:border-emerald-400 
                               transform hover:scale-102 hover:-translate-y-0.5"
                  >
                    <div className="flex items-start gap-3">
                      {/* Animated Checkmark Circle */}
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 
                                       flex items-center justify-center group-hover:scale-125 transition-all duration-500
                                       shadow-md group-hover:shadow-lg">
                          <svg className="w-3.5 h-3.5 text-white group-hover:rotate-12 transition duration-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Task Info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-emerald-900 line-through opacity-60 group-hover:opacity-75 transition">
                          {task.title}
                        </p>
                        <p className="text-xs text-emerald-700/50 mt-1 group-hover:text-emerald-700/70 transition">
                          <span className="font-medium">👤 {task.customer}</span>
                        </p>
                      </div>

                      {/* Status Badge */}
                      <div className="flex-shrink-0 flex flex-col items-center gap-1">
                        <span className="bg-gradient-to-r from-emerald-200 to-teal-200 text-emerald-800 
                                       text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap
                                       shadow-sm group-hover:shadow-md transition duration-300
                                       border border-emerald-400/50">
                          ✓ Completed
                        </span>
                        <span className="text-xs text-emerald-600/70 font-medium">Done</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer Stats */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-t border-gray-200 px-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#3752FD]">{selectedTask.length}</p>
              <p className="text-xs text-gray-600">Active Tasks</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#10B981]">{resolvedTask.length}</p>
              <p className="text-xs text-gray-600">Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskStatus;