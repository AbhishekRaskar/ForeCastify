import { Disclosure } from "@headlessui/react";
import { CloudIcon, XIcon, MenuIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Today", href: "/" },
  { name: "Forecast", href: "/forecast" },
  { name: "News", href: "/news" },
  { name: "Space", href: "/space" },
  { name: "Stories", href: "/stories" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <div
      className="bg-center h-40 w-auto"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1593872028037-6dff5327260e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "100% auto",
      }}
    >
      <Disclosure as="nav" className="p-7">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0 flex items-center space-x-2">
                    <CloudIcon className="h-8 w-8 text-white" />
                    <span className="text-white text-2xl font-semibold">
                      Fore&nbsp;<span className="text-blue-400">Castify</span>
                    </span>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-center space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            "text-white px-3 py-2 rounded-md text-lg font-medium",
                            item.current
                              ? "bg-blue-700"
                              : "hover:bg-blue-700 hover:text-white"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon
                        className="block h-6 w-6 text-blue-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <MenuIcon
                        className="block h-6 w-6 text-blue-500"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      "text-white px-3 py-2 rounded-md text-base font-medium",
                      item.current
                        ? "bg-blue-700"
                        : "hover:bg-blue-700 hover:text-white"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default Navbar;