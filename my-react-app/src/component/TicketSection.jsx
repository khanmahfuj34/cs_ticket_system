import React from 'react';
import TicketCard from './TicketCard';

function TicketSection ({ticket, handelAddTask}){
    return (
        <div className="lg:col-span-2">
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-[#0F172A]">Customer Tickets</h2>
          <p className="text-sm text-gray-500 mt-1">
            Monitor and manage all customer support requests
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ticket.map((ticket) => (
            <TicketCard key={ticket.id}
            ticket={ticket}
            handelAddTask={handelAddTask}
             />
          ))}
        </div>
      </div>
    );
};

export default TicketSection;