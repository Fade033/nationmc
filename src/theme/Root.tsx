import React, {useEffect, type ReactNode} from 'react';

export default function Root({children}: {children: ReactNode}) {
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.classList.add('navbar--loaded');
    }
  }, []);

  return <>{children}</>;
}