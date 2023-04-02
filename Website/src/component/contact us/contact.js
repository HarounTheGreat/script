import "./contact.css";
const Contact = () => {
  return (
    <contact>
      <div className="contact-us">
        <div className="wrapper centered">
          <article className="letter">
            <div className="side">
              <p>
                <div className="contact-us-title">Contact us</div>
              </p>
              <div className="contact-us-text">
                <textarea placeholder="Your message"></textarea>
              </div>
            </div>
            <div className="side">
              <div className="contact-us-text">
                <input type="text" placeholder="Your name" />
              </div>
              <div className="contact-us-text">
                <input type="email" placeholder="Your email" />
              </div>
              <div className="contact-us-text">
                <div className="contact-us-button">
                  <button id="sendLetter">Send</button>
                </div>
              </div>
            </div>
          </article>
          <div className="envelope front"></div>
          <div className="envelope back"></div>
        </div>
        <div className="result-message centered">
          Thank you for your message
        </div>
      </div>
    </contact>
  );
};
export default Contact;
