import "./CustomEvent.css"

export default function CustomEvent({event}) {
  return (
    
      event.title === 'Meeting' 
      ?
      <div>
        <strong>{event.title}</strong>
      </div>
      :
      <div >
      <a className='calendar-event' href={`/events/${event._id}`} target="_blank" >
      <strong>{event.title}</strong>
        </a>
      </div>
    
  );
};
