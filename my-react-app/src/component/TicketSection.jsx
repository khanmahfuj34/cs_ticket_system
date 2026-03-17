import React, { useState } from 'react';
import TicketCard from './TicketCard';
import SearchSection from './SearchSection';

function TicketSection ({ ticket, handelAddTask, selectedTask }) {
  // State to manage search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filter tickets based on search query
  // This searches for tickets that contain the search term in their title (case-insensitive)
  const filteredTickets = ticket.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Count by priority
  const priorityCount = {
    High: filteredTickets.filter(t => t.priority === 'High').length,
    Medium: filteredTickets.filter(t => t.priority === 'Medium').length,
    Low: filteredTickets.filter(t => t.priority === 'Low').length,
  };

  return (
    <div className="lg:col-span-2">
      {/* Premium Header Section */}
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl md:rounded-2xl border border-gray-200/50 p-4 md:p-6 mb-4 md:mb-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-0">
          <div>
            <div className="flex items-center gap-2 md:gap-3 mb-2">
              <span className="text-3xl md:text-4xl">🎫</span>
              <div>
                <h2 className="text-xl md:text-3xl font-bold text-[#0F172A]">Customer Tickets</h2>
                <p className="text-xs md:text-sm text-gray-600 mt-1">
                  Monitor and manage {ticket.length} support requests
                </p>
              </div>
            </div>
          </div>
          
          {/* Priority Stats */}
          <div className="flex gap-2 md:gap-3 w-full md:w-auto">
            {[
              { label: 'High', count: priorityCount.High, color: 'bg-red-100', text: 'text-red-700', icon: '🔴' },
              { label: 'Medium', count: priorityCount.Medium, color: 'bg-orange-100', text: 'text-orange-700', icon: '🟠' },
              { label: 'Low', count: priorityCount.Low, color: 'bg-blue-100', text: 'text-blue-700', icon: '🔵' },
            ].map(({ label, count, color, text, icon }) => (
              <div key={label} className={`flex flex-col items-center px-2 md:px-3 py-2 rounded-lg ${color} flex-1 md:flex-none`}>
                <span className="text-lg md:text-xl">{icon}</span>
                <span className={`text-base md:text-lg font-bold ${text}`}>{count}</span>
                <span className={`text-xs font-medium ${text} hidden md:block`}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search Section - placed above ticket list */}
      <SearchSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Results Info Bar */}
      {searchQuery && (
        <div className="mb-4 px-3 md:px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg md:rounded-xl border border-blue-200/50 
                        flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0">
          <div>
            <p className="text-xs md:text-sm font-semibold text-[#0F172A]">
              🔍 Found <span className="text-[#3752FD]">{filteredTickets.length}</span> ticket{filteredTickets.length !== 1 ? 's' : ''}
            </p>
            <p className="text-xs text-gray-600 mt-0.5 truncate">
              Searching for: <span className="font-bold text-[#0F172A]">"{searchQuery}"</span>
            </p>
          </div>
          <button 
            onClick={() => setSearchQuery('')}
            className="text-xs md:text-sm font-medium text-gray-600 hover:text-gray-900 px-3 py-1 rounded-lg hover:bg-white transition whitespace-nowrap"
          >
            Clear ✕
          </button>
        </div>
      )}

      {/* Ticket Grid - displays filtered results */}
      {filteredTickets.length === 0 ? (
        <div className="rounded-xl md:rounded-2xl border border-dashed border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100 py-12 md:py-16 text-center">
          <p className="text-4xl md:text-5xl mb-4">{searchQuery ? '🔍' : '📭'}</p>
          <p className="text-base md:text-lg font-semibold text-gray-700 mb-2">
            {searchQuery ? 'No tickets found' : 'No tickets available'}
          </p>
          <p className="text-sm text-gray-600">
            {searchQuery 
              ? 'Try adjusting your search terms' 
              : 'Create a new ticket to get started'}
          </p>
        </div>
      ) : (
        <>
          {/* Grid Header */}
          <div className="mb-3 md:mb-4">
            <p className="text-xs font-bold text-gray-600 uppercase tracking-wider">
              📋 Displaying {filteredTickets.length} ticket{filteredTickets.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Ticket Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {filteredTickets.map((ticketItem) => (
              <TicketCard
                key={ticketItem.id}
                ticket={ticketItem}
                handelAddTask={handelAddTask}
                selectedTask={selectedTask}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default TicketSection;