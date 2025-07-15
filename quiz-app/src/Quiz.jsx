import React, { useState, useEffect } from 'react';

import category1 from './assets/web-dev.json';
import category2 from './assets/python.json';
import category3 from './assets/data-science.json';
import category4 from './assets/app-dev.json';

const Quiz = ({ category }) => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        if (category === 1) {
            setQuestions(category1);
        }
        else if (category === 2) {
            setQuestions(category2);
        }
        else if (category === 3) {
            setQuestions(category3);
        }
        else if (category === 4) {
            setQuestions(category4);
        }
    }, [category]);

    const handleAnswer = (option) => {
        setSelectedOption(option);
        if (option === questions[currentQuestion].correct_answer) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        setSelectedOption(null);
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };
    const handlePrevQuestion = () => {
        // setSelectedOption(null);
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleRestart = () => {
        setCurrentQuestion(0);
        setScore(0);
        setSelectedOption(null);
        setShowResult(false);
    };

    if (questions.length === 0) {
        return <div>Loading questions...</div>;
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen min-w-[320px] text-white font-sans p-5">
            {showResult ? (
                <div className="flex flex-col items-center justify-center min-h-[85vh] min-w-[80vw] bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-2xl">
                    <h2 className="text-2xl my-2 font-semibold">
                        Your score: {score} out of {questions.length}
                    </h2>
                    <p className={`text-lg my-2 p-2 font-semibold text-white ${score >= questions.length / 2 ? 'bg-green-600' : 'bg-pink-600'}`}>
                        {score >= questions.length / 2 ? 'Good Score. Great Job!' : 'Bad Score. Try Again!'}
                    </p>
                    <button
                        onClick={handleRestart}
                        className="my-2 mx-auto py-2 px-4 text-white bg-indigo-600 rounded cursor-pointer hover:bg-indigo-700 transition"
                    >
                        Restart
                    </button>
                </div>
            ) : (
                <div className="  flex justify-center min-h-[85vh] min-w-[80vw] bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-2xl">
                    <div className="flex flex-col question-field w-4/5">
                        <div className='flex justify-between items-center mt-4'>
                            <h3 className="my-3">
                                Question {currentQuestion + 1} of {questions.length}
                            </h3>
                            <button
                                className="py-2 px-5 text-base rounded border-none bg-red-600 text-white transition-colors duration-300 hover:bg-red-700"
                                onClick={() => { setShowResult(true) }}
                            >
                                Finish Quiz
                            </button>
                        </div>
                        <p className="italic text-pink-500 mt-0 mb-4">
                            Category: {questions[currentQuestion].category}
                        </p>
                        <div className="w-full h-5 bg-green-200 rounded-xl overflow-hidden mb-5">
                            <div
                                className="progress h-5 bg-green-800 transition-all duration-300 ease-in-out"
                                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                            />
                        </div>
                        <h2 className="mb-4">{questions[currentQuestion].question}</h2>
                        <ol className="list-lower-alpha p-0">
                            {questions[currentQuestion].options.map((option, index) => (
                                <li key={index} className="mb-2">
                                    <button
                                        className={`w-full py-2 px-4 text-left rounded border transition-colors duration-300 ${selectedOption === option
                                            ? option === questions[currentQuestion].correct_answer
                                                ? 'bg-green-600 border-green-600 text-white'
                                                : 'bg-red-600 border-red-600 text-white'
                                            : 'bg-white border-gray-300 text-black hover:bg-gray-200'
                                            }`}
                                        onClick={() => handleAnswer(option)}
                                        disabled={selectedOption !== null}
                                    >
                                        {option}
                                    </button>
                                </li>
                            ))}
                        </ol>
                        <div className='flex justify-between items-center gap-5 mt-4'>

                            {currentQuestion > 0 ? (<button
                                className="mx-auto py-2 px-5 text-base rounded border-none bg-indigo-600 text-white transition-colors duration-300 hover:bg-indigo-700"
                                onClick={handlePrevQuestion}
                            >
                                Previous Question
                            </button>) : (
                                <div> </div>
                            )}
                            
                            <button
                                className="mx-auto py-2 px-5 text-base rounded border-none bg-indigo-600 text-white transition-colors duration-300 hover:bg-indigo-700"
                                onClick={handleNextQuestion}
                            >
                                {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                            </button>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;
