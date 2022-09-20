import { ReactNode } from 'react'
import Navbar from './navbar'
import Layout from './layout'
import { useRouter } from 'next/router'
import { useUserContext } from '../context/user.context'
import { ClipLoader } from 'react-spinners'

const LoggedinLayout = ({
  children,
  title = 'My notes app',
}:{
    children: ReactNode
    title?: string | undefined
}) => {
  
  const router = useRouter();
  const {user} = useUserContext();

  if (!user) {
    router.push("/401");
    return (
      <div className="flex items-center justify-center h-screen dark:bg-stone-800">
        <ClipLoader/>
      </div>
    );
  }
  return (
    <Layout title={title}>
        <Navbar/>
        {children}
    </Layout>
  )
}

export default LoggedinLayout;