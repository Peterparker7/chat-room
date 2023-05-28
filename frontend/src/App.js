import { Route, Routes } from 'react-router-dom'; 
import ChatPage from './Pages/ChatPage';
import HomePage from './Pages/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/chats" element={<ChatPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
    </div>
  );
}

export default App;
