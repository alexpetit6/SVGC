import './MailchimpForm.css';
import { useState } from 'react';


export default function MailchimpForm() {
  const [formData, setFormData] = useState({
    FNAME: "",
    LNAME: "",
    EMAIL: ""
  })

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setFormData({
      FNAME: "",
      LNAME: "",
      EMAIL: ""
    });
  }

  return (
    <div id="mc_embed_shell">
      <div id="mc_embed_signup">
        <form action="https://herokuapp.us17.list-manage.com/subscribe/post?u=33c599328d25e115743755c1a&amp;id=c007fbdefa&amp;f_id=003964e0f0"  method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_self" noValidate="">
          <div id="mc_embed_signup_scroll">
            <h2 id="mc-embed-title">Mailing List</h2>
            <input type="text" placeholder='First Name' onChange={handleChange} name="FNAME" className="mc-embedded-inputs" id="mce-FNAME" value={formData.FNAME}/>
            <input type="text" placeholder='Last Name' onChange={handleChange} name="LNAME" className="mc-embedded-inputs" id="mce-LNAME" value={formData.LNAME}/>
            <input type="email" placeholder='Email Address' onChange={handleChange} name="EMAIL" className="mc-embedded-inputs" id="mce-EMAIL" required="" value={formData.EMAIL}/>
            <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
          </div>
          {/* Everything below here is hidden on the page, unimportant */} 
          <div id="mce-responses" className="clear foot">
            <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
            <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
          </div>
          <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
            <input type="text" name="b_33c599328d25e115743755c1a_c007fbdefa" tabIndex="-1" defaultValue="" />
          </div>
        </form>
      </div>
    </div>

  )
}