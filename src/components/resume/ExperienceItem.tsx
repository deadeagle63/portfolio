import { motion as m } from 'framer-motion'
import SkillItem from './SkillItem'
const animate = {
  hidden: {
    opacity: 0,
    scale:0
  },
  whileInView: {
    opacity: 1,
    scale: [1.5, 0.95, 1],

  }
}
const ExperienceItem = ({ company, title, date, description, skills }: { company: string, title: string, date: string, description: string, skills: string[] }) => {
  return <m.div className='flex flex-col gap-4 max-w-[400px] min-w-[350px] min-h-[500px] flex-grow bg-slate-700 p-8 border-2 border-zinc-400 rounded-xl flex-shrink hover:border-zinc-100' variants={animate}>
    <m.div className='flex flex-col gap-1'>
      <m.h3 className='text-white text-3xl font-bold'>
        {company}
      </m.h3>
      <m.span className='p-1 px-4 bg-slate-500 cursor-pointer  hover:border-2 hover:border-white transition-all ease-in-out duration-75 rounded-lg text-slate-50 font-bold w-max'>{date}</m.span>
      <m.p className='text-white text-xl font-light'>
        {title}
      </m.p>
    </m.div>
    <m.div className='flex flex-col gap-4'>
      <m.p className='text-white text-lg whitespace-normal break-words w-full tracking-wide min-h-[125px] '>{description}</m.p>
      <m.div className='flex flex-wrap gap-2 border-t-2 border-t-slate-400 border-opacity-50 py-4'>
        {skills.map(skill => <m.span key={company + skill}  className='rounded-full py-1 px-4 bg-slate-500 text-slate-50 font-bold w-max drop-shadow-lg hover:border-2 hover:border-white transition-all duration-75 ease-in'>{skill}</m.span>)}
      </m.div>
    </m.div>
  </m.div>
}

export default ExperienceItem