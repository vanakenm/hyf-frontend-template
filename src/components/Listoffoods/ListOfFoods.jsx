import "./List.css";
/* eslint-disable react/prop-types */
const ListOfFoods = ({ offers }) => {
  return (
    <section className="offer-container">
      {offers.map((item, index) => (
        <article key={index} className="offer-items">
          <div className="offer-details">
            <ul>
              <li className="offer-info">
                <span className="offer-label">Provider: </span>
                <span className="offer-value">{item.provider_name}</span>
              </li>
              <li className="offer-info">
                <span className="offer-label">Standard Quantity: </span>
                <span className="offer-value">{item.standard_unit}</span>
              </li>
              <li className="offer-info">
                <span className="offer-label">Vegan Quantity: </span>
                <span className="offer-value">{item.vegan_unit}</span>
              </li>
              <li className="offer-info">
                <span className="offer-label">Diabetic Quantity: </span>
                <span className="offer-value">{item.diabetic_unit}</span>
              </li>
              <li className="offer-info">
                <span className="offer-label">Address: </span>
                <span className="offer-value">{item.address}</span>
              </li>
              <li className="offer-info">
                <span className="offer-label">Pickup Time: </span>
                <span className="offer-value">{item.pickup_time}</span>
              </li>
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
};

export default ListOfFoods;
