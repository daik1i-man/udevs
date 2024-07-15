'use client'

import React from 'react';
import CountUp from 'react-countup';

export const CountUpFunction = () => {
    const ref = React.useRef()
    return (
        <CountUp start={0} end={100} delay={0} duration={5} >
            {({ countUpRef }) => (
                <div>
                    <span className='text-[100px] font-semibold text-[#1b4bf7]' ref={countUpRef} />
                </div>
            )}
        </CountUp>
    )
}