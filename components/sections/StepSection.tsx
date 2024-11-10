'use client'

import { type Dictionary } from '@/types'
import React from 'react'
import { motion } from "framer-motion"

function StepSection({ dict }: { dict: Dictionary }) {
    const [currentStep, setCurrentStep] = React.useState(1)

    const steps = [
        {
            title: dict.steps.step1,
            description: dict.steps.step1Description
        },
        {
            title: dict.steps.step2,
            description: dict.steps.step2Description
        },
        {
            title: dict.steps.step3,
            description: dict.steps.step3Description
        },
        {
            title: dict.steps.step4,
            description: dict.steps.step4Description
        }
    ]

    return (
        <section className='bg-[var(--ghost)] w-full shadow-sm border-t border-t-black'>
            <div className='max-w-6xl mx-auto px-8 py-12 md:py-24 text-center flex flex-col items-center'>
                <div className='flex flex-col'>
                    <h2 className='text-2xl md:text-4xl font-bold'>{dict.steps.title}</h2>
                    <p className='prose text-center'>{dict.steps.subtitle}</p>
                </div>

                {/* Button Navigation  */}
                <motion.nav initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }} className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 items-center justify-center my-12'>
                    {steps.map((step, index) => (
                        <button key={index} onClick={() => setCurrentStep(index + 1)} className={`btn text-center justify-center text-nowrap !min-w-[100%] text-xs md:text-md font-bold md:!p-12 ${currentStep === index + 1 ? '!bg-[var(--acid)]' : ''}`}>
                            {index + 1}. {" "} {step.title}</button>
                    ))}
                </motion.nav>

                {/* Description of the current step */}
                <motion.div key={currentStep} 
                    initial={{ opacity: 0, y: currentStep > 2 ? -100 : 100 }}
                    exit={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    
                    className='flex flex-col !items-start !text-left border border-black bg-white rounded-2xl !shadow-lg !p-9'>
                    <svg className="bee bee-icons" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" fill="none"></rect><path d="M13.0186 2.77384C12.698 1.74205 11.302 1.74206 10.9814 2.77384L9.35496 8.00801C9.21157 8.46944 8.80035 8.78185 8.33636 8.78185H3.07307C2.03555 8.78185 1.60417 10.1701 2.44354 10.8078L6.70163 14.0427C7.07701 14.3279 7.23408 14.8333 7.0907 15.2948L5.46426 20.5289C5.14364 21.5607 6.27301 22.4187 7.11238 21.781L11.3705 18.5461C11.7458 18.261 12.2541 18.261 12.6295 18.5461L16.8876 21.781C17.727 22.4187 18.8564 21.5607 18.5357 20.5289L16.9093 15.2948C16.7659 14.8333 16.923 14.3279 17.2984 14.0427L21.5565 10.8078C22.3958 10.1701 21.9644 8.78185 20.9269 8.78185H15.6636C15.1996 8.78185 14.7884 8.46944 14.645 8.00801L13.0186 2.77384Z" fill="currentColor"></path></svg>
                    <h3 className='prose-xl font-bold !text-left mt-4'>{steps[currentStep - 1].title}</h3>
                    <p className='prose'>{steps[currentStep - 1].description}</p>
                </motion.div>
            </div>
        </section>
    )
}

export default StepSection