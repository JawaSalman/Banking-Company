import React, { useState } from "react"
import { OurProductsHeaderData, OurProductsData } from "../data/data"
import OurProductHeader from "../Components/Header/OurProductHeader"
import ProductCard from '../Components/ProductCard/ProductCard'
import './OurProductSection.css'


const OurProductSection = () => {
  const [category, setCategory] = useState('individual');

  const filteredProducts = OurProductsData.filter(product => {
    return product.category == category;
  });

  return (
    <section className="hs-op-section hs-section-margin">
      <OurProductHeader
        Headerdata={OurProductsHeaderData}
        activeCategory={category}
        setCategory={setCategory}
      />

      <div className="hs-products-container hs-flex-sm-col">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} card={product} />
        ))}
      </div>
    </section>
  );
}

export default OurProductSection;
