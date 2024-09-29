import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Input from './Input';
import Button from './Button';
import CurveBlue from '../assets/images/curveBlue.svg';
import emailjs from 'emailjs-com';

export default function Contact() {
  const controls = useAnimation(); // Create animation controls
  const sectionRef = useRef(null); // Reference for the main div
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userId = import.meta.env.VITE_EMAILJS_USER_ID;

  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State for feedback message
  const [feedbackMessage, setFeedbackMessage] = useState('');

  // State for loading
  const [loading, setLoading] = useState(false);

  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 }, // Hidden state
    visible: { opacity: 1, y: 0 }, // Visible state
  };

  useEffect(() => {
    const section = sectionRef.current;

    // Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start('visible'); // Start animation when in view
          } else {
            controls.start('hidden'); // Reset animation when out of view
          }
        });
      },
      { threshold: 0.3 } // Trigger when 50% of the section is visible
    );

    if (section) {
      observer.observe(section); // Observe the section
    }

    return () => {
      if (section) {
        observer.unobserve(section); // Cleanup observer
      }
    };
  }, [controls]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };
    console.log(formData);

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        setFeedbackMessage('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        setFeedbackMessage('failed');
      })
      .finally(() => {
        setLoading(false); // Reset loading state
      });
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-slate-100 md:pt-0 snap-start flex flex-row items-center justify-center relative z-0"
    >
      <motion.div
        className="w-[700px] flex flex-col gap-36 z-10"
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.5, delay: 0.2 }} // Animation duration
      >
        <div>
          <h2 className="font-bold text-[50px] text-center text-mainColor">
            Send me a message!
          </h2>
          <p className="text-center text-xl">
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
        </div>
        <div>
          <form className="flex flex-col gap-10 px-5" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-10">
              <Input
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Input
                name="message"
                type="text"
                placeholder="Enter a message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            {loading ? (
              // <p className="self-center text-xl text-blue-600 ">Loading...</p>
              <Button classes="bg-gray-400 text-mainColor cursor-not-allowed opacity-90 rounded self-center">
                Loading....
              </Button>
            ) : (
              <Button classes="self-center">SHOOT</Button>
            )}
          </form>
          {feedbackMessage === 'success' && (
            <p className="mt-4 text-center text-xl text-green-600">
              Message sent successfully!
            </p>
          )}
          {feedbackMessage === 'failed' && (
            <p className="mt-4 text-center text-xl text-red-600">
              Failed to send message, please try again.
            </p>
          )}
        </div>
      </motion.div>
      <img
        src={CurveBlue}
        alt="curves"
        className="absolute bottom-0 left-0 w-[450px] -z-10 opacity-30"
      />
      <img
        src={CurveBlue}
        alt="curves"
        className="absolute rotate-180 top-0 right-0 w-[450px] -z-10 opacity-30"
      />
    </section>
  );
}
