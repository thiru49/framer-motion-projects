'use client';
import styles from '@/styles';
import { navVariants } from '@/utils/motion';
import {motion} from 'framer-motion'
import Image from 'next/image';

const Navbar = () => (
  <motion.div 
  variants={navVariants}
  initial='hidden'
  whileInView='show'
  className={`${styles.xPaddings} py-8 relative`}>
      <div className='absolute w-[50%] inset-0 gradient-01'/>
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}> 
         <Image src='/akar-icons_search.svg' alt='search' width={24} height={24} className='object-contain' />
        <h2 className='font-eudoxus font-extrabold text-[24px] leading-[30px] text-white'>
            METAVERSUS
        </h2>
        <Image src='/menu.svg' alt='menu' width={24} height={24} className='object-contain'/>  
      </div>
      
  </motion.div>
);

export default Navbar;
