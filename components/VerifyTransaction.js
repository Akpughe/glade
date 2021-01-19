import React from 'react';

const VerifyTransaction = ({txnref, number }) => {
  return (
    <div className="language-json line-numbers-mode relative bg-gray-700 rounded md ">
      <pre className="language-js py-3 px-24 my-3.5 bg-gray-700 text-xl font-light rounded-md overflow-auto">
        <code>
          <div>
            <span className="text-white">{'{'}</span>
          </div>
          <div className="ml-7">
            <div>
              <span className="text-yellow-400">"action"</span>
              <span className="text-blue-500 text-2xl font-semibold">:</span>
              <span className="text-green-500">"verify"</span>
              <span>,</span>
            </div>

            <div className="text-yellow-400">
              "{txnref}"
              <span className="text-blue-500 text-2xl font-semibold">:</span>
              <span className="text-green-500">"{number}"</span>
            </div>
          </div>
          <span className="text-white">{'}'}</span>
        </code>
      </pre>
      <div className="line-numbers-wrapper ">
        <span className="line-number">1</span>
        <br />
        <span className="line-number">2</span>
        <br />
        <span className="line-number">3</span>
        <br />
        <span className="line-number">4</span>
        <br />

        <br />
      </div>
    </div>
  );
};

export default VerifyTransaction;
