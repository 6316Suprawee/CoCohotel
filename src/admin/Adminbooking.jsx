import React from 'react';
import axios from 'axios';


export default class Adminbooking extends React.Component {
    state = {
        persons: []
    }
    componentDidMount() { //เป็น lifecycle method ของ React component ที่ถูกเรียกหลังจาก component ถูก render ครั้งแรก
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
    }
    render() {
      return (
        <>
            {
                this.state.persons.map(person =><li key={person.id}>{person.name}</li>)
            }
        </>
      );
    }
  }
