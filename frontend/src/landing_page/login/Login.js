import React, { useState } from 'react';

function Login() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		remember: false
	});

	const [errors, setErrors] = useState({});
	const [submitting, setSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (event) => {
		const { name, value, type, checked } = event.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value
		}));
	};

	const validate = () => {
		const newErrors = {};
		if (!formData.email.trim()) newErrors.email = 'Email is required';
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email';
		if (!formData.password) newErrors.password = 'Password is required';
		return newErrors;
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const foundErrors = validate();
		setErrors(foundErrors);
		if (Object.keys(foundErrors).length > 0) return;

		setSubmitting(true);
		try {
			await new Promise((resolve) => setTimeout(resolve, 500));
			setSubmitted(true);
		} finally {
			setSubmitting(false);
		}
	};

	const styles = {
		container: {
			maxWidth: 440,
			margin: '40px auto',
			padding: 24,
			border: '1px solid #e5e7eb',
			borderRadius: 8,
			boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
			background: '#ffffff'
		},
		title: { margin: 0, marginBottom: 8, fontSize: 28 },
		subtitle: { marginTop: 0, color: '#6b7280', marginBottom: 16 },
		field: { marginBottom: 14 },
		label: { display: 'block', marginBottom: 6, fontWeight: 600 },
		input: {
			width: '100%',
			padding: '10px 12px',
			border: '1px solid #d1d5db',
			borderRadius: 6,
			outline: 'none'
		},
		checkboxRow: { display: 'flex', alignItems: 'center', gap: 8 },
		error: { color: '#dc2626', fontSize: 12, marginTop: 6 },
		button: {
			width: '100%',
			padding: '10px 14px',
			background: '#2563eb',
			color: '#fff',
			border: 'none',
			borderRadius: 6,
			cursor: 'pointer',
			fontWeight: 600
		},
		muted: { color: '#6b7280', fontSize: 14 },
		link: { color: '#2563eb', textDecoration: 'none', fontWeight: 600 }
	};

	return (
		<div style={styles.container}>
			<h1 style={styles.title}>Welcome back</h1>
			<p style={styles.subtitle}>Log in to continue trading.</p>
			{submitted ? (
				<div>
					<p>Logged in successfully. Redirecting…</p>
				</div>
			) : (
				<form onSubmit={handleSubmit} noValidate>
					<div style={styles.field}>
						<label htmlFor="email" style={styles.label}>Email</label>
						<input
							id="email"
							name="email"
							type="email"
							placeholder="you@example.com"
							value={formData.email}
							onChange={handleChange}
							style={styles.input}
							autoComplete="email"
						/>
						{errors.email && <div style={styles.error}>{errors.email}</div>}
					</div>

					<div style={styles.field}>
						<label htmlFor="password" style={styles.label}>Password</label>
						<input
							id="password"
							name="password"
							type="password"
							placeholder="Your password"
							value={formData.password}
							onChange={handleChange}
							style={styles.input}
							autoComplete="current-password"
						/>
						{errors.password && <div style={styles.error}>{errors.password}</div>}
					</div>

					<div style={{ ...styles.field, ...styles.checkboxRow }}>
						<input
							id="remember"
							name="remember"
							type="checkbox"
							checked={formData.remember}
							onChange={handleChange}
						/>
						<label htmlFor="remember" style={{ margin: 0 }}>Remember me</label>
					</div>

					<button type="submit" style={styles.button} disabled={submitting}>
						{submitting ? 'Logging in…' : 'Log in'}
					</button>
				</form>
			)}

			<p style={{ marginTop: 16, ...styles.muted }}>
				Forgot your password? <a href="/forgot-password" style={styles.link}>Reset it</a>
			</p>
			<p style={{ marginTop: 4, ...styles.muted }}>
				New here? <a href="/signup" style={styles.link}>Create an account</a>
			</p>
		</div>
	);
}

export default Login;


