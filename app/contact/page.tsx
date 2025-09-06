// app/contact/page.tsx
import Header from "../services/enterprise/header"
import Footer from "../services/enterprise/Footer"
import ContactForm from "./contact-form"
import OfficeLocations from "./office-locations"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactForm />
      <OfficeLocations />
      <Footer />
    </main>
  )
}