
import { useState } from 'react'
import Banner from './component/Banner'
import Navbar from './component/Navbar'
import TicketCard from './component/TicketCard'
import ticketsData from './data/ticketdata.json'
import Footer from './component/Footer'
import TaskStatus from './component/TaskStatus'
import TicketSection from './component/TicketSection'
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
    <div className='bg-[#F4F7FF] min-h-screen'>
     <Navbar />
     <Banner inProgressCount={selectedTask.length} resolvedCount={resolvedTask.length}></Banner>
     
    <div className='w-11/12 mx-auto mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6'>
      <TicketSection
      ticket={ticket}
      handelAddTask={handelAddTask}
      />
      
     <TaskStatus
     selectedTask={selectedTask}
     resolvedTask={resolvedTask}
     handelCompleteTask={handelCompleteTask}
     />
    </div>
  </div>
    <Footer></Footer>
    </>
  )
}

export default App
