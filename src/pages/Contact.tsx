import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Layout from '../components/Layout';

const Contact: React.FC = () => {
  const { currentTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const getStyles = () => {
    switch (currentTheme) {
      case 'theme1':
        return {
          title: 'text-gray-900',
          text: 'text-gray-600',
          card: 'bg-white border border-gray-200',
          input: 'border-gray-300 focus:border-blue-500 focus:ring-blue-200',
          button: 'bg-blue-600 hover:bg-blue-700 text-white',
          accent: 'text-blue-600'
        };
      case 'theme2':
        return {
          title: 'text-white',
          text: 'text-gray-300',
          card: 'bg-gray-800 border border-gray-700',
          input: 'bg-gray-700 border-gray-600 text-white focus:border-amber-500 focus:ring-amber-200',
          button: 'bg-amber-600 hover:bg-amber-700 text-white',
          accent: 'text-amber-400'
        };
      case 'theme3':
        return {
          title: 'text-purple-800',
          text: 'text-gray-600',
          card: 'bg-white/80 backdrop-blur-sm border-2 border-purple-200',
          input: 'border-purple-300 focus:border-pink-500 focus:ring-pink-200',
          button: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white',
          accent: 'text-pink-600'
        };
      default:
        return {
          title: 'text-gray-900',
          text: 'text-gray-600',
          card: 'bg-white border border-gray-200',
          input: 'border-gray-300 focus:border-blue-500 focus:ring-blue-200',
          button: 'bg-blue-600 hover:bg-blue-700 text-white',
          accent: 'text-blue-600'
        };
    }
  };

  const styles = getStyles();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { icon: <Mail className="w-6 h-6" />, title: 'Email', value: 'hello@themeapp.com', link: 'mailto:hello@themeapp.com' },
    { icon: <Phone className="w-6 h-6" />, title: 'Phone', value: '+1 (555) 123-4567', link: 'tel:+15551234567' },
    { icon: <MapPin className="w-6 h-6" />, title: 'Address', value: '123 Theme Street, Design City, DC 12345', link: 'https://maps.google.com' },
  ];

  const features = [
    { icon: <MessageCircle className="w-8 h-8" />, title: '24/7 Support', description: 'Get help whenever you need it' },
    { icon: <Clock className="w-8 h-8" />, title: 'Quick Response', description: 'We typically respond within 2 hours' },
    { icon: <Send className="w-8 h-8" />, title: 'Multiple Channels', description: 'Reach us via email, phone, or chat' },
  ];

  return (
    <Layout showSidebar={currentTheme === 'theme2'}>
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${styles.title}`}>
              Get in Touch
            </h1>
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${styles.text}`}>
              Have questions, feedback, or need support? We'd love to hear from you. 
              Let's start a conversation.
            </p>
          </motion.div>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`${styles.card} rounded-2xl shadow-lg p-8`}
            >
              <h2 className={`text-2xl font-bold mb-6 ${styles.title}`}>
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={`block text-sm font-medium mb-2 ${styles.title}`}>
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${styles.input} focus:ring-2 focus:ring-opacity-50 transition-colors`}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={`block text-sm font-medium mb-2 ${styles.title}`}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${styles.input} focus:ring-2 focus:ring-opacity-50 transition-colors`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${styles.title}`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${styles.input} focus:ring-2 focus:ring-opacity-50 transition-colors`}
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className={`block text-sm font-medium mb-2 ${styles.title}`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border ${styles.input} focus:ring-2 focus:ring-opacity-50 transition-colors resize-none`}
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${styles.button}`}
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div className={`${styles.card} rounded-2xl shadow-lg p-8`}>
                <h2 className={`text-2xl font-bold mb-6 ${styles.title}`}>
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`${styles.accent} mt-1`}>
                        {info.icon}
                      </div>
                      <div>
                        <h3 className={`font-semibold ${styles.title}`}>
                          {info.title}
                        </h3>
                        <a
                          href={info.link}
                          className={`${styles.text} hover:${styles.accent} transition-colors`}
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${styles.card} rounded-2xl shadow-lg p-8`}>
                <h2 className={`text-2xl font-bold mb-6 ${styles.title}`}>
                  Office Hours
                </h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className={styles.text}>Monday - Friday</span>
                    <span className={styles.title}>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={styles.text}>Saturday</span>
                    <span className={styles.title}>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={styles.text}>Sunday</span>
                    <span className={styles.title}>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${styles.title}`}>
              Why Contact Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className={`${styles.card} rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300`}
                >
                  <div className={`${styles.accent} mb-4 flex justify-center`}>
                    {feature.icon}
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${styles.title}`}>
                    {feature.title}
                  </h3>
                  <p className={styles.text}>
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;