import "./homeComponent.css";

function CarsList(props) {
  return (
    <div id="cars-list">
      {props.cars.map((car) => (
        <div key={car.id} id="cars-list-item">
          <h3>
            {car.year} {car.name} | ${car.price}
          </h3>
          <div id="cars-list-item-attr">
            <p>Speed: {car.speed}</p>
            <p>Handling: {car.handling}</p>
            <p>Braking: {car.braking}</p>
            <p>Gas: {car.gas}</p>
            <p>Luxury: {car.luxury}</p>
            <p>Practical: {car.practical}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarsList;
