import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 md-40 text-sm">
        {/* ------- Left Side ------- */}
        <div>
          <img className="w-40 mb-5" src={assets.logo} alt="logo" />
          <p className="w-full leading-6 text-gray-600 md:w-2/3">
            Prescripto - Your Health, Your Convenience. <br /> Book appointments with trusted
            doctors in just a few clicks. Whether you need expert advice or follow-up care,
            Prescripto connects you with healthcare professionals tailored to your needs. Secure,
            reliable, and convenient—your health journey starts here.
          </p>
        </div>

        {/* ------- Center Side ------- */}
        <div>
          <p className="mb-5 text-xl font-medium">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* ------- Right Side ------- */}
        <div>
          <p className="mb-5 text-xl font-medium">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+962 799 799 7999</li>
            <li>prescripto@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* ------- Copyright Text ------- */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@ Prescripto - All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
