import React, { useState } from 'react'
import { Contact } from '../components'
import { BlockTitle } from '../components'

import emailjs from 'emailjs-com'

export function ContactContainer() {
  const [nameText, setNameText] = useState('');
  const [emailText, setEmailText] = useState('');
  const [phoneText, setPhoneText] = useState('');
  const [messageText, setMessageText] = useState('');
  const [isShowAlert, setIsShowAlert] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    try {
      emailjs.sendForm(
        'service_e65wmzg',
        'template_rj3j42n',
        e.target,
        'user_08okOcqI2LMxbqIrucxm4');
    }
    catch (err) {
      err => console.log('send email error', err);
    }

    setNameText('');
    setEmailText('');
    setPhoneText('');
    setMessageText('');

    //顯示完成警示框
    setIsShowAlert(true);
    setTimeout(() => {
      setIsShowAlert(false);
    }, 7000);
  }

  return (
    <Contact>
      <Contact.Container id='contact'>
        <Contact.Content>
          <BlockTitle title={'contact'} />
          <Contact.Form autoComplete="off" onSubmit={sendEmail}>
            <Contact.LeftPane>
              <Contact.Input
                type='text'
                name='name'
                placeholder='NAME'
                value={nameText}
                required="required"
                minlength="2"
                onChange={e => setNameText(e.target.value)}
              />
              <Contact.Input
                type='email'
                name='user_email'
                placeholder='E-MAIL'
                value={emailText}
                required="required"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                onChange={e => setEmailText(e.target.value)}
              />
              <Contact.Input
                type='text'
                name='phone'
                placeholder='PHONE (Optional)'
                value={phoneText}
                onChange={e => setPhoneText(e.target.value)}
              />
            </Contact.LeftPane>
            <Contact.RightPane>
              <Contact.Textarea
                placeholder='MESSAGE'
                name='message'
                value={messageText}
                required="required"
                minlength="2"
                onChange={e => setMessageText(e.target.value)}
              />
              <Contact.Input type='submit' name='send' value='SEND' id='send' />
            </Contact.RightPane>
          </Contact.Form >
          <Contact.Alert isShowAlert={isShowAlert}>Thanks you!</Contact.Alert>
        </Contact.Content>
      </Contact.Container>
    </Contact>
  )
}