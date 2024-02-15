import React,{ useContext,useState } from 'react'
import ExamList from '../ExamList'
import GlobalContext from '../../context/GlobalContext'
import LoginModal from '../LoginModal'
import { FaBeer, FaBolt, FaBookmark, FaCheckSquare } from "react-icons/fa";
import { Button, Tooltip } from 'flowbite-react';
import { quizQuestions } from '../../utils/quizQuestions';
import { Pagination } from 'flowbite-react';


function Questions() {
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 1; // Number of questions per page

  const onPageChange = (page) => {
    console.log("triggered");
    setCurrentPage(page);
  };

  // Move these calculations inside the component body
  const startQuestionIndex = (currentPage - 1) * questionsPerPage;
  const endQuestionIndex = startQuestionIndex + questionsPerPage;

  const currentQuestions = quizQuestions.exams[0].questions.slice(
    startQuestionIndex,
    endQuestionIndex
  );


  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <div>
        <div className="bg-white">
        <div className="px-6 pt-12 sm:px-6 sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-md sm:max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">Quiz in Progress! Best of luck with the questions!</h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-10">
      <div className="w-[300px] sm:w-[1200px] sm:mx-auto mt-12 md:mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {quizQuestions.exams.map((exam) => (
          <div key={exam.id} className="my-1 sm:my-4 mx-1 sm:mx-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex flex-row mb-3">
                <h1 className="text-xl sm:text-2xl font-bold">Q{exam.questions[0].No}:</h1>
                <p className="max-w-xl text-xl sm:text-lg leading-0 sm:leading-8 text-gray-600 mx-3">
                  {exam.questions[0].question} {/* Displaying the first question for example */}
                </p>
              </div>
              <div className="flex gap-x-4  sm:space-x-10 transition-all mt-2">
  <Tooltip content="Bookmark">
    <Button className="text-white w-8 md:w-full bg-indigo-600 border border-gray-200 p-2 px-8" style={{ opacity: 0.7 }}>
      <FaBookmark className="" />
    </Button>
  </Tooltip>
  <Tooltip content="Answer">
    <Button className="text-white w-8 md:w-full bg-indigo-600 border border-gray-200 p-2 px-8" style={{ opacity: 0.7 }}>
      <FaCheckSquare className="" />
    </Button>
  </Tooltip>
  <Tooltip content="Bolt">
    <Button className="text-white w-8 md:w-full bg-indigo-600 border border-gray-200 p-2 px-8" style={{ opacity: 0.7 }}>
      <FaBolt />
    </Button>
  </Tooltip>
</div>
 </div>
 <div className="flex flex-col mt-5">
  <h2 className='text-green-400 text-2xl font-bold mb-5'>Answers:</h2>
  {exam.questions[0].options.map((option, index) => (
    <div key={index} className="flex flex-row space-x-2 my-5">
      <Button
        className={`bg-${selectedAnswer === option && selectedAnswer === exam.questions[0].correctAnswer ? 'green-500' : 'indigo-600'} text-white rounded-md`}
        onClick={() => handleAnswerClick(option)}
      >
        <h2 className='text-xl font-medium'>{exam.questions[0].option[index]}</h2>
      </Button>
      <p className='text-gray-400 mt-3'>{option}</p>
    </div>
  ))}
</div>



          </div>
        ))}
 <div className="flex overflow-x-auto sm:justify-center mb-3">
        <Pagination
          layout="pagination"
          currentPage={currentPage}
          totalPages={Math.ceil(
            quizQuestions.exams[0].questions.length / questionsPerPage
          )}
          onPageChange={onPageChange}
          previousLabel="Go back"
          nextLabel="Go forward"
          showIcons
        />
      </div>
      </div>
    </div>

    </div>
  )
  }


export default Questions
