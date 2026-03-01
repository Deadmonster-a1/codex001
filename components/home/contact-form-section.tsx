import { SectionHeader } from "../section-header"
import { ContactFormFields } from "../contact-form-fields"

export function ContactFormSection() {
  return (
    <section className="px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 flex flex-col gap-4">
          <SectionHeader title="GET IN TOUCH" />
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
            Have a project in mind? Reach out to us, and {"we'll"} discuss the best
            way to move forward.
          </p>
        </div>

        <div className="max-w-xl">
          <ContactFormFields />
        </div>
      </div>
    </section>
  )
}
