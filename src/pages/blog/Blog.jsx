import React, { useState } from 'react';
import './blog.css';

const Blog = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You've been added to the waitlist: ${email}`);
    setEmail('');
  };

  return (
    <section className="blog-wrapper">
      <div className="blog-content">
        <h3>Be the First to Read Our Upcoming Blog</h3>
        <p>Fresh insights, tips, and tech updates — coming soon.</p>
        <form onSubmit={handleSubmit} className="waitlist-form">
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Join the Waitlist</button>
        </form>
      </div>
    </section>
  );
};

export default Blog;
