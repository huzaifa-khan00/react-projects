import { useNavigate } from "react-router-dom";

function ProductCard({ id, title, price, image, category }) {
  let navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/product-details/${id}`)}>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <h3>{category}</h3>
      <h2>{title}</h2>
      <p>${price}</p>
    </div>
  );
}

export default ProductCard;