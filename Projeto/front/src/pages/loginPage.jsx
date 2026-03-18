function LoginPage() {
  return (
    <div class="grid place-items-center h-screen">

    <form className="bg-white  rounded-2xl p-6 space-y-5 w-full max-w-md inset-shadow-sm inset-shadow-indigo-500">
  <h2 className="text-xl font-semibold text-gray-800 text-center">
    Contato
  </h2>

  <div>
    <label className="block text-sm text-gray-600 mb-1">Nome</label>
    <input
      type="text"
      name="nome"
      placeholder="Seu nome"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      />
  </div>

  <div>
    <label className="block text-sm text-gray-600 mb-1">senha</label>
    <input
      type="senha"
      name="senha"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      />
  </div>

  

  <button
    type="submit"
    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
    >
    Enviar
  </button>
</form>
    </div>
  )

}

export default LoginPage
