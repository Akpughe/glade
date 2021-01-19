import React from 'react';

const SampleResponse = () => {
  return (
    <div className="language-js line-numbers-mode relative bg-gray-700 rounded md ">
      <pre className="language-js py-3 px-24 my-3.5 bg-gray-700 text-xl font-light rounded-md overflow-auto">
        <code>
          <div>
            <span className="text-white">{'{'}</span>
          </div>
          <div className="ml-7">
            <div>
              <span className="text-yellow-400">"status"</span>
              <span className="text-blue-500 text-2xl font-semibold">:</span>
              <span className="text-yellow-500">200</span>
              <span>,</span>
            </div>
            <div>
              <span className="text-yellow-400">"txtStatus"</span>
              <span className="text-blue-500 text-2xl font-semibold">:</span>
              <span className="text-green-500">"successful"</span>
              <span>,</span>
            </div>
            <div>
              <span className="text-yellow-400">"bank_message"</span>
              <span className="text-blue-500 text-2xl font-semibold">:</span>
              <span className="text-green-500">"Successful"</span>
              <span>,</span>
            </div>

            <div className="text-yellow-400">
              "fullname"<span className="">:</span>
              <span className="text-green-500">"John Doe"</span>
              <span className="">,</span>
            </div>
            <div className="text-yellow-400">
              "email"<span className="">:</span>{' '}
              <span className="text-green-500">"hello@example.com"</span>
              <span className="">,</span>
            </div>
            <div className="text-yellow-400">
              "txtRef"
              <span className="text-blue-500 text-2xl font-semibold">:</span>
              <span className="text-green-500">"GP82878898982497T"</span>
              <span className="">,</span>
            </div>
            <div className="text-yellow-400">
              "chargedAmount"
              <span className="text-blue-500 text-2xl font-semibold">
                :
              </span>{' '}
              <span className="text-yellow-500">1000</span>
              <span className="">,</span>
            </div>
            <div className="text-yellow-400">
              "fraudStatus"
              <span className="text-blue-500 text-2xl font-semibold">
                :
              </span>{' '}
              <span className="text-green-500">"ok"</span>
              <span className="">,</span>
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
        <span className="line-number">5</span>
        <br />
        <span className="line-number">6</span>
        <br />
        <span className="line-number">7</span>
        <br />
        <span className="line-number">8</span>
        <br />
        <span className="line-number">9</span>
        <br />
        <span className="line-number">10</span>
        <br />
      </div>
    </div>
  );
};

export default SampleResponse;
