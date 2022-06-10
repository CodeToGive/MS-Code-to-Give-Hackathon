import care from "../assets/gifs/Care.png"
import { LoginButton } from "./Buttons/LoginButton"

export const Login = () => {
  return (
    <div className="relative w-4/5 m-auto h-full lg:flex lg:flex-row grid place-items-center border rounded-[20px]">
        {/* <div className="loginGif bg-black"> */}
        <img src={care} alt="Care" className="img rounded-[20px]" width="50%" />

        {/* </div> */}
        <div className="bg-gray-300 w-full grid place-items-center p-10 lg:rounded-[20px] sm:rounded-b-[20px]">
        <form className="font-mono space-y-2 w-full m-10">
            <label className="text-2xl">Email</label>
            <br></br>
            <input type="email" className="rounded-[8px] w-3/5 "></input>
            <br></br>
            <br></br>
            <label className="text-2xl">UID</label>
            <br></br>
            <input type="text" className=" rounded-[8px] w-3/5"></input>
            <br></br>
            <br></br>
            <label className="text-2xl">Password</label>
            <br></br>
            <input type="password" className="rounded-[8px] w-3/5"></input>
            <br></br>
            <br></br>
            <LoginButton/>
        </form>
        </div>
    
    </div>
  )
}
