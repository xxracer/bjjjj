import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqContent } from "@/lib/data"

export default function FAQPage() {
  return (
    <div >
      <div >
        <h1 >Frequently Asked Questions</h1>
        <p >
          Find answers to common questions about our programs and academy.
        </p>
      </div>

      <div >
        {faqContent.map((category) => (
          <div key={category.title}>
            <h2 >{category.title}</h2>
            <Accordion type="single" collapsible >
              {category.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} >
                  <AccordionTrigger >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  )
}
