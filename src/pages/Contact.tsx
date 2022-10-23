import {useRef,ReactNode} from 'react'
import {motion as m, useInView} from 'framer-motion'
import { Linkedin, Twitter } from 'react-feather'
import ContactForm from '@components/contact/ContactForm'
const animateIn = {
  initial: { opacity: 0, scale: 2, x: -50 },
  whileInView: {
    scale: 1, opacity: 1, x: 0
  }
}
const links = {
  twitter: "https://twitter.com/DaffueJohn",
  linkedin: "https://www.linkedin.com/in/john-d-016b98130/"
}
const LinkComponent = ({text,icon,onClick}:{text:string,icon:ReactNode,onClick:React.MouseEventHandler}) => {
  return <m.span className='flex flex-row gap-2 cursor-pointer px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700' whileHover={{scale:0.95}} transition={{type:'spring',damping:5,velocity:4,stiffness:500,mass:0.33,bounce:0.5}} onClick={onClick}>
    <m.p className='text-white text-2xl font-bold'>{text}</m.p>
    <m.span className='flex items-center justify-center'>{icon}</m.span>
  </m.span>
}
function Contact() {
  const inViewRef = useRef(null)

  return (
    <m.div id='contact' className='min-w-full w-screen h-full min-h-screen overflow-scroll bg-gradient-to-r to-zinc-700 from-slate-700 snap-center shrink-0 flex flex-col gap-4 px-8 no-scrollbar' ref={inViewRef}>
      <m.div className='flex flex-col py-8 items-center justify-center gap-2' >
        <m.h2 className='text-white text-7xl font-bold' initial={animateIn.initial} whileInView={{ ...animateIn.whileInView,transition:{delay:0.33} }} viewport={{ once: true, amount: 0.25 }}>Contact</m.h2>
        <m.p className='text-white text-2xl font-light whitespace-normal break-words w-full text-center' initial={animateIn.initial} whileInView={{ ...animateIn.whileInView, transition: { delay: 0.66 } }} viewport={{ once: true, amount: 0.25 }}>Whether you want to hire me, ask for advice, or simply connect 🤓</m.p>
      </m.div>

      <m.div className='flex w-full md:justify-center md:items-center' initial={{ ...animateIn.initial, scale: 2, x: 0, y: 150 }} whileInView={{ ...animateIn.whileInView, y: 0, transition: { delay: 1 } }} viewport={{ once: true, amount: 0.5 }}>
        <ContactForm />
      </m.div>

      <m.div className='flex flex-col gap-4  mt-8 items-center'>
        <m.p className='text-white font-bold text-4xl ' initial={animateIn.initial} whileInView={{ ...animateIn.whileInView, transition: { delay: 1.22 } }} viewport={{ once: true, amount: 0.1 }}>
          Socials
        </m.p>
        <m.div className='flex flex-row  sm:flex-nowrap gap-8' initial={animateIn.initial} whileInView={{ ...animateIn.whileInView, transition: { delay: 1.34 } }} viewport={{ once: true, amount: 0.2 }}>
          <LinkComponent icon={<Twitter fill='white' />} text={'Twitter'} onClick={() => window.open(links.twitter)}  />
          <LinkComponent icon={<Linkedin fill='white' />} text={'LinkedIn'} onClick={() => window.open(links.linkedin)} />
        </m.div>
      </m.div>
    </m.div>
  )
}

export default Contact