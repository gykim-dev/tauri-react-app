import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { invoke } from '@tauri-apps/api/core';
import './App.css';

function App() {
  const [greetMsg, setGreetMsg] = useState('');
  const [name, setName] = useState('');

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke('greet', { name }));
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4 text-slate-900">
      <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-blue-600">
        Welcome to Tauri + React
      </h1>

      <div className="mb-8 flex gap-8">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img
            src="/vite.svg"
            className="h-16 w-16 transition-transform duration-300 hover:scale-110"
            alt="Vite logo"
          />
        </a>
        <a href="https://tauri.app" target="_blank" rel="noreferrer">
          <img
            src="/tauri.svg"
            className="h-16 w-16 transition-transform duration-300 hover:scale-110"
            alt="Tauri logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="h-16 w-16 transition-transform duration-300 hover:scale-110"
            alt="React logo"
          />
        </a>
      </div>
      <p className="mb-8 text-lg text-slate-600">
        Click on the Tauri, Vite, and React logos to learn more.
      </p>

      <form
        className="flex items-center gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          className="w-64 rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 shadow-sm transition-shadow focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        >
          Greet
        </button>
      </form>
      <p className="mt-8 text-xl font-medium text-emerald-600">{greetMsg}</p>
    </main>
  );
}

export default App;
