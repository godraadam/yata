import { useRouter } from "next/router"
import { useUserContext } from "../context/user.context"
import { trpc } from "../utils/trpc"


export const Logout = () => {
    
    const router = useRouter()
    const {setUser} = useUserContext(); 
    
    const {mutate} = trpc.useMutation("auth.logout", {
        onError: (error) => console.log(error),
        onSuccess: async () => {
            await router.push('/login')
            setUser(null);
        }
    })
    
    
    return (
        <button onClick={() => mutate()} className="text-lg dark:text-white py-1 h-fit"> Logout</button>
    )
}