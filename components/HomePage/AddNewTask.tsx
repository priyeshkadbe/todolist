function AddNewTask() {
  return (
    <form className="flex items-center justify-center mt-2 px-2">
      <input
        className="rounded-md w-full p-2 border-none outline-none bg-[#0F1425] text-white focus:outline-1 focus:outline-gray-500"
        placeholder="Add New Task..."
      />
      <button className="text-gray-200 text-md cursor-pointer ml-6  bg-[#1db45a] px-6 py-2 rounded-md md:rounded-lg hover:text-gray-50">
        Add
      </button>
    </form>
  );
}

export default AddNewTask;
