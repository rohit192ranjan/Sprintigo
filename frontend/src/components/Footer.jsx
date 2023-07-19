import sprintigo from '../assets/Sprintigo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="footer-distributed">

			<div class="footer-left">

      <img src={sprintigo} alt='Sprintigo' style={{width:'25%', height:'2%'}}/>

				<p class="footer-links">
					<a href="/" class="link-1">Home</a>
					
					<a href="/cart">Cart</a>
				
					<a href="#latestprod">Products</a>
					
					<a href="/">Contact</a>

				</p>

				<p class="footer-company-name">Sprintigo &copy; {currentYear}</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>44 West Road, JaiNagar</span> Bihar, India</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+91-1234561230</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:rohit192ranjan@gmail.com">support@sprintigo.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					Sprintigo - Your ultimate destination for all sports shopping! Discover a vast selection of high-quality sports apparel, equipment, and accessories, all at your fingertips.
				</p>

				<div class="footer-icons">

					<a href="/"><i class="fa fa-facebook"></i></a>
					<a href="/"><i class="fa fa-instagram"></i></a>
					<a href="/"><i class="fa fa-linkedin"></i></a>
					<a href="/"><i class="fa fa-github"></i></a>

				</div>
      </div>
    </footer>
  );
};
export default Footer;
