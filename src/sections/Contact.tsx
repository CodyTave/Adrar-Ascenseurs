import { email, location, phone } from "../assets";
import InputField from "../components/InputField";

function Contact() {
  return (
    <div
      id="first"
      className="grid lg:grid-cols-2 gap-y-10 mx-auto md:w-[80%] md:px-0 px-8   "
    >
      <div className="flex flex-col gap-5">
        <h1 className=" text-left text-4xl font-bold">CONTACT</h1>
        <InputField type="input" label="Nom :" ph="Saisir Votre Nom" />
        <InputField type="input" label="Email :" ph="Saisir Votre Email" />
        <InputField
          type="textarea"
          label="Message :"
          ph="Saisir Votre Message"
        />
      </div>
      <div className="flex gap-10 justify-center items-center flex-col text-left">
        <div className="grid gap-10 ">
          <div className="flex gap-5 ">
            <img src={location} />
            <h1 className="font-semibold text-lg">
              47 Rue Des Gaves roches noires - Casablanca
            </h1>
          </div>
          <div className="flex gap-5">
            <img src={phone} />
            <h1 className="font-semibold text-lg">+212 522 240 561</h1>
          </div>
          <div className="flex gap-5">
            <img src={email} />
            <h1 className="font-semibold text-lg">adrarascenseur@gmail.com</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
