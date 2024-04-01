import { useEffect, useState } from "react";
import "./scroll.css"

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error)
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);



  function handleScrollPercentage() {

    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );   

    const currentScrolled =
      document.body.scrollY|| document.documentElement.scrollTop;
    const hieght =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((currentScrolled / hieght) * 100) ;
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  console.log(data, scrollPercentage);
  console.log(scrollPercentage);
  console.log(
    document.body.scrollTop,
    document.documentElement.scrollTop,
    document.documentElement.scrollHeight,
    document.documentElement.clientHeight
  ); 
  if (error) {
    return <div>Error ! {error}</div>;
  }

  if (loading) {
    return <div>Loading data ! Pleaae wait</div>;
  }

  return (
    <div>
      <div className="top-container">
        <h3>Custom Scroll Indicator</h3>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
         
        </div>
      </div>

      <div className="data-container">
          {data && data.length > 0
          ? data.map((dataItem) => <h4>{dataItem.title}</h4>)
          : null};
          </div>
      </div>
  );
}
