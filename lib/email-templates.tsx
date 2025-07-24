interface AdminEmailProps {
  name: string
  email: string
  topic: string
  budget: string
  description: string
}

export function AdminEmailTemplate({ name, email, topic, budget, description }: AdminEmailProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <div style={{ backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "8px" }}>
        <h2 style={{ color: "#333", marginBottom: "20px" }}>New Project Inquiry</h2>

        <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px", marginBottom: "20px" }}>
          <h3 style={{ color: "#cf21c3", marginBottom: "15px" }}>Contact Details</h3>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Topic:</strong> {topic}
          </p>
          <p>
            <strong>Budget:</strong> {budget}
          </p>
        </div>

        <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px" }}>
          <h3 style={{ color: "#cf21c3", marginBottom: "15px" }}>Project Description</h3>
          <p style={{ lineHeight: "1.6" }}>{description}</p>
        </div>

        <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#e3f2fd", borderRadius: "8px" }}>
          <p style={{ margin: "0", fontSize: "14px", color: "#666" }}>
            This inquiry was submitted through the Kayi Digital website contact form.
          </p>
        </div>
      </div>
    </div>
  )
}

interface UserEmailProps {
  name: string
}

export function UserEmailTemplate({ name }: UserEmailProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <div style={{ backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "8px" }}>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1 style={{ color: "#cf21c3", marginBottom: "10px" }}>Thank You!</h1>
          <p style={{ color: "#666", fontSize: "18px" }}>We've received your project inquiry</p>
        </div>

        <div style={{ backgroundColor: "white", padding: "30px", borderRadius: "8px", textAlign: "center" }}>
          <h2 style={{ color: "#333", marginBottom: "20px" }}>Hi {name}! 👋</h2>

          <p style={{ lineHeight: "1.6", color: "#666", marginBottom: "20px" }}>
            Thank you for reaching out to Kayi Digital. We've successfully received your project inquiry and our team is
            excited to learn more about your vision.
          </p>

          <div style={{ backgroundColor: "#f0f9ff", padding: "20px", borderRadius: "8px", marginBottom: "20px" }}>
            <h3 style={{ color: "#cf21c3", marginBottom: "15px" }}>What happens next?</h3>
            <ul style={{ textAlign: "left", color: "#666", lineHeight: "1.8" }}>
              <li>Our team will review your project details within 24 hours</li>
              <li>We'll prepare a customized proposal based on your requirements</li>
              <li>You'll receive a follow-up email with next steps</li>
            </ul>
          </div>

          <p style={{ color: "#666", marginBottom: "30px" }}>
            In the meantime, feel free to explore our portfolio and case studies to see how we've helped other
            businesses achieve their digital goals.
          </p>

          <div style={{ borderTop: "1px solid #eee", paddingTop: "20px" }}>
            <p style={{ color: "#999", fontSize: "14px", margin: "0" }}>
              Best regards,
              <br />
              <strong style={{ color: "#cf21c3" }}>The Kayi Digital Team</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
