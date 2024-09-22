//import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import './offer.css';

const CreateOffer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Replace '/api/offers' with your actual backend endpoint
      const response = await axios.post('/api/offers', data);
      console.log('Offer created:', response.data);
      reset(); // Reset form after successful submission
    } catch (error) {
      console.error('Error creating offer:', error);
      // Handle error appropriately (e.g., show a notification)
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          {isSubmitSuccessful && (
            <Alert variant="success">Offer created successfully!</Alert>
          )}
          <h2>Create a New Offer</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Offer Name */}
            <Form.Group controlId="offerName" className="mb-3">
              <Form.Label>Offer Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter offer name"
                {...register('name', { required: 'Offer name is required' })}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name?.message}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Description */}
            <Form.Group controlId="description" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                {...register('description', {
                  required: 'Description is required',
                  minLength: {
                    value: 10,
                    message: 'Description must be at least 10 characters',
                  },
                })}
                isInvalid={!!errors.description}
              />
              <Form.Control.Feedback type="invalid">
                {errors.description?.message}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Date */}
            <Form.Group controlId="date" className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                placeholder="Enter date"
                {...register('date', {
                  required: 'Date is required',
                  min: { value: 0, message: 'Price must be positive' },
                })}
                isInvalid={!!errors.price}
              />
              <Form.Control.Feedback type="invalid">
                {errors.price?.message}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Start Date */}
            <Form.Group controlId="startDate" className="mb-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                {...register('startDate', { required: 'Start date is required' })}
                isInvalid={!!errors.startDate}
              />
              <Form.Control.Feedback type="invalid">
                {errors.startDate?.message}
              </Form.Control.Feedback>
            </Form.Group>

            {/* End Date */}
            <Form.Group controlId="endDate" className="mb-3">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                {...register('endDate', {
                  required: 'End date is required',
                  validate: (value, formValues) =>
                    value > formValues.startDate || 'End date must be after start date',
                })}
                isInvalid={!!errors.endDate}
              />
              <Form.Control.Feedback type="invalid">
                {errors.endDate?.message}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Submit Button */}
            <Button variant="primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Creating...' : 'Create Offer'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateOffer;
