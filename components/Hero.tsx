'use client'

import { type Dictionary } from '@/types'
import React from 'react'
import { motion } from "framer-motion"

export default function Hero({ dict, route }: { dict: Dictionary, route?: string }) {

    const moveToNextSection = () => {
        const section = document.querySelector('section')
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <motion.section 
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        aria-label='Hero Section' className="mt-12 md:mt-24 max-w-6xl mx-auto px-4">
            <div className="flex flex-col text-center items-center text-balance gap-3 md:max-w-[90%] mx-auto">
                <span className="text-xs bg-gray-200 border border-black px-2 py-1 rounded-3xl">v. {process.env.version}</span>
                <h1 className="font-bold text-4xl md:text-7xl">{dict.hero.title}</h1>
                <p className="text-balance max-w-[70%]">{dict.hero.subtitle}</p>
                {route ? (
                    <a className='btn' href={route}>
                        {dict.hero.cta}
                    </a>
                ) : (

                    <button onClick={moveToNextSection} className="btn" >
                        {dict.hero.cta}
                    </button>
                )}
            </div>
        </motion.section>
    )
}
