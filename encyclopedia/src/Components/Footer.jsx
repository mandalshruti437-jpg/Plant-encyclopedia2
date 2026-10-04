import React from "react";
import "../CSS/Footer.css"; 
function Footer() {
  return (
    <footer className="bg-dark text-white ">

      <div className="container py-5">

        <div className="row">

          {/* About */}
          <div className="col-md-4 mb-4">

            <h4 className="text-success">
              🌿 Plant Encyclopedia
            </h4>

            <p>
              Explore the world of plants and learn about
              their scientific names, families, species,
              genera and botanical information.
            </p>
            <p>
             Admin Contact no 
               +91 8345673210
            </p>

          </div>


          {/* Quick Links */}
          <div className="col-md-4 mb-4">

            <h5>Quick Links</h5>

            <ul className="list-unstyled">

              <li className="mb-2">
                <a
                  href="/"
                  className="text-white text-decoration-none"
                >
                  🏠 Home
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="/plants"
                  className="text-white text-decoration-none"
                >
                  🌱 Plants
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="/categories"
                  className="text-white text-decoration-none"
                >
                  📚 Categories
                </a>
              </li>

            </ul>

          </div>


          {/* Project Information */}
          <div className="col-md-4 mb-4">

            <h5>Plant Encyclopedia</h5>

            <p>
              🌿 Discover different plants
            </p>

            <p>
              🔤 Browse plants from A-Z
            </p>

            <p>
              🔬 Learn botanical information
            </p>

            <p>
              🎓 Helpful for Botany students
            </p>

          </div>

        </div>

      </div>


      {/* Copyright */}

      <div className="border-top border-secondary">

        <div className="container text-center py-3">

          <p className="mb-0">
            © 2026 Plant Encyclopedia. All Rights Reserved.
          </p>

          <small className="text-secondary">
            Made with 🌿 for learning and exploring plants
          </small>

        </div>

      </div>

    </footer>
  );
}

export default Footer;