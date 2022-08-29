import { AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

import { Footer, Header } from '@/components/common';

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AnimatePresence mode='wait'>
        <div className='w-screen h-auto min-h-[100vh] flex flex-col bg-primary'>
          <Header />
          {/* <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div> */}

          <main className={`px-4 py-24`}>
            {children}
            <Footer />
          </main>
        </div>
      </AnimatePresence>
    </>
  );
}

export default AppLayout;
