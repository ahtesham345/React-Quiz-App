import React, { useContext } from 'react'
import ExamList from '../components/ExamList'
import GlobalContext from '../context/GlobalContext'
import LoginModal from '../components/LoginModal'

function Categories() {
    const {
        openModal,
        setOpenModal,
    } = useContext(GlobalContext)
  return (
    <div>
      <div className="bg-white">
        <div className="px-6 py-10 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome to scoorly (category list).<br/></h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">More than 10 categories</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Signup for free</button> */}
              {/* <button onClick={()=>setOpenModal(!openModal)} className="text-sm font-semibold leading-6 text-gray-900">login <span aria-hidden="true">→</span></button> */}
            </div>
          </div>
        </div>
      </div>
        <ExamList/>

<LoginModal/>
    </div>
  )
}

export default Categories
