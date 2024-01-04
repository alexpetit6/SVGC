import './FileInputCard.css';
import { useState } from 'react';
import { Form, Card, Button } from 'react-bootstrap';

export default function FileInputCard({ className, img, inputRef }) {
  const [editing, setEditing] = useState(false);

  function handleEditing() {
    setEditing(!editing);
    inputRef.current.value = null;
  }

  return (
    <Card className={className}>
      <div>
        <Card.Img variant="top" src={img} />
      </div>
      <Card.Body>
        <Card.Text>
          { editing ? 
            <>
            <Form.Control type='file' ref={inputRef} accept='image/jpeg'/> 
            <Button variant='warning' onClick={handleEditing}>CANCEL</Button>
            </>
          : 
            <Button onClick={handleEditing}>Change Image?</Button>
          }
        </Card.Text>
      </Card.Body>
    </Card>
  )
}