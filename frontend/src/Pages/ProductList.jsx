
import React from 'react';
import ProductCard from '../Componenet/ProductCard';

const products = [
  {
    id: 1,
    name: 'Handcrafted Lamp',
    description: 'Beautifully designed lamp to brighten your home.',
    price: '₹1,500',
    image: 'https://m.media-amazon.com/images/I/81xnK0U4HOL.jpg',
  },
  {
    id: 2,
    name: 'Wooden Photo Frame',
    description: 'Perfect frame for your cherished moments.',
    price: '₹700',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMgUt1XS7RgR8ymdISQwm8lBQ-tcmiWMbhrA&s',
  },
  {
    id: 3,
    name: 'Jewellery Box',
    description: 'Elegant box to keep your treasures safe.',
    price: '₹1,200',
    image: 'https://m.media-amazon.com/images/I/81YG8rwQ80L.jpg',
  },
  {
    id: 4,
    name: 'Decorative Vase',
    description: 'Add charm with this handmade vase.',
    price: '₹900',
    image: 'https://www.thepurpletree.in/cdn/shop/files/VASE000015_2PC_2.jpg?v=1712734162',
  },
  {
    id: 5,
    name: 'Artificial Plant',
    description: 'Lush greenery for your home.',
    price: '₹600',
    image: 'https://i.pinimg.com/736x/8f/34/95/8f34955e492175bbe45bbf5016406435.jpg',
  },
  {
    id: 6,
    name: 'Wall Clock',
    description: 'Stylish clock to complement your decor.',
    price: '₹1,000',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTii1RR5LoSeF2n2QeSVXRYngxAyNsd-vnyww&s',
  },
];

const ProductList = () => {
    return (
      <div className="bg-[#1c1b4d] py-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-6">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };
  

export default ProductList;