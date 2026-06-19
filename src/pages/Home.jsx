import { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from local storage
  useEffect(() => {
    const savedTodos = localStorage.getItem("todo-app-data");
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch (e) {
        console.error("Failed to parse todos from local storage");
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to local storage whenever todos change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("todo-app-data", JSON.stringify(todos));
    }
  }, [todos, isLoaded]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const updateTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  if (!isLoaded) return null; // Avoid hydration mismatch or flash

  const completedCount = todos.filter(t => t.completed).length;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 font-sans">
      <div className="max-w-2xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Görev Yöneticisi</h1>
          <p className="text-gray-500">
            {todos.length} görevden {completedCount} tanesi tamamlandı.
          </p>
        </header>

        <main className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
          <TodoForm addTodo={addTodo} />

          <div className="mt-8">
            <TodoList
              todos={todos}
              updateTodo={updateTodo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          </div>
        </main>

        <footer className="mt-12 text-center text-sm text-gray-400">
          <p>Yusuf Harun Canbay tarafından geliştirildi.</p>
        </footer>
      </div>
    </div>
  );
}
