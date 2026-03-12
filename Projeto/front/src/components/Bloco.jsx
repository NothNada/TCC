export default function Bloco({ texto, setter, hasInput }){
  return(
      <div className='
  w-100 h-100 bg-linear-to-b from-gray-600 to-gray-800 rounded-2xl
  flex justify-center items-center 
  '>
    {
      hasInput ? (
        <input className='text-white text-2xl 
    font-black font-serif text-center
    border-gray-950 border-2 rounded-xl bg-black
    ' value={texto} onChange={(s)=>setter(s.target.value)}>

    </input>
      ) :
      (
        <h1 className='text-white text-2xl 
    font-black font-serif text-center'>
      {texto}
    </h1>
      )
    }
  </div>
  )
}