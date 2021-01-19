import React from 'react';
import Link from 'next/link';

const Navbrand = () => {
  return (
    <Link href="/">
      <img
        style={{ height: '2.2rem', minWidth: '2.2rem' }}
        src="/logo.png"
        alt="logo"
      />
    </Link>
  );
};

export default Navbrand;
