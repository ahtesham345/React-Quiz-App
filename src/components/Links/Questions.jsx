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

  const onPageChange = (page) => setCurrentPage(page);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };
    const {
        openModal,
        setOpenModal,
    } = useContext(GlobalContext)
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
                <h1 className="text-sm sm:text-2xl font-bold">Q{exam.id}:</h1>
                <p className="max-w-xl text-sm sm:text-lg leading-0 sm:leading-8 text-gray-600 mx-3 mt-1">
                  {exam.questions[0].question} {/* Displaying the first question for example */}
                </p>
              </div>
              <div className="sm:flex justify-end sm:space-x-10 transition-all mt-2">
  <Tooltip content="Bookmark">
    <Button className="text-white bg-indigo-600 border border-gray-200 p-2 px-8" style={{ opacity: 0.7 }}>
      <FaBookmark className="" />
    </Button>
  </Tooltip>
  <Tooltip content="Answer">
    <Button className="text-white bg-indigo-600 border border-gray-200 p-2 px-8" style={{ opacity: 0.7 }}>
      <FaCheckSquare className="" />
    </Button>
  </Tooltip>
  <Tooltip content="Bolt">
    <Button className="text-white bg-indigo-600 border border-gray-200 p-2 px-8" style={{ opacity: 0.7 }}>
      <FaBolt />
    </Button>
  </Tooltip>
</div>
 </div>
            <div className="flex flex-col mt-5">
      <h2 className='text-green-400 text-2xl font-bold mb-5'>Answers:</h2>
      <div className="flex flex-row space-x-2">
        <Button
          className={`bg-${selectedAnswer === 'A' ? 'green-500' : 'indigo-600'} text-white   rounded-md`}
          onClick={() => handleAnswerClick('A')}
        >
          <h2 className='text-xl font-medium'>A</h2>
        </Button>
        <p className='text-gray-400 mt-3'>Electronic Data Processing Machine</p>
      </div>
      <div className="flex flex-row space-x-2 my-5">
        <Button
          className={`bg-${selectedAnswer === 'B' ? 'green-500' : 'indigo-600'} text-white rounded-md`}
          onClick={() => handleAnswerClick('B')}
        >
          <h2 className='text-xl font-medium'>B</h2>
        </Button>
        <p className='text-gray-400 mt-3 p-1'>Electronic Device Processing Machine</p>
      </div>
      <div className="flex flex-row space-x-2">
        <Button
          className={`bg-${selectedAnswer === 'C' ? 'green-500' : 'indigo-600'} text-white rounded-md`}
          onClick={() => handleAnswerClick('C')}
        >
          <h2 className='text-xl font-medium'>C</h2>
        </Button>
        <p className='text-gray-400 mt-1 p-1'>Electronic Information Processing Machine</p>
      </div>
      <div className="flex flex-row space-x-2 my-5">
        <Button
          className={`bg-${selectedAnswer === 'D' ? 'green-500' : 'indigo-600'} text-white  rounded-md`}
          onClick={() => handleAnswerClick('D')}
        >
          <h2 className='text-xl font-medium'>D</h2>
        </Button>
        <p className='text-gray-400 w-80 mt-1 p-1'>Electronic System Processing Machine</p>
      </div>
    </div>
          </div>
        ))}
    <div className="flex overflow-x-auto sm:justify-center mb-3">
      <Pagination
        layout="pagination"
        currentPage={currentPage}
        totalPages={1000}
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
