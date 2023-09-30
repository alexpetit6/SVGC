import './FileInputCard.css';
import { useState } from 'react';
import { Form, Card, Button } from 'react-bootstrap';

export default function FileInputCard({ className, img, inputRef }) {
  const [editing, setEditing] = useState(false);

  function handleEditing() {
    setEditing(!editing);
  }

  return (
    <Card className={className}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Text>
          { editing ? <Form.Control type='file' ref={inputRef} /> : <Button onClick={handleEditing}>Change Image?</Button>}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}