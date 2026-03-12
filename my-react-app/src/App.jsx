
import { useState } from 'react'


import Banner from './component/Banner'
import Navbar from './component/Navbar'
import TicketCard from './component/TicketCard'
import ticketsData from './data/ticketdata.json'


function App() {
  const [selectedTask, setSelectedTask]=useState([]);
  const handelAddTask = (ticket)=>{
    const alreadyExists = selectedTask.find((item) => item.id===ticket.id);
    if (alreadyExists){
      toast.error('This ticket is already Added');
      console.log('This ticket')
      return;
    }
    setSelectedTask([...selectedTask, ticket]);
    toast.success('Ticket added to task status')
    console.log("ticket added")
  }

  return (
    <>
     <Navbar />
     <Banner inProgressCount={selectedTask.length} resolvedCount={0}></Banner>
     
    <div className='w-11/12 mx-auto mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6'>
      <div className="lg:col-span-2">
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-[#0F172A]">Customer Tickets</h2>
          <p className="text-sm text-gray-500 mt-1">
            Monitor and manage all customer support requests
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ticketsData.map((ticket) => (
            <TicketCard key={ticket.id}
            ticket={ticket}
            handelAddTask={handelAddTask}
             />
          ))}
        </div>
      </div>
      <div className="bg-white rounded-2xl p-5 border border-gray-200 min-h-[400px]">
        <div className="pb-4 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-[#0F172A]">Task Status</h2>
          <p className="text-sm text-gray-500 mt-1">
            Selected tickets will appear here
          </p>
        </div>

        <div className="py-8 flex items-center justify-center">
          <p className="text-sm text-gray-400">No task selected yet</p>
        </div>
      </div>
    </div>
    <ToastContainer></ToastContainer>
    </>
  )
}

export default App
