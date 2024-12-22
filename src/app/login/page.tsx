import Header from "../Components/component1";
import Foot from "../Components/component2";
import Bottom1 from "../Components/component3";

export default function Home(){
    return(
        <div>
        <Header/>

        <div className="bg-gray-50">
             <section className="bg-purple-100 text-center py-10">
               <h1 className="text-3xl font-bold text-gray-800">Account Page</h1>
               <p className="mt-2 text-gray-600"></p>
            </section>
           </div>

        <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <p className="text-gray-600 text-sm mb-6 text-center">
          Please login using account detail below.
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="mb-6 text-right">
            <a href="#" className="text-pink-500 text-sm hover:underline">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an Account?{' '}
          <a href="#" className="text-pink-500 font-medium hover:underline">
            Create account
          </a>
        </p>
      </div>
    </div>
    <Bottom1/>
    <Foot/>
</div>
    )
}