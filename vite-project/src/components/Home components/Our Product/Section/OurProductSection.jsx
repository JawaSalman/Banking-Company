import React, { useEffect, useState } from "react"
import { OurProductsHeaderData, OurProductsData } from "../data/data"
import OurProductHeader from "../Components/Header/OurProductHeader"
import ProductCard from '../Components/ProductCard/ProductCard'
import './OurProductSection.css'

const OurProductSection = () => {
  const storageKey = "tableData-1-0";
  const [category, setCategory] = useState('individual');

  const [products, setProducts] = useState(OurProductsData);

  useEffect(() => {
    const savedData = localStorage.getItem(storageKey);

    if (savedData) {
      setProducts(JSON.parse(savedData));
    } else {
      localStorage.setItem(storageKey, JSON.stringify(OurProductsData));
    }

  }, []);

  // Create a filtered list based on the selected category
  const filteredProducts = products.filter(product => {
    const productCat = product.category ? product.category.toLowerCase() : 'individual';
    return productCat == category;
  });

  return (
    <section className="hs-op-section hs-section-margin">
      {/* Top part with title and toggle buttons */}
      <OurProductHeader
        Headerdata={OurProductsHeaderData}
        activeCategory={category}
        setCategory={setCategory}
      />

      {/* Show the list of filtered product cards */}
      <div className="hs-products-container hs-flex-sm-col">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} card={product} />
        ))}
      </div>
    </section>
  );
}

export default OurProductSection;
