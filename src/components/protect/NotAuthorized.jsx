import React from 'react'

function NotAuthorized() {
  return (  <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
  <div className="text-center">
    <h1 className="text-4xl font-bold text-white mb-4">Oops! You are not authorized.</h1>
    <p className="text-lg text-white mb-6">
      It seems you don't have the necessary permissions to access this page.
      Please contact the administrator for further assistance.
    </p>
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={() => {
        // Handle the back-to-home action here
      }}
    >
      Back to Home
    </button>
  </div>
</div>
  )
}

export default NotAuthorized
