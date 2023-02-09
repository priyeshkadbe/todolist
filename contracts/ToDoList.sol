//SPDX-License-Identifier:MIT
pragma solidity ^0.8.9;

contract ToDoList {
    event AddTask(address userAddress, uint taskId);
    event DeleteTask(uint taskId, bool isDeleted);
    event MarkAsDoneTask(uint taskId, bool isCompleted);
    event UpdateTask(uint taskId, string description);

    struct Task {
        uint taskId;
        string description;
        bool isCompleted;
        bool isDeleted;
    }

    Task[] private tasks;

    mapping(uint => address) taskToOwner;

    //function to add new task
    function addTask(
        string calldata _description,
        bool _isCompleted,
        bool _isDeleted
    ) external {
        require(msg.sender != address(0), "Invalid sender address");
        uint taskId = tasks.length;
        tasks.push(Task(taskId, _description, _isCompleted, _isDeleted));
        taskToOwner[taskId] = msg.sender;
        emit AddTask(msg.sender, taskId);
    }

    //function to get all the tasks
    function getAllTask() external view returns (Task[] memory) {
        Task[] memory temp = new Task[](tasks.length);
        uint counter = 0;
        for (uint i = 0; i < tasks.length; i++) {
            if (
                taskToOwner[i] == msg.sender &&
                tasks[i].isCompleted == false &&
                tasks[i].isDeleted == false
            ) {
                temp[counter] = tasks[i];
                counter++;
            }
        }
        //return temp;
        Task[] memory result = new Task[](counter);
        for (uint i = 0; i < counter; i++) {
            result[i] = temp[i];
        }
        return result;
    }

    //function to mark a task as complete
    function markAsCompleted(uint _taskId, bool _isCompleted) external {
        require(
            taskToOwner[_taskId] == msg.sender,
            "Only owner can mark task as completed"
        );
        require(_taskId < tasks.length, "Task id not found");
        tasks[_taskId].isCompleted = _isCompleted;
        emit MarkAsDoneTask(_taskId, _isCompleted);
    }

    //function to update a task
    function updateTask(uint _taskId, string calldata _description) external {
        require(taskToOwner[_taskId] == msg.sender, "unautorized access");
        tasks[_taskId].description = _description;
        emit UpdateTask(_taskId, _description);
    }

    //function to delete a task
    function deleteTask(uint _taskId, bool _isDeleted) external {
        require(taskToOwner[_taskId] == msg.sender, "unautorized access");
        require(_taskId < tasks.length, "Task id not found");
        tasks[_taskId].isDeleted = _isDeleted;
        emit DeleteTask(_taskId, _isDeleted);
    }

    //function to get all the completed task
    function getAllCompletedTask() external view returns (Task[] memory) {
        Task[] memory temp = new Task[](tasks.length);
        uint counter = 0;
        for (uint i = 0; i < tasks.length; i++) {
            if (
                taskToOwner[i] == msg.sender &&
                tasks[i].isCompleted == true &&
                tasks[i].isDeleted == false
            ) {
                temp[counter] = tasks[i];
                counter++;
            }
        }
        //return temp;

        Task[] memory result = new Task[](counter);
        for (uint i = 0; i < counter; i++) {
            result[i] = temp[i];
        }
        return result;
    }
}
