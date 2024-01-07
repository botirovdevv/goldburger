import React, { useState } from 'react'

function Form() {
    
    const botToken = '6753368374:AAHGEZRHbxzpucKJW4jiQMSMr1ukPc-KOz4';

const [uName, setUName] = useState(''); 
const [message, setMessage] = useState('');
const [phone, setPhone] = useState('');
const [active, setActive] = useState(false)

const handleInputChange = (event) => {
    setUName(event.target.value);
};

const handleMessageChange = (event) => {
    setMessage(event.target.value);
};

const handlePhoneChange = (event) => {
    setPhone(event.target.value);
};

const sendMessage = (event) => {
    event.preventDefault(); 
    if (!uName || !message || !phone) {
        setActive(true)
        return;
    } else{
        setActive(false)
    }
    const formattedMessage = `Ismi: ${uName}\nIzoh: ${message}\nTelefon: ${phone}`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'cache-control': 'no-cache',
        },
        body: JSON.stringify({
            chat_id: 5663095517,
            text: formattedMessage,
        }),
    };

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

    setUName('');
    setMessage('');
    setPhone('');
};


  return (
    <form className='form'>
        <div className="container">
            <h1 className='form-title'>Talab yoki Taklifingiz</h1>
            <div className="form-content">
                <div className="form-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.0325496211883!2d60.6260820799654!3d41.555697937690034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc97b1279d9a1%3A0xe88a5f796c717c24!2sGold%20Burger!5e1!3m2!1sru!2s!4v1704567470386!5m2!1sru!2s"
                        width="600"
                        height="400"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Maps"
                        className='form-map__iframe'
                    ></iframe>
                </div>
                <div className="form-inputs">
                    <div className="form-items">
                        <label className='form-name'>Ismingiz</label>
                        <input type="text" value={uName} onChange={handleInputChange} placeholder='Alisher' className={ active ? 'form-input active' : 'form-input'} />
                    </div>
                    <div className="form-items">
                        <label className='form-name'>Telefon raqamingiz</label>
                        <input type="number" value={phone} onChange={handlePhoneChange} placeholder='91-572-57-57' className={ active ? 'form-input active' : 'form-input'} />
                    </div>
                    <div className="form-items">
                        <label className='form-name'>Xabar</label>
                        <textarea type="text" value={message} onChange={handleMessageChange} placeholder='Gold Burger' className={ active ? 'form-input__message active' : 'form-input__message'} />
                    </div>
                    <div className="form-btn">
                        <button className="form-send__btn" type='submit' onClick={sendMessage}>Yuborish</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
  )
}

export default Form