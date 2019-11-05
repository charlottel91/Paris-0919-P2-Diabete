import React from "react";
// import logo from "../../assets/pictures/logo_OMG.svg"
import './Navbar.css';
import { Link } from "react-router-dom"

const Navbar = (props) => {
  return (
    <header className="Navbar">
      <nav className="Navbar_Navigation">
        <div className="Navbar_logo">
          <img src={props.src} alt="Logo" />
        </div>
        <ul className="Navbar_ul">
          <li className="Navbar_li">
            <Link to="/calculation" className="Navbar_iconHome">
                <svg
                    version="1.0"
                    x="0px"
                    y="0px"
                    width="40px"
                    height="40px"
                    viewBox="0 0 130.2 150.2"
                >
                    <defs></defs>
                    <path
                    d="M64.2,0L42.6,18.7V5.1H20v33.3L0,55.8v94.4h45.7h38.8h45.7V55.8L64.2,0z M26.5,11.6h9.7v11.5l-9.7,8.1V11.6z M52.2,143.7
                v-37.3H78v37.3H52.2z M123.7,143.7H84.5V99.9H45.7v43.8H6.5v-85L64.2,8.6l59.4,50.2V143.7z"
                    />
                </svg>
            </Link>
          </li>
  
          <li className="Navbar_li">
            <Link to="/calculation" className={props.color}>
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50px"
                height="40px"
                viewBox="0 0 205.7 150.7"
                enable-background="new 0 0 205.7 150.7"
              >
                <defs></defs>
                <path
                  d="M103.6,20.3c-34.2,0-62,27.8-62,62c0,34.2,27.8,62,62,62c34.2,0,62-27.8,62-62C165.6,48.1,137.8,20.3,103.6,20.3z
                  M103.6,137.4c-30.4,0-55.1-24.7-55.1-55c0-30.4,24.7-55.1,55.1-55.1c30.4,0,55.1,24.7,55.1,55.1C158.7,112.7,134,137.4,103.6,137.4
                  z"
                />
                <path
                  d="M33.2,1.5v32.3h-4.4V1.5h-6.7v32.3h-4.4V1.5h-6.7l0,32.3H6.7L6.8,1.5H0.2L0,34.1v6.3c0,3.8,1.5,7.5,4.2,10.2l4,4l-4.7,79.9
                  c0,0.2,0,0.3,0,0.5c0,0.1,0,0.3,0,0.4c0,8.4,6.8,15.2,15.2,15.2l0.4,0c8.3-0.2,15-7.3,14.8-15.7l-2.4-80.3l4-4
                  c2.7-2.7,4.2-6.3,4.2-10.2l0-38.9H33.2z M24.9,53.4l2.4,81.8c0.1,4.8-3.6,8.7-8.6,8.8c-4.7,0-8.6-3.8-8.6-8.5c0-0.2,0-0.3,0-0.4
                  c0,0,0-0.1,0-0.1l4.8-81.4c0.1-0.9-0.3-1.9-1-2.6l-5.1-5.1c-1.5-1.5-2.3-3.4-2.3-5.5v-0.1h26.5v0.1c0,2.1-0.8,4-2.3,5.5L25.9,51
                  C25.2,51.6,24.8,52.6,24.9,53.4z"
                />
                <path
                  d="M141,64.1L141,64.1l-5.7,4.4l0,0c1.9,4.4,2.9,9.1,2.9,13.7c0,19.1-15.5,34.6-34.6,34.6S69,101.4,69,82.3
                  c0-19.1,15.5-34.6,34.6-34.6c1.2,0,2.4,0.1,3.5,0.2l0.1,0l1.9-6.9l-0.1,0c-1.9-0.2-3.6-0.4-5.3-0.4C80.7,40.7,62,59.4,62,82.3
                  c0,22.9,18.7,41.6,41.6,41.6c22.9,0,41.6-18.7,41.6-41.6C145.2,76.1,143.7,69.8,141,64.1z"
                />
                <path
                  d="M199,86.1l3.5-4.3c2.3-2.9,3.4-6.6,3.2-10.4l-0.5-6.3l-0.1-0.6l0,0l-6.4-39.9c0-0.2-0.2-3.8-2-12.6
                  c-1.5-7.4-6.3-12.5-11.6-12c-4.8,0.3-7.8,3.8-7.8,9l-0.1,7.3l-0.3,119.7c0,0.1,0,0.3,0,0.5c0,0.1,0,0.3,0,0.4
                  c0.3,4.2,2.2,7.9,5.3,10.6c2.6,2.2,5.7,3.3,9,3.3c0.4,0,0.8,0,1.2-0.1l0.4,0c7.8-0.9,13.5-8.4,12.7-16.8L199,86.1z M198.9,66.5
                  l0.4,5.5c0.2,2-0.4,4-1.7,5.6l-4.2,5.2l-10.1,0.1l0.1-62.9l0.1-11l0,0c0-1.7,0.3-2.6,1.9-2.7c0,0,0.1,0,0.1,0c1.7,0,4.4,2.4,5.5,7.8
                  l0,0L198.9,66.5z M183.2,135.9c0,0,0-0.1,0-0.1l0.1-46.2l9.8-0.1l6.1,45.1c0.5,4.8-2.7,8.9-7.3,9.4c-2,0.2-4-0.5-5.6-1.8
                  c-1.7-1.5-2.8-3.6-3-5.9C183.2,136.2,183.2,136,183.2,135.9z"
                />
              </svg>
            </Link>
          </li>
          <li className="Navbar_li">
            <Link to="/calculation"  className={props.color}>
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40px"
                height="40px"
                viewBox="0 0 117.3 149.7"
                enable-background="new 0 0 117.3 149.7"
              >
                <defs></defs>
                <g>
                  <path
                    d="M110,0H7.3C3.3,0,0,3.3,0,7.3v135.2c0,4,3.3,7.3,7.3,7.3H110c4,0,7.3-3.3,7.3-7.3V7.3C117.3,3.3,114,0,110,0z
                      M112.3,142.5c0,1.3-1,2.3-2.3,2.3H7.3c-1.3,0-2.3-1-2.3-2.3V7.3C5,6,6,5,7.3,5H110c1.3,0,2.3,1,2.3,2.3V142.5z"
                  />
                  <path d="M12.5,137.3h27.5v-27.5H12.5V137.3z M17.5,114.8h17.5v17.5H17.5V114.8z" />
                  <path d="M44.9,137.3h27.5v-27.5H44.9V137.3z M49.9,114.8h17.5v17.5H49.9V114.8z" />
                  <path d="M77.4,137.3h27.5V77.4H77.4V137.3z M82.4,82.4h17.5v49.9H82.4V82.4z" />
                  <path d="M12.5,104.8h27.5V77.4H12.5V104.8z M17.5,82.4h17.5v17.5H17.5V82.4z" />
                  <path d="M44.9,104.8h27.5V77.4H44.9V104.8z M49.9,82.4h17.5v17.5H49.9V82.4z" />
                  <path d="M12.5,72.4h27.5V44.9H12.5V72.4z M17.5,49.9h17.5v17.5H17.5V49.9z" />
                  <path d="M44.9,72.4h27.5V44.9H44.9V72.4z M49.9,49.9h17.5v17.5H49.9V49.9z" />
                  <path d="M77.4,72.4h27.5V44.9H77.4V72.4z M82.4,49.9h17.5v17.5H82.4V49.9z" />
                  <path d="M12.5,37.4h92.3v-25H12.5V37.4z M17.5,17.5h82.4v15H17.5V17.5z" />
                </g>
              </svg>
            </Link>
          </li>
  
          <li className="Navbar_li">
          <Link to="/calculation"  className={props.color}>
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40px"
                height="40px"
                viewBox="0 0 129.6 148.7"
                enable-background="new 0 0 129.6 148.7"
              >
                <defs></defs>
                <g>
                  <path
                    d="M53.2,72.9c16,0,29.1-13,29.1-29.1s-13-29.1-29.1-29.1s-29.1,13-29.1,29.1S37.2,72.9,53.2,72.9z M55.6,32.8l4.1,3.2
          c1.6,1.3,2.6,3.2,2.6,5.3c0,6.7,5.4,12.3,12.1,12.5C70.5,62,62.2,67.3,53.2,67.3c-9,0-17.2-5.2-21.1-13.3c2.5,0.3,4.8,1.4,6.6,3.2
          l0.5,0.5c2.1,2.1,5,3.3,8,3.3c6.2,0,11.3-5,11.3-11.3v-2.3c0-4.8-3.9-8.8-8.8-8.8c-1.7,0-3.1-1.4-3.1-3.1V32c0-3.3-1-6.6-2.9-9.4
          c2.2-1,4.5-1.6,6.8-1.9c0,0.4-0.1,0.7-0.1,1.1C50.3,26.1,52.3,30.1,55.6,32.8z M67.9,41.4c0-3.8-1.7-7.4-4.7-9.8l-4.1-3.2
          c-2-1.6-3.2-4-3.2-6.6c0-0.4,0-0.7,0.1-1.1C67.8,22.1,76.6,32,76.6,43.9c0,1.4-0.1,2.8-0.4,4.2c-0.5,0.1-1,0.1-1.4,0.1
          C71,48.2,67.9,45.1,67.9,41.4z M49.6,44.3c1.7,0,3.1,1.4,3.1,3.1v2.3c0,3.1-2.5,5.6-5.6,5.6c-1.5,0-2.9-0.6-4-1.6l-0.5-0.5
          c-3.2-3.2-7.5-5-12.1-5c-0.1,0-0.3,0-0.4,0c-0.3-1.4-0.4-2.9-0.4-4.3c0-7.2,3.3-13.9,9-18.4c1.3,1.9,2,4.2,2,6.5v3.6
          C40.8,40.4,44.8,44.3,49.6,44.3z"
                  />
                  <rect x="16" y="122" width="75.7" height="5.7" />
                  <rect x="16" y="105" width="75.7" height="5.7" />
                  <rect x="16" y="87" width="75.7" height="5.7" />
                  <path
                    d="M110.5,47.6l0-47.6H0v136.3c0,6.8,5.5,12.4,12.4,12.4h104.9c6.8,0,12.4-5.5,12.4-12.4V47.7L110.5,47.6z M106.9,143H12.4
          c-3.7,0-6.7-3-6.7-6.7V5.7h99.2v130.7C104.9,138.7,105.6,141,106.9,143z M124,136.3c0,3.7-3,6.7-6.7,6.7s-6.7-3-6.7-6.7v-83H124
          V136.3z"
                  />
                </g>
              </svg>
              </Link>
          </li>
  
          <li>
          <Link to="/calculation"  className={props.color}>
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40px"
                height="40px"
                viewBox="0 0 115.7 152.8"
                enable-background="new 0 0 115.7 152.8"
              >
                <defs></defs>
                <g>
                  <path
                    d="M96.3,56.5c-11.1-7.8-24.7-9.6-38.4-5.1c-14-4.9-27.6-3.5-38.5,4C7.3,63.9,0,79.1,0,96c0,31.3,26,56.8,57.9,56.8
          c31.9,0,57.9-25.5,57.9-56.8C115.7,79.9,108.5,65.1,96.3,56.5z M57.9,145.8C29.8,145.8,7,123.5,7,96c0-14.7,6.1-27.7,16.4-34.8
          c5.4-3.7,11.7-5.6,18.5-5.6c4.8,0,9.7,0.9,14.8,2.8l1.2,0.4l1.2-0.4c11.9-4.3,23.7-2.9,33.3,3.8c10.3,7.3,16.4,19.9,16.4,33.8
          C108.7,123.5,85.9,145.8,57.9,145.8z"
                  />
                  <path
                    d="M55.3,42.7l3.5,0c0.8,0,20.9-0.3,33.6-10.8c13-10.8,12.9-27.7,12.9-28.4L105.2,0l-3.5,0c-0.8,0-20.9,0.3-33.6,10.8
          c-13,10.8-12.9,27.7-12.9,28.4L55.3,42.7z M72.6,16.2c7.8-6.4,19.4-8.4,25.4-9c-0.7,4.8-2.9,13.3-10.1,19.2
          c-7.7,6.4-19.4,8.4-25.3,9C63.2,30.6,65.5,22.1,72.6,16.2z"
                  />
                  <path d="M61.8,88.3c0-0.2,0-0.3-0.1-0.4v-0.4h-13V95h5.5v24h-9.1v7.5h24.3V119h-7.7V88.3z" />
                  <path
                    d="M58.2,81.4c1.5,0,2.7-0.5,3.6-1.4c1-0.9,1.4-2.1,1.4-3.5c0-1.4-0.5-2.6-1.4-3.5c-0.9-0.9-2.2-1.4-3.6-1.4
          c-1.5,0-2.7,0.5-3.6,1.4c-0.9,0.9-1.4,2.1-1.4,3.5c0,1.4,0.5,2.6,1.4,3.5C55.5,80.9,56.7,81.4,58.2,81.4z"
                  />
                </g>
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    
  );
  }

  export default  Navbar;