import React from 'react';

const LiveInline = () => {
  return (
    <div className="language-html line-numbers-mode relative bg-gray-700 rounded md">
      <pre className="language-html py-5 px-16 my-3.5 bg-gray-700 text-xl rounded-md overflow-auto">
        <code>
          <span className="token tag">
            <span className="text-red-400">
              <span className="text-gray-300">&lt;</span>script
            </span>{' '}
            <span className="text-red-400">type</span>
            <span className="token text-green-500">
              <span className="token text-gray-300">=</span>
              <span className="token text-gray-300">"</span>
              text/javascript
              <span className="token text-gray-300">"</span>
            </span>{' '}
            <span className="text-red-400">src</span>
            <span className="token text-green-500">
              <span className="text-gray-300">=</span>
              <span className="text-gray-300">"</span>
              https://api.glade.ng/checkout.js
              <span className="token text-gray-300">"</span>
            </span>
            <span className="token text-gray-300">&gt;</span>
          </span>
          <span className="token script"></span>
          <span className="token tag">
            <span className="token text-red-400">
              <span className="token text-gray-300">&lt;/</span>script
            </span>
            <span className="token text-gray-300">&gt;</span>
          </span>
        </code>
      </pre>
      <div className="absolute top-0 w-14 text-center text-white py-5 border-r-2">
        <span className="line-number">1</span>
        <br />
      </div>
    </div>
  );
};

export default LiveInline;
