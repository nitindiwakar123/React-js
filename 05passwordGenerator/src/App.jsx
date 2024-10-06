import { useState, useCallback, useEffect, useRef } from "react"

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);

      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full h-full max-w-md mx-auto shadow-md rounded-lg px-4 my-40 py-5 text-orange-500 bg-gray-800">
        <h1 className="text-4xl text-center my-6">Password Generator</h1>
        <div className="flex shadow-sm rounded-lg overflow-hidden mb-4">
          <input type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white text-center px-3 py-0.5 shrink-0">copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range"
              min={6}
              max={100}
             value={length}
              className="cursor-pointer"
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Lenght: {length}</label>
          </div>
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
            defaultChecked={characterAllowed}
            id="characterInput"
            onChange={() => {
              setCharacterAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>

      </div>
    </>
  )
}

export default App
