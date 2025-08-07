import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import  Footer  from './Footer'

export default function LayOut() {
   return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow container mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
