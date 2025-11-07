"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/container";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Container className="pt-36 pb-20 lg:pt-44 lg:pb-28 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Left: Contact Info */}
        <div>
          <p className="uppercase text-sm tracking-wide text-muted-gray font-semibold">
            Contact Us
          </p>
          <h1 className="mt-2 text-3xl lg:text-5xl font-bold leading-tight">
            Get in touch
          </h1>
          <p className="mt-4 text-lg text-muted-gray max-w-[560px]">
            Send us a message about your project, or reach out using the details
            below. We respond to most inquiries within 24 hours.
          </p>

          <div className="mt-10 flex flex-col gap-6">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-soft-blue-100 flex items-center justify-center">
                <Image
                  src="/footer/call.png"
                  width={20}
                  height={20}
                  alt="Phone"
                  className="opacity-90"
                />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-wide">Phone</p>
                <Link
                  href="tel:+14375808121"
                  className="text-primary-dark/80 hover:text-primary-blue transition-colors"
                >
                  (437) 580-8121
                </Link>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-soft-blue-100 flex items-center justify-center">
                <Image
                  src="/footer/message.png"
                  width={20}
                  height={20}
                  alt="Email"
                  className="opacity-90"
                />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-wide">Email</p>
                <Link
                  href="mailto:portagecreekwebdesigns@gmail.com"
                  className="text-primary-dark/80 hover:text-primary-blue transition-colors"
                >
                  portagecreekwebdesigns@gmail.com
                </Link>
              </div>
            </div>

            {/* Areas Served */}
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-soft-blue-100 flex items-center justify-center">
                <Image
                  src="/footer/location.png"
                  width={20}
                  height={20}
                  alt="Location"
                  className="opacity-90"
                />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-wide">
                  Areas Served
                </p>
                <p className="text-primary-dark/80">Winnipeg & Canada</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form or Thank You */}
        <div className="bg-white rounded-2xl border border-[#0046FF0F] shadow-[0_4px_39.4px_0_#00000017] p-6 sm:p-8">
          {submitted ? (
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-bold">Thank you!</h2>
              <p className="text-lg text-primary-dark/80">
                Thank you for contacting us. We&apos;ve received your message.
                For a faster response, please also give us a call if your
                request is urgent:
                <Link
                  href="tel:+14375808121"
                  className="text-primary-blue font-semibold ml-2"
                >
                  (437) 580-8121
                </Link>
                .
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl lg:text-3xl font-bold">Send a message</h2>
              <form
                name="contact"
                method="POST"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formEl = e.currentTarget;
                  const formData = new FormData(formEl);

                  fetch("/", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: new URLSearchParams(formData).toString(),
                  })
                    .then(() => {
                      setSubmitted(true);
                      formEl.reset();
                    })
                    .catch((err) => {
                      console.error(err);
                      alert("Sorry, there was a problem submitting the form.");
                    });
                }}
                className="mt-6 space-y-5"
              >
                {/* Netlify required hidden inputs */}
                <input type="hidden" name="form-name" value="contact" />

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your business name"
                    className="w-full rounded-lg bg-muted-100 border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-primary-blue"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="yourbusiness@example.com"
                    className="w-full rounded-lg bg-muted-100 border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-primary-blue"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold mb-2"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(XXX) XXX-XXXX"
                    className="w-full rounded-lg bg-muted-100 border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-primary-blue"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us a little what inspires you about your business..."
                    className="w-full rounded-lg bg-muted-100 border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-primary-blue resize-y"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-blue text-white rounded-full py-4 font-semibold hover:bg-primary-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </Container>
  );
}
