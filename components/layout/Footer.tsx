import React from "react";
import FooterLinkGroup from "./FooterLinkGroup";
import { LuSendHorizonal } from "react-icons/lu";
import Input from "../common/Input";

const footerLinks = [
  {
    title: "Support",
    links: [
      { title: "exclusive@gmail.com", link: "/" },
      { title: "exclusive@gmail.com", link: "/" },
      { title: "+88015-88888-9999", link: "/" },
    ],
    visible: "sm",
  },
  {
    title: "Account",
    links: [
      { title: "Login / Register", link: "/" },
      { title: "My Account", link: "/" },
      { title: "Wishlist", link: "/" },
      { title: "Cart", link: "/" },
      { title: "Shop", link: "/" },
    ],
    visible: "md",
  },

  {
    title: "Quick Link",
    links: [
      { title: "Privacy Policy", link: "/" },
      { title: "Terms Of Use", link: "/" },
      { title: "FAQ", link: "/" },
      { title: "Contact", link: "/" },
    ],
    visible: "lg",
  },
];
const exclusiveSection = {
  title: "Exclusive",
  links: [
    { title: "Subscribe", link: "/" },
    { title: "Get 10% off your first order", link: "/" },
  ],
};

function Footer() {
  return (
    <footer className='w-full space-y-10  bg-black mb-0  md:flex block justify-around pt-24'>
      <div>
        <FooterLinkGroup
          title={exclusiveSection.title}
          links={exclusiveSection.links}
        />

        <Input
          style="h-[48px] mt-4
      flex bg-transparent border-2 rounded-[4px] p-2"
          placeholderText="Enter your email"
          inputStyle="bg-transparent text-gray-50 h-full focus-visible:outline-none p-2"
        >
          <LuSendHorizonal color="white" size={23} />
        </Input>
      </div>
      {/* // TODO Key needed */}
      {footerLinks.map((links, index) => {
        return (
          <div>
            <FooterLinkGroup title={links.title} links={links.links} />
          </div>
        );
      })}
    </footer>
  );
}

export default Footer;
