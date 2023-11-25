import { useState } from 'react'
import axios from 'axios'
import Modal from './Modal.jsx'

export default function ContactForm({modalOpenStateHook}) {
    const [modalOpenState, setModalOpenState] = modalOpenStateHook
    const [formFields, setFormFields] = useState({from: '', email: '', message: ''})

    const submitAction = async (e) => {
        e.preventDefault()
        try {
            let res = await axios.post('https://onruneesw6qlkf47v4wsc5j4cq0cbvvu.lambda-url.eu-west-2.on.aws/', JSON.stringify(formFields))
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Modal
            title="Contact Me"
            modalOpenState={modalOpenState}
            setModalOpenState={setModalOpenState}
            buttons="test"
        >
            <form className="flex flex-col space-y-2">
                <div className="flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        id="name"
                        required
                        className="border border-black h-8"
                        onChange={(e) => setFormFields({...formFields, from: e.target.value})}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        id="email"
                        className="border border-black h-8"
                        onChange={(e) => setFormFields({...formFields, email: e.target.value})}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message">Message</label>
                    <textarea 
                        id="message"
                        required
                        className="border border-black h-20"
                        onChange={(e) => setFormFields({...formFields, message: e.target.value})}
                    />
                </div>
                <button 
                    onClick={(e) => submitAction(e)}
                >
                    Submit
                </button>
            </form>
        </Modal>
    )
}
