
function SignUpPage() {

  async function handleSignUp(formData) {
    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")

    const postData = { name, email, password }
    try {

      const response = await fetch("http://localhost:3000/api/createUser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData)
      })
      const data = await response.json()
      console.log(data)
    } catch (err) {
      console.log('erro:', err)
    }

  }

  return (
    <>
      <br /><br /><br />

      <form action={handleSignUp}>
        <input type="text" name="name" placeholder="Nome" /><br />
        <input type="email" name="email" placeholder="Email" /><br />
        <input type="password" name="password" placeholder="Senha" /><br />
        <button type="submit">Sign-Up</button>
      </form>
    </>
  )

}

export default SignUpPage
