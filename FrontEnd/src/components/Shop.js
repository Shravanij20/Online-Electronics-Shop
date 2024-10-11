
import React, { useState , useEffect} from 'react';
import Sidebar from './Sidebar/Sidebar';

import './Shop.css';
import './Shop_res.css';

import Axios from 'axios';


export default function Shop({ addToCart }) {

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/api/get").then((response) => {
  //       setMovieReviewList(response.data);
  //   });
  // }, []); // empty dependency array to run the effect only once

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  
  // const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);


  

  const[movieReviewList,setMovieReviewList]=useState([])

  // const filteredProducts = movieReviewList.filter((product) => {
  //   const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
  //   // const matchesCategory = !selectedCategory || product.category === selectedCategory;
  //   const matchesCategory = !selectedCategory || selectedCategory === 'All' || product.category === selectedCategory;
  //   const matchesPriceRange =
  //     !selectedPriceRange ||
  //     selectedPriceRange === 'all' ||
  //     (selectedPriceRange === 'price-range-1' && product.price <= 10000) ||
  //     (selectedPriceRange === 'price-range-2' && product.price > 10000 && product.price <= 30000) ||
  //     (selectedPriceRange === 'price-range-3' && product.price > 30000 && product.price <= 80000);
      

  //   return matchesSearch && matchesCategory && matchesPriceRange;     
  // });

  const handleAddToCart = (product) => {
    addToCart(product);
     setSuccessMessage(`Product "${product.name}" successfully added to the cart`);

  // const filteredProducts = movieReviewList.filter((product) => {
  //   const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
  //   const matchesCategory =
  //     !selectedCategory || selectedCategory === 'All' || product.category === selectedCategory;
  
  //   const matchesPriceRange =
  //     !selectedPriceRange ||
  //     selectedPriceRange === 'all' ||
  //     (selectedPriceRange === 'price-range-1' && product.price <= 10000) ||
  //     (selectedPriceRange === 'price-range-2' && product.price > 10000 && product.price <= 30000) ||
  //     (selectedPriceRange === 'price-range-3' && product.price > 30000 && product.price <= 80000);
  
  //   return matchesSearch && matchesCategory && matchesPriceRange;
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      const movies = response.data;
      setMovieReviewList(movies);
  
      // Apply filtering logic here
      const filtered = movies.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
        const matchesCategory =
          !selectedCategory || selectedCategory === 'All' || product.category === selectedCategory;
  
        const matchesPriceRange =
          !selectedPriceRange ||
          selectedPriceRange === 'all' ||
          (selectedPriceRange === 'price-range-1' && product.price <= 10000) ||
          (selectedPriceRange === 'price-range-2' && product.price > 10000 && product.price <= 30000) ||
          (selectedPriceRange === 'price-range-3' && product.price > 30000 && product.price <= 80000);
  
        return matchesSearch && matchesCategory && matchesPriceRange;
      });
  
      setFilteredProducts(filtered);
    });
  }, [search, selectedCategory, selectedPriceRange]);
  
  


  

//   return (
//     <div>
//       <Sidebar
//         search={search}
//         setSearch={setSearch}
//         selectedCategory={selectedCategory}
//         setSelectedCategory={setSelectedCategory}
//         selectedPriceRange={selectedPriceRange}
//         setSelectedPriceRange={setSelectedPriceRange}
//       />
//       <div className="shop-container">
//         {/* <div className="product-list">
//           {movieReviewList.map((product, index) => (
//             <div className="product" key={index}>
//               <img className="product-image" src={product.img} alt={product.name} />
//               <div className="product-details">
//                 <h3 className="product-name">{product.name}</h3>
//                 <p className="product-category">{product.category}</p>
//                 <p className="product-price">₹{product.price}</p>
//                 <button className='btn btn-primary' onClick={() => handleAddToCart(product)}>
//                   Add to cart
//                 </button>
//               </div>
//             </div>
//           ))} */}

//         {movieReviewList.map((val)=>{
//           return <h3>MovieName: {val.name}  <img src={val.img} alt="img" /></h3>
           
//         })}
//         </div>
//       </div>
//     //   {successMessage && (
//     //     <div className="success-message">
//     //       <p>{successMessage}</p>
//     //     {console.log('successMessage:', successMessage)};
//     //     </div>
//     //   )}
//     // </div>
//   );
// }

return (
  <div>
    <Sidebar
      search={search}
      setSearch={setSearch}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      selectedPriceRange={selectedPriceRange}
      setSelectedPriceRange={setSelectedPriceRange}
    />
    <div className="shop-container">
      <div className="product-list">
        {filteredProducts.map((val, index) => (
          <div className="product" key={index}>
            <img className="product-image" src={val.img} alt={val.name} />
            <div className="product-details">
              <h3 className="product-name">{val.name}</h3>
              <p className="product-category">{val.category}</p>
              <p className="product-price">₹{val.price}</p>
              <button className='btn btn-primary' onClick={() => handleAddToCart(val)}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* {successMessage && (
      <div className="success-message">
        <p>{successMessage}</p>
        {console.log('successMessage:', successMessage)};
      </div>
    )} */}
  </div>
);
  }