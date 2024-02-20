//import React from 'react'
//import { GrUserAdmin } from "react-icons/gr";
//import { HiOutlineStatusOnline } from "react-icons/hi";
import { FaDownload } from "react-icons/fa6";
//import { GiBreakingChain } from "react-icons/gi";

const Reports = () => {
  return (
    <div className="pl-72 overflow-hidden border border-gray-200 lg:col-span-3 bg-gray-50 rounded-xl">
                                <div className="px-4 py-5 sm:p-6">
                                    <p className="text-base font-bold text-gray-900">Download Reports</p>
                                    <p className="mt-1 text-sm font-medium text-gray-500">Get pdf versions of reports for further analysis</p>

                                    <div className="mt-6 space-y-3">
                                        <div className="overflow-hidden bg-white border border-gray-200 rounded-xl">
                                            <div className="px-4 py-4">
                                                <div className="flex items-center justify-between space-x-5">
                                                    <div className="flex items-center flex-1">
                                                        
                                                        <div className="flex-1 min-w-0 ml-4">
                                                            <p className="text-sm font-bold text-gray-900 truncate">Daily Diary</p>
                                                            <p className="mt-1 text-sm font-medium text-gray-500 truncate">Today&apos;s Activities</p>
                                                        </div>
                                                    </div>

                                                    <div className="ml-auto">
                                                        <button
                                                            type="button"
                                                            className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold leading-4 text-indigo-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                                                        >
                                                            <FaDownload style={{ marginRight: '8px', fontSize: '20px' }}/>
                                                            PDF
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="overflow-hidden bg-white border border-gray-200 rounded-xl">
                                            <div className="px-4 py-4">
                                                <div className="flex items-center justify-between space-x-5">
                                                    <div className="flex items-center flex-1">
                                                        <div className="flex-1 min-w-0 ml-4">
                                                            <p className="text-sm font-bold text-gray-900 truncate">Weekly Report</p>
                                                            <p className="mt-1 text-sm font-medium text-gray-500 truncate">Summary for the week</p>
                                                        </div>
                                                    </div>

                                                    <div className="ml-auto">
                                                        <button
                                                            type="button"
                                                            className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold leading-4 text-indigo-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                                                        >
                                                            <FaDownload style={{ marginRight: '8px', fontSize: '20px' }}/>
                                                            PDF
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="overflow-hidden bg-white border border-gray-200 rounded-xl">
                                            <div className="px-4 py-4">
                                                <div className="flex items-center justify-between space-x-5">
                                                    <div className="flex items-center flex-1">
                                                        
                                                        <div className="flex-1 min-w-0 ml-4">
                                                            <p className="text-sm font-bold text-gray-900 truncate">Monthly Report</p>
                                                            <p className="mt-1 text-sm font-medium text-gray-500 truncate">Progress review for the whole month</p>
                                                        </div>
                                                    </div>

                                                    <div className="ml-auto">
                                                        <button
                                                            type="button"
                                                            className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold leading-4 text-indigo-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                                                        >
                                                            <FaDownload style={{ marginRight: '8px', fontSize: '20px' }}/>
                                                            PDF
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
  )
}

export default Reports