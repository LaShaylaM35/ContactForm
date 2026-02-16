import { useState} from 'react'
import './App.css'

function App() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const token = import.meta.env.VITE_TOKEN;

  let email="";
  let password="";
  let full_name="";
  const [result, setResult] = useState("")
 

  const onChangeEmail = (event) => {
    email = event.target.value;
  }

  const onChangePass = (event) => {
    password = event.target.value;
  }

  const onChangeFullName = (event) => {
    full_name = event.target.value;
  }

  const saveUser = async ()=>{

    event.preventDefault()

    let info = {
      email,
      password,
      full_name
    } 

 

     const url = `${baseUrl}user_table`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': token
      },
      body: JSON.stringify(info)
    });

  if (response.ok) {
    setResult("User created successfully!")
    
  } else {
    setResult("Error creating user.")


  }

  }
   return (
    <>

      <main className="container mt-5">
        <h1>Create User</h1>

        <form onSubmit={saveUser}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type='email' className="form-control" onChange={onChangeEmail} />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type='password' className="form-control" onChange={onChangePass} />
          </div>

          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type='text' className="form-control" onChange={onChangeFullName} />
          </div>

          <button className='btn btn-success'>Save</button>
        </form>

        <p>{result}</p>
      </main>
    </>
  )
}

export default App
