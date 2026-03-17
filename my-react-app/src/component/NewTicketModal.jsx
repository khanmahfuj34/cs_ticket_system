import React, { useState } from 'react';
import { toast } from 'react-toastify';

function NewTicketModal({ isOpen, onClose, onAddTicket }) {
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    customer: '',
    priority: 'Medium',
    status: 'Open',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Get current date in MM/DD/YYYY format
  const getCurrentDate = () => {
    const date = new Date();
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.title.trim()) {
      toast.error('Title is required!', { position: 'top-right' });
      return;
    }
    if (!formData.description.trim()) {
      toast.error('Description is required!', { position: 'top-right' });
      return;
    }
    if (!formData.customer.trim()) {
      toast.error('Customer name is required!', { position: 'top-right' });
      return;
    }

    // Create new ticket object
    const newTicket = {
      id: Date.now(), // Use timestamp as unique ID
      title: formData.title.trim(),
      description: formData.description.trim(),
      customer: formData.customer.trim(),
      priority: formData.priority,
      status: formData.status,
      createdAt: getCurrentDate(),
    };

    // Call parent handler to add ticket
    onAddTicket(newTicket);

    // Show success toast
    toast.success(`"${formData.title}" ticket created! ✓`, {
      position: 'top-right',
      autoClose: 2000,
    });

    // Reset form
    setFormData({
      title: '',
      description: '',
      customer: '',
      priority: 'Medium',
      status: 'Open',
    });

    // Close modal
    onClose();
  };

  // Handle clicking outside modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 transition-all duration-300 p-3 sm:p-0"
      onClick={handleBackdropClick}
    >
      {/* Modal Container */}
      <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl w-full max-w-2xl max-h-[95vh] md:max-h-[90vh] overflow-y-auto animation-fade-in">
        {/* Modal Header */}
        <div className="sticky top-0 bg-linear-to-r from-[#7C3AED] to-[#4F46E5] px-4 md:px-6 py-4 md:py-6 flex items-center justify-between">
          <div>
            <h2 className="text-lg md:text-2xl font-bold text-white">Create New Ticket</h2>
            <p className="text-xs md:text-sm text-purple-100 mt-0.5 md:mt-1">Fill in the details below</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition duration-200"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-4 md:space-y-6">
          {/* Title Field */}
          <div>
            <label className="block text-xs md:text-sm font-semibold text-[#0F172A] mb-2">
              Ticket Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Login Issues - Can't Access Account"
              className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none 
                         focus:border-[#3752FD] focus:ring-2 focus:ring-blue-100 transition duration-200"
            />
          </div>

          {/* Description Field */}
          <div>
            <label className="block text-xs md:text-sm font-semibold text-[#0F172A] mb-2">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Provide detailed information about the issue..."
              rows="4"
              className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none 
                         focus:border-[#3752FD] focus:ring-2 focus:ring-blue-100 transition duration-200 resize-none"
            />
          </div>

          {/* Customer Name Field */}
          <div>
            <label className="block text-xs md:text-sm font-semibold text-[#0F172A] mb-2">
              Customer Name *
            </label>
            <input
              type="text"
              name="customer"
              value={formData.customer}
              onChange={handleChange}
              placeholder="e.g., John Smith"
              className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none 
                         focus:border-[#3752FD] focus:ring-2 focus:ring-blue-100 transition duration-200"
            />
          </div>

          {/* Priority and Status Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {/* Priority */}
            <div>
              <label className="block text-xs md:text-sm font-semibold text-[#0F172A] mb-2">
                Priority
              </label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none 
                           focus:border-[#3752FD] focus:ring-2 focus:ring-blue-100 transition duration-200"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-xs md:text-sm font-semibold text-[#0F172A] mb-2">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none 
                           focus:border-[#3752FD] focus:ring-2 focus:ring-blue-100 transition duration-200"
              >
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3 pt-3 md:pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 text-gray-700 font-semibold rounded-lg
                         hover:bg-gray-50 transition duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-linear-to-r from-[#7C3AED] to-[#4F46E5] 
                         hover:from-[#6D28D9] hover:to-[#4338CA] text-white font-semibold rounded-lg
                         shadow-md hover:shadow-lg transition duration-200"
            >
              Create Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewTicketModal;
