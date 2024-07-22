import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const HeaderSection = () => {
  const navigation = [
    { name: "Home", to: "#home", current: true },
    { name: "About Me", to: "#about", current: false },
    { name: "Projects", to: "#projects", current: false },
    { name: "Education", to: "#education", current: false },
    { name: "Contact Me", to: "#contact", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <Disclosure as="nav" className="bg-black px-5">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
              <div className="flex flex-shrink-0 items-center">
                <h1 className="h-auto w-auto text-white pop">Muhammad Taha</h1>
              </div>
              <div className="hidden sm:flex sm:ml-auto sm:justify-end">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.to}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white pop"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white pop",
                        "rounded-md px-3 py-2 text-sm font-medium pop"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.to}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>

      <div className="w-full hero text-white px-5 ">
        <div className="flex flex-column justify-center hero-text">
          <h2 className="text-3xl mont bold">Muhammad Taha</h2>
          <h4 className="mont">
            A SOFTWARE ENGINEER | PURSUING BSCS | @NCBAE{" "}
          </h4>
          <h3 className="text-2xl font-semibold rob-mono pt-5">
            WEB DEVELOPMENT
          </h3>
          <p className="pop">
            MERN Stack Developer with a passion for building dynamic and <br />
            responsive web applications. Expert in crafting seamless user <br />
            experiences using Mern Stack. Dedicated to delivering robust and{" "}
            <br />
            scalable solutions for modern web development needs.
          </p>
          <div>
            <a href={`#contact`}>
              <button className="button-30 my-3">Let's Engage !</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
