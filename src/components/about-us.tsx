import AboutUsImage from "../assets/about-image.jpeg";
import RentImage from "../assets/rent.svg";
import SaleImage from "../assets/sale.svg";
import PurchaseImage from "../assets/purchase.svg";

export function AboutUs() {
  return (
    <div
      id="about-us"
      className="w-full flex flex-col lg:flex-row justify-between p-8 lg:p-20 space-y-10 lg:space-y-0"
    >
      {/* Left Section */}
      <div className="w-full lg:w-[50%]">
        <p className="uppercase font-bold text-lg text-[#DF573E] border-l-[6px] border-[#DF573E] pl-2">
          About Us
        </p>
        <h1 className="mt-10 text-3xl lg:text-5xl font-bold uppercase leading-snug">
          Welcome to Wosol- Scaffolding Services
        </h1>
        <p className="mt-8 text-lg">
          Wosol is a leading scaffolding services provider in Saudi Arabia,
          offering a wide range of solutions, including scaffolding rental,
          design, contracting, erection, and manpower supply. With a strong
          commitment to safety, quality, and efficiency, we support various
          construction projects across Saudi Arabia, including major cities like
          Riyadh, Jeddah, Makkah, and Jubail.
        </p>

        {/* Services Section */}
        <div className="bg-white mt-10 w-full lg:w-[65vw] relative border-4 uppercase text-[#DF573E]">
          <div className="border-l-[10px] border-[#DF573E] p-5 flex flex-wrap justify-around items-center text-center font-semibold text-lg">
            <p className="font-bold mb-5 lg:mb-0 w-full lg:w-auto">
              Our Services
            </p>
            <div className="flex w-full lg:w-[60%] justify-between lg:space-x-10">
              <div className="flex flex-col items-center mb-5 lg:mb-0">
                <img src={RentImage} alt="Rent" className="mb-3" />
                Rent
              </div>
              <div className="flex flex-col items-center mb-5 lg:mb-0 border-l-4 px-5 lg:px-10">
                <img src={SaleImage} alt="Sale" className="mb-3" />
                Sale
              </div>
              <div className="flex flex-col items-center mb-5 lg:mb-0 border-l-4 px-5 lg:px-10">
                <img src={PurchaseImage} alt="Purchase" className="mb-3" />
                Purchase
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full lg:w-[490px] lg:h-[580px]">
        <img
          src={AboutUsImage}
          alt="About Us"
          className="w-full h-full object-cover"
          style={{
            boxShadow: "20px -20px #DF573E",
          }}
        />
      </div>
    </div>
  );
}
