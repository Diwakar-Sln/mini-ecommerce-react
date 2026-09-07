import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState(null);
  const {signUp} = useContext(AuthContext);
  function onSubmit(data){
    setError(null)
    let result;
    result = signUp(data.email, data.password)
    if(result.success){
      alert("success")
    }else{
      setError(result.message)
    }
    console.log(result)
  }
  return (
    <div>
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" {...register('email', { required: "Email is required" })} />
          {errors.email && (<span>{errors.email.message}</span>)}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" name="password"
            {...register('password',
              {
                required: "Password is required",
                minLength: {
                  value:6,
                  message:"Password must be at least 6 characters"
                },
                maxLength:{
                  value:12,
                  message:"Password must be at least 12 characters"
                },
              })
            } />
          {errors.password && (<span>{errors.password.message}</span>)}
        </div>
        <div>
          <button type='submit'>SignUp</button>
        </div>
        <div>
          <p>Already have an account ? </p>
          <Link to="/">Login</Link>
        </div>
      </form>
      <div>
        {error && <span>{error}</span>}
      </div>
    </div>
  )
}

export default Signup