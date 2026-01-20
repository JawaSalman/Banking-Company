import './ProductCard.css'

const ProductCard = ({ card }) => {
  return (
    <div className="hs-product-card flex-col">
      <div>
        <div className='bg-icon hs-outer-circle flex-center'>
          <div className='bg-icon hs-inner-circle flex-center hs-glow-border'>
            <img src={card.icon} alt={card.title} />
          </div>
        </div>
      </div>

      <div className="hs-product-info">
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
