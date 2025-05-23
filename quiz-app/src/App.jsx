
import { useState } from 'react';
import './App.css'
import Quiz from './Quiz';

function App() {

  const [Category, setCategory] = useState(0);

  const LoadQuiz = () => {
    if (Category === 1) {
      return <Quiz category={1} />;
    } else if (Category === 2) {
      return <Quiz category={2} />;
    } else if (Category === 3) {
      return <Quiz category={3} />;
    } else if (Category === 4) {
      return <Quiz category={4} />;
    } else {
      return null;
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center bg-gray-800 w-screen h-screen">
      {Category === 0 ? (
        <div className="min-h-[70vh] flex flex-col justify-center items-center p-6 gap-4 rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-600">
          <div>
            <h1 className="text-4xl text-white text-center font-bold">Quiz App</h1>
            <p className="text-lg text-white my-4">Select a category to start the quiz</p>
          </div>
          <div className="flex flex-wrap justify-center items-center h-1/2">
            <button
              onClick={() => setCategory(1)}
              className="border border-white text-white p-4 m-4 rounded-xl w-[200px] hover:bg-white/10 cursor-pointer transition-all"
            >
              Web Development
            </button>
            <button
              onClick={() => setCategory(2)}
              className="border border-white text-white p-4 m-4 rounded-xl w-[200px] hover:bg-white/10 cursor-pointer transition-all"
            >
              Python Programming
            </button>
            <button
              onClick={() => setCategory(3)}
              className="border border-white text-white p-4 m-4 rounded-xl w-[200px] hover:bg-white/10 cursor-pointer transition-all"
            >
              Data Science & ML
            </button>
            <button
              onClick={() => setCategory(4)}
              className="border border-white text-white p-4 m-4 rounded-xl w-[200px] hover:bg-white/10 cursor-pointer transition-all"
            >
              App Development
            </button>
          </div>
        </div>
      ) : (
        LoadQuiz()
      )}
    </div>
  );
}

export default App;