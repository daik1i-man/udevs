import { motion } from 'framer-motion'

export function FirstSlider({ children }: { children: React.ReactNode }) {
    return (
        <div className='relative w-full overflow-hidden'>
            <motion.div
                className='flex'
                initial={{ x: '0%' }}
                animate={{ x: '-100%' }}
                transition={{
                    ease: 'linear',
                    duration: 80,
                    repeat: Infinity
                }}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
}

export function SecondSlider({ children }: { children: React.ReactNode }) {
    return (
        <div className='relative w-full overflow-hidden'>
            <motion.div
                className='flex'
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                    ease: 'linear',
                    duration: 80,
                    repeat: Infinity
                }}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
}