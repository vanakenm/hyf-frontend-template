import { useState, useEffect } from "react"; // Correctly import from 'react'
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router";
import "./offerUpdate.css"; // Assuming you have the CSS

const UpdateOfferForm = () => {
  const [offer, setOffer] = useState({
    name: '',
    description: '',
    startDate: "2024-09-14",
      endDate: "2024-09-14",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchOfferData = async () => {
      try {
        const response = await axios.get('http://cfood.obereg.net:5000/boxes/get-boxes/1');
        const data = response.data;

        if (data && data.boxes && data.boxes.length > 0) {
          const standardBox = data.boxes.find(box => box.type === 'Standard');
          setOffer(prevOffer => ({
            ...prevOffer,
            name: standardBox ? standardBox.type : '',
            description: standardBox ? standardBox.description : '',
            quantity: 12,
          }));
        }
      } catch (error) {
        console.error('Error fetching the offer data:', error);
      }
    };

    fetchOfferData();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOffer({ ...offer, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Offer submitted:', offer);
    alert('Offer updated successfully!');
    navigate("/"); // Redirect after successful submission
  };

  const handleCancel = () => {
    setOffer({
      name: '',
      description: '',
      date: 'Sept 16th, 2024',
      quantity: 0,
    });
    alert('Offer update canceled');
    navigate("/"); // Redirect after canceling
  };

  return (
    <Form onSubmit={handleSubmit} className="update-offer-form">
      <h2>Update an Offer</h2>

      <Form.Group controlId="formOfferName" className="mb-3">
        <Form.Label>Name <span className="mandatory">*</span></Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={offer.name}
          onChange={handleInputChange}
          placeholder="Offer Name"
          required
        />
      </Form.Group>

      <Form.Group controlId="formOfferDescription" className="mb-3">
        <Form.Label>Description <span className="mandatory">*</span></Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          value={offer.description}
          onChange={handleInputChange}
          placeholder="Offer Description"
          required
        />
        <Form.Text className="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formOfferDate" className="mb-3">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="text"
          name="date"
          value={offer.date}
          readOnly
        />
      </Form.Group>

      <Form.Group controlId="formOfferQuantity" className="mb-3">
        <Form.Label>Quantity <span className="mandatory">*</span></Form.Label>
        <Form.Control
          type="number"
          name="quantity"
          value={offer.quantity}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <div className="form-actions d-flex justify-content-between">
        <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
        <Button variant="primary" type="submit">Save</Button>
      </div>
    </Form>
  );
};

export default UpdateOfferForm;
