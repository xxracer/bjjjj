import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqContent } from "@/lib/data"

export default function FAQPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">Frequently Asked Questions</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
          Find answers to common questions about our programs and academy.
        </p>
      </div>

      <div className="space-y-8">
        {faqContent.map((category) => (
          <div key={category.title}>
            <h2 className="text-2xl font-bold font-headline mb-6 pb-2 border-b-2 border-primary">{category.title}</h2>
            <Accordion type="single" collapsible className="w-full">
              {category.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
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
