"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import emailjs from 'emailjs-com';
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:sheheryar.pk2@gmail.com">
          sheheryar.pk2@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const senderEmail = (form.senderEmail as HTMLInputElement).value;
          const message = (form.message as HTMLTextAreaElement).value;

          if (!senderEmail || !message) {
            toast.error("Please fill in all fields.");
            return;
          }

          try {
            await emailjs.send(
              process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
              process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
              {
                from_email: senderEmail,
                message: message,
              },
              process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
            );
            toast.success("Email sent successfully!");
            form.reset();
          } catch (error) {
            toast.error("Failed to send email. Please try again later.");
          }
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
