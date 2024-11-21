/* eslint-disable react/prop-types */
function Airforce(props) {
  const shoes = props.shoes;
  return (
    <div className="md">
      <img src="./IMG/nike-airforce.jpg" alt="" />
      <h4>{shoes[1].title}</h4>
      <p>{shoes[1].price}</p>
    </div>
  );
}
export default Airforce;
