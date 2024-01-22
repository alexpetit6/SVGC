import './ColorsForm.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ChromePicker } from 'react-color';
import { update } from '../../utilities/colors-api';

export default function ColorsForm({ colors, setColors, handleEditing }) {
  const [formData, setFormData] = useState({
    primary: colors.primary,
    secondary: colors.secondary,
    accent: colors.accent,
    background: colors.background,
  });
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

  function handlePrimary(color) {
    setFormData({
      ...formData,
      primary: color.hex
    });
  }

  function handleSecondary(color) {
    setFormData({
      ...formData,
      secondary: color.hex
    });
  }

  function handleAccent(color) {
    setFormData({
      ...formData,
      accent: color.hex
    });
  }

  function handleBackground(color) {
    setFormData({
      ...formData,
      background: color.hex
    });
  }

  async function handleSubmit() {
    const newColors = await update(formData);
    const rootStyles = document.querySelector(':root').style;
    rootStyles.setProperty('--primary-color', newColors.primary);
    rootStyles.setProperty('--secondary-color', newColors.secondary);
    rootStyles.setProperty('--background-color', newColors.background);
    rootStyles.setProperty('--text-color', newColors.text);
    rootStyles.setProperty('--accent1', newColors.accent);
  }

  return (
      <div id='color-form-container'>
        <div id='color-input-container'>
          { isEditing.primary ?
            <div className='color-input'>
              <ChromePicker color={formData.primary} onChange={handlePrimary}/>
              <Button variant='success' onClick={() => handleClick('primary')}>Done</Button>
            </div>
            :
            <div className='open-color-container'>
              <Button className='open-color-picker' onClick={() => handleClick('primary')}>Change Primary Color</Button>
              <div style={{backgroundColor: formData.primary}}></div>
            </div>
          }
          { isEditing.secondary ?
            <div className='color-input'>
              <ChromePicker color={formData.secondary} onChange={handleSecondary}/>
              <Button variant='success' onClick={() => handleClick('secondary')}>Done</Button>
            </div>
            :
            <div className='open-color-container'>
              <Button className='open-color-picker' onClick={() => handleClick('secondary')}>Change Secondary Color</Button>
              <div style={{backgroundColor: formData.secondary}}></div>
            </div>
          }
          { isEditing.background ?
            <div className='color-input'>
              <ChromePicker color={formData.background} onChange={handleBackground}/>
              <Button variant='success' onClick={() => handleClick('background')}>Done</Button>
            </div>
            :
            <div className='open-color-container'>
              <Button className='open-color-picker' onClick={() => handleClick('background')}>Change Background Color</Button>
              <div style={{backgroundColor: formData.background}}></div>
            </div>
          }
          { isEditing.accent ?
            <div className='color-input'>
              <ChromePicker color={formData.accent} onChange={handleAccent}/>
              <Button variant='success' onClick={() => handleClick('accent')}>Done</Button>
            </div>
            :
            <div className='open-color-container'>
              <Button className='open-color-picker' onClick={() => handleClick('accent')}>Change Accent Color</Button>
              <div style={{backgroundColor: formData.accent}}></div>
            </div>
          }
        </div>
        <div id='final-color-btn-container'>
          <Button id='color-submit-btn' variant='success' onClick={handleSubmit}>Submit New Colors</Button>
          <Button onClick={handleEditing} id='close-color-form' variant='danger'>Close</Button>
        </div>
      </div>
  );
}