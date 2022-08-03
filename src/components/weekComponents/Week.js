import React, { Component } from 'react'
import Monday from './Monday';
import Wednesday from './Wednesday';
import Thursday from './Thursday';
import Friday from './Friday';
import Saturday from './Saturday';
import Sunday from './Sunday';
import Tuesday from './Tuesday';


const marketSchedule = [
  {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A",
  },
  {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C",
  },
  {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F",
  },
  {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E",
  },
  {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D",
  },
  {
    day: "Friday",
    location: "Sellwood",
    hours: "4:20pm - 9:30pm",
    booth: "69F",
  },
  {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G",
  },
];

export default class Week extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false, 
      count: 0
    };
  }

  updateState = () => {
    this.setState(prevState => {
      if (this.state.count === 6) {
        return { count: 0}
      } else {
      return { count: prevState.count + 1}
      }
    }) 
  }

  sundayState = () => {
    this.setState( {count: 0})
  }

  mondayState = () => {
    this.setState( {count: 1})
  }

  tuesdayState = () => {
    this.setState( {count: 2})
  }
  
  wednesdayState = () => {
    this.setState( {count: 3})
  }
  
  thursdayState = () => {
    this.setState( {count: 4})
  }
  
  fridayState = () => {
    this.setState( {count: 5})
  }

  saturdayState = () => {
    this.setState( {count: 6})
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    switch ( this.state.count ) {
      case 0:
        currentlyVisibleState = <Sunday 
        day={marketSchedule[0].day}
          location={marketSchedule[0].location}
          hours={marketSchedule[0].hours}
          booth={marketSchedule[0].booth}
          key={0}
        />
        buttonText = "View Monday's Schedule.";
        break;
      case 1:
        currentlyVisibleState = <Monday 
        day={marketSchedule[1].day}
          location={marketSchedule[1].location}
          hours={marketSchedule[1].hours}
          booth={marketSchedule[1].booth}
          key={1}
        />
        buttonText = "View Tuesday's Schedule.";
        break;
        case 2:
        currentlyVisibleState = <Tuesday 
        day={marketSchedule[2].day}
          location={marketSchedule[2].location}
          hours={marketSchedule[2].hours}
          booth={marketSchedule[2].booth}
          key={2}
        />
        buttonText = "View Wednesday's Schedule.";
        break;
      case 3:
        currentlyVisibleState = <Wednesday 
          day={marketSchedule[3].day}
          location={marketSchedule[3].location}
          hours={marketSchedule[3].hours}
          booth={marketSchedule[3].booth}
          key={3}/>
        buttonText = "View Thursday's Schedule.";
        break;
      case 4:
        currentlyVisibleState = <Thursday 
          day={marketSchedule[4].day}
          location={marketSchedule[4].location}
          hours={marketSchedule[4].hours}
          booth={marketSchedule[4].booth}
          key={4}/>
        buttonText = "View Friday's Schedule.";
        break;
      case 5:
        currentlyVisibleState = <Friday 
          day={marketSchedule[5].day}
          location={marketSchedule[5].location}
          hours={marketSchedule[5].hours}
          booth={marketSchedule[5].booth}
          key={5}/>
        buttonText = "View Saturday's Schedule.";
        break;
      case 6:
        currentlyVisibleState = <Saturday 
          day={marketSchedule[6].day}
          location={marketSchedule[6].location}
          hours={marketSchedule[6].hours}
          booth={marketSchedule[6].booth}
          key={6}/>
        buttonText = "Return to Sunday's Schedule.";
        break;
        default:
          currentlyVisibleState = <Sunday />
          buttonText = "View Monday's Schedule.";
          break;  
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {/* <button onClick={this.updateState}>{buttonText}</button> */}
        <button onClick={this.sundayState}>View Sunday</button>
        <button onClick={this.mondayState}>View Monday</button>
        <button onClick={this.tuesdayState}>View Tuesday</button>
        <button onClick={this.wednesdayState}>View Wednesday</button>
        <button onClick={this.thursdayState}>View Thursday</button>
        <button onClick={this.fridayState}>View Friday</button>
        <button onClick={this.saturdayState}>View Saturday</button>
      </React.Fragment>
    )
  }

}




// function Week() {
//   return (
//     <React.Fragment>
//       <h2>- Weekly Schedule -</h2>
//       <hr />
//       {marketSchedule.map((day, index) => (
//         <Day
//           day={day.day}
//           location={day.location}
//           hours={day.hours}
//           booth={day.booth}
//           key={index}
//         />
//       ))}
//     </React.Fragment>
//   );
// }

// export default Week;