"use client"

import { useRouter } from 'next/navigation'

/**
 * @param children - The content of the button.
 * @param mode - The mode of the button. It can be "modal" or "redirect".
 * @param asChild - The asChild of the button.
 */
interface LoginButtonProps {
  children: React.ReactNode
  mode?: "modal" | "redirect"
  asChild?: boolean
}

/**
 * Login button component.
 * @param children - The content of the button.
 * @param mode - The mode of the button. It can be "modal" or "redirect".
 * @param asChild - The asChild of the button. It can be used to render the button as a child.
 * @returns 
 */
export const LoginButton = ({
  children,
  mode = "redirect",
  asChild
}: LoginButtonProps) => {

  const router = useRouter()
  const onClick = () => {
    router.push("/auth/login")
  }
  if (mode === "modal") {
    return (
      <span>
        TODO: Implement modal
      </span>
    )
  }

  return (
    <div onClick={ onClick }>
      { children }
    </div>
  )
}