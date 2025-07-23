import React from 'react';

const events = [
  {
    day: 'Friday, August 1st',
    items: [
      { time: '4:30 PM – 5:30 PM', title: 'Music by Brian Plato @China Ballfields' },
      { time: '5:00 PM – 6:00 PM', title: 'Battle of the Buns (Cheeseburger Challenge) @China Ballfields' },
      { time: '5:00 PM – 6:00 PM', title: 'Community BBQ @China Ballfields' },
      { time: '6:00 PM – 8:30 PM', title: 'Music by Yellow Brick Road (Elton John Tribute Band) @China Ballfields' },
    ],
  },
  {
    day: 'Saturday, August 2nd',
    items: [
      { time: '8:00 AM', title: 'PTO Color Run @China Ballfields' },
      { time: '10:00 AM – 2:00 PM', title: 'Party Palooga @China Ballfields' },
      { time: '10:00 AM – 3:00 PM', title: 'Car Cruize-In @China Ballfields' },
      { time: '10:00 AM – 3:00 PM', title: 'Vendors & Booths @China Ballfields' },
      { time: '10:00 AM – 3:00 PM', title: 'Field Day @China Ballfields' },
      { time: '10:00 AM – 3:00 PM', title: 'Food Booths @China Ballfields' },
      { time: '10:00 AM – 3:00 PM', title: 'Foam Pit @China Ballfields' },
      { time: '10:00 AM – 3:00 PM', title: 'China Fire Truck @China Ballfields' },
      { time: '11:00 AM – 3:00 PM', title: 'Tickles the Clown @China Ballfields' },
      { time: '12:00 PM', title: 'Blow-Up Costume Race @China Ballfields' },
      { time: '2:00 PM', title: 'Pickleball Tourney @China Ballfields' },
      { time: '3:30 PM', title: 'Boat Regatta @Causeway' },
      { time: '4:00 PM - 8:00 PM', title: 'Carnival @Causeway' },
      { time: '6:00 PM – 9:00 PM', title: 'Music by The Laura Hudson Project @Causeway' },
      { time: '8:00 PM', title: 'Lighted Boat Parade @Causeway' },
      { time: '9:00 PM – 10:00 PM', title: 'Laser Show by Dynamicks FX @Causeway' },
    ],
  },
  {
    day: 'Sunday, August 3rd',
    items: [
      { time: '7:30 AM', title: 'Church Service @China Ballfields' },
      { time: '9:00 AM', title: 'Fishing Derby @China Lake' },
      { time: '12:00 PM', title: 'Scavenger Hunt @Causeway' },
      { time: '1:00 PM', title: 'Forest Walk (2 hour walk) @China Primary School Bus Circle' },
      { time: '3:30 PM', title: 'Forest Walk (1 hour walk) @China Primary School Bus Circle' },
    ],
  },
];

const EventsPage = () => (
  <div
    style={{
      background: "linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url('/images/Events-Background.jpg') center center/cover no-repeat",
      minHeight: "100vh",
      width: "100vw",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start"
    }}
  >
    <div className="events-page">
      <h1 className="events-title">Events Schedule</h1>
      <div className="events-schedule">
        {events.map((day) => (
          <section key={day.day} className="events-day">
            <h2 className="events-day-title">{day.day}</h2>
            <ul className="events-list">
              {day.items.map((event, idx) => (
                <li key={idx} className="events-item">
                  <span className="events-time">{event.time}</span>
                  <span className="events-name">{event.title}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  </div>
);

export default EventsPage; 