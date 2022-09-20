    import Head from 'next/head'
import { ReactNode } from 'react'
import DarkModeToggle from './darkmode.toggle'
import Footer from './footer'

const Layout = ({
  children,
  title = 'My notes app',
}:{
    children: ReactNode
    title?: string 
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='flex flex-col h-screen dark:bg-stone-900'>
      <DarkModeToggle/>

      {children}

      <footer>
          <Footer/>
      </footer>
      </div>
    </div>
  )
}

export default Layout;