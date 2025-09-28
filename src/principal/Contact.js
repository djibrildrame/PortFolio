import React, { useState } from 'react';
import axios from 'axios';
import './Service.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/contact', formData);
      if (response.status === 201) {
        alert('Merci pour votre message !');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        alert('Une erreur s\'est produite. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Une erreur s\'est produite. Veuillez réessayer.');
    }
  };

  return (
    <div className="contact-container">
      <h1>Contactez-moi</h1>
      <div className="personal-info">
        <h2>Informations personnelles</h2>
        <p><strong>Nom :</strong> Djibril Drame</p>
        <p><strong>Email :</strong> djibril.drame96@gmail.com</p>
        <p><strong>Téléphone :</strong> +33 6 51 62 27 85</p>
      </div>
      <div className="form-section">
        <h2>Contactez-moi via ce formulaire</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom :</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
