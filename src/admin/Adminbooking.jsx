
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminBooking() {
  const [bookingData, setBookingData] = useState([]);

  // Function to fetch booking data from the database
  const fetchBookingData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/reservations');
      setBookingData(response.data.map(booking => ({
        ...booking,
        imageUrl: booking.selectedFile ? `data:image/jpeg;base64,${booking.selectedFile}` : null
      })));
    } catch (error) {
      console.error('Error fetching booking data:', error);
    }
  };

  // useEffect to run the fetch function when the component mounts
  useEffect(() => {
    fetchBookingData();
  }, []);

  return (
    <div>
      <h1>Booking Information</h1>
      <div>
        {bookingData.map((booking, index) => (
          <div key={index}>
            <p>Room Type: {booking.roomType}</p>
            <p>Price: {booking.price}</p>
            <p>Check In: {booking.checkInDate}</p>
            <p>Check Out: {booking.checkOutDate}</p>
            <p>Name: {booking.name}</p>
            <p>Email: {booking.email}</p>
            <p>Phone: {booking.phoneNumber}</p>
            {booking.imageUrl && (
              <img
                src={booking.imageUrl}
                alt="Booking Image"
                style={{ maxWidth: '100px' }}
              />
            )}
            {booking.confirmationDetails && (
              <p>Confirmation Details: {booking.confirmationDetails}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
