import React, { JSX } from "react";
import FloatingNavAnimation from "./Floating-navbar-animation";
import SignIn from "../Sign-in";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  return (
    <FloatingNavAnimation
      navItems={navItems}
      className={className}
      //signIn={<SignIn />}
    />
  );
};
