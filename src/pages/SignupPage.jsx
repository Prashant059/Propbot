import { SignupForm } from "../components/auth/SignupForm"
import LoginCover from '../assets/logincover.png';

function SignupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex min-h-[calc(100vh-80px)]">
        <div className="flex-1 flex items-center justify-center p-8">
          <SignupForm />
        </div>
        <div className="flex-1 relative overflow-hidden">
          <img
            src={LoginCover}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default SignupPage
