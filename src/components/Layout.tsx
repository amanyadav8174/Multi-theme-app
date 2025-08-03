import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showSidebar = false }) => {
  const { currentTheme } = useTheme();

  const getLayoutStyles = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'bg-gray-50 min-h-screen font-sans';
      case 'theme2':
        return 'bg-gray-900 min-h-screen font-serif';
      case 'theme3':
        return 'bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 min-h-screen';
      default:
        return 'bg-gray-50 min-h-screen font-sans';
    }
  };

  const getSidebarStyles = () => {
    switch (currentTheme) {
      case 'theme2':
        return 'bg-gray-800 border-r border-gray-700 text-white';
      default:
        return 'hidden';
    }
  };

  const getContentStyles = () => {
    if (currentTheme === 'theme2' && showSidebar) {
      return 'flex-1 lg:ml-64';
    }
    return 'flex-1';
  };

  return (
    <motion.div
      key={currentTheme}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={getLayoutStyles()}
    >
      <Header />
      
      <div className="flex pt-16">
        {/* Sidebar for Theme 2 */}
        {currentTheme === 'theme2' && showSidebar && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            className={`fixed left-0 top-16 h-full w-64 ${getSidebarStyles()} p-6 hidden lg:block`}
          >
            <nav className="space-y-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="block py-2 px-3 rounded hover:bg-gray-700 transition-colors">Dashboard</a></li>
                <li><a href="#" className="block py-2 px-3 rounded hover:bg-gray-700 transition-colors">Analytics</a></li>
                <li><a href="#" className="block py-2 px-3 rounded hover:bg-gray-700 transition-colors">Reports</a></li>
                <li><a href="#" className="block py-2 px-3 rounded hover:bg-gray-700 transition-colors">Settings</a></li>
              </ul>
            </nav>
          </motion.aside>
        )}

        {/* Main Content */}
        <main className={getContentStyles()}>
          {children}
        </main>
      </div>
    </motion.div>
  );
};

export default Layout;