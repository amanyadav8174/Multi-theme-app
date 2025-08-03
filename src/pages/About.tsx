import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Layout from '../components/Layout';

const About: React.FC = () => {
  const { currentTheme } = useTheme();

  const getStyles = () => {
    switch (currentTheme) {
      case 'theme1':
        return {
          title: 'text-gray-900',
          text: 'text-gray-600',
          card: 'bg-white border border-gray-200',
          accent: 'text-blue-600'
        };
      case 'theme2':
        return {
          title: 'text-white',
          text: 'text-gray-300',
          card: 'bg-gray-800 border border-gray-700',
          accent: 'text-amber-400'
        };
      case 'theme3':
        return {
          title: 'text-purple-800',
          text: 'text-gray-600',
          card: 'bg-white/80 backdrop-blur-sm border-2 border-purple-200',
          accent: 'text-pink-600'
        };
      default:
        return {
          title: 'text-gray-900',
          text: 'text-gray-600',
          card: 'bg-white border border-gray-200',
          accent: 'text-blue-600'
        };
    }
  };

  const styles = getStyles();
  
  const values = [
    { icon: <Users className="w-8 h-8" />, title: 'User-Centric', description: 'Every design decision is made with users in mind' },
    { icon: <Target className="w-8 h-8" />, title: 'Purpose-Driven', description: 'We build solutions that solve real problems' },
    { icon: <Award className="w-8 h-8" />, title: 'Excellence', description: 'We strive for the highest quality in everything we do' },
    { icon: <Globe className="w-8 h-8" />, title: 'Accessibility', description: 'Making great design available to everyone' },
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
              About ThemeApp
            </h1>
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${styles.text}`}>
              We're passionate about creating beautiful, functional, and accessible user experiences 
              through the power of dynamic theming.
            </p>
          </motion.div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`${styles.card} rounded-2xl shadow-lg p-8 md:p-12 mb-16`}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${styles.title}`}>
              Our Story
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className={`text-lg mb-4 ${styles.text}`}>
                  ThemeApp was born from a simple observation: users have different preferences, 
                  work in different environments, and have varying accessibility needs. Yet most 
                  applications force everyone into a single visual experience.
                </p>
                <p className={`text-lg mb-4 ${styles.text}`}>
                  We set out to change that by creating a platform that adapts to users, not the 
                  other way around. Our three distinct themes aren't just different color schemes – 
                  they're entirely different ways of experiencing digital content.
                </p>
                <p className={`text-lg ${styles.text}`}>
                  From the clean minimalism of Theme 1 to the professional efficiency of Theme 2, 
                  and the playful creativity of Theme 3, we believe there's a perfect experience 
                  for every user and every moment.
                </p>
              </div>
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full ${
                  currentTheme === 'theme1' ? 'bg-blue-100 text-blue-600' :
                  currentTheme === 'theme2' ? 'bg-amber-100 text-amber-600' :
                  'bg-purple-100 text-purple-600'
                } mb-4`}>
                  <Globe className="w-16 h-16" />
                </div>
                <h3 className={`text-2xl font-bold ${styles.title}`}>
                  Global Impact
                </h3>
                <p className={`${styles.text} mt-2`}>
                  Serving users worldwide with adaptive experiences
                </p>
              </div>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${styles.title}`}>
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className={`${styles.card} rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300`}
                >
                  <div className={`${styles.accent} mb-4`}>
                    {value.icon}
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${styles.title}`}>
                    {value.title}
                  </h3>
                  <p className={styles.text}>
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className={`${styles.card} rounded-2xl shadow-lg p-8 md:p-12 text-center`}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${styles.title}`}>
              Built with Passion
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${styles.text}`}>
              Our team of designers, developers, and user experience experts work tirelessly to 
              create applications that don't just function well – they delight users and adapt 
              to their unique needs and preferences.
            </p>
            <div className="mt-8">
              <button className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                currentTheme === 'theme1' ? 'bg-blue-600 hover:bg-blue-700 text-white' :
                currentTheme === 'theme2' ? 'bg-amber-600 hover:bg-amber-700 text-white' :
                'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
              }`}>
                Join Our Mission
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default About;