import {useRef,lazy} from 'react'
import { motion as m, useInView } from 'framer-motion'
const ExperienceItem = lazy(() => import('@components/resume/ExperienceItem'))
const EducationItem = lazy(() => import('@components/resume/EducationItem'))
const SkillItem = lazy(() => import('@components/resume/SkillItem'))


const animateIn = {
  initial: { opacity: 0, scale: 2, y:-50 },
  whileInView: {
    scale: 1, opacity: 1, y: 0
  }
}
const experienceAnimate = {
  hidden: { opacity: 0, y:-50 },
  whileInView: {
    opacity: 1,
    y:0,
    transition: {
      delay:1.11,
      staggerChildren: 0.5,
      delayChildren: 1.33
    }
  }
}
const educationAnimate = {
  hidden: { opacity: 0, y: -50 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.33,
      staggerChildren: 0.5,
      delayChildren: 0.33
    }
  }
}
const skillAnimate = {
  hidden: { opacity: 0, y: -50 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.33,
      staggerChildren: 0.1,
      delayChildren: 0.1677
    }
  }
}
function Resume() {
  const inViewRef = useRef(null)
  
  return (
    <m.div id='resume' className='min-w-full w-screen h-full min-h-screen overflow-scroll bg-gradient-to-r to-slate-700 from-stone-800 snap-center shrink-0 flex flex-col gap-4 px-8 lg:px-48 no-scrollbar py-8' ref={inViewRef} >
      <m.div className='flex w-full items-center justify-center flex-col'>
        <m.h2 className='text-7xl text-white font-bold' initial={animateIn.initial} whileInView={{ ...animateIn.whileInView, transition: { delay: 0.33 } }} viewport={{ once: true, amount: 0.55 }} >Resume</m.h2>
        <m.p className='text-white font-light text-2xl' initial={animateIn.initial} whileInView={{ ...animateIn.whileInView, transition: { delay: 0.77 } }} viewport={{ once: true, amount: 0.55 }} >All the experience and important bits ✨</m.p>
      </m.div>
      <m.div className='flex flex-col gap-4'>
        <m.span>
          <m.h2 className='text-white text-5xl font-bold ' initial={animateIn.initial} whileInView={{ ...animateIn.whileInView, transition: { delay: 0.88 } }} viewport={{ once: true, amount: 0.45 }} >
            Experience
          </m.h2>
          <m.p className='text-white text-xl font-light  md:indent-2' initial={animateIn.initial} whileInView={{ ...animateIn.whileInView, transition: { delay: 0.99 } }} viewport={{ once: true, amount: 0.45 }} >All past, present, and not future jobs</m.p>
        </m.span>
      

        <m.div className='flex items-center justify-center md:justify-evenly flex-col md:flex-row md:flex-wrap gap-4' initial='hidden' whileInView='whileInView' variants={experienceAnimate} viewport={{ once: true, amount: 0.43 }}>
          <ExperienceItem company='LadderCaster' title='Senior Frontend Engineer' date='04-2022 - 10-2022' description='Created the worlds first fully on-chain P2E title on Solana netting $35k transactions per day at our peak period' skills={['ReactJS','Styled-Components','AnchorJS','Framer-Motion','TypeScript']} />
          <ExperienceItem company='AixVox' title='Lead Frontend Engineer' date='08-2022 - Present' description='Recreating a super secret product from scratch.. release soonTM' skills={['ReactJS', 'MUI', 'Axios', 'Framer-Motion','Rust']} />
          <ExperienceItem company='VodaFone' title='Apprentice Software Engineer' date='09-2019 - Present' description='Created and launched various B2B applications ranging from SaaS to PaaS, with the most notable being a redesign of our IVR product' skills={['ReactJS', 'TailWindCSS', 'Angular2', 'ReactFlow','Axios','AWS DynamoDB','AWS Cognito','AWS Lambda','TypeScript']} />
        </m.div>

        <m.div className='flex flex-col gap-8 mt-8'>
          <m.span>
            <m.h2 className='text-white text-5xl font-bold ' initial={animateIn.initial} whileInView={{ ...animateIn.whileInView, transition: { delay: 0.33 } }} viewport={{ once: true, amount: 0.45 }}>
              Education
            </m.h2>
            <m.p className='text-white text-xl font-light  md:indent-2' initial={animateIn.initial} whileInView={{ ...animateIn.whileInView, transition: { delay: 0.4 } }} viewport={{ once: true, amount: 0.45 }}>Qualifications, courses and history</m.p>
          </m.span>
          <m.div className='flex flex-row flex-wrap justify-around gap-4' initial='hidden' whileInView='whileInView' variants={educationAnimate} viewport={{ once: true, amount: 0.5 }}>
            <EducationItem qualification='BSc Computer Science' institute='University of Warwick' completionDate='2024' description='Working towards a CS bachelors degree in spare time' />
            <EducationItem qualification='A-Levels' institute='Queen Marys College' completionDate='2019' qualifications={['ComputerScience (C)','Electronics (B)', 'IT (D*)']} />
          </m.div>
        </m.div>

        <m.div className='flex flex-col gap-8 mt-8'>
          <m.span>
            <m.h2 className='text-white text-5xl font-bold ' initial={animateIn.initial} whileInView={{ ...animateIn.whileInView, transition: { delay: 0.33 } }} viewport={{ once: true, amount: 0.45 }}>
              Skills
            </m.h2>
            <m.p className='text-white text-xl font-light  md:indent-2 whitespace-normal break-words' initial={animateIn.initial} whileInView={{ ...animateIn.whileInView, transition: { delay: 0.4 } }} viewport={{ once: true, amount: 0.45 }}>Skills earned through hardwork, YouTube, or just perseverance</m.p>
          </m.span>
          <m.div className='flex flex-row flex-wrap items-center justify-center gap-4' initial='hidden' whileInView='whileInView' variants={skillAnimate} viewport={{ once: true, amount: 0.43 }}>
            <SkillItem skill='ReactJS' level={5} />
            <SkillItem skill='TypeScript' level={5} />
            <SkillItem skill='Rest-API' level={5} />
            <SkillItem skill='Framer-Motion' level={4} />
            <SkillItem skill='AWS' level={4} />
            <SkillItem skill='Python' level={3} />
            <SkillItem skill='GoLang' level={2} />
           
          </m.div>
          <m.p className='text-white text-center self-center '>And many more...</m.p>
        </m.div>
      </m.div>
   </m.div>
  )
}

export default Resume