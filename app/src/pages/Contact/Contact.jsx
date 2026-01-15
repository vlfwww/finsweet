import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";
import style from "./Contact.module.scss";
function Contact() {
  return (
    <div className={style.mainWrapper}>
      <Header />
      <main>
        <div className={style.contactWrapper}>
          <p className={style.title}>Contact us</p>
          <h1>Let’s Start a Conversation</h1>
          <p className={style.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
          <div className={style.workingHours}>
            <div className={style.leftSide}>
              <p className={style.title}>Working hours</p>
              <p className={style.mainInfo}>Monday To Friday</p>
              <p className={style.mainInfo}>9:00 AM to 8:00 PM </p>
              <p className={style.additional}>
                Our Support Team is available 24/7
              </p>
            </div>
            <div className={style.rightSide}>
              <p className={style.title}>Contact Us</p>
              <p className={style.mainInfo}>020 7993 2905</p>
              <p className={style.additional}>hello@finsweet.com</p>
            </div>
          </div>
          <div className={style.formWrapper}>
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Your Email" />
            <select
              className={style.standardSelect}
              defaultValue="Query Related"
            >
              <option value="Query Related">Query Related</option>
              <option value="Technical Issue">Technical Issue</option>
              <option value="Billing">Billing</option>
            </select>
            <textarea placeholder="Your Message"></textarea>
            <button>Send Message</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Contact;