import React,{ useState, useRef, useEffect } from "react";
import image1 from '../assets/Background/istockphoto-1344252956-170667a.jpg';
import image2 from '../assets/Background/istockphoto-1346575545-170667a.jpg';
import image3 from '../assets/Background/istockphoto-1367616995-170667a.jpg';
import image4 from '../assets/Background/istockphoto-1367909982-170667a.jpg';
import image5 from '../assets/Background/istockphoto-1408387701-170667a.jpg';
import image6 from '../assets/Background/istockphoto-1409255608-170667a.jpg';
import image7 from '../assets/Background/jakob-owens-WUmb_eBrpjs-unsplash.jpg';
import image8 from '../assets/Background/sara-kurfess-6lcT2kRPvnI-unsplash.jpg';

function LoginForm() {
  const loginForm = useRef(null);
  const registerForm = useRef(null);
  const toggleBtn = useRef(null);
  const [isLogin, setIsLogin] = useState(true);
  const bgImages=[image1,image2,image3,image4,image5,image6,image7,image8];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // automatically switch to the next image every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [bgImages.length]);

  function handleToggle() {
    setIsLogin(!isLogin);
    const login = loginForm.current;
    const register = registerForm.current;
    const btn = toggleBtn.current;
    if (isLogin) {
      login.style.left = "-400px";
      register.style.left = "50px";
      btn.style.left="0";
    } else {
      login.style.left = "50px";
      register.style.left = "450px";
      btn.style.left="0";
    }
  }

  return (
    <div className="hero" style={{ backgroundImage: `url(${bgImages[currentImage]})` }}>
      <div className="form-box">
        <div className="button-box">
          <div ref={toggleBtn} id="btn"></div>
          <button type="button" className="toggle-btn" onClick={handleToggle}>
            {isLogin ? "Log In" : "Register"}
          </button>
          <button type="button" className="toggle-btn" onClick={handleToggle}>
            {isLogin ? "Register" : "Log In"}
          </button>
        </div>
        <div className="social-icons">
          <i class='fab fa-facebook'></i>
          <i class='fab fa-twitter-square'></i>
          <i class='fab fa-google-plus'></i>
          
        </div>
        <form ref={loginForm} id="login" className="input-group">
          <input type="text" className="input-field" placeholder="User Id" required />
          <input type="password" className="input-field" placeholder="Enter Password" required />
          <input type="checkbox" className="chech-box" />
          <span>Remember Password</span>
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
        <form ref={registerForm} id="register" className="input-group">
          <input type="text" className="input-field" placeholder="User Id" required />
          <input type="email" className="input-field" placeholder="Email Id" required />
          <input type="password" className="input-field" placeholder="Enter Password" required />
          <input type="checkbox" className="chech-box" />
          <span>I agree to the terms & conditions</span>
          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
