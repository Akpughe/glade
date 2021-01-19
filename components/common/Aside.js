import React from 'react';

const Aside = () => {
  return (
    <nav className="fixed bg-white border-r top-20 w-80">
      <div className="p-5">
        <div class="flex flex-col space-y-4">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <a
            href="#"
            class="text-black text-xl font-semibold rounded-md text-sm font-medium"
          >
            Guide
          </a>
          <ul className="capitalize cursor-pointer">
            <li className="pl-2 mb-2 hover:text-blue-400 hover:underline">Account Setup</li>
            <ul className="pl-5 mb-2">
              <li className=" mb-2 hover:text-blue-400 hover:underline">Test Account</li>
              <li className=" mb-2 hover:text-blue-400 hover:underline">Live Account</li>
              <li className=" mb-2 hover:text-blue-400 hover:underline">Using the Glide Payment Service</li>
            </ul>
            <li className="pl-2 mb-2 hover:text-blue-400 hover:underline">The Interface</li>
            <li className="pl-2 mb-2 hover:text-blue-400 hover:underline">Prerequisites / Requirements</li>
            <ul className="pl-5 mb-2 hover:text-blue-400 hover:underline">
              <li>HTTPS requirements</li>
            </ul>
            <li className="pl-2 mb-2 hover:text-blue-400 hover:underline">Glade Inline Checkout</li>
            <ul className="pl-5 mb-2">
              <li className=" mb-2 hover:text-blue-400 hover:underline">Embedded Parameters</li>
              <li className=" mb-2 hover:text-blue-400 hover:underline">Recurring Payment</li>
              <li className=" mb-2 hover:text-blue-400 hover:underline">Installment Payment</li>
              <li className=" mb-2 hover:text-blue-400 hover:underline">Split Payment</li>
            </ul>
            <li className="pl-2 mb-2 hover:text-blue-400 hover:underline">Verify Transactions</li>
            <li className="pl-2 mb-2 hover:text-blue-400 hover:underline">Refund Transactions</li>
            <li className="pl-2 mb-2 hover:text-blue-400 hover:underline">Disputes</li>
            <li className="pl-2 mb-2 hover:text-blue-400 hover:underline">Settlements</li>
            <li className="pl-2 mb-2 hover:text-blue-400 hover:underline">Questions?</li>
            

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Aside;
