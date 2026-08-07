/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import Link from "next/link";
// Simple SVG Icons
const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.44-.78-3.46 0 0-1.09-.35-3.56 1.09-.3-.08-.6-.13-.9-.13-.3 0-.6.05-.9.13-2.47-1.44-3.56-1.09-3.56-1.09-.5.92-.87 2.12-.78 3.46 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
    <path d="M12 11V7" />
  </svg>
);

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error for the field as user types
    if (errors[e.target.name]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[e.target.name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }

  setIsSubmitting(true);
  setErrors({});

  try {
    const response = await fetch("/portfolio/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to send message.");
    }

    setIsSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error("Submission error:", error);

    setErrors({
      form:
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again.",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-10"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-slate-900 dark:text-slate-50 sm:text-5xl">
          Contact Me
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column: Contact Info */}
          <div>
            <h3 className="text-3xl font-bold text-blue-600">
              Let's Work Together
            </h3>
            <p className="mt-4 max-w-xl text-lg text-slate-400">
              Have a project in mind, looking for a technical partner, or
              interested in discussing a software engineering opportunity? I'm
              open to senior software engineering, technical leadership, backend
              engineering, SaaS, and AI engineering opportunities.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                <MailIcon className="h-6 w-6 text-blue-600" />
                <Link
                  href="mailto:javedwasim@example.com" // Replace with actual email
                  className="hover:text-blue-600 transition-colors"
                >
                  javed.wasim.anjum@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                <LinkedinIcon className="h-6 w-6 text-blue-600" />
                <Link
                  href="https://www.linkedin.com/in/muhammad-javed-wasim-anjum-3623294b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  linkedin.com/in/muhammad-javed-wasim-anjum...
                </Link>
              </div>
              <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                <GithubIcon className="h-6 w-6 text-blue-600" />
                <Link
                  href="https://github.com/javedwasim" // Replace with actual GitHub
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  github.com/javedwasim
                </Link>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-blue-600"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-lg">Pakistan · Remote</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-lg font-medium text-slate-800 dark:text-slate-200">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full rounded-md border bg-slate-100 px-4 py-3 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:text-white ${
                    errors.name ? "border-red-500" : "border-slate-300 dark:border-slate-700"
                  }`}
                  required
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-lg font-medium text-slate-800 dark:text-slate-200">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@example.com"
                  className={`w-full rounded-md border bg-slate-100 px-4 py-3 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:text-white ${
                    errors.email ? "border-red-500" : "border-slate-300 dark:border-slate-700"
                  }`}
                  required
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-lg font-medium text-slate-800 dark:text-slate-200">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className={`w-full rounded-md border bg-slate-100 px-4 py-3 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:text-white ${
                    errors.subject ? "border-red-500" : "border-slate-300 dark:border-slate-700"
                  }`}
                  required
                  aria-invalid={errors.subject ? "true" : "false"}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1 text-sm text-red-500">
                    {errors.subject}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-lg font-medium text-slate-800 dark:text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className={`w-full rounded-md border bg-slate-100 px-4 py-3 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:text-white ${
                    errors.message ? "border-red-500" : "border-slate-300 dark:border-slate-700"
                  }`}
                  required
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                ></textarea>
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>
              {errors.form && (
                <p className="text-sm text-red-500" role="alert">
                  {errors.form}
                </p>
              )}
              {isSubmitted && (
                <p className="text-sm text-green-500" role="status" aria-live="polite">
                  Thank you for your message! I'll get back to you soon.
                </p>
              )}
              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}