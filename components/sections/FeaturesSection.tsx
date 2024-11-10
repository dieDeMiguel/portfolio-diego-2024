'use client'

import React from 'react'
import Container from '../Container'
import type { Dictionary, FeatureI } from '@/types'
import { motion } from "framer-motion"

function FeaturesSection({dict}: {dict: Dictionary}) {
    const container = {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

   const featureArray = dict.features.items as unknown as FeatureI[]

    return (
        <Container extraClasses='mb-16'>

            <h2 className='text-2xl md:text-4xl font-bold text-center mb-12'>{dict.features.title}</h2>

            <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                {featureArray.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </motion.div>
            
        </Container>
    )
}

export default FeaturesSection

const FeatureCard = (feature: FeatureI) => {

    const listItem = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    };

    return (
        <motion.div
            variants={listItem}

            className="feature rounded-xl p-5 flex flex-col gap-4 bg-white border border-black">
                <svg className="bee bee-icons" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" fill="none"></rect><path d="M13.0186 2.77384C12.698 1.74205 11.302 1.74206 10.9814 2.77384L9.35496 8.00801C9.21157 8.46944 8.80035 8.78185 8.33636 8.78185H3.07307C2.03555 8.78185 1.60417 10.1701 2.44354 10.8078L6.70163 14.0427C7.07701 14.3279 7.23408 14.8333 7.0907 15.2948L5.46426 20.5289C5.14364 21.5607 6.27301 22.4187 7.11238 21.781L11.3705 18.5461C11.7458 18.261 12.2541 18.261 12.6295 18.5461L16.8876 21.781C17.727 22.4187 18.8564 21.5607 18.5357 20.5289L16.9093 15.2948C16.7659 14.8333 16.923 14.3279 17.2984 14.0427L21.5565 10.8078C22.3958 10.1701 21.9644 8.78185 20.9269 8.78185H15.6636C15.1996 8.78185 14.7884 8.46944 14.645 8.00801L13.0186 2.77384Z" fill="currentColor"></path></svg>
                <h3 className="text-lg font-bold">{feature.title}</h3><p>{feature.description}</p>
        </motion.div>
    )
}