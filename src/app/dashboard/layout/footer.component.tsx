import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function FooterComponent() {
  const social = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/abrandc",
      icon: FaFacebook,
    },
    {
      name: "Twitter",
      url: "https://www.twitter.com/abrandc",
      icon: FaTwitter,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/abrandc",
      icon: FaInstagram,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/abrandc",
      icon: FaLinkedin,
    },
  ];
  const Links = [
    {
      name: "Terms & Conditions",
    },
    {
      name: "Privacy Policy",
    },
    {
      name: "Contact Us",
    },
    {
      name: "License",
    },
  ];
  return (
    <div className="flex justify-between items-center h-16 bg-white dark:bg-abrandc-dark-grey text-black dark:text-white">
      <div className="flex justify-center items-center">
        {Links.map(({ name }) => (
          <a
            key={name}
            href="#"
            className="text-sm font-bold mx-2 hover:text-blue-500"
          >
            {name}
          </a>
        ))}
      </div>
      {/* social media icons */}
      <div className="flex justify-center items-center">
        {social.map(({ name, url, icon: Icon }) => (
          <a
            key={name}
            href={url}
            className="text-2xl font-bold mx-2 hover:text-blue-500"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
}
