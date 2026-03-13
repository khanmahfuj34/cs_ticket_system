
import { useState } from 'react'


import Banner from './component/Banner'
import Navbar from './component/Navbar'
import TicketCard from './component/TicketCard'
import ticketsData from './data/ticketdata.json'



function App() {
  const [ticket, setTicket] = useState(ticketsData);
  const [selectedTask, setSelectedTask]=useState([]);
  const[resolvedTask, setResolvedTask]=useState([]);
  const handelAddTask = (ticket)=>{
    const alreadyExists = selectedTask.find((item) => item.id===ticket.id);
    if (alreadyExists){
      // alert('This ticket is already Added');
      // console.log('This ticket')
      return;
    }
    setSelectedTask([...selectedTask, ticket]);
    // alert('Ticket added to task status');
    // console.log("ticket added")
  }
  const handelCompleteTask = (task) =>{
    const remainingTask = selectedTask.filter((item)=>item.id !== task.id);
    setSelectedTask(remainingTask);
    setResolvedTask([...resolvedTask, task]);
    const remainingTicket = ticket.filter((item)=>item.id !== task.id);
    setTicket(remainingTicket);
  };

  return (
    <>
     <Navbar />
     <Banner inProgressCount={selectedTask.length} resolvedCount={resolvedTask.length}></Banner>
     
    <div className='w-11/12 mx-auto mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6'>
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
      {/* task status */}
      <div className="bg-white rounded-2xl p-5 border border-gray-200 min-h-[400px]">
          <h2 className="text-2xl font-bold text-[#0F172A]">Task Status</h2>
          <p className="text-sm text-gray-500 mt-1 mb-4">
            Selected tickets will appear here
          </p>

          {selectedTask.length === 0 ? (
            <p className="text-sm text-gray-400 mt-6">No task selected yet</p>
          ) : (
            <div className="mt-5 space-y-4">
              {selectedTask.map((task) => (
                <div
                  key={task.id}
                  className="bg-[#F5F7FF] border border-[#E5E7EB] rounded-xl p-4"
                >
                  <h3 className="text-sm font-semibold text-[#0F172A]">
                    {task.title}
                  </h3>
                  <button onClick={()=> handelCompleteTask(task)} className='w-full py-2 rounded-lg bg-[#10B981] text-white font-medium'>Complete</button>
                </div>
              ))}
            </div>
          )}
          <div className="mt-6">
        <h3 className="text-xl font-bold text-[#0F172A] mb-3">Resolved Task</h3>

        {resolvedTask.length === 0 ? (
          <p className="text-sm text-gray-400">No resolved task yet</p>
        ) : (
          <div className="space-y-3">
            {resolvedTask.map((task) => (
              <div
                key={task.id}
                className="bg-[#F1F5FF] border border-[#E5E7EB] rounded-xl p-4"
              >
                <p className="text-sm font-medium text-[#0F172A]">{task.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      </div>
      {/* Resolve Task */}
      
      
    </div>
    
    </>
  )
}

export default App
