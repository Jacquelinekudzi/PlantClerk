//import React from 'react'
import { HiOutlineStatusOnline } from "react-icons/hi";
//import { GrUserAdmin } from "react-icons/gr";
//import { HiOutlineStatusOnline } from "react-icons/hi";
//import { FaDownload } from "react-icons/fa6";
import { GiBreakingChain } from "react-icons/gi";

const Dashboard = () => {
  return (
    <div className="pl-72" >


      <div className="grid grid-cols-6 gap-4">
  <div className="col-start-2 col-span-4 ..."></div>

  <div className="col-start-1 col-end-3 ...">
  <div className="overflow-hidden border border-indigo-200 bg-indigo-50 rounded-xl">
                                    <div className="px-5 py-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="flex text-sm font-medium text-gray-500"><HiOutlineStatusOnline style={{ marginRight: '8px', fontSize: '20px', color: 'green' }}/>Active Plant</p>
                                                <p className="mt-2 text-xl font-bold text-gray-900">1, 693 Runnimg</p>
                                            </div>

                                            <div></div>
                                        </div>
                                    </div>
                                </div>

  </div>

  <div className="col-end-7 col-span-2 ...">
  <div className="overflow-hidden border border-indigo-200 bg-indigo-50 rounded-xl mr-4">
                                    <div className="px-5 py-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="flex text-sm font-medium text-gray-500"><HiOutlineStatusOnline style={{ marginRight: '8px', fontSize: '20px', color: 'green' }}/>Total Plant</p>
                                                <p className="mt-2 text-xl font-bold text-gray-900">2, 500 in total</p>
                                            </div>

                                            <div></div>
                                        </div>
                                    </div>
                                </div>
  </div>

  <div className="col-start-1 col-end-7 ...">
  <div className="overflow-hidden bg-white border border-gray-200 lg:col-span-6 rounded-xl">
                                <div className="px-4 py-5 sm:p-6">
                                    <div className="sm:flex sm:items-start sm:justify-between">
                                        <div>
                                            <p className="flex text-base font-bold text-gray-900"><GiBreakingChain style={{ marginRight: '8px', fontSize: '22px' }}/>MAJOR BREAKDOWNS</p>
                                            <p className="mt-1 text-sm font-medium text-gray-500">Equipment which is on breakdown and their statuses.</p>
                                        </div>

                                        <div className="mt-4 sm:mt-0">
                                            <a href="#" title="" className="inline-flex items-center text-xs font-semibold tracking-widest text-gray-500 uppercase hover:text-gray-900">
                                                See all Breakdowns
                                                <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="divide-y divide-gray-200">
                                    <div className="grid grid-cols-3 py-4 gap-y-4 lg:gap-0 lg:grid-cols-6">
                                        <div className="col-span-2 px-4 lg:py-4 sm:px-6 lg:col-span-1">
                                            <span className="text-xs font-medium text-green-900 bg-green-100 rounded-full inline-flex items-center px-2.5 py-1">
                                                <svg className="-ml-1 mr-1.5 h-2.5 w-2.5 text-green-500" fill="currentColor" viewBox="0 0 8 8">
                                                    <circle cx="4" cy="4" r="3"></circle>
                                                </svg>
                                                PROGRESS
                                            </span>
                                        </div>

                                        <div className="px-4 text-right lg:py-4 sm:px-6 lg:order-last">
                                            <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6 lg:col-span-2">
                                            <p className="text-sm font-bold text-gray-900">HOHAN TIPPER</p>
                                            <p className="mt-1 text-sm font-medium text-gray-500">FLT 102</p>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6">
                                            <p className="text-sm font-bold text-gray-900">ALTERNATOR BELT</p>
                                            <p className="mt-1 text-sm font-medium text-gray-500">Feb 17, 2024</p>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6">
                                            <p className="mt-1 text-sm font-medium text-gray-500">TEFOMA</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 py-4 gap-y-4 lg:gap-0 lg:grid-cols-6">
                                        <div className="col-span-2 px-4 lg:py-4 sm:px-6 lg:col-span-1">
                                            <span className="text-xs font-medium text-green-900 bg-green-100 rounded-full inline-flex items-center px-2.5 py-1">
                                                <svg className="-ml-1 mr-1.5 h-2.5 w-2.5 text-green-500" fill="currentColor" viewBox="0 0 8 8">
                                                    <circle cx="4" cy="4" r="3"></circle>
                                                </svg>
                                                PROGRESS
                                            </span>
                                        </div>

                                        <div className="px-4 text-right lg:py-4 sm:px-6 lg:order-last">
                                            <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6 lg:col-span-2">
                                            <p className="text-sm font-bold text-gray-900">CAT EXCAVATOR</p>
                                            <p className="mt-1 text-sm font-medium text-gray-500">FCX 17</p>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6">
                                            <p className="text-sm font-bold text-gray-900">BUCKET BROKEN</p>
                                            <p className="mt-1 text-sm font-medium text-gray-500">FEB 12, 2024</p>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6">
                                            <p className="mt-1 text-sm font-medium text-gray-500">HEBE P4</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 py-4 gap-y-4 lg:gap-0 lg:grid-cols-6">
                                        <div className="col-span-2 px-4 lg:py-4 sm:px-6 lg:col-span-1">
                                            <span className="text-xs font-medium text-yellow-900 bg-yellow-100 rounded-full inline-flex items-center px-2.5 py-1">
                                                <svg className="-ml-1 mr-1.5 h-2.5 w-2.5 text-yellow-400" fill="currentColor" viewBox="0 0 8 8">
                                                    <circle cx="4" cy="4" r="3"></circle>
                                                </svg>
                                                PENDING
                                            </span>
                                        </div>

                                        <div className="px-4 text-right lg:py-4 sm:px-6 lg:order-last">
                                            <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6 lg:col-span-2">
                                            <p className="text-sm font-bold text-gray-900">HOHAN TIPPER</p>
                                            <p className="mt-1 text-sm font-medium text-gray-500">FLT 52</p>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6">
                                            <p className="text-sm font-bold text-gray-900">TYRE BURST</p>
                                            <p className="mt-1 text-sm font-medium text-gray-500">Jan 17, 2024</p>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6">
                                            <p className="mt-1 text-sm font-medium text-gray-500">ZIMINYA</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 py-4 gap-y-4 lg:gap-0 lg:grid-cols-6">
                                        <div className="col-span-2 px-4 lg:py-4 sm:px-6 lg:col-span-1">
                                            <span className="text-xs font-medium text-red-900 bg-red-100 rounded-full inline-flex items-center px-2.5 py-1">
                                                <svg className="-ml-1 mr-1.5 h-2.5 w-2.5 text-red-500" fill="currentColor" viewBox="0 0 8 8">
                                                    <circle cx="4" cy="4" r="3"></circle>
                                                </svg>
                                                DECOMISSIONED
                                            </span>
                                        </div>

                                        <div className="px-4 text-right lg:py-4 sm:px-6 lg:order-last">
                                            <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6 lg:col-span-2">
                                            <p className="text-sm font-bold text-gray-900">VOLVO EXCAVATOR</p>
                                            <p className="mt-1 text-sm font-medium text-gray-500">SXE 22</p>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6">
                                            <p className="text-sm font-bold text-gray-900">OVERHEATING</p>
                                            <p className="mt-1 text-sm font-medium text-gray-500">Jan 17, 2023</p>
                                        </div>

                                        <div className="px-4 lg:py-4 sm:px-6">
                                            <p className="mt-1 text-sm font-medium text-gray-500">TEFOMA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

  </div>
</div>


  </div>
  )
}

export default Dashboard