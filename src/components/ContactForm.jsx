import React, { useState } from 'react'


export const ContactForm = () => {
  
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const token = import.meta.env.VITE_TOKEN;

  let name = "";
  let message = "";

  

  const [result, setResult] = useState("")


  const onChangeMessage = (event) => {
    message = event.target.value;
  }


  const onChangeName = (event) => {
    name = event.target.value;
  }

  const saveUser = async () => {

    event.preventDefault()

    let info = {
      name,
      message
    }



    const url = `${baseUrl}contactform`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': token
      },
      body: JSON.stringify(info)
    });

    if (response.ok) {
      setResult(`Thank you, ${name}! Your message: ${message} has been sent.`)

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
            <label className="form-label">Name</label>
            <input type='text' className="form-control" onChange={onChangeName} />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea type='text' className="form-control" onChange={onChangeMessage} />
          </div>



          <button className='btn btn-success'>Save</button>
        </form>

        <p>{result}</p>
      </main>
    </>
  )

}