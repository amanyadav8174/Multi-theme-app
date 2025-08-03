import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Heart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useProducts } from '../hooks/useProducts';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const { currentTheme } = useTheme();
  const { products, loading, error } = useProducts();

  const getHeroStyles = () => {
    switch (currentTheme) {
      case 'theme1':
        return {
          container: 'bg-gradient-to-r from-blue-50 to-indigo-100',
          title: 'text-gray-900 font-sans',
          subtitle: 'text-gray-600',
          button: 'bg-blue-600 hover:bg-blue-700 text-white'
        };
      case 'theme2':
        return {
          container: 'bg-gradient-to-r from-gray-800 to-gray-900',
          title: 'text-white font-serif',
          subtitle: 'text-gray-300',
          button: 'bg-amber-600 hover:bg-amber-700 text-white'
        };
      case 'theme3':
        return {
          container: 'bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400',
          title: 'text-white font-bold',
          subtitle: 'text-white/90',
          button: 'bg-white hover:bg-gray-100 text-purple-600'
        };
      default:
        return {
          container: 'bg-gradient-to-r from-blue-50 to-indigo-100',
          title: 'text-gray-900 font-sans',
          subtitle: 'text-gray-600',
          button: 'bg-blue-600 hover:bg-blue-700 text-white'
        };
    }
  };

  const getSectionStyles = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'text-gray-900';
      case 'theme2':
        return 'text-white';
      case 'theme3':
        return 'text-purple-800';
      default:
        return 'text-gray-900';
    }
  };

  const getFeatureCardStyles = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'bg-white border border-gray-200 text-gray-800';
      case 'theme2':
        return 'bg-gray-800 border border-gray-700 text-white';
      case 'theme3':
        return 'bg-white/80 backdrop-blur-sm border-2 border-purple-200 text-purple-800';
      default:
        return 'bg-white border border-gray-200 text-gray-800';
    }
  };

  const heroStyles = getHeroStyles();
  const features = [
    { icon: <Sparkles className="w-8 h-8" />, title: 'Beautiful Themes', description: 'Three distinct visual experiences' },
    { icon: <Zap className="w-8 h-8" />, title: 'Lightning Fast', description: 'Smooth transitions and animations' },
    { icon: <Heart className="w-8 h-8" />, title: 'User Friendly', description: 'Intuitive design across all themes' },
  ];

  const getGridLayout = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
      case 'theme2':
        return 'space-y-6';
      case 'theme3':
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8';
      default:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
    }
  };

  return (
    <Layout showSidebar={currentTheme === 'theme2'}>
      {/* Hero Section */}
      <section className={`${heroStyles.container} py-20 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-4xl md:text-6xl font-bold mb-6 ${heroStyles.title}`}
          >
            Welcome to ThemeApp
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${heroStyles.subtitle}`}
          >
            Experience the power of dynamic theming with three completely different visual experiences
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${heroStyles.button}`}
          >
            <span>Explore Products</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${getSectionStyles()}`}>
            Why Choose ThemeApp?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${getFeatureCardStyles()}`}
              >
                <div className="mb-4 text-purple-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="opacity-80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${getSectionStyles()}`}>
            Featured Products
          </h2>
          
          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-600 text-lg">Error loading products: {error}</p>
            </div>
          )}

          {!loading && !error && (
            <div className={getGridLayout()}>
              {products.map((product, index) => (
                currentTheme === 'theme2' ? (
                  <div key={product.id} className="mb-6">
                    <ProductCard product={product} index={index} />
                  </div>
                ) : (
                  <ProductCard key={product.id} product={product} index={index} />
                )
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Home;