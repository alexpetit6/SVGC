import "./CustomEvent.css"

export default function CustomEvent({event}) {
  return (
    
      event.title === 'Board Meeting' 
      ?
      <div className="board-meeting">
        <strong>{event.title}</strong>
      </div>
      :
      <div >
      <a className='calendar-event' href={`/events/${event._id}`} >
      <strong>{event.title}</strong>
        </a>
      </div>
    
  );
};
