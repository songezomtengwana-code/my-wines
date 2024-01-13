import Head from "next/head";
import React from "react";
// import { useRouter } from 'next/router';

const SignIn = () => {
  // const router = useRouter()
  const handleAuthentication = () => {
    // router.push('/dashboard')
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>My Wines | Sign In</title>
      </Head>
      <div className="bg-white rounded-lg shadow-md p-8 md:max-w-md w-3/5">
        <h2 className="text-2xl font-semibold text-black mb-8">My Wines</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="text-lg text-black font-semibold">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="block text-black w-full px-3 py-2 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-lg text-black font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="block text-black w-full px-3 py-2 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          <button
            //   onClick={handleAuthentication}
            type="submit"
            className="inline-block px-7 py-2 text-lg w-full font-semibold rounded-md bg-emerald-400 text-white hover:bg-emerald-500"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
