import { ReactNode } from 'react'
import Navbar from './navbar'
import Layout from './layout'

const LoggedinLayout = ({
  children,
  title = 'My notes app',
}:{
    children: ReactNode
    title?: string | undefined
}) => {
  return (
    <Layout>
        <Navbar/>
        {children}
    </Layout>
  )
}

export default LoggedinLayout;