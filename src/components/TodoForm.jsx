import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;
    addTodo(taskName);
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
      <input
        type="text"
        placeholder="Yeni bir görev ekle..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all text-gray-700 placeholder-gray-400"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition-all active:scale-95"
      >
        Ekle
      </button>
    </form>
  );
}
