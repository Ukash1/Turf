import React from 'react';
import '../../assets/styles/Cricket.css'
import f1 from '../../assets/images/f1.jpg';
import f2 from '../../assets/images/f2.jpg';
import f3 from '../../assets/images/f3.webp';
import f4 from '../../assets/images/f4.jpg';
import f5 from '../../assets/images/f5.jpg';
import f6 from '../../assets/images/f6.webp';
import img8 from '../../assets/images/img8.jpg';
import img15 from '../../assets/images/img15.avif';
import img16 from '../../assets/images/img16.webp';
import img17 from '../../assets/images/img17.webp';
import img18 from '../../assets/images/img18.jpg';
import img19 from '../../assets/images/img19.jpg';
import { Link } from 'react-router-dom';
const products = [
  {
    // id: 1,
    name: 'Yuva Turf',
    price: '₹800',
    image: f1,
    rating: 5,
  },
  {
    // id: 2,
    name: 'Miraz Turf',
    price: '₹800',
    image: f2,
    rating: 4,
  },
  {
    // id: 3,
    name: 'SR Turf',
    price: '₹800',
    image: f3,
    rating: 5,
  },
  {
    // id: 4,
    name: 'GOA Turf',
    price: '₹800',
    image: f4,
    rating: 4,
  },
  {
    id: 5,
    name: 'RK Turf',
    price: '₹800',
    image:f5,
    rating: 4,
  },
  {
    id: 6,
    name: 'Sportive Turf',
    price: '₹800',
    image: f6,
    rating: 4,
  },
  // {
  //   id: 7,
  //   name: 'Zen Turf',
  //   price: '₹800',
  //   image:img7,
  //   rating: 4,
  // },
  {
    // id: 8,
    name: 'DD Turf',
    price: '₹800',
    image:img8,
    rating: 4,
  },
  {
    id: 10,
    name: 'Kovai Turf',
    price: '₹800',
    image:img18,
    rating: 4,
  },
  {
    id: 10,
    name: 'Kovai Turf',
    price: '₹800',
    image:img16,
    rating: 4,
  },
  {
    id: 10,
    name: 'Kovai Turf',
    price: '₹800',
    image:img17,
    rating: 4,
  },
  {
    id: 10,
    name: 'Kovai Turf',
    price: '₹800',
    image:img19,
    rating: 4,
  },
  {
    id: 9,
    name: 'Kings Turf',
    price: '₹800',
    image: img15,
    rating: 4,
  },
];

const Football = () => {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Welcome to AquaTurf.</h1>
      </header> */}
      <section className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name}/>
            <h2>{product.name}</h2>
            <p class="co">{product.price}</p>
            <div className="rating" class="co">
              {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
            </div>
            <Link to={`/detail`}>
              <center><button>Book Now</button></center>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Football;