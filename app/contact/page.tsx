// app/contact/page.tsx
import Header from "../services/enterprise/header"
import Footer from "../services/enterprise/Footer"
import ContactForm from "./contact-form"
import OfficeLocations from "./office-locations"
import PullTriggerSection from "./trigger"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactForm />
      <OfficeLocations />
      <PullTriggerSection />
      <Footer />
    </main>
  )
}