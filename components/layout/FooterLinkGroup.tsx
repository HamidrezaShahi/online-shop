import Link from "next/link";
import React from "react";

interface FooterLinkGroupProps {
  title: string;
  links: { title: string; link: string }[];
}

function FooterLinkGroup({ title, links = [] }: FooterLinkGroupProps) {
  return (
    <>
      <div className="block text-start">
        <span className="text-white font-bold"> {title}</span>
        <div className="block">
          <ul>
            {/* // TODO  key need to be added */}
            {links.map((link) => {
              return (
                <li className="text-white ">
                  <Link className="" href={link.link}>
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default FooterLinkGroup;
