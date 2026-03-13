import React from 'react';

function TaskStatus ({selectedTask, resolvedTask, handelCompleteTask}){
    return (
         <div className="bg-white rounded-2xl p-6 border border-gray-200 min-h-[400px]">
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
                  <button onClick={()=> handelCompleteTask(task)} className='w-full mt-2 py-2 rounded-lg bg-[#10B981] text-white font-medium'>Complete</button>
                </div>
              ))}
            </div>
          )}
          <div className="mt-8">
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
    );
};

export default TaskStatus;