import {useState, useMemo, useRef} from 'react'
import {motion as m} from 'framer-motion'
import {Send} from 'react-feather'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast'

const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)

function ContactForm() {
    const formRef = useRef(null)
    const [email, setEmail] = useState('')
    const [honeyPotValue, setHoneyPotValue] = useState('')
    const [message, setMessage] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEmail(e.target.value);
    }

    const [emailStyling, emailValid] = useMemo(() => {
        if (email == '') return ['border-0', false]
        return emailRegex.test(email) ? ['border-green-500', true] : [' border-red-500', false]
    }, [email])

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (formRef.current == null || honeyPotValue.trim().length > 0) return
        emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE, import.meta.env.VITE_EMAILJS_TEMPLATE, formRef.current, import.meta.env.VITE_EMAILJS_PUBLICKEY)
            .then((result) => {
                toast.success('Email sent successfully', {id: 'contact-form'})
                localStorage.setItem("email", Date.now().toString())
            }, (error) => {
                toast.error('Email failed to send', {id: 'contact-form'})
            });
    }
    return (
        <m.div
            className='flex flex-col gap-4 w-full lg:w-1/3 border-2 border-slate-300 rounded-lg p-4 lg:p-8 shadow-md bg-slate-700 border-opacity-70 hover:border-opacity-100'>
            <m.div className='flex flex-col'>
                <m.p className='text-white font-bold text-4xl'>
                    Contact Form
                </m.p>
                <m.p className='text-white font-light text-lg md:indent-2 whitespace-normal break-words'>
                    Incase you dont want direct contact
                </m.p>
            </m.div>
            <m.form className='flex flex-col gap-4 w-full ' ref={formRef} onSubmit={onSubmit}>
                <m.input name='from_name' className='bg-gray-800 text-white rounded-md px-4 py-2 w-full'
                         placeholder='Name' type='text'/>
                <m.input name='reply_to' value={email} onChange={handleChange}
                         className={`bg-gray-800 text-white rounded-md px-4 py-2 w-full border-2 ${emailStyling}`}
                         placeholder='Email' type='email'/>
                <m.textarea name='message' className='bg-gray-800 text-white rounded-md px-4 py-2 w-full'
                            placeholder='Message'value={message} onChange={(e)=>setMessage(e.target.value)}/>
                <m.textarea name='hpbc' className='bg-gray-800 text-white rounded-md px-4 py-2 w-full hidden'
                            placeholder='HI BOT :D' value={honeyPotValue} onChange={(e)=>setHoneyPotValue(e.target.value)}/>
                <m.button
                    className='bg-blue-600 text-white rounded-md px-4 py-2 w-full sm:w-max flex items-center justify-center h-11 hover:bg-blue-500 mt-4 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-blue-600'
                    type='submit' disabled={!emailValid || honeyPotValue.trim().length > 0 || message.trim().length == 0} whileHover={{scale:0.95}} transition={{type:'spring',damping:5,velocity:4,stiffness:500,mass:0.33,bounce:0.5}}>
                    <m.span className='flex flex-row gap-2'>
                        <Send/>
                        <m.p className='text-white font-bold text-xl'>Send</m.p>
                    </m.span>
                </m.button>
            </m.form>
        </m.div>
    )
}

export default ContactForm