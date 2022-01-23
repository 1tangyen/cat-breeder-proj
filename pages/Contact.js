import React, { useState } from 'react';
import Footer from '../components/Footer';
import contact_img from '../img/contact_img.jpeg';
import { SiInstagram, SiFacebook, SiSinaweibo } from 'react-icons/si';

export const Contact = () => {
	const [ people, setPeople ] = useState([]);
	const [ person, setPerson ] = useState({ name: '', email: '', phone: '', message: '' });

	const handleChange = (e) => {
		const name = e.taget.name;
		const value = e.target.value;
		setPerson({ ...person, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (person.name && person.email && person.phone && person.message) {
			const newPerson = { ...person, id: new Date().getTime().toString() };
			setPeople([ ...people, newPerson ]);
			setPerson({ firstName: '', email: '', age: '' });
		}
	};

	return (
		<main className="intro_section">
			<div className="contact_columns">
				<div className="contact_container">
					<img src={contact_img} alt="Red2 Ragdoll" className="intro_img" />
				</div>
				<div className="contact_container">
					<h2>Check out the latest pictures of our Ragdools</h2>

					<p className="contact_p">
						E-mail is our preferred method of contact. Please leave a message and we will get back to you as
						soon as possible.
					</p>
				</div>
			</div>

			<form className="form" onSubmit={handleSubmit}>
				<div className="heading_header">contact form</div>
				<div className="form_control form_p">
					<label htmlFor="name">Name: </label>
					<input type="text" id="name" name="name" value={person.name} onChange={handleChange} />
				</div>
				<div className="form_control form_p">
					<label htmlFor="email">Email: </label>
					<input type="email" id="email" name="email" value={person.email} onChange={handleChange} />
				</div>
				<div className="form_control form_p">
					<label htmlFor="phone">Phone Number: </label>
					<input type="tel" id="phone" name="number" value={person.phone} onChange={handleChange} />
				</div>
				<div className="form_control form_p">
					<label htmlFor="message">Message to US: </label>
					<textarea
						className="form_p"
						type="text"
						id="message"
						name="message"
						value={person.message}
						placeholder="paws your questions here =^.^= Meow!"
						onChange={handleChange}
					/>
				</div>
				<button type="submit">Send</button>
			</form>

			<div>
				<Footer />
			</div>
		</main>
	);
};

export default Contact;
