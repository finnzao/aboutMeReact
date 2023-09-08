import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import PopUp from '../Utils/PopUp';
function Contact() {
    const form = useRef();
    const buttonRef = useRef();

    const [stateMsg, setstateMsg] = useState(Boolean);
    const [ShowContactMsg, setShowContactMsg] = useState(false);

    const sendEmail = (e) => {

        const formData = { name: form.current.user_name.value, email: form.current.user_email.value, message: form.current.text_message.value }
        e.preventDefault();


        console.log(validateDate(formData))
        validateDate(formData) ? sendForm() : showMessage(false)


    };


    //Send data
    function sendForm() {
        emailjs.sendForm('contact_service', 'template_bkzji98', form.current, 'TQg9auuPPzAky6l9T')
            .then((result) => {
                showMessage(true)
            }, (error) => {
                
            });
    }

    //validations
    function validateDate(data) {
        for (let key in data) {
            if (data[key].trim() == "" || data[key] == undefined) {
                return false
            }
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data['email'])) {
            return false
        }

        return true

    }




    //display PopUp
    function showMessage(state) {
        setstateMsg(state)
        setShowContactMsg(true)
        setTimeout(timePopUp, 5000) //Quano fazemos uma função nesse caso ele ainda não foi invocado , será 

    }

    function timePopUp() {
        setShowContactMsg(false)
    }

    return (
        <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>


            {
                ShowContactMsg ? <PopUp stateMsg={stateMsg} /> : <></>
            }

            <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Quer entrar em contato? Mande sua mensagem </h1>
            <form ref={form} onSubmit={sendEmail} encType=''>
                <div>
                    <div className='flex flex-col py-2' >
                        <label htmlFor="name" className='uppercase text-sm py-2'>Nome</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300'
                            type="text"
                            name="user_name" />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label htmlFor="email" className='uppercase text-sm py-2'>Email</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300'
                            type="text"
                            name="user_email" />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label
                            htmlFor="text_message"
                            className='uppercase text-sm py-2'>Mensagem</label>
                        <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name="text_message" />
                    </div>
                    <div className='text-center'>
                        <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-40 rounded cursor-pointer " type="submit" value="Enviar" ref={buttonRef} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact