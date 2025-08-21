import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { FaRegSquare, FaRegCheckSquare } from "react-icons/fa";
import { IoCalendar } from "react-icons/io5";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [date] = useState(new Date());

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: newTask.trim(), completed: false },
    ]);
    setNewTask("");
  };

  const handleToggleTask = (id: number) => {
    setTasks(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter(task =>
    showCompleted ? task.completed : !task.completed
  );

  return (
    <div className="bg-zinc-900 border-2 border-gray-400 w-full md:w-[50%] h-[100%] rounded-3xl flex flex-col justify-center items-center">
      <div className="p-5 w-full h-[10%] flex flex-row items-center justify-between overflow-scroll">
        <div className="w-[50%] h-full flex items-center p-2 gap-5">
          <button
            className={`flex items-center justify-center gap-2 rounded-lg p-2 cursor-pointer ${!showCompleted ? "bg-gray-700" : ""}`}
            onClick={() => setShowCompleted(false)}
          >
            <FaRegSquare className="w-5 h-5 text-white" />
            <h1>Pending</h1>
          </button>
          <button
            className={`flex items-center justify-center gap-2 p-2 rounded-lg cursor-pointer ${showCompleted ? "bg-gray-700" : ""}`}
            onClick={() => setShowCompleted(true)}
          >
            <FaRegCheckSquare className="w-5 h-5 text-white" />
            <h1>Completed</h1>
          </button>
        </div>
      </div>
      <div className="h-[90%] w-full flex flex-col items-center justify-start gap-4">
        <div className="w-full flex flex-row items-center justify-center gap-2 p-4">
          <input
            type="text"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            placeholder="Add a new task"
            className="w-2/3 p-2 rounded-lg bg-gray-800 text-white border border-gray-600"
            onKeyDown={e => { if (e.key === "Enter") handleAddTask(); }}
          />
          <button
            onClick={handleAddTask}
            className="p-2 w-[60px] bg-yellow-500 text-black rounded-lg font-bold cursor-pointer"
          >
            Add
          </button>
        </div>
        {filteredTasks.length === 0 ? (
          <div className="p-5 gap-3 h-[50%] w-[50%] text-2xl flex flex-col justify-center items-center">
            <FaRegCheckSquare className="w-10 h-10 text-gray-500 opacity-50" />
            <h1 className="opacity-70 text-gray-500 text-2xl">
              No {showCompleted ? "Completed" : "Pending"} Tasks
            </h1>
          </div>
        ) : (
          <ul className="w-full flex flex-col items-center gap-2 overflow-scroll">
            {filteredTasks.map(task => (
              <li
                key={task.id}
                className="w-2/3 flex items-center justify-between bg-gray-800 p-3 rounded-lg"
              >
                <span
                  className={`text-white ${task.completed ? "line-through opacity-60" : ""}`}
                >
                  {task.text}
                </span>
                <button
                  onClick={() => handleToggleTask(task.id)}
                  className="ml-4"
                  title={task.completed ? "Mark as Pending" : "Mark as Completed"}
                >
                  {task.completed ? (
                    <FaRegCheckSquare className="w-6 h-6 text-green-400" />
                  ) : (
                    <FaRegSquare className="w-6 h-6 text-gray-400" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
