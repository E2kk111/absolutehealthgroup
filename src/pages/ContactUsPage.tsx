import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { Mail, Send, Sparkles, Phone, MapPin, User } from 'lucide-react';
import { scrollToTop } from '../utils/smoothScroll';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ContactUsPage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isVisible, sectionRefs } = useScrollAnimation();

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const setRef = (id: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[id] = el;
  };
  const [name, setName] = useState('');
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
        const body = encodeURIComponent(`Name: ${name}\nFrom: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
        toast.success('Opening your email client...', {
          description: 'Please send the email from your email client.',
        });
        setName('');
        setEmail('');
        setMessage('');
        setIsSubmitting(false);
        return;
      }

      // Send email using EmailJS
      const templateParams = {
        to_email: RECIPIENT_EMAIL,
        from_name: name,
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
      setName('');
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
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden group">
        {/* Animated Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 animate-gradient-x" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Floating Animated Shapes */}
        <div 
          className="absolute top-20 right-10 w-48 h-48 md:w-72 md:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-glow opacity-50 md:opacity-100"
          style={{ 
            transform: `translate(${(mousePosition.x - 50) * 0.1}px, ${(mousePosition.y - 50) * 0.1}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute bottom-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow opacity-50 md:opacity-100"
          style={{ 
            animationDelay: '2s',
            transform: `translate(${(mousePosition.x - 50) * -0.15}px, ${(mousePosition.y - 50) * -0.15}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        
        <div className="container relative z-10 py-24 md:py-32 lg:py-40">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full mb-8 border border-white/20 animate-in fade-in slide-in-from-top-10 duration-1000">
              <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-sm font-semibold text-white">Get In Touch</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
              Contact Us
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl lg:text-3xl mb-6 text-blue-100 font-light animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
              Have a question or want to learn more? We'd love to hear from you.
            </p>
            
            {/* Decorative Dots */}
            <div className="flex items-center justify-center gap-2 mt-12 animate-in fade-in duration-1000 delay-400">
              <div className="h-1.5 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
              <div className="h-1.5 w-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="h-1.5 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </div>
      </section>

      <section 
        id="contact-form"
        ref={setRef('contact-form')}
        className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="container relative z-10">
          <div className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-start transition-all duration-1000 ${isVisible['contact-form'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Contact Form - Left Side */}
            <div>
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-xl group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                    Send us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base font-semibold text-slate-900">
                        Full Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="pl-10 border-slate-300 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                        />
                      </div>
                    </div>

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
                          className="pl-10 border-slate-300 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
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
                        className="resize-none border-slate-300 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="group/btn w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl rounded-xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
                      size="lg"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></span>
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          'Sending...'
                        ) : (
                          <>
                            <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                            Send Message
                          </>
                        )}
                      </span>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Video - Right Side */}
            <div className="space-y-6">
              {/* Contact Information */}
              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 backdrop-blur-xl group hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 group/item">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300">
                        <Phone className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Phone</p>
                        <a href="tel:+14042369566" className="text-slate-600 hover:text-blue-600 transition-colors">
                          (404) 236-9566
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group/item">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300">
                        <Mail className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Email</p>
                        <a href="mailto:info@absolutehealthgroup.com" className="text-slate-600 hover:text-blue-600 transition-colors">
                          info@absolutehealthgroup.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group/item">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300">
                        <MapPin className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Address</p>
                        <p className="text-slate-600">
                          11680 Great Oaks Way<br />
                          Alpharetta, GA 30022
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Video Section */}
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-gradient-to-br from-blue-100 to-purple-100 group hover:scale-105 transition-all duration-500">
                <video 
                  src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Hc_TvUoHMjcyusz29/videoblocks-hands-of-woman-using-mobile-phone_bsjleosvu__3b76b114cc4414021569caa7da4dca27__P360.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline  
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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

