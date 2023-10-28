import { Fragment, useState } from 'react'

import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import { Link, routes } from '@redwoodjs/router'

import Toggle from '../Toggle/Toggle'

const products = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of your traffic',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will convert',
    href: '#',
    icon: ArrowPathIcon,
  },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const toggleLogin = (value) => {
    setIsLoggedIn(value)
  }
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to={routes.home()}>
            <div className="flex items-center">
              <span className="sr-only">RedwoodJS Blog</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width="100px"
                height="auto"
                version="1.1"
                viewBox="0 0 4538.12 2260.58"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g id="Capa_x0020_1">
                  <metadata id="lamp-services " />
                  <path
                    fill="#FEFEFE"
                    filter="drop-shadow(0 0 30px rgba(0, 0, 0, 0.75))"
                    d="M2291.31 1125.63c94.92,-11.85 80.51,-18.56 192.64,-20 72.13,-0.9 123.36,8.38 191.42,14.41 -0.6,-83 -1.58,-124.95 -44.59,-179.5 -27.01,-34.33 -83,-69.65 -150.08,-68.82 -67.76,0.83 -118.46,34.49 -148.79,72.29 -39.54,49.42 -42.48,101.79 -40.6,181.62zm1861.32 -192.39l257.05 567.09 23.08 51.16 -45.86 20.82c17.05,60.44 44.51,80.06 100.8,55.09 55.16,-24.45 64.52,-60.97 25.66,-112.51l-44.43 20.18 -288.09 -636.38c8.57,-11.22 16.84,-22.76 24.82,-34.59 48.06,-71.23 117.63,-224.1 123.36,-292.76 -34.25,-6.11 -91.07,1.66 -129.55,0.38 -21.81,-0.68 -42.63,1.58 -64.51,0.83l-770.09 13.35c-20.14,-0.75 -40.44,0.46 -59.83,2.04 50.48,174.9 137.93,357.13 342.26,472.87 1.13,1.44 1.96,3.47 2.64,5.96 131.21,14.49 222.74,14.19 353.5,-6.34 6.11,-17.5 28.37,-16.67 75.91,-55.83 26.35,-21.68 50.74,-45.54 73.28,-71.36zm-1703.77 -858.84l67.3 -5.66 -0.6 776.73c-25.58,-9.96 -48.52,-11.02 -67.61,0.83l0.91 -771.9zm-1514.74 431.6c63.91,-71.15 48.67,-66.78 132.35,-141.4 53.95,-47.92 98.62,-74.55 154,-114.62 -54.86,-62.25 -83.15,-93.26 -151.36,-106.31 -42.86,-8.15 -108.35,1.88 -158.46,46.4 -50.63,45.05 -66.85,103.83 -64.89,152.27 2.49,63.23 34.56,104.65 88.36,163.66zm351.62 1512.25c9.35,-62.03 -7.55,-91.23 -69.12,-91.75 -60.29,-0.46 -83.9,28.97 -69.79,91.9l138.91 -0.15zm-1269.97 -831.73c-5.89,5.73 -1.51,-1.36 -6.87,9.73 -1.28,2.79 -3.47,10.57 -3.69,11.47 -2.95,11.85 -3.48,19.85 -4.08,31.84 -0.38,82.1 67.76,143.14 167.13,125.18l168.34 166.9c55.23,56.67 111.22,108.89 166.38,165.85l166.07 166.15c21.2,20.53 158.23,154.08 163.89,167.59 -84.81,0.15 -208.63,-12.53 -270.28,27.39 -57.87,37.42 -110.09,115.97 -112.8,182.14l1107.89 0c0.15,-45.87 -37.35,-114.61 -68.59,-144.95 -85.19,-82.84 -135.59,-64.58 -284.46,-64.58 -38.71,0 -260.92,5.2 -276.54,-3.55 -3.62,-1.96 -30.86,-29.73 -35.99,-35.09l-595.56 -595.03c-21.51,-22.26 -50.03,-45.12 -67.46,-69.41 12.08,-26.41 29.81,-38.56 31.39,-83 1.59,-43.31 -12.9,-59.76 -27.24,-87.08 55.99,-61.34 115.22,-115.14 170.6,-171.88l343.77 -344.3c35.69,-35.24 96.96,-99.15 140.73,-142 -15.17,-18.72 -28,-36.6 -38.11,-54.71 -5.43,5.13 -10.86,10.19 -16.15,15.55l-133.85 133.78c-31.09,29.72 -53.72,56.51 -86.77,87.15 -31.47,29.12 -52.67,53.49 -87.3,86.69l-350.04 349.13c-58.02,-10.64 -54.25,-10.72 -106.76,7.69 -5.96,3.17 -5.66,1.74 -13.13,8 -10.34,8.68 -4.68,3.4 -9.58,11.62 -5.97,2.94 -4.31,1.44 -10.87,7.32 -4.98,4.38 -6.19,6.26 -9.51,10.41 -7.77,9.89 -9.28,11.4 -10.56,24zm99 -4.91c70.54,-23.69 110.69,93.19 30.78,115.9 -70.7,20.07 -114.46,-87.83 -30.78,-115.9zm845 -668.75c6.87,17.28 -10.48,31.24 -20.75,91.91 -10.48,61.95 -11.01,125.18 -3.24,188.93 10.41,85.34 58.1,246.36 98.77,301.97 29.88,-17.81 67.68,-60.97 97.56,-85.26 16.98,-13.73 31.16,-29.13 48.22,-42.86l572.69 -514.97c15.7,-12.6 30.26,-26.86 43.84,-40.82 -152.79,-99 -338.26,-179.21 -568.47,-132.65 -1.81,-0.3 -3.77,-1.28 -5.88,-2.79 -108.58,75.15 -177.47,135.29 -262.74,236.54zm2833.45 1533.32l0.53 -680.01c25.58,9.89 48.52,10.95 67.61,-0.9l-0.8 681.83c82.32,1.44 153.53,3.67 190.26,3.67 148.88,0 199.28,-18.34 284.47,64.51 31.23,30.41 68.73,99.15 68.58,145.02l-1107.81 0c2.64,-66.24 54.85,-144.79 112.73,-182.22 45.26,-29.28 223.41,-33.38 384.43,-31.9zm225.08 -963.71c-94.92,11.84 -80.58,18.48 -192.71,19.92 -72.13,0.9 -123.29,-8.3 -191.42,-14.41 0.68,82.99 1.66,124.95 44.67,179.58 26.93,34.25 83,69.64 150,68.81 67.76,-0.83 118.54,-34.56 148.79,-72.36 39.62,-49.42 42.48,-101.71 40.67,-181.54zm-1712.12 65.11c-6.19,17.58 -28.37,16.75 -75.91,55.84 -48.52,39.92 -90.39,87.3 -126.31,140.5 -48.14,71.3 -117.71,224.09 -123.37,292.76 34.18,6.11 91.08,-1.66 129.56,-0.38 21.8,0.68 42.63,-1.58 64.43,-0.75l770.16 -13.44c20.07,0.83 40.45,-0.37 59.76,-2.03 -50.48,-174.91 -137.85,-357.05 -342.18,-472.87 -1.21,-1.36 -2.04,-3.4 -2.64,-5.89 -131.29,-14.49 -222.74,-14.26 -353.5,6.26z"
                  />
                  <path
                    className="fil1 "
                    d="M3144.55 377.95c3.24,15.55 83.83,56.74 100.5,66.93 14.87,9.06 65.65,45.2 82.25,39.61 8.45,-2.79 15.99,-11.84 13.65,-24.97 -2.11,-12.07 -79.37,-52.67 -100.35,-65.12 -15.24,-9.05 -108.05,-74.09 -96.05,-16.45zm924.38 163.81c-214.51,-201.16 -483.73,-42.1 -504.11,10.64l125.79 -0.53c22.56,-1.13 37.57,-0.3 61.49,-1.35 74.47,-3.25 183.88,0.37 254.89,-3.32 23.01,-1.14 53.34,1.81 61.94,-5.44zm-2818.58 405.72c293.82,11.24 392.81,-285.37 373.65,-338.56l-94.62 82.92c-16.3,15.62 -28.15,24.83 -45.5,41.27 -54.18,51.31 -139.14,120.35 -190.37,169.63 -16.6,15.99 -41.43,33.57 -43.16,44.74zm990.26 718.85c214.59,201.09 483.73,42.03 504.11,-10.71l-125.71 0.6c-22.64,1.06 -37.65,0.23 -61.5,1.28 -74.54,3.32 -183.88,-0.3 -254.96,3.32 -22.93,1.13 -53.27,-1.81 -61.94,5.51zm-184.87 -1201.23c-12.67,-9.66 -100.5,12.15 -119.82,15.39 -17.12,2.87 -79.15,8.91 -88.05,24 -4.53,7.62 -4.3,19.39 6.03,27.84 9.59,7.7 94.55,-12.3 118.54,-16.67 17.43,-3.1 130.09,-14.87 83.3,-50.56zm-120.57 380.37c11.54,4.22 113.33,53.49 99.3,1.88 -4.98,-18.48 -89.34,-41.95 -109.64,-49.27 -75.3,-27.01 -90.32,-41.05 -103.9,-4.45 12.98,21.43 36.22,25.13 56.82,31.92 19.39,6.41 38.86,13.13 57.42,19.92zm-253.53 153.32c-36.82,23.62 0.08,49.42 46.48,103.75 55.31,64.81 67.53,96.88 96.74,61.87 -3.55,-27.39 -42.79,-63 -64.97,-89.04 -23.92,-27.99 -53.87,-71.83 -78.25,-76.58zm-225 143.06c-6.79,-30.63 -40.82,-29.8 -42.48,-1.06l32.07 176.64c8.15,34.26 41.19,25.2 41.87,0.45l-21.05 -119.67c-2.87,-19.01 -6.64,-39.16 -10.41,-56.36zm-306.19 -43.01c-15.09,12.07 -76.51,184.11 -72.21,195.95 4.75,13.06 16.97,17.96 27.31,12.68 14.04,-7.09 40.07,-92.51 47.09,-111.6 28.52,-77.79 40.89,-94.24 -2.19,-97.03zm915.56 616.31c-19.32,-0.83 -178.53,88.73 -183.06,100.58 -4.9,12.9 1.06,24.6 12.3,27.46 15.32,3.85 90.93,-43.61 108.73,-53.42 72.59,-40.06 92.66,-44.36 62.03,-74.62zm202.97 233.15c14.94,-27.54 -11.25,-49.27 -31.39,-28.67l-91.6 154.45c-16.23,31.17 14.64,46.03 31.31,27.77l62.63 -104.2c10.26,-16.15 20.67,-33.88 29.05,-49.35zm263.71 39.54c-43.24,-6.34 -32.37,37.35 -32.97,108.73 -0.68,85.26 -12.53,117.48 32.52,110.16 15.24,-23.01 8.98,-75.6 9.28,-109.78 0.3,-36.83 6.41,-89.57 -8.83,-109.11zm291.93 50.4c5.96,10.72 50.56,114.69 73.79,66.55 8.3,-17.28 -39.99,-90.24 -50.55,-109.1 -39.16,-69.8 -41.27,-90.25 -75.53,-71.53 -4.22,24.75 10.94,42.78 21.96,61.42 10.49,17.5 20.75,35.38 30.33,52.66zm340.45 -208.17c-3.25,-15.55 -83.91,-56.67 -100.58,-66.93 -14.87,-9.06 -65.57,-45.2 -82.25,-39.62 -8.37,2.8 -15.99,11.85 -13.65,25.06 2.11,11.99 79.37,52.66 100.43,65.11 15.16,9.06 107.97,74.02 96.05,16.38zm1078.54 -1337.13c19.24,0.83 178.45,-88.8 182.98,-100.58 4.98,-12.97 -1.06,-24.67 -12.3,-27.54 -15.25,-3.77 -90.85,43.62 -108.73,53.43 -72.51,40.06 -92.66,44.36 -61.95,74.69zm-203.05 -233.15c-14.94,27.54 11.32,49.2 31.39,28.6l91.6 -154.46c16.3,-31.16 -14.64,-45.95 -31.31,-27.69l-62.55 104.13c-10.26,16.22 -20.68,33.88 -29.13,49.42zm-263.63 -39.61c43.23,6.41 32.29,-37.28 32.89,-108.73 0.76,-85.26 12.53,-117.48 -32.52,-110.16 -15.24,23.01 -8.98,75.68 -9.28,109.78 -0.3,36.82 -6.41,89.64 8.91,109.11zm-292.01 -50.4c-5.96,-10.72 -50.48,-114.69 -73.72,-66.48 -8.37,17.2 39.99,90.24 50.48,109.03 39.16,69.8 41.27,90.24 75.53,71.53 4.22,-24.67 -10.87,-42.78 -21.96,-61.42 -10.41,-17.5 -20.75,-35.31 -30.33,-52.66z"
                  />
                </g>
              </svg>
              <div className="ml-3">&nbsp;&nbsp;RedwoodJS Blog</div>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Products
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link to={routes.home()}>Home</Link>
          <Link to={routes.about()}>About</Link>
          <Link to={routes.contact()}>Contact</Link>
          {isLoggedIn ? <Link to={routes.posts()}>Admin</Link> : null}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Toggle isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="{{#}}" className="-m-1.5 p-1.5">
              <span className="sr-only">RedwoodJS Blog</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <div className="flex flex-col">
                  <Link to={routes.home()}>Home</Link>
                  <br />
                  <Link to={routes.about()}>About</Link>
                  <br />
                  <Link to={routes.contact()}>Contact</Link>
                  <br />
                  {isLoggedIn ? <Link to={routes.posts()}>Admin</Link> : null}
                </div>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Products
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6">
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                  <Toggle isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
