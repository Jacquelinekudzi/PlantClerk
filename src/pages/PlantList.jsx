//import React from 'react'

const PlantList = () => {
  return (
    <div>

<div className="pl-72 py-12 bg-white sm:py-16 lg:py-20">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-gray-900">Tefoma Plant List</p>

            <div className="inline-flex items-center justify-end">
                <label htmlFor="sort" className="text-sm font-medium text-gray-900"> Sort: </label>
                <select id="sort" name="sort" className="block w-full py-2 pl-1 pr-10 text-base border-gray-300 border-none rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                    <option>Recently Used</option>
                </select>
            </div>
        </div>

        <div className="flex flex-col mt-4 lg:mt-8">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <table className="min-w-full lg:divide-y lg:divide-gray-200">
                        <thead className="hidden lg:table-header-group">
                            <tr>
                                <th className="py-3.5 pl-4 pr-3 text-left text-sm whitespace-nowrap font-medium text-gray-500 sm:pl-6 md:pl-0">
                                    <div className="flex items-center">
                                        FLEET ID
                                        <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                        </svg>
                                    </div>
                                </th>

                                <th className="py-3.5 px-3 text-left text-sm whitespace-nowrap font-medium text-gray-500">
                                    <div className="flex items-center">
                                        PLANT NAME
                                        <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                        </svg>
                                    </div>
                                </th>

                                <th className="py-3.5 px-3 text-left text-sm whitespace-nowrap font-medium text-gray-500">
                                    <div className="flex items-center">
                                        REG NUMBER
                                        <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                        </svg>
                                    </div>
                                </th>

                                <th className="py-3.5 px-3 text-left text-sm whitespace-nowrap font-medium text-gray-500">
                                    <div className="flex items-center">
                                        DATE ADDED
                                        <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                        </svg>
                                    </div>
                                </th>

                                <th className="py-3.5 px-3 text-left text-sm whitespace-nowrap font-medium text-gray-500">
                                    <div className="flex items-center">
                                        MAKE
                                        <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                        </svg>
                                    </div>
                                </th>

                               

                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="hidden py-4 pl-4 pr-3 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap sm:pl-6 md:pl-0">#29345</td>

                                <td className="px-4 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                    <div className="inline-flex items-center">
                                        <img className="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-list/1/clarity-landing-logo.png" alt="" />
                                        Clarity Landing UI Kit
                                    </div>
                                    <div className="space-y-1 lg:hidden pl-11">
                                        <p className="text-sm font-medium text-gray-500">#29345</p>
                                        <p className="text-sm font-medium text-gray-500">07 January, 2022</p>
                                    </div>
                                </td>

                                <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">Tipper 01</td>

                                <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">07 January, 2022</td>

                                <td className="hidden px-4 py-4 text-sm font-bold text-gray-900 lg:table-cell whitespace-nowrap">Howo</td>

                                

                                <td className="px-4 py-4 text-sm font-medium text-right text-gray-900 whitespace-nowrap">
                                    <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                        </svg>
                                    </button>
                                    <div className="mt-1 lg:hidden">
                                        <p></p>
                                        <div className="inline-flex items-center justify-end mt-1">
                                            <svg className="mr-1.5 h-2.5 w-2.5 text-green-500" fill="currentColor" viewBox="0 0 8 8">
                                                <circle cx="4" cy="4" r="3" />
                                            </svg>
                                            
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className="hidden py-4 pl-4 pr-3 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap sm:pl-6 md:pl-0">#23848</td>

                                <td className="px-4 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                    <div className="inline-flex items-center">
                                        <img className="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-list/1/clarity-ecommerce-logo.png" alt="" />
                                        Clarity eCommerce UI Kit
                                    </div>
                                    <div className="space-y-1 lg:hidden pl-11">
                                        <p className="text-sm font-medium text-gray-500">#29345</p>
                                        <p className="text-sm font-medium text-gray-500">07 January, 2022</p>
                                    </div>
                                </td>

                                <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">Tribute Ayla</td>

                                <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">07 January, 2022</td>

                                <td className="hidden px-4 py-4 text-sm font-bold text-gray-900 lg:table-cell whitespace-nowrap">Cat 51</td>

                                

                                <td className="px-4 py-4 text-sm font-medium text-right text-gray-900 whitespace-nowrap">
                                    <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                        </svg>
                                    </button>
                                    <div className="mt-1 lg:hidden">
                                        <p></p>
                                        
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className="hidden py-4 pl-4 pr-3 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap sm:pl-6 md:pl-0">#23466</td>

                                <td className="px-4 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                    <div className="inline-flex items-center">
                                        <img className="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-list/1/clarity-ecommerce-logo.png" alt="" />
                                        Clarity eCommerce UI Kit
                                    </div>
                                    <div className="space-y-1 lg:hidden pl-11">
                                        <p className="text-sm font-medium text-gray-500">#29345</p>
                                        <p className="text-sm font-medium text-gray-500">07 January, 2022</p>
                                    </div>
                                </td>

                                <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">Tavonga Nyasha</td>

                                <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">06 January, 2022</td>

                                <td className="hidden px-4 py-4 text-sm font-bold text-gray-900 lg:table-cell whitespace-nowrap">Howo</td>

                               

                                <td className="px-4 py-4 text-sm font-medium text-right text-gray-900 whitespace-nowrap">
                                    <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                        </svg>
                                    </button>
                                    <div className="mt-1 lg:hidden">
                                        <p></p>
                                        
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className="hidden py-4 pl-4 pr-3 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap sm:pl-6 md:pl-0">#19394</td>

                                <td className="px-4 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                    <div className="inline-flex items-center">
                                        <img className="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-list/1/clarity-landing-logo.png" alt="" />
                                        Clarity Landing UI Kit
                                    </div>
                                    <div className="space-y-1 lg:hidden pl-11">
                                        <p className="text-sm font-medium text-gray-500">#29345</p>
                                        <p className="text-sm font-medium text-gray-500">07 January, 2022</p>
                                    </div>
                                </td>

                                <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">Annette Black</td>

                                <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">05 January, 2022</td>

                                <td className="hidden px-4 py-4 text-sm font-bold text-gray-900 lg:table-cell whitespace-nowrap">$49.00</td>

                              

                                <td className="px-4 py-4 text-sm font-medium text-right text-gray-900 whitespace-nowrap">
                                    <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                        </svg>
                                    </button>
                                    <div className="mt-1 lg:hidden">
                                        <p>$49.00</p>
                                        
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className="hidden py-4 pl-4 pr-3 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap sm:pl-6 md:pl-0">#19217</td>

                                <td className="px-4 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                    <div className="inline-flex items-center">
                                        <img className="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-list/1/clarity-landing-logo.png" alt="" />
                                        jkugvhjjjgg
                                    </div>
                                    <div className="space-y-1 lg:hidden pl-11">
                                        <p className="text-sm font-medium text-gray-500">#29345</p>
                                        <p className="text-sm font-medium text-gray-500">07 January, 2022</p>
                                    </div>
                                </td>

                                <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">Jane Cooper</td>

                                <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">05 January, 2022</td>

                                <td className="hidden px-4 py-4 text-sm font-bold text-gray-900 lg:table-cell whitespace-nowrap">$59.00</td>

                                <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                    
                                </td>

                                <td className="px-4 py-4 text-sm font-medium text-right text-gray-900 whitespace-nowrap">
                                    <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                        </svg>
                                    </button>
                                    <div className="mt-1 lg:hidden">
                                        <p>$59.00</p>
                                       
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className="hidden py-4 pl-4 pr-3 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap sm:pl-6 md:pl-0">#18333</td>

                                <td className="px-4 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                    <div className="inline-flex items-center">
                                        <img className="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-list/1/clarity-landing-logo.png" alt="" />
                                        Clarity Landing UI Kit
                                    </div>
                                    <div className="space-y-1 lg:hidden pl-11">
                                        <p className="text-sm font-medium text-gray-500">#29345</p>
                                        <p className="text-sm font-medium text-gray-500">07 January, 2022</p>
                                    </div>
                                </td>

                                <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">Floyd Miles</td>

                                <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">04 January, 2022</td>

                                <td className="hidden px-4 py-4 text-sm font-bold text-gray-900 lg:table-cell whitespace-nowrap">$49.00</td>

                                <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                   
                                </td>

                                <td className="px-4 py-4 text-sm font-medium text-right text-gray-900 whitespace-nowrap">
                                    <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                        </svg>
                                    </button>
                                    <div className="mt-1 lg:hidden">
                                        <p>$49.00</p>
                                        
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className="hidden py-4 pl-4 pr-3 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap sm:pl-6 md:pl-0">#17482</td>

                                <td className="px-4 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                    <div className="inline-flex items-center">
                                        <img className="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-list/1/clarity-ecommerce-logo.png" alt="" />
                                        Clarity eCommerce UI Kit
                                    </div>
                                    <div className="space-y-1 lg:hidden pl-11">
                                        <p className="text-sm font-medium text-gray-500">#29345</p>
                                        <p className="text-sm font-medium text-gray-500">07 January, 2022</p>
                                    </div>
                                </td>

                                <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">Cody Fisher</td>

                                <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">04 January, 2022</td>

                                <td className="hidden px-4 py-4 text-sm font-bold text-gray-900 lg:table-cell whitespace-nowrap">$99.00</td>

                                <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                    
                                </td>

                                <td className="px-4 py-4 text-sm font-medium text-right text-gray-900 whitespace-nowrap">
                                    <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                        </svg>
                                    </button>
                                    <div className="mt-1 lg:hidden">
                                        <p>$99.00</p>
                                        
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default PlantList