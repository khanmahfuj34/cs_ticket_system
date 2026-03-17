
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Banner from './component/Banner'
import Navbar from './component/Navbar'
import TicketCard from './component/TicketCard'
import ticketsData from './data/ticketdata.json'
import Footer from './component/Footer'
import TaskStatus from './component/TaskStatus'
import TicketSection from './component/TicketSection'
import NewTicketModal from './component/NewTicketModal'
import HomePage from './pages/HomePage'
import FAQPage from './pages/FAQPage'
import ChangelogPage from './pages/ChangelogPage'
import BlogsPage from './pages/BlogsPage'
import DownloadPage from './pages/DownloadPage'
import ContactPage from './pages/ContactPage'
function AppContent() {
  const [ticket, setTicket] = useState(ticketsData);
  const [selectedTask, setSelectedTask]=useState([]);
  const[resolvedTask, setResolvedTask]=useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handler to add new ticket
  const handleAddNewTicket = (newTicket) => {
    setTicket([...ticket, newTicket]);
  };

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
      <ToastContainer />
      <NewTicketModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTicket={handleAddNewTicket}
      />
      <div className='bg-[#F4F7FF] min-h-screen'>
        <Navbar onOpenModal={() => setIsModalOpen(true)} />
        
        <Routes>
          <Route path="/" element={
            <>
              <Banner inProgressCount={selectedTask.length} resolvedCount={resolvedTask.length}></Banner>
              
              <div className='w-full md:w-11/12 mx-auto mt-6 md:mt-8 px-2 md:px-0 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6'>
                <TicketSection
                  ticket={ticket}
                  handelAddTask={handelAddTask}
                  selectedTask={selectedTask}
                />
                
                <TaskStatus
                  selectedTask={selectedTask}
                  resolvedTask={resolvedTask}
                  handelCompleteTask={handelCompleteTask}
                />
              </div>
            </>
          } />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/changelog" element={<ChangelogPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer></Footer>
    </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App