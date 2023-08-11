export default function CustomEvent({event}) {
  return (
    <div>
      <strong>{event.title}</strong>
      <br />
      <a href={event.url} target="_blank" >
        View Details
      </a>
    </div>
  );
};
