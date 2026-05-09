import "../App.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">
          <h1>GradConnect</h1>

          <p>
            Empowering students and alumni to connect,
            collaborate and grow together worldwide.
          </p>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: gradconnect@gmail.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Haryana, India</p>
        </div>

        <div className="footer-social">
          <h3>Socials</h3>

          <div className="social-box">
            <button>LinkedIn</button>
            <button>GitHub</button>
            <button>Instagram</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 GradConnect • All Rights Reserved</p>
      </div>

    </footer>
  );
}