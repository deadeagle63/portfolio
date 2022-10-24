import { motion as m } from 'framer-motion'
import { Star } from 'react-feather'
const animate = {
  hidden: {
    opacity: 0,
    scale: 3
  },
  whileInView: {
    opacity: 1,
    scale: 1
  }
}
const SkillItem = ({ skill, level }: { skill: string, level: number }) => {
  return <m.div  className='flex flex-col gap-4 justify-between px-2 md:px-6 py-4 rounded-xl bg-gray-700 border-2 border-white border-opacity-70 md:min-w-[180px] max-w-[280px]  cursor-pointer hover:scale-110 flex-shrink flex-grow sm:flex-grow-0'
     drag dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} variants={animate}>
    <m.span className='text-white text-2xl font-bold whitespace-normal break-words'>{skill}</m.span>
    <m.div className='flex flex-row gap-1 '>
      {[...Array(level)].map((_, i) => <Star key={skill+i} fill='gold' stroke='gold' />)}
    </m.div>
  </m.div>
}
export default SkillItem