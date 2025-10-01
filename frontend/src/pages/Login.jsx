
import react, { useState} from 'react'

export const Login = () => {
const [state, setState] = useState('Sign Up')


const [ email , setEmail ] = useState('')
const [ password, setPassword ] = useState('')
const [ name , setName ] = useState(' ')

const onSubmitHandler = async (event) =>{
  event.preventDefault()
}

  return (
    <form className='min-h-[80vh] flex items-center' > 
<div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340] sm:min-w-96 border rounded-xl text-sm shadow-lg'>
  <p className='text-2xl font-semibold '>{ state === 'Sign Up' ? "create Account" : "Login"}</p>
  <p>Please {  state=='sign Up' ? "Sign Up" : 'log in'} sign up to book appointment</p>
  {
    state === "Sign Up" && <div className='w-full'>
    <p>Full Name</p>
    <input className='border border-zinc-300 rounded w-full p-2 mt-2' type="text" onChange ={(e)=> setName(e.target.name)} value={name} required />
  </div>
  }
  
  <div  className='w-full'>
    <p>Email</p>
    <input className='border border-zinc-300 rounded w-full p-2 mt-2' type="email" onChange ={(e)=> setEmail(e.target.name)} value={email} required />
  </div>
  <div  className='w-full'>
    <p>Password</p>
    <input className='border border-zinc-300 rounded w-full p-2 mt-2' type="password" onChange ={(e)=> setPassword(e.target.value)} value={password}  required/>
  </div>
  <button className=' bg-[#3B82F6] text-white w-full py-2 rounded-md text-base'> { state ==='Sign Up' ? "create Account" : 'Login'} </button>
{
  state == "Sign Up"
  ? <p className=''>Already have an account?  <span onClick={()=>setState('login')} className='text-[#3B82F6] underline cursor-pointer'> Login here</span>

</p>: <p> Create the new account? <span onClick={()=>setState('login')} className='text-[#3B82F6] underline cursor-pointer'>Click here</span></p>
}
</div>
    </form>
  )
}


export default Login
