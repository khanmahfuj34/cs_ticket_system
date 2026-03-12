import React from 'react';

function TicketCard({ ticket, handelAddTask }) {
  const { title, description, customer, priority, status, createdAt } = ticket;

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[15px] font-semibold text-[#1E293B] leading-6">
          {title}
        </h3>

        <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600 text-xs font-semibold">
          {status}
        </span>
      </div>

      <p className="text-[13px] text-gray-500 mt-3 leading-6">
        {description}
      </p>

      <div className="mt-5 flex items-center justify-between">
        <p className="text-[12px] font-semibold uppercase text-red-500">
          {priority}</p>

        <p className="text-[12px] text-gray-400">{createdAt}</p>
      </div>
      <p className="text-sm text-gray-500 mt-2">{customer}</p>
      <button onClick={()=>handelAddTask(ticket)} className="w-full mt-5 py-3 rounded-xl bg-[#3752FD] hover:bg-[#2441f0] text-white font-semibold transition">
        Add to Task
      </button>

      
    </div>
  );
}

export default TicketCard;