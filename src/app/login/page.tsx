import { login, signup } from '@/app/login/actions'

export default function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button className="mx-5 border-1 border-danger" formAction={login}>Log in</button>
      <button className="mx-5 border-1 border-danger" formAction={signup}>Sign up</button>
    </form>
  )
}