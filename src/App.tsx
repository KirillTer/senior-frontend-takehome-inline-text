import React from 'react';
import './App.css';
import { SearchPage } from './pages/SearchPage';
import { ContextProvider } from "./hooks/ContextHook";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <SearchPage />
      </div>
    </ContextProvider>
  );
}

export default App;
