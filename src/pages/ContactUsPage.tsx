import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { Mail, Send } from 'lucide-react';
import { scrollToTop } from '../utils/smoothScroll';

const ContactUsPage: React.FC = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
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
      <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 animate-gradient-x" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl mb-8 border border-white/10 shadow-2xl">
              <Mail className="text-white" size={36} />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-blue-100 font-light">
              Have a question or want to learn more? We'd love to hear from you.
            </p>
            <div className="flex items-center justify-center gap-2 mt-8">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              <div className="h-1 w-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Contact Form - Left Side */}
            <div>
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base font-semibold text-slate-900">
                        Email Address
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="pl-10 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-base font-semibold text-slate-900">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help you..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={8}
                        className="resize-none border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl rounded-xl transition-all duration-200"
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
              <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-white/20 bg-gradient-to-br from-blue-100 to-purple-100">
                <video 
                  src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Hc_TvUoHMjcyusz29/videoblocks-hands-of-woman-using-mobile-phone_bsjleosvu__3b76b114cc4414021569caa7da4dca27__P360.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline  
                  className="w-full h-full object-cover"
                />
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

