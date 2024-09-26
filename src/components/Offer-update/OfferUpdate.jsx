import { useState, useEffect } from "react"; // Correctly import from 'react'
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router";
import "./offerUpdate.css"; // Assuming you have the CSS

const UpdateOfferForm = () => {
  const [offer, setOffer] = useState({
    description: '',
    pickup_time: "17:00:00",
    startDate: "2024-09-14",
    endDate: "2024-09-14",
    boxType: "Standard", // Default box type
  });

  const [boxes, setBoxes] = useState([]); // State to hold box types
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchOfferData = async () => {
      try {
        const response = await axios.get('http://cfood.obereg.net:5000/boxes/get-boxes/1');
        const data = response.data;

        if (data && data.boxes && data.boxes.length > 0) {
          setBoxes(data.boxes); // Store all box types
          const standardBox = data.boxes.find(box => box.type === 'Standard');
          if (standardBox) {
            setOffer(prevOffer => ({
              ...prevOffer,
              name: standardBox.type,
              description: standardBox.description,
            }));
          }
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

    // Update the description when box type changes
    if (name === "boxType") {
      const selectedBox = boxes.find(box => box.type === value);
      if (selectedBox) {
        setOffer(prevOffer => ({
          ...prevOffer,
          description: selectedBox.description,
        }));
      }
    }
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
      startDate: "2024-09-14", // Reset to default
      endDate: "2024-09-14", // Reset to default
      boxType: 'Standard', // Reset box type to default
      pickup_time: "17:00:00", // Reset pickup time to default
    });
    alert('Offer update canceled');
    navigate("/"); // Redirect after canceling
  };

  return (
    <Form onSubmit={handleSubmit} className="update-offer-form">
      <h2>Update an Offer</h2>

      <Form.Group controlId="formOfferType" className="mb-3">
        <Form.Label>Box Type <span className="mandatory">*</span></Form.Label>
        <Form.Control
          as="select"
          name="boxType"
          value={offer.boxType}
          onChange={handleInputChange}
          required
        >
          {boxes.map((box) => (
            <option key={box.type} value={box.type}>{box.type}</option>
          ))}
        </Form.Control>
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
          Description of the selected box type will appear here.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formOfferStartDate" className="mb-3">
        <Form.Label>Start Date <span className="mandatory">*</span></Form.Label>
        <Form.Control
          type="date"
          name="startDate"
          value={offer.startDate}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formOfferEndDate" className="mb-3">
        <Form.Label>End Date <span className="mandatory">*</span></Form.Label>
        <Form.Control
          type="date"
          name="endDate"
          value={offer.endDate}
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
