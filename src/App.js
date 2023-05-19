import "./styles.css";
import BrandList from "./components/home/BrandList";
import CarsList from "./components/home/CarsList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBrands, getAllCars, getCarsByBrand } from "./redux/carsSlice";

export default function App() {
  const dispatch = useDispatch();
  const carState = useSelector((state) => state.carsState);
  const cars = useSelector((state) => state.carsState.cars);
  const brands = useSelector((state) => state.carsState.brands);

  useEffect(() => {
    dispatch(getAllCars());
    dispatch(getAllBrands());
    dispatch(getCarsByBrand("Chevrolet"));
  }, []);

  console.log(cars);

  return (
    <div className="App">
      {brands && <BrandList brands={brands} />}
      {cars && <CarsList cars={cars} />}
    </div>
  );
}
