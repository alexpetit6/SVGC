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
          <div id="mc_embed_signup_scroll"><h2>Subscribe</h2>
            <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">First Name </label>
              <input type="text" onChange={handleChange} name="FNAME" className=" text" id="mce-FNAME" value={formData.FNAME}/>
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-LNAME">Last Name </label>
              <input type="text" onChange={handleChange} name="LNAME" className=" text" id="mce-LNAME" value={formData.LNAME}/>
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
              <input type="email" onChange={handleChange} name="EMAIL" className="required email" id="mce-EMAIL" required="" value={formData.EMAIL}/>
            </div>
            <div id="mce-responses" className="clear foot">
              <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
              <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
            </div>
            <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
              /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
              <input type="text" name="b_33c599328d25e115743755c1a_c007fbdefa" tabIndex="-1" defaultValue="" />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

  )
}