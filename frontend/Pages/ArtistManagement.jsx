import React from 'react'


const data = [
    {
    id:'1',    
    firstname: 'Ahmad',
    lastname : 'Aladdin',
    bookingDate : new Date('1-5-2024'),
    serviceRequest : 'Collaboration',
    email: 'ahmad@gmail.com',
    mobileNumber : '0132384775',
    requesDetail : '',
    attactchments : '',
    }
]

const ArtistManagement = () => {

    
  return (
    <div>
        <table>
            <thead className="poppins text-md text-white bg-blue-700">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Booking Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Service Requested
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Mobile Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>

                        </tr>
                </thead>

                <tbody>
                    {data.map(bookingData => (
                        <tr className="bg-white border hover:bg-gray-50 text-black dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-semibold  whitespace-nowrap">
                                {bookingData.id}
                            </th>
                            <td className="px-6 py-4">
                                {bookingData.id}
                            </td>
                            <td className="px-6 py-4">
                                {bookingData.id}
                            </td>
                            <td className="px-6 py-4">
                                {bookingData.id}
                            </td>
                            <td className="px-6 py-4 text-right">
                                {bookingData.id}
                            </td>
                            <td className="px-6 py-4 text-right">
                                {bookingData.id}
                            </td>
                            <td className="px-6 py-4 text-right">
                                {bookingData.id}
                            </td>
                        </tr>
                    ))}
                </tbody>
        </table>
    </div>
  )
}

export default ArtistManagement