import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'



function App() {
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [name, setName] = useState('')
  const [length, setLength] = useState(8)


  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = name
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    // if (name) console.log(name)
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    if (pass.includes(' ')) {
      pass = pass.replace(' ', '+')
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, name, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
    document.getElementById('show-copied').style.display = 'block'
    setTimeout(() => document.getElementById('show-copied').style.display = 'none', 2000)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, name, passwordGenerator])
  return (

    <div className="max-w-[50vw] flex flex-col  mx-auto shadow-md rounded-lg px-4 py-3 my-22 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3 text-2xl'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden my-4 border-2 border-red-600" >
        <input className='w-full text-white text-lg px-2'
          type="text"
          placeholder='Enter Your Name'
          onChange={(e) => { setName(e.target.value) }} />
      </div>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 border-2 border-red-600">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 cursor-pointer hover:bg-blue-500 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        <span id='show-copied'
          className='outline-none text-center bg-green-700 text-white px-3 py-0.5'
          style={{ display: 'none' }}
        >Copied!</span>

      </div>
      <div className='flex flex-wrap text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value - name.length) }}
          />
          <label>Length: {length + name.length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="characterInput">Speacial Characters</label>
        </div>
      </div>
    </div>

  )
}

export default App