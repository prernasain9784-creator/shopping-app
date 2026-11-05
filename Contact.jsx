function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Your message has been submitted!");
    event.target.reset();
  }

  return (
    <div className="contact">

      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          required
        />

        <textarea
          placeholder="Your Message"
          required
        />

        <button type="submit">
          Send Message
        </button>

      </form>

    </div>
  );
}

export default Contact;