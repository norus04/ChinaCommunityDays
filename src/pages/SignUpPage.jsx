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
          <option value="Music by Brian Plato">Music by Brian Plato</option>
          <option value="Battle of the Buns (Cheeseburger Challenge)">Battle of the Buns (Cheeseburger Challenge)</option>
          <option value="Community BBQ">Community BBQ</option>
          <option value="Music by Yellow Brick Road (Elton John Tribute Band)">Music by Yellow Brick Road (Elton John Tribute Band)</option>
          <option value="PTO Color Run">PTO Color Run</option>
          <option value="Car Cruize-In">Car Cruize-In</option>
          <option value="Vendors & Booths">Vendors & Booths</option>
          <option value="Field Day">Field Day</option>
          <option value="Blow-Up Costume Race">Blow-Up Costume Race</option>
          <option value="Food Booths">Food Booths</option>
          <option value="Boat Regatta">Boat Regatta</option>
          <option value="Pickleball Tourney">Pickleball Tourney</option>
          <option value="Tickles the Clown">Tickles the Clown</option>
          <option value="Party Palooga">Party Palooga</option>
          <option value="Foam Pit">Foam Pit</option>
          <option value="China Fire Truck">China Fire Truck</option>
          <option value="Carnival">Carnival</option>
          <option value="Lighted Boat Parade">Lighted Boat Parade</option>
          <option value="Laser Show by Dynamicks FX">Laser Show by Dynamicks FX</option>
          <option value="Music by The Laura Hudson Project">Music by The Laura Hudson Project</option>
          <option value="Church Service">Church Service</option>
          <option value="Fishing Derby">Fishing Derby</option>
          <option value="Scavenger Hunt">Scavenger Hunt</option>
          <option value="Forest Walk (Short/Long)">Forest Walk (Short/Long)</option>
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