import React, { useState } from 'react';

const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
  "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
  "The best way to predict the future is to create it. – Peter Drucker",
  "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
  "Act as if what you do makes a difference. It does. – William James",
  "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
  "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt",
  "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
  "The secret of getting ahead is getting started. – Mark Twain",
  "It does not matter how slowly you go as long as you do not stop. – Confucius",
  "You are braver than you believe, stronger than you seem, and smarter than you think. – A.A. Milne",
  "Opportunities don't happen. You create them. – Chris Grosser",
  "Success is not in what you have, but who you are. – Bo Bennett",
  "The way to get started is to quit talking and begin doing. – Walt Disney",
  "Limit your 'always' and your 'nevers'. – Amy Poehler",
  "You miss 100% of the shots you don't take. – Wayne Gretzky",
];

function Home() {
  const [quote, setQuote] = useState('');

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-400 p-10 flex items-center justify-center text-center"
    >
      <div className="max-w-xl">
        <h1 className="text-4xl font-extrabold mb-8">HEY, I'M DOUGLAS OLIVEIRA</h1>
        <p className="text-lg text-gray-700 mb-8">
          A results-oriented Animal Scientist and Web Developer who analyzes, builds, and manages websites and web applications
        </p>
        <button
          onClick={generateQuote}
          className="bg-blue-600 text-white py-3 px-10 rounded-full text-lg hover:bg-blue-700"
        >
          CHANGE
        </button>
        {quote && <p className="mt-6 text-lg text-gray-800 italic">{quote}</p>}
      </div>
    </section>
  );
}

export default Home;
