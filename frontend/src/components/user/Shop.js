import React, { useState } from 'react';
import '../../assets/styles/Shop.css'
import fb from '../../assets/images/footballl.jpg';
import cr from '../../assets/images/crickett.webp';
import Tb from '../../assets/images/TB.jpg';
import boot from '../../assets/images/boot.webp';
import j from '../../assets/images/jerseyfbjpg.jpg';
import jr from '../../assets/images/jerseycr.png';
import Stumps from '../../assets/images/stumps.jpg';
import fier from '../../assets/images/fier.webp';
import pads from '../../assets/images/pads.jpg';
import gloves from '../../assets/images/gloves.jpg';
import cork from '../../assets/images/cork.jpg';
import bcork from '../../assets/images/bcork.jpg';
import bjersey from '../../assets/images/bjersey.webp';
import bat from '../../assets/images/bat.webp';
import socks from '../../assets/images/socks.webp';
import stumper from '../../assets/images/stumper.png';
import hel from '../../assets/images/hel.jpg';
import grip from '../../assets/images/grip.jpg';

const posts = [
  { productName: 'Bat', link: 'https://facebook.github.io/react/', coins: 1000, img:cr },
  { productName: 'Tennis Ball', link: 'https://angularjs.org/', coins: 200, img:Tb},
  { productName: 'Jersey', link: 'http://aurelia.io/', coins: 600, img: jr },
  { productName: 'Stumps', link: 'https://nodejs.org/en/', coins: 250, img: Stumps },
  { productName: 'Fiber Bat', link: 'https://pusher.com/', coins: 300, img: fier },
  { productName: 'Stumper Ball', link: 'http://feathersjs.com/', coins: 20, img: stumper },
  { productName: 'Pad', link: 'http://feathersjs.com/', coins: 100, img:pads },
  { productName: 'Glove', link: 'http://feathersjs.com/', coins: 50, img:gloves },
  { productName: 'Helmet', link: 'http://feathersjs.com/', coins: 30, img:hel },
  { productName: 'Badminton Bat', link: 'http://feathersjs.com/', coins: 80, img: bat },
  { productName: 'Cork', link: 'http://feathersjs.com/', coins: 120, img: cork },
  { productName: 'Jersey', link: 'http://feathersjs.com/', coins: 200, img: bjersey },
  { productName: 'Cork Box', link: 'http://feathersjs.com/', coins: 250, img: bcork },
    { productName: 'Boot', link: 'https://vuejs.org/', coins: 300, img:fb },
    { productName: 'Jersey', link: 'http://emberjs.com/', coins: 400, img: boot },
    { productName: 'Jersey', link: 'https://www.meteor.com/', coins: 150, img:j },
    { productName: 'Sockins', link: 'http://feathersjs.com/', coins: 150, img:socks },
    { productName: 'Grip', link: 'http://feathersjs.com/', coins: 25, img: grip },
  ];
  
  const Shop = () => {
    const [search, setSearch] = useState('');
  
    const filteredList = posts.filter(post => 
      post.productName.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <div id="app">
        <div className="search-wrapper">
          <input 
            type="text" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            placeholder="Search product name.." 
          />
          <label>Search product name:</label>
        </div>
        <div className="wrapper">
          {filteredList.map((post, index) => (
            <div className="card" key={index}>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <img src={post.img} alt={post.productName} />
                <small>Coins needed: {post.coins}</small>
                <p>{post.productName}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  


  export default Shop;