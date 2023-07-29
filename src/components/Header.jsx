import React, { useState } from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 lg:overflow-y-visible z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 justify-between">
            <div className="items-center col-span-2 flex">
              <div className="flex flex-shrink-0 items-center">
                <Link to="">
                  <img className="block h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                </Link>
              </div>
            </div>
            <div className="items-center col-span-6">
              <div className="flex items-center px-6 py-4 max-w-md">
                <div className="w-full">
                  <label for="search" className="sr-only">Search</label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <input id="search" name="search" className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Search" type="search" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
              <button type="button" className="-mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                <span className="sr-only">Open menu</span>

                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="items-center col-span-4 flex ml-auto">
              <Link to="#" className="ml-5 flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span className="sr-only">View notifications</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </Link>

              <div className="relative ml-5 flex-shrink-0">
                <div>
                  <button type="button" onClick={() => setToggleMenu(!toggleMenu)} onBlur={() => setToggleMenu(false)} className="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </button>
                </div>

                {
                  toggleMenu && <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</Link>

                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</Link>

                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</Link>
                </div>
                }
              </div>
            </div>
          </div>
        </div>

        {/* <nav classNameName="lg:hidden" aria-label="Global">
          <div className="mx-auto max-w-3xl space-y-1 px-2 pb-3 pt-2 sm:px-4">
            <a href="#" aria-current="page" className="bg-gray-100 text-gray-900 block rounded-md py-2 px-3 text-base font-medium">Dashboard</a>

            <a href="#" className="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium">Calendar</a>

            <a href="#" className="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium">Teams</a>

            <a href="#" className="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium">Directory</a>
          </div>
          <div className="border-t border-gray-200 pb-3 pt-4">
            <div className="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">Chelsea Hagon</div>
                <div className="text-sm font-medium text-gray-500">chelsea.hagon@example.com</div>
              </div>
              <button type="button" className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span className="sr-only">View notifications</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </button>
            </div>
            <div className="mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4">
              <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Your Profile</a>

              <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Settings</a>

              <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Sign out</a>
            </div>
          </div>
        </nav> */}
      </header>

    </>
  )
}
