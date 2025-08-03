import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useTheme } from '../contexts/ThemeContext';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const { currentTheme } = useTheme();

  const getCardStyles = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md';
      case 'theme2':
        return 'bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl';
      case 'theme3':
        return 'bg-white/90 backdrop-blur-sm border-2 border-purple-200 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1';
      default:
        return 'bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md';
    }
  };

  const getTextStyles = () => {
    switch (currentTheme) {
      case 'theme1':
        return { title: 'text-gray-900', description: 'text-gray-600', price: 'text-blue-600' };
      case 'theme2':
        return { title: 'text-white', description: 'text-gray-300', price: 'text-amber-400' };
      case 'theme3':
        return { title: 'text-purple-800', description: 'text-gray-600', price: 'text-pink-600' };
      default:
        return { title: 'text-gray-900', description: 'text-gray-600', price: 'text-blue-600' };
    }
  };

  const getButtonStyles = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'bg-blue-600 hover:bg-blue-700 text-white';
      case 'theme2':
        return 'bg-amber-600 hover:bg-amber-700 text-white';
      case 'theme3':
        return 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white';
      default:
        return 'bg-blue-600 hover:bg-blue-700 text-white';
    }
  };

  const textStyles = getTextStyles();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={`${getCardStyles()} p-6 transition-all duration-300`}
    >
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain rounded-lg"
        />
      </div>
      
      <div className="flex items-center space-x-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(product.rating.rate)
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
        <span className={`text-sm ${textStyles.description} ml-2`}>
          ({product.rating.count})
        </span>
      </div>

      <h3 className={`font-semibold text-lg mb-2 line-clamp-2 ${textStyles.title}`}>
        {product.title}
      </h3>
      
      <p className={`text-sm mb-4 line-clamp-3 ${textStyles.description}`}>
        {product.description}
      </p>
      
      <div className="flex items-center justify-between">
        <span className={`text-2xl font-bold ${textStyles.price}`}>
          ${product.price.toFixed(2)}
        </span>
        
        <button
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${getButtonStyles()}`}
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;