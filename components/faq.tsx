'use client'

import { useState } from 'react'
import styles from '../styles/Home.module.css'

import { faqData } from '../lib/faq-data'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className={styles.contentSection + ' ' + styles.faqSection}>
      <h2 className={styles.faqTitle}>Any questions? Here the answers</h2>
      <div className={styles.faqList}>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={styles.faqItem + (openIndex === index ? ' ' + styles.faqItemOpen : '')}
          >
            <button
              type="button"
              className={styles.faqQuestion}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              {item.question}
            </button>
            <div
              id={`faq-answer-${index}`}
              className={styles.faqAnswer}
              role="region"
              aria-labelledby={`faq-question-${index}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
