import "./List.css";
/* eslint-disable react/prop-types */
const ListOfFoods = ({ offers }) => {
  return (
    <section className="offer-container">
      {offers.map((item, index) => (
        <article key={index} className="offer-item">
          <div className="offer-details">
            <ul>
              <li className="offer-info">
                <span className="offer-label">Pickup Time: </span>
                <span className="offer-value">{item.pickup_time}</span>
              </li>
              <li className="offer-info">
                <span className="offer-label">Diabetic Quantity: </span>
                <span className="offer-value">{item.diabetic_quantity}</span>
              </li>
              <li className="offer-info">
                <span className="offer-label">Provider ID: </span>
                <span className="offer-value">{item.provider_id}</span>
              </li>
              <li className="offer-info">
                <span className="offer-label">Standard Quantity: </span>
                <span className="offer-value">{item.standard_quantity}</span>
              </li>
              <li className="offer-info">
                <span className="offer-label">Vegan Quantity: </span>
                <span className="offer-value">{item.vegan_quantity}</span>
              </li>
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
};

export default ListOfFoods;
