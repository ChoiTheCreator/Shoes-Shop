/* eslint-disable react/prop-types */
function CarharrtAirforce(props) {
  const shoes = props.shoes;
  return (
    <div className="md">
      <img src="./IMG/carharrt airforce.jpg" alt="" />
      <h4>{shoes[0].title}</h4>
      <p>{shoes[0].price}</p>
    </div>
  );
}
export default CarharrtAirforce;
