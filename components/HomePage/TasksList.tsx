import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { MdDoneAll } from "react-icons/md";

function TasksList() {
  return (
    <div className=" p-2 md rounded-sm md:rounded-lg gap-y-2">
      <div className="py-3 text-[#7d99e9]">YOUR RUNNING TASKS</div>
      <div className="flex flex-col gap-2">
        <div className="bg-[#1E293B] p-2 flex justify-between items-center">
          <div>
            <h1 className="text-gray-500 text-lg">1. Your first task</h1>
          </div>
          <div className="flex gap-x-2">
            <FiEdit
              size={25}
              className="text-gray-400 cursor-pointer hover:text-gray-200"
            />
            <AiOutlineDelete
              size={25}
              className="text-gray-400 cursor-pointer hover:text-gray-200"
            />
            <MdDoneAll
              size={25}
              className="text-gray-400 cursor-pointer hover:text-gray-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default TasksList;
