import './ColorsForm.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ChromePicker } from 'react-color';

export default function ColorsForm({ colors, setColors }) {
  const [color, setColor] = useState('#fff');
  const [isEditing, setEditing] = useState({
    primary: false,
    secondary: false,
    accent: false,
  });

  function handleClick(page) {
    setEditing({
      ...isEditing,
      [page]: !isEditing[page]
    });
  }

  function handleChange(color) {
    setColor(color);
  }

  return (
      <div id='color-form-container'>
        <div id='color-input-container'>
          { isEditing.primary ?
            <div className='color-input'>
              <ChromePicker color={color} onChange={handleChange}/>
              <Button variant='success' onClick={() => handleClick('primary')}>Done</Button>
            </div>
            :
            <div className='open-color-container'>
              <Button className='open-color-picker' onClick={() => handleClick('primary')}>Change Primary Color</Button>
              <div style={{backgroundColor: 'red'}}></div>
            </div>
          }
          { isEditing.secondary ?
            <div className='color-input'>
              <ChromePicker color={color} onChange={handleChange}/>
              <Button variant='success' onClick={() => handleClick('secondary')}>Done</Button>
            </div>
            :
            <div className='open-color-container'>
              <Button className='open-color-picker' onClick={() => handleClick('secondary')}>Change Secondary Color</Button>
              <div style={{backgroundColor: 'red'}}></div>
            </div>
          }
          { isEditing.accent ?
            <div className='color-input'>
              <ChromePicker color={color} onChange={handleChange}/>
              <Button variant='success' onClick={() => handleClick('accent')}>Done</Button>
            </div>
            :
            <div className='open-color-container'>
              <Button className='open-color-picker' onClick={() => handleClick('accent')}>Change Accent Color</Button>
              <div style={{backgroundColor: 'red'}}></div>
            </div>
          }
        </div>
        <div id='final-color-btn-container'>
          <Button id='color-submit-btn' variant='success'>Submit New Colors</Button>
          <Button id='close-color-form' variant='danger'>Close</Button>
        </div>
      </div>
  );
}