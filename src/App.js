import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCars } from "./redux/carsSlice";

export default function App() {
  const dispatch = useDispatch();
  const carState = useSelector((state) => state.carsState);
  const cars = useSelector((state) => state.carsState.cars);

  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
