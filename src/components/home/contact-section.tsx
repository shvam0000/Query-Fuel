import { Call, Location } from '@/utils/icons';
import { ContactForm } from '../contact-us';

const ContactSection = () => {
  return (
    <div className="flex justify-center items-start">
      <div className="w-1/2 py-10 pt-20 px-10">
        <div className="py-4">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <h2 className="text-xl pt-2 font-medium">
            Swing by for a cup of coffee or send us your message here!
          </h2>
        </div>
        <div className="py-2">
          <div className="flex items-center">
            <span className="text-2xl text-primary-orange pr-2">
              <Call />
            </span>
            <span className="text-xl text-primary-orange font-bold uppercase">
              Call us
            </span>
          </div>
          <div className="py-2">+91 99999999</div>
        </div>
        <div className="py-2">
          <div className="flex items-center">
            <span className="text-2xl text-primary-orange pr-2">
              <Location />
            </span>
            <span className="text-xl text-primary-orange font-bold uppercase">
              Location
            </span>
          </div>
          <div className="py-2">
            SRM Institute of Science and Technology, Kattankulathur, Chennai,
            Tamil Nadu - 603203
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
