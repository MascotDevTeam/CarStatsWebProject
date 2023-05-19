import "./homeComponent.css";
import { getCarsByBrand, getAllCars } from "../../redux/carsSlice";
import { useDispatch } from "react-redux";

function BrandList(props) {
  const dispatch = useDispatch();
  return (
    <div id="brand-navigation">
      <p>Choose by Brand</p>
      <div id="brand-list">
        <button onClick={() => dispatch(getAllCars())} id="brand-item">
          All
        </button>
        {props.brands.map((brand) => (
          <button
            onClick={() => dispatch(getCarsByBrand(brand.name))}
            id="brand-item"
            key={brand.id}
          >
            {brand.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BrandList;
