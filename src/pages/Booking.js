import React, { useState } from 'react';
import './Booking.css'; // Ensure your CSS file is correctly imported
import QR from './image/qrcode.png';
const ROOMS = [
  { type: 'ห้องพัดลม', price: 100 },
  { type: 'ห้องเตียงคู่อากาศ', price: 250 },
  { type: 'ห้องใหญ่', price: 450 },
];

const CONFIRMATION_DETAILS = [
  { id: 1, text: 'ต้องการใช้กล้อง', additionalPrice: 50 },
  { id: 2, text: 'ไม่ต้องการใช้กล้อง', additionalPrice: 0 },
  // Add more confirmation details as needed
];

export default function Booking() {
  const [step, setStep] = useState('selectDate'); // Start with 'selectDate'
  const [selectedRoom, setSelectedRoom] = useState({});
  const [additionalPrice, setAdditionalPrice] = useState(0);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleRoomSelection = (room) => {
    setSelectedRoom(room);
    setStep('selectConfirmation');
  };

  const handleConfirmationDetail = (detail) => {
    setAdditionalPrice(detail.additionalPrice);
    setStep('enterDetails');
  };

  const handleFinalConfirmation = () => {
    console.log(`Room: ${selectedRoom.type}, Total Price: ${selectedRoom.price + additionalPrice}`);
    setStep('Upload'); // Change step to 'Upload' after final confirmation
  };

  const handleSubmit = () => {
    console.log(`Check-In Date: ${checkInDate}, Check-Out Date: ${checkOutDate}`);
    setStep('selectRoom'); // Move to 'selectRoom' after submitting dates
  };
  const handleUpload = () => {
    // Here you can write the code to upload the selected file
    // For simplicity, let's just log the file information
  
    console.log(selectedFile);
    setStep('Done');
};
const Doneprocess = () => {
  // Here you can write the code to upload the selected file
  // For simplicity, let's just log the file information
  console.log(selectedFile);
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
          {/* Include the additionalPrice in the form and final confirmation */}
          <h1 className="title">ข้อมูลผู้เข้าพัก</h1>
          <form className="booking-form">
            <input type="text" placeholder="ชื่อ-นามสกุล" className="form-input" />
            <input type="text" placeholder="หมายเลขโทรศัพท์" className="form-input" />
            <input type="text" placeholder="อีเมล" className="form-input" />
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
                <img  style={{ width: 120, height: 100 }} src={QR} alt="QR" />
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
            {/* Display the selected file name */}
            {selectedFile && (
              <div className="file-name">
                {selectedFile.name}
              </div>
            )}
          </div>
        );
        
    }
    else if (step === 'Done') {
      return (
        <div className="done-container">
        <div className="done-icon">
          <i className="fas fa-check-circle"></i> {/* FontAwesome icon */}
        </div>
        <div className="done-message">
          ชำระเงินเสร็จสิ้น
        </div>
        <button  className="done-button"><a href='/'>กลับหน้าหลัก</a>
          
        </button>
        
      </div>
      );
          } 
}
