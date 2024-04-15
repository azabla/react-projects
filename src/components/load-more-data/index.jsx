import { useEffect, useState } from "react";
import "./style.css";

export default function LoadMoreData() {
  const [products, setProducts] = useState([]);
  const [loding, setLoading] = useState(false);
  const [error, setError] = useState();
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    
    try {
        
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      
      const data = await response.json();

      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }
      console.log(data);
    } 
    catch (e) {
      setLoading(false);
      setError(e);
    } 
  }



  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

if (loding) {
  return <div>Loading Data. please wait!</div>;
}

if (error) {
  return <div>there is some error {error}</div>;
}

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
          ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableButton ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
}
