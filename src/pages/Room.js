import Card from 'react-bootstrap/Card';
import Coco from './image/Coco.png';
import "./Room.css"
function Room() {
  return (
    <room className="room">
    <card1 className="card1">
      <box1 className="box1">
      <Card style={{ width: '18rem' }}>
      <img src={Coco} alt="Coco" />
      <Card.Body>
        <Card.Title>ห้องพัดลม</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

      </Card.Body>
    </Card>
      </box1>
      <box2 className="box2">
      <Card style={{ width: '18rem' }}>
    <img src={Coco} alt="Coco" />
      <Card.Body>
        <Card.Title>ห้องแอร์</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </box2>
    <box3 className="box3">
    <Card style={{ width: '18rem' }}>
    <img src={Coco} alt="Coco" />
      <Card.Body>
        <Card.Title>ห้องเชื่อมคู่</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </box3>
    
    
  </card1>
  <btt className="btt">
        <a href="/Booking">จองตอนนี้</a>
  </btt>
  </room>
  );
}

export default Room;