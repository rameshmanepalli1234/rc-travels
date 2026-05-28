import { FormEvent, useState } from "react";
import {
  contactInfoUtils,
  sanitizeNameInput,
  sanitizePhoneInput,
  CONTACT_ADDRESS,
  GODAVARI_MAP_EMBED_URL,
  GODAVARI_MAP_DIRECTIONS_URL,
  type ContactInfoItem,
} from "@utils";
import {
  StyledContactUs,
  StyledContactInfoCard,
  StyledContactForm,
} from "./style";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "general",
  message: "",
};

const ContactUs = () => {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormState, value: string): void => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialFormState);
  };

  const renderContactValue = (item: ContactInfoItem) => {
    if (item.href) {
      return (
        <a href={item.href} className="contact-info-link">
          <p className="contact-info-value">{item.value}</p>
        </a>
      );
    }
    return <p className="contact-info-value">{item.value}</p>;
  };

  return (
    <StyledContactUs>
      <header className="contact-header">
        <span className="contact-eyebrow">Get In Touch</span>
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">
          Plan your next trip with Ramesh Tours &amp; Travels. Reach out for
          packages, custom itineraries, or any travel enquiry — we&apos;re happy
          to help.
        </p>
      </header>

      <div className="contact-layout">
        <div className="contact-info-grid">
          {contactInfoUtils.map((item) => (
            <StyledContactInfoCard key={item.id}>
              <div className="contact-info-icon-wrap">
                <item.Icon aria-hidden />
              </div>
              <div className="contact-info-title">{item.title}</div>
              {renderContactValue(item)}
            </StyledContactInfoCard>
          ))}
        </div>

        <StyledContactForm onSubmit={handleSubmit}>
          <h3 className="contact-form-title">Send Us a Message</h3>
          <p className="contact-form-subtitle">
            Fill in the form and our team will get back to you shortly.
          </p>

          <div className="contact-form-row">
            <div className="contact-form-field">
              <label className="contact-form-label" htmlFor="contact-name">
                Full Name
              </label>
              <input
                id="contact-name"
                className="contact-form-input"
                type="text"
                placeholder="Your name"
                required
                minLength={2}
                title="Use letters only, e.g. Ramesh Manepalli"
                value={form.name}
                onChange={(e) =>
                  handleChange("name", sanitizeNameInput(e.target.value))
                }
              />
            </div>
            <div className="contact-form-field">
              <label className="contact-form-label" htmlFor="contact-phone">
                Phone Number
              </label>
              <input
                id="contact-phone"
                className="contact-form-input"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+91 6363620044"
                required
                pattern="\+?[\d\s]{8,}"
                title="Use numbers and + only, e.g. +91 6363620044"
                value={form.phone}
                onChange={(e) =>
                  handleChange("phone", sanitizePhoneInput(e.target.value))
                }
              />
            </div>
          </div>

          <div className="contact-form-field">
            <label className="contact-form-label" htmlFor="contact-email">
              Email Address
            </label>
            <input
              id="contact-email"
              className="contact-form-input"
              type="email"
              placeholder="you@example.com"
              required
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>

          <div className="contact-form-field">
            <label className="contact-form-label" htmlFor="contact-subject">
              Enquiry Type
            </label>
            <select
              id="contact-subject"
              className="contact-form-select"
              value={form.subject}
              onChange={(e) => handleChange("subject", e.target.value)}
            >
              <option value="general">General Enquiry</option>
              <option value="package">Tour Package Booking</option>
              <option value="custom">Custom Itinerary</option>
              <option value="group">Group Travel</option>
            </select>
          </div>

          <div className="contact-form-field">
            <label className="contact-form-label" htmlFor="contact-message">
              Message
            </label>
            <textarea
              id="contact-message"
              className="contact-form-textarea"
              placeholder="Tell us about your travel plans..."
              required
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
            />
          </div>

          <button type="submit" className="contact-form-submit">
            Send Message
          </button>

          {submitted && (
            <p className="contact-form-success" role="status">
              Thank you! Your message has been received. We will contact you
              soon.
            </p>
          )}
        </StyledContactForm>
      </div>

      <section className="contact-map-section" aria-label="Location map">
        <div className="contact-map-header">
          <span className="contact-map-eyebrow">Our Location</span>
          <h3 className="contact-map-title">Morampudi — Rajamahendravaram</h3>
          <p className="contact-map-address">{CONTACT_ADDRESS}</p>
        </div>
        <div className="contact-map-wrap">
          <iframe
            src={GODAVARI_MAP_EMBED_URL}
            title="Godavari River map near Rajamahendravaram"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <a
          href={GODAVARI_MAP_DIRECTIONS_URL}
          className="contact-map-directions"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Google Maps
        </a>
      </section>
    </StyledContactUs>
  );
};

export default ContactUs;
