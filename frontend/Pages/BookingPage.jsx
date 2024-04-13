import React from 'react'
import BookingList from '../Components/BookingList'

const BookingPage = () => {

const data = [
        {
          name: 'John',
          genre: ['Rock', 'Pop'],
          description: '',
          service: ['Ambassador', 'Event', 'Collaboration']
        },
        {
          name: 'Alice',
          genre: ['Jazz', 'Blues'],
          description: 'Professional musician with a passion for jazz and blues.',
          service: ['Event', 'Collaboration']
        },
        {
          name: 'Emily',
          genre: ['Classical', 'Opera'],
          description: 'Experienced classical vocalist specializing in opera performances.',
          service: ['Ambassador', 'Collaboration']
        }
      ];
      

 const dummtText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odio ut exercitationem consequuntur facilis voluptatum laboriosam alias officiis veritatis maiores corrupti recusandae, expedita, molestias nostrum incidunt explicabo tenetur reiciendis. Voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit.'
 const service = ['Ambassador','Event']
  return (
    <div>
        {data.map(data =>(
            <BookingList name={data.name} genre={data.genre} description={data.description} image={'melanie.jpg'} serviceTag={data.service}/>
        ))}

        
    </div>
  )
}

export default BookingPage