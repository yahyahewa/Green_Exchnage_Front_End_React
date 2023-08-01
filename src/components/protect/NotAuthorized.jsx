import React from 'react'
import { Link } from 'react-router-dom'
function NotAuthorized() {
  return (  <div className="flex items-center justify-center h-screen bg-gradient-to-r from-jade-500 via-jade-700 to-jade-900">
  <div className="text-center">
    <h1 className="text-4xl font-bold text-white mb-4">Oops! You are not authorized.</h1>
    <p className="text-lg text-white mb-6">
      It seems you don't have the necessary permissions to access this page.
      Please contact the administrator for further assistance.
    </p>
    <Link
      className="bg-none border 
       text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      to="/"
    >
      Back to Home
    </Link>
  </div>
</div>
  )
}

export default NotAuthorized
