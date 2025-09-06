import { LoginForm } from "../components/auth/LoginForm"
import LoginCover from '../assets/logincover.png';

function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex min-h-[calc(100vh-80px)]">
        <div className="flex-1 flex items-center justify-center p-8">
          <LoginForm />
        </div>
        <div className="flex-1 relative overflow-hidden">
          <img
            src={LoginCover}
            alt="Modern house"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
