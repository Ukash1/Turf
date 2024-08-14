import React from 'react';
import '../../assets/styles/Cricket.css'
import img21 from '../../assets/images/img21.webp';
import img22 from '../../assets/images/img22.jpg';
import img23 from '../../assets/images/img23.webp';
import i from '../../assets/images/img24.webp';
import img from '../../assets/images/img7.jpg';
import img26 from '../../assets/images/img26.jpg';
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
    image: img21,
    rating: 5,
  },
  {
    // id: 2,
    name: 'Miraz Turf',
    price: '₹800',
    image: img22,
    rating: 4,
  },
  {
    // id: 3,
    name: 'SR Turf',
    price: '₹800',
    image: img23,
    rating: 5,
  },
  {
    // id: 4,
    name: 'GOA Turf',
    price: '₹800',
    image: i,
    rating: 4,
  },
  {
    id: 5,
    name: 'RK Turf',
    price: '₹800',
    image:img,
    rating: 4,
  },
  {
    id: 6,
    name: 'Sportive Turf',
    price: '₹800',
    image: img26,
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

const Cricket = () => {
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

export default Cricket;