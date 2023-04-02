import React, {Component} from 'react';

import Calendar from 'react-calendar';
import './Calendar.css';

export default class Calen extends Component {
    state = {
      date: new Date(),
    }

    onChange = date => {
        this.setState({ date });
    }
    
    handleClick = (props) =>{
      alert(props.dia)
    }

    Event = date => {
        console.log({date});
        console.log( date.getDate(), date.getUTCMonth()+1, date.getUTCFullYear(), date.toDateString() );
        let SelectedDate = {
            dia: date.getDate(),
            mes: date.getUTCMonth()+1,
            ano: date.getUTCFullYear()
        }
        this.handleClick(SelectedDate);
    }
   
    render() {

      return (
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
            onClickDay = {this.Event}
          />
      );
    }
  }