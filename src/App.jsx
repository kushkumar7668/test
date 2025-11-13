import React, { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={setSearchTerm} />
      <Body searchTerm={searchTerm} />
    </div>
  );
}