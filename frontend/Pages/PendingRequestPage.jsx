import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const PendingRequestPage = () => {
  return (
    <div className='flex flex-col justify-center relative mx-10'>
        <div className='mt-12'>
          
        </div>
        <h1 className='text-3xl poppins mb-12'>
            <Link to={'/book'}>
                <FontAwesomeIcon className='mr-2' size='1x' icon={faArrowLeft}/>
            </Link>  
            Pending Request
        </h1>
        <div class="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead class="poppins text-md text-white bg-blue-700">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Artist
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Service Requested
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Cancel</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="px-6 py-4 font-semibold text-black whitespace-nowrap">
                            SonaOne
                        </th>
                        <td class="px-6 py-4">
                            in review
                        </td>
                        <td class="px-6 py-4">
                            Event
                        </td>
                        <td class="px-6 py-4">
                            2 May 2024
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Cancel</a>
                        </td>
                    </tr>

                    <tr class="bg-white border hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="px-6 py-4 font-semibold text-black whitespace-nowrap">
                            Altimet
                        </th>
                        <td class="px-6 py-4">
                            in review
                        </td>
                        <td class="px-6 py-4">
                            Ambassador
                        </td>
                        <td class="px-6 py-4">
                            28 Disember 2024
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Cancel</a>
                        </td>
                    </tr>

                    <tr class="bg-white border hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="px-6 py-4 font-semibold text-black whitespace-nowrap">
                            Faizal Tahir
                        </th>
                        <td class="px-6 py-4">
                            in review
                        </td>
                        <td class="px-6 py-4">
                            Collaboration
                        </td>
                        <td class="px-6 py-4">
                            12 Jun 2024
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Cancel</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default PendingRequestPage