function TasksList() {
  return (
    <div className="bg-[#1E293B] p-2 md:p-4 rounded-sm md:rounded-lg">
      <div>
        <h1 className="text-xl text-gray-300">Your Tasks</h1>
      </div>
      <div className="pt-2 flex justify-between">
        <div>
          <h1 className="text-gray-500 text-lg">1. Your first task</h1>
        </div>
        <div className="flex gap-x-2">
          <button className="bg-red-400 text-md px-4 py-2  rounded-sm ">Edit</button>
          <button className="bg-red-400 text-md px-4 py-2 rounded-sm ">Mark as Done</button> 
          <button className="bg-red-400 text-md px-4 py-2 rounded-sm ">Delete</button>
        </div>
      </div>
    </div>
  );
}
export default TasksList;
