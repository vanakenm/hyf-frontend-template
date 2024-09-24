import React, { useState } from 'react';

const CreateOffer = () => {
  const [offer, setOffer] = useState({
    name: '',
    description: '',
    date: '2024-09-16',
    quantity: 1
  });

  const [errors, setErrors] = useState({});

  // Validation function to check for mandatory fields
  const validate = () => {
    const newErrors = {};
    if (!offer.name) newErrors.name = 'Name is mandatory';
    if (!offer.description) newErrors.description = 'Description is mandatory';
    if (!offer.date) newErrors.date = 'Date is mandatory';
    if (offer.quantity <= 0) newErrors.quantity = 'Quantity must be at least 1';
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Form is valid, proceed with offer creation (e.g., send to API)
      console.log('Offer created:', offer);
      // Reset form after creation
      setOffer({
        name: '',
        description: '',
        date: '2024-09-16',
        quantity: 1
      });
      setErrors({});
    }
  };

  // Handle form cancellation
  const handleCancel = () => {
    // Reset form and errors
    setOffer({
      name: '',
      description: '',
      date: '2024-09-16',
      quantity: 1
    });
    setErrors({});
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOffer({ ...offer, [name]: value });
  };

  return (
    <div>
      <h1>Create a new offer</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={offer.name}
            onChange={handleChange}
            placeholder="Name of the offer"
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={offer.description}
            onChange={handleChange}
            placeholder="Description of the offer"
          />
          {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={offer.date}
            onChange={handleChange}
          />
          {errors.date && <p style={{ color: 'red' }}>{errors.date}</p>}
        </div>

        <div>
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={offer.quantity}
            onChange={handleChange}
            min="1"
          />
          {errors.quantity && <p style={{ color: 'red' }}>{errors.quantity}</p>}
        </div>

        <button type="submit">Create</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default CreateOffer;
