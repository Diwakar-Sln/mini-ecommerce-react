import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';

const Login = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    setError(null)
    let result;
    result = login(data.email, data.password)
    if (result.success) {
      alert("success")
      navigate("/home");
    } else {
      setError(result.message)
    }
    console.log(result)
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" {...register('email', { required: "Email is required" })} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" name="password" {...register('password',
            {
              required: "Password is required",
              minLength:
                { value: 6, message: "Minimum 6 characters required" },
              maxLength:
                { value: 12, message: "Maximum 12 characters allowded" }
            })} />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div>
          <button type='submit'>Login</button>
        </div>
        <div>
          <p>Don't have an account </p>
          <Link to='signup'>SignUp</Link>
        </div>
        <div>
          {error && <span>{error}</span>}
        </div>
      </form>
    </div>
  )
}

export default Login