import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ContactButton from '../components/rive/contact/ContactButton';
import './Contact.scss';

const variants = {
	initial: {
		y: 500,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.1,
		},
	},
};

const RATE_LIMIT_SECONDS = 60; // 60s block between sends

const Contact = () => {
	const formRef = useRef(null);
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const [showPopup, setShowPopup] = useState(false);
	const [popupMessage, setPopupMessage] = useState('');
	const [sending, setSending] = useState(false);
	const [lastSent, setLastSent] = useState(() => {
		const v = localStorage.getItem('contact_last_sent');
		return v ? Number(v) : 0;
	});

	useEffect(() => {
		localStorage.setItem('contact_last_sent', String(lastSent || 0));
	}, [lastSent]);

	// show popup and auto-hide after 3s
	const showTemporaryPopup = (msg) => {
		setPopupMessage(msg);
		setShowPopup(true);
		setTimeout(() => setShowPopup(false), 3000);
	};

	const secondsRemaining = () => {
		const now = Date.now();
		const diff = Math.ceil(
			(RATE_LIMIT_SECONDS * 1000 - (now - lastSent)) / 1000
		);
		return diff > 0 ? diff : 0;
	};

	const isRateLimited = () => {
		if (!lastSent) return false;
		return Date.now() - lastSent < RATE_LIMIT_SECONDS * 1000;
	};

	const sendEmail = async (e) => {
		if (e && e.preventDefault) e.preventDefault();

		// prevent double-click while sending
		if (sending) return;

		// enforce rate limit
		if (isRateLimited()) {
			const secs = secondsRemaining();
			showTemporaryPopup(
				`Please wait ${secs}s before sending again (60s limit).`,
				'info'
			);
			return;
		}

		const formEl = formRef.current;
		if (!formEl) return;

		const formData = new FormData(formEl);
		if (
			!formData.get('name') ||
			!formData.get('email') ||
			!formData.get('message')
		) {
			setError(true);
			showTemporaryPopup('Please fill in all the fields.');
			return;
		}
		if (formData.get('email').toString().indexOf('@') === -1) {
			setError(true);
			showTemporaryPopup('Please enter a valid email address.');
			return;
		}

		setSending(true);
		setError(false);
		setSuccess(false);

		try {
			// Replace these with your actual EmailJS ids:
			await emailjs.sendForm(
				'service_yzzvxt8',
				'template_afzlwkl',
				formRef.current,
				'_nz2V_63IJghT6BSH'
			);

			setSuccess(true);
			setLastSent(Date.now());
			showTemporaryPopup('Message sent successfully!');
			formEl.reset(); // reset only on success
		} catch (err) {
			console.error('EmailJS error:', err);
			setError(true);
			showTemporaryPopup('Something went wrong... please try again later.');
		} finally {
			setSending(false);
		}
	};

	return (
		<motion.div
			className="contact"
			variants={variants}
			initial="initial"
			whileInView="animate"
		>
			<motion.div className="textContainer" variants={variants}>
				<motion.h1>Contact Me :!</motion.h1>
				<motion.div className="item" variants={variants}>
					<h2>Mail</h2>
					<span>meghasrivardhanp@gmail.com</span>
				</motion.div>
				<motion.div className="item" variants={variants}>
					<h2>Address</h2>
					<span>Boulder, CO 80302</span>
				</motion.div>
				{/* <motion.div className="item" variants={variants}>
					<h2>Phone</h2>
					<span>+1 970-694-0036</span>
				</motion.div> */}
			</motion.div>

			<div className="formContainer">
				<motion.form
					ref={formRef}
					onSubmit={sendEmail}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 1, duration: 1 }}
				>
					<input type="text" placeholder="Name" name="name" />
					<input type="email" placeholder="Email" name="email" />
					<textarea rows={8} placeholder="Message" name="message"></textarea>

					{/* kept your original UI exactly (div + ContactButton) */}
					{/* we disable clicks logically while sending/rate-limited */}
					{/* <div
						type="submit"
						onClick={sendEmail}
						// visually unchanged; block pointer events when disabled so extra clicks do nothing
						style={{
							pointerEvents: sending || isRateLimited() ? 'none' : undefined,
							opacity: sending || isRateLimited() ? 0.9 : undefined, // optional subtle hint
						}}
						aria-disabled={sending || isRateLimited()}
					>
						<ContactButton />
					</div> */}
					<div
						type="submit"
						onClick={sendEmail}
						style={{
							// block clicks only while an email is in-flight
							pointerEvents: sending ? 'none' : undefined,
							// visual hint when rate-limited (does NOT block clicks)
							cursor: isRateLimited() ? 'not-allowed' : undefined,
							opacity: sending ? 0.6 : undefined,
						}}
						aria-disabled={sending || isRateLimited()}
					>
						<ContactButton />
					</div>
				</motion.form>
			</div>

			{showPopup && (
				<div
					className={`popupMessage ${success ? 'messageSent' : ''} ${
						error ? 'messageError' : ''
					}`}
					role="status"
					aria-live="polite"
				>
					{popupMessage}
				</div>
			)}
		</motion.div>
	);
};

export default Contact;
