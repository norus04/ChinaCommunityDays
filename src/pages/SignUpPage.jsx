import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import app from '../firebaseConfig';

const db = getFirestore(app);

const SignUpPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    number: '',
    signupFor: ''
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    try {
      await addDoc(collection(db, 'signups'), form);
      setSuccess(true);
      setForm({ name: '', email: '', number: '', signupFor: '' });
    } catch (err) {
      setError('Error submitting form. Please try again.');
    }
  };

  return (
    <div className="signup-page">
      <h1>Sign-Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          name="number"
          value={form.number}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        <select
          name="signupFor"
          value={form.signupFor}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select</option>
          <option value="Battle of the Buns (Cheeseburger Challenge)">Battle of the Buns (Cheeseburger Challenge)</option>
          <option value="Blow-Up Costume Race">Blow-Up Costume Race</option>
          <option value="Boat Regatta">Boat Regatta</option>
          <option value="Car Cruize-In">Car Cruize-In</option>
          <option value="Forest Walk (1 hour walk)">Forest Walk (1 hour walk)</option>
          <option value="Forest Walk (2 hour walk)">Forest Walk (2 hour walk)</option>
          <option value="Music by Yellow Brick Road (Elton John Tribute Band)">Music by Yellow Brick Road (Elton John Tribute Band)</option>
          <option value="Pickleball Tourney">Pickleball Tourney</option>
          <option value="PTO Color Run">PTO Color Run</option>
          <option value="Volunteer">Volunteer</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      {success && <p>Thank you for signing up!</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SignUpPage; 