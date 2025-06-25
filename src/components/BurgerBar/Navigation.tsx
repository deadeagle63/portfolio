import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";


const variants = {
  open: {
    height: 'max-content',
    opacity:1,
    transition: { duration:0.22,staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    height: 0,
    opacity:0,
    transition: { duration:0.66, ease:'anticipate', staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({ toggle,isOpen }: { toggle: Function,isOpen:boolean }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    
    if (element) {
      
      element.scrollIntoView({ block: 'center'});
    }
    if (isOpen) {
      toggle()
    }
  }
  
  return <motion.ul  variants={variants} className={`${isOpen?'pointer-events-auto':'pointer-events-none'} absolute top-20 right-2 bg-white p-2 w-44  flex justify-around items-center flex-col rounded-lg gap-2`}>
    {itemIds.map((item:{id:number,text:string}) => (
      <MenuItem i={item.id} key={item.id} text={item.text} navigateTo={scrollTo}  />
    ))}
  </motion.ul>
;
}
const itemIds = [
  { id: 0, text: 'About' },
  { id: 1, text: 'Resume' },
  {id:2,  text:'Contact'}
];
