import { motion as m } from 'framer-motion'
const animate = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  whileInView: {
    opacity: 1,
    scale: 1
  }
}
const EducationItem = ({ qualification, institute, completionDate, description, qualifications }: { qualification: string, institute: string, completionDate: string, description?: string, qualifications?: string[] }) => {
  return <m.div className='flex flex-col gap-4 max-w-[400px]  flex-grow bg-zinc-700 px-6 py-4  border-2 border-slate-400 rounded-2xl hover:border-slate-300' variants={animate}>
    <m.div className='flex flex-col gap-2'>
      <m.span className='flex flex-row justify-between'>
        <m.h3 className='text-white text-2xl font-bold'>
          {qualification}
        </m.h3>
        <m.span className='rounded-lg p-1 px-3 bg-stone-800 text-slate-50 font-bold w-max hover:bg-stone-600 transition-color ease-linear duration-75'>{completionDate}</m.span>
      </m.span>
      <m.p className='text-white text-xl font-light'>
        {institute}
      </m.p>
      <m.p className='tracking-wide break-words whitespace-normal text-lg text-white font-normal'>
        {description}
      </m.p>
      <m.div className='flex flex-row flex-wrap gap-2'>
        {qualifications?.map(q => <m.span key={institute+q} className='rounded-full py-1 px-4 bg-stone-800 text-slate-50 font-bold w-max drop-shadow-lg flex-shrink hover:bg-stone-600 transition-all duration-75 ease-in'>{q}</m.span>)}
      </m.div>
    </m.div>
  </m.div>
}
export default EducationItem