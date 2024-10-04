import { LoginButton } from '@/components/auth/login-button'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold drop-shadow-md">
          
        </h1>
        <p className="text-white text-lg">
          A simple auth service
        </p>
        <div>
          <LoginButton>
            <Button size='lg'>
              Sign up
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  )
}
