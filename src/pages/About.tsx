import  { ReactNode, useEffect,  useRef, useState,lazy } from 'react'
import {  AnimatePresence, motion as m, useInView } from 'framer-motion'
import Tippy from '@tippyjs/react';

const NickName = lazy(() => import('@components/about/NickName'))

const nickNames = [<NickName name='JD' key={'jd'} />, <NickName name='Juan' key={'juan'} />, <NickName name='Awesome 😎' key={'awesome'} />]

const animateIn = {
  initial: { opacity: 0, scale: 2, y: 50 },
  whileInView: {
    scale: 1, opacity: 1, y: 0
  }
}
function About() {
  const [nickName, setNickName] = useState(null as ReactNode)
  const inViewRef = useRef(null)
  const inView = useInView(inViewRef)
  useEffect(() => {
    setNickName(nickNames[0])
    if (inView) {
      let i = 0;
      const interval = setInterval(() => {
        setNickName(nickNames[i])
        i = (i + 1) % nickNames.length
      }, 2000)
      return () => clearInterval(interval)
   }
  }, [inView])

  return (
    <m.div id='about' className='min-w-full w-screen h-full min-h-screen overflow-scroll bg-gradient-to-l to-stone-900 from-stone-800 snap-center shrink-0 gap-4 px-8 no-scrollbar' ref={inViewRef} >
      <m.div className='flex justify-center py-8 flex-col items-center gap-2' >
        <m.h1 className='text-white text-7xl font-semibold whitespace-normal break-words text-center' initial={animateIn.initial} whileInView={{ ...animateIn.whileInView, transition: { delay: 0.55 } }} viewport={{ once: true, amount: 0.25 }} >
          Hi, I'm <Tippy content='The name is Daffue, John Daffue'><m.span className='cursor-pointer underline' whileHover={{ scale: 1.1 }}>John</m.span></Tippy>
        </m.h1>
        <m.p className='text-white text-xl md:text-2xl font-light flex  justify-center gap-3 items-baseline relative whitespace-normal break-words' initial={animateIn.initial} whileInView={{ ...animateIn.whileInView, transition: { delay: 0.55 } }} viewport={{ once: true, amount: 0.25 }}>
          But you can call me <AnimatePresence>{nickName}</AnimatePresence>
        </m.p>
        <m.img src='./nomask.jpeg' className='w-80 h-80 cover object-cover mt-4 overflow-clip' style={{ borderRadius: '25% 8px 25% 8px', boxShadow: '4px 2px 12px 6px rgb(0,0,0,0.7)', }} initial={{ opacity: 0, y: 200, }} viewport={{ once: true, amount: 0.25 }} whileInView={{ opacity: 1, y: 0, transition: { delay: 1.1 } }} transition={{duration: 0.33,ease: 'easeInOut'}} whileHover={{ scale: 1.05, boxShadow: ' 0px 0px 12px 2px rgb(0,0,0,0.5)', borderRadius: '25% 25% 25% 25%' }} />
      </m.div>
      <m.div className='flex justify-center py-4 items-center text-center flex-col ' >
        <m.span className='text-white text-2xl font-normal break-words whitespace-normal ' initial={animateIn.initial} whileInView={{ ...animateIn.whileInView, transition: { delay: 1.5 } }} viewport={{ once: true, amount: 0.25 }}>
          I am a full stack developer that loves <Tippy  content='I enjoy difficult puzzles and that AHA moment when you solve it' trigger='mouseenter' >
            <m.span className='text-white font-bold uppercase cursor-pointer' whileHover={{ textDecoration: 'underline' }}>challenges</m.span>
          </Tippy> and <Tippy content='Whether it is doc-crawling or rummaging Git/StackOverflow posts I always find what I am looking for' trigger='mouseenter'>
            <m.span className='text-white uppercase font-bold cursor-pointer' whileHover={{ textDecoration: 'underline' }}>exploring</m.span>
          </Tippy> new things.
        </m.span>
        <m.ul className='text-white text-2xl font-normal break-words whitespace-normal mt-12 w-full' initial={animateIn.initial} whileInView={{ ...animateIn.whileInView, transition: { delay: 2 } }} viewport={{ once: true, amount: 0.22 }}>
          <m.li>I am a <Tippy content="Dont get me talking, unless you are prepared to talk for 2 hours about everything"><m.span className='text-emerald-300' whileHover={{textDecoration:'underline',scale:1.1}}>bubbly</m.span></Tippy>, <Tippy content="I am an energizer bunny, seriously my WPM and APM is over 9'000"><m.span className='text-amber-300'  whileHover={{textDecoration:'underline',scale:1.1}}>energetic</m.span></Tippy>, and <Tippy content="Whethere it is gamelore, a new framework, or a vacation - be ready to hear all about it "><m.span className='text-red-500'  whileHover={{textDecoration:'underline',scale:1.1}}>passionate</m.span></Tippy> person who loves to learn and share knowledge.</m.li>
          <m.li>I love <Tippy content="Fuji is amazing, dont even @ me 📷"><m.span className='text-emerald-300'  whileHover={{textDecoration:'underline'}}>photography</m.span></Tippy>, <Tippy content="I am a huge roguelike/lite fan, but I do enjoy MMO's and ofcourse League Of Legends 🎮"><m.span className='text-amber-300'  whileHover={{textDecoration:'underline'}}>gaming</m.span></Tippy>, and <Tippy content="I am a huge MegaDeth and Sabaton fan, but I listen to anything 🤘"><m.span className='text-red-500'  whileHover={{textDecoration:'underline'}}>music</m.span></Tippy>.</m.li>
        </m.ul>
      </m.div>
    </m.div>
  )
}

export default About