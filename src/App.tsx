function App() {

  return (
    <main className="h-screen flex justify-center items-center bg-slate-300">
      <form className="flex flex-col justify-center gap-3 w-96 p-8 bg-white rounded">
        <input type="text" placeholder="Email" className="border p-1" />
        <input type="password" placeholder="Senha" className="border p-1" />
        <button className="bg-blue-500 text-white p-2">Criar conta</button>
      </form>
    </main>
  )
}

export default App
