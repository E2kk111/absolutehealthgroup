import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { Mail, Send } from 'lucide-react';

const ContactUsPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS configuration - these should be set as environment variables
  // For now, using placeholder values that need to be configured
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';
  const RECIPIENT_EMAIL = import.meta.env.RECEIVER_EMAIL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Check if EmailJS is properly configured
      if (EMAILJS_SERVICE_ID === 'your_service_id' || 
          EMAILJS_TEMPLATE_ID === 'your_template_id' || 
          EMAILJS_PUBLIC_KEY === 'your_public_key') {
        // Fallback: Use mailto link if EmailJS is not configured
        const subject = encodeURIComponent('Contact Form Submission');
        const body = encodeURIComponent(`From: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
        toast.success('Opening your email client...', {
          description: 'Please send the email from your email client.',
        });
        setEmail('');
        setMessage('');
        setIsSubmitting(false);
        return;
      }

      // Send email using EmailJS
      const templateParams = {
        to_email: RECIPIENT_EMAIL,
        from_email: email,
        message: message,
        reply_to: email,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast.success('Message sent successfully!', {
        description: 'We will get back to you soon.',
      });

      // Reset form
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message', {
        description: 'Please try again or contact us directly at info@absolutehealthgroup.com',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Contact Us</h1>
            <p className="text-lg text-gray-700">
              Have a question or want to learn more? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Contact Form - Left Side */}
            <div>
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base font-semibold">
                        Email Address
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-base font-semibold">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help you..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={8}
                        className="resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full cta-button"
                      size="lg"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Video Section - Right Side (Circular) */}
            <div className="w-full flex justify-center md:justify-end">
              <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source 
                    src="https://media.istockphoto.com/id/1424794714/video/asian-woman-appointment-consulting-doctor-visit-on-mobile-app-at-home-telemedicine.mp4?b=1&s=192_srp&k=20&c=Xns5p-k4NYVX4-4GSHkJxnDgBH0gBtAjwobIYFpyRcc=" 
                    type="video/mp4" 
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUsPage;

