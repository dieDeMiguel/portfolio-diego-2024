'use client'

import React, { useState } from 'react'
import Container from './Container'
import { motion, AnimatePresence } from 'framer-motion'
import { QuestionI } from '@/types'

export default function FAQQuestions({
  questions,
}: {
  questions: QuestionI[]
}) {
  // Initialize state to keep track of open items
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  // Function to handle the FAQ toggle
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Container>
      <div className="faq flex flex-col gap-2">
        {questions.map(
          (item: { question: string; answer: string }, index: number) => {
            const isOpen = openIndex === index
            return (
              <button
                key={index}
                className={`question-box w-full bg-white hover:bg-[var(--ghost)] border border-black px-10 py-6 rounded-2xl shadow-md text-left`}
                onClick={() => toggleFaq(index)}
                aria-controls={`faq-content${index}`}
                aria-label={item.question}
                aria-expanded={isOpen}
              >
                <div className="question flex items-start justify-between">
                  <h3 className="my-0 max-w-[85%] text-lg sm:text-xl font-bold">
                    {item.question}
                  </h3>
                  <motion.div
                    id={`faq-toggle${index}`}
                    className="faq-toggle"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5em"
                      height="1.5em"
                      viewBox="0 0 56 56"
                    >
                      <path
                        fill="currentColor"
                        d="M28 39.46a2.1 2.1 0 0 0 1.57-.679l18.164-18.586a2.1 2.1 0 0 0 .633-1.5a2.12 2.12 0 0 0-2.156-2.156a2.27 2.27 0 0 0-1.523.61L28 34.21L11.313 17.148a2.23 2.23 0 0 0-1.524-.609a2.12 2.12 0 0 0-2.156 2.156c0 .586.234 1.102.633 1.524L26.43 38.78c.445.446.96.68 1.57.68"
                      />
                    </svg>
                  </motion.div>
                </div>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-content${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.1 }}
                      className="overflow-hidden max-w-[85%] mt-2"
                      aria-hidden={!isOpen}
                    >
                      <p
                        className="py-2 [&>a]:underline"
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            )
          }
        )}
      </div>
    </Container>
  )
}
