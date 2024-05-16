import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xzbnwonj");
  if (state.succeeded) {
      return <p>Thanks for reaching out!</p>;
  }
  return (
    <div className="container">
        <h1>Contact Me</h1>
    <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="fullName">
        Full Name
      </label>
      <input
        id="fullName"
        type="fullName" 
        name="fullName"
        placeholder="First and Last Name"
      />
      <br></br>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="email@domain.com"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <br></br>
      <label htmlFor="Message">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Let me know if you'd like to work together!"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className="btn btn-outline-dark" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
  );
}