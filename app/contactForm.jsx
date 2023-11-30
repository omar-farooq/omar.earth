import { useState } from 'react'
import axios from 'axios'
import Modal from './Modal.jsx'

export default function ContactForm({modalOpenStateHook}) {
    const [modalOpenState, setModalOpenState] = modalOpenStateHook
    const [formFields, setFormFields] = useState({from: '', email: '', address: '', message: ''})
    const [emailed, setEmailed] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState(false)

    const submitAction = async (e) => {
        e.preventDefault()
        setSubmitted(true)
        if (formFields.address != '') { return false }
        if (formFields.from.length < 3 || formFields.message.length < 3) { setSubmitted(false); return false }
        try {
            const headers = {
                'x-api-key': atob('ZU9QRm5rMFNXeTduak5ZWmZxYnlVM3BJcjI4aWpmN1AzNDFDMVFHYgo=')
            }
            let res = await axios.post('https://api.omar.earth/contact', JSON.stringify(formFields), {headers: headers})
            setEmailed(true)
            setFormFields({from: '', email: '', message: ''})
        } catch (error) {
            console.log(error)
            setSubmitted(false)
            setErrors(true)
        }
    }

    return (
        <Modal
            title="Contact Me"
            modalOpenState={modalOpenState}
            setModalOpenState={setModalOpenState}
            buttons="test"
        >            
            {emailed ?
                <div>
                    Thank you for your email.
                </div>
            : submitted && !emailed ?
                <div className="flex justify-center items-center">
                    <svg className="animate-spin h-12 w-12 text-black" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg> 
                </div>
            :
                <form className="flex flex-col space-y-2 justify-center items-center">
                    <div className={`${!errors ? 'hidden' : ''} text-red-500`}>There was an error submitting your form</div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text"
                            id="name"
                            required
                            className="border border-black h-8"
                            value={formFields.from}
                            onChange={(e) => setFormFields({...formFields, from: e.target.value})}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            className="border border-black h-8"
                            value={formFields.email}
                            onChange={(e) => setFormFields({...formFields, email: e.target.value})}
                        />
                    </div>
                    <div className="flex flex-col w-full hidden">
                        <label htmlFor="address">Address</label>
                        <input 
                            type="address"
                            id="address"
                            className="border border-black h-8"
                            value={formFields.address}
                            onChange={(e) => setFormFields({...formFields, address: e.target.value})}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="message">Message</label>
                        <textarea 
                            id="message"
                            required
                            className="border border-black h-20"
                            value={formFields.message}
                            onChange={(e) => setFormFields({...formFields, message: e.target.value})}
                        />
                    </div>
                    <button 
                        className="rounded bg-blue-600 w-1/3 h-8 text-white flex items-center justify-center"
                        onClick={(e) => submitAction(e)}
                    >
                        {submitted ? ""
                        : 
                        <span>Submit</span>}
                    </button>
                </form>
            }
        </Modal>
    )
}
