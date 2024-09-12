import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xzbnwonj");
  if (state.succeeded) {
      return <p>Thanks for reaching out!</p>;
  }
  return (
    <div className="container">
       <div className="section-header">
            <h1>Get In Touch</h1>
          </div>
      <div className="row">
         
        <div className="col contact-column">

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
            <button className="btn btn-primary" type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a className="navbar-brand" href="https://www.github.com/williamk31">
                <img src="/assets/github.svg" alt="GitHub" style={{ width: '102px', height: '102px' }}></img>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="navbar-brand" href="https://www.linkedin.com/in/william-kalish/">
                <img src="/assets/linkedin.svg" alt="LinkedIn" style={{ width: '102px', height: '102px' }}></img>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="navbar-brand" href="mailto:williamk31@gmail.com">
                <img src="/assets/envelope-solid.svg" alt="Email" style={{ width: '102px', height: '102px' }}></img>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm right-column">
          <img src="/assets/Profile-picture.png" alt="profile picture" style={{ width: '100%', height: '100%' }}></img>
        </div>
      </div>
    </div>
  );
}