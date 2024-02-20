//import React from 'react'

const NewRequisition = () => {
  return (
    <div>
<div className="pl-72 overflow-hidden bg-white border border-gray-200 rounded-xl">
                                    <div className="px-4 py-5 sm:p-6">
                                        <p className="mt-6 text-xs font-semibold tracking-widest text-indigo-600 uppercase">New requisition</p>
                                        <p className="mt-6 text-lg font-medium text-gray-900"><span className="font-bold">Ziminya Site</span> is requesting a disc harrow.</p>
                                        <p className="mt-3 text-sm font-medium text-gray-500">Requisition passed by the Site Agent.</p>
                                        <div className="flex items-center mt-6 space-x-4">
                                            <button
                                                type="button"
                                                className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold leading-5 text-gray-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                            >
                                                Contact
                                            </button>

                                            <button
                                                type="button"
                                                className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-700"
                                            >
                                                Accept
                                            </button>
                                        </div>
                                    </div>
                                </div>

    </div>
  )
}

export default NewRequisition