import React, { useEffect, useState } from 'react';
import './Booking.css';
import QR from './image/qrcode.png';
import axios from 'axios';

const ROOMS = [
  { type: 'ห้องพัดลม', price: 100 },
  { type: 'ห้องเตียงคู่อากาศ', price: 250 },
  { type: 'ห้องใหญ่', price: 450 },
];

const CONFIRMATION_DETAILS = [
  { id: 1, text: 'ต้องการใช้กล้อง', additionalPrice: 50 },
  { id: 2, text: 'ไม่ต้องการใช้กล้อง', additionalPrice: 0 },
];

export default function Booking() {
  const [step, setStep] = useState('selectDate');
  const [selectedRoom, setSelectedRoom] = useState({});
  const [additionalPrice, setAdditionalPrice] = useState(0);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertToBase64(file);
    setSelectedFile(base64);
  };

  const handleUpload = () => {
    const base64Data = selectedFile.split(',')[1];
    const reservationData = {
      roomType: selectedRoom.type,
      price: selectedRoom.price + additionalPrice,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      confirmationDetails: 'Your confirmation details here',
      name: nameInput,
      email: emailInput,
      phoneNumber: phoneInput,
      selectedFile: base64Data
    };

    axios.post('http://localhost:3001/api/reservations', reservationData)
      .then(response => {
        console.log('Reservation saved:', response.data);
        setStep('Done');
      })
      .catch(error => {
        console.error('Error saving reservation:', error);
      });
  };

  useEffect(() => {
    console.log(selectedFile)
  }, [selectedFile]);

  const handleRoomSelection = (room) => {
    setSelectedRoom(room);
    setStep('selectConfirmation');
  };

  const handleConfirmationDetail = (detail) => {
    setAdditionalPrice(detail.additionalPrice);
    setStep('enterDetails');
  };

  const handleFinalConfirmation = () => {
    setStep('Upload');
  };

  const handleSubmit = () => {
    console.log(`Check-In Date: ${checkInDate}, Check-Out Date: ${checkOutDate}`);
    setStep('selectRoom');
  };

  if (step === 'selectDate') {
    return (
      <div className="container">
        <h1 className="title">เลือกวันที่ต้องการเข้าพัก</h1>
        <div className="input-group">
          <div>วันเช็คอิน</div>
          <input 
            type="date" 
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            className="input-date" 
          />
          <div>วันเช็คเอาท์</div>
          <input 
            type="date" 
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            className="input-date" 
          />
        </div>
        <button className="btn-submit" onClick={handleSubmit}>ค้นหา</button>
      </div>
    );
  } else if (step === 'selectRoom') {
    return (
      <div className="container_b">
        <h1 className="title">เลือกห้องพัก</h1>
        <div className="room-selection">
          {ROOMS.map((room) => (
            <div className="room-card" key={room.type} onClick={() => handleRoomSelection(room)}>
              <div className="room-image">
                <img src="https://placehold.co/100" alt="Placeholder for Room" />
              </div>
              <div className="room-info">{room.type}</div>
              <div className="room-price">{room.price}บ./คืน/สูงสุด Xคน</div>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (step === 'selectConfirmation') {
    return (
      <div className="container_b">
        <h1 className="title">เลือกบริการเสริมสำหรับช่วงเวลาพัก</h1>
        <div className="confirmation-selection">
          {CONFIRMATION_DETAILS.map((detail) => (
            <div className="confirmation-detail" key={detail.id} onClick={() => handleConfirmationDetail(detail)}>
              {detail.text} + {detail.additionalPrice}บาท
            </div>
          ))}
        </div>
      </div>
    );
  } else if (step === 'enterDetails') {
    return (
      <div className="container_b">
        <h1 className="title">ข้อมูลผู้เข้าพัก</h1>
        <form className="booking-form">
          <input type="text" placeholder="ชื่อ-นามสกุล" className="form-input" onChange={(e) => setNameInput(e.target.value)} />
          <input type="text" placeholder="อีเมล" className="form-input" onChange={(e) => setEmailInput(e.target.value)} />
          <input type="text" placeholder="หมายเลขโทรศัพท์" className="form-input" onChange={(e) => setPhoneInput(e.target.value)} />
        </form>
        <div className="confirmation">
          <button className="btn-confirm" onClick={handleFinalConfirmation}>ยืนยัน</button>
        </div>
        <div className="price-summary">
          ราคารวม <span className="price">{selectedRoom.price + additionalPrice}บาท</span>
        </div>
      </div>
    );
  } else if (step === 'Upload') {
    return (
      <div className="container">
        <div>Upload Slip</div>
        <img style={{ width: 120, height: 100 }} src={QR} alt="QR" />
        <div>พร้อมเพย์ : 09xxxxxxxx</div>
        <input
          type="file"
          onChange={handleFileChange}
          className="input-file"
        />
        <button
          onClick={handleUpload}
          className="button-upload"
        >
          ยืนยันการชำระเงิน
        </button>
        {selectedFile && (
          <div className="file-name">
            {selectedFile.name}
          </div>
        )}
      </div>
    );
  } else if (step === 'Done') {
    return (
      <div className="done-container">
        <div className="done-icon">
          <i className="fas fa-check-circle"></i>
        </div>
        <div className="done-message">
          ชำระเงินเสร็จสิ้น
        </div>
        <button className="done-button"><a href='/'>กลับหน้าหลัก</a></button>
      </div>
    );
  }
}