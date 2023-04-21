import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { useState } from 'react';
import { Provider } from 'react-redux';

import Navbar from '../components/navBar';
import store from '../redux/index';


export default function App({ Component, pageProps }: AppProps<{ initialSession: Session }>) {
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  return (
    <div>
      <Provider store={store}>
        <SessionContextProvider
          supabaseClient={supabaseClient}
          initialSession={pageProps.initialSession}>
          <Navbar />
          <Component {...pageProps} />
        </SessionContextProvider>
      </Provider>
    </div>
  );
};
