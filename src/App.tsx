import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { sentJump } from './infrastructure/postJump';
import { Jump } from './domain/Jump';


function App() {

  let form: Jump = {} as Jump;
  form.jumps = []
  
  const [inputform, setInputForm] = useState(form);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const jump = await sentJump(inputform);
    console.log(jump)
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit}>
            <p>Message: </p>
            <input type="text"
                id="message"
                name="message"
                required={true}
                placeholder="My First Jump Message"
                onChange={(event) =>
                  setInputForm({ ...inputform, message: event.target.value })
                }
                value={inputform.message}
            />
            <p>Last Path: </p>
            <input type="text"
                id="last_path"
                name="last_path"
                required={true}
                placeholder="/jump"
                onChange={(event) =>
                  setInputForm({ ...inputform, last_path: event.target.value })
                }
                value={inputform.last_path}
            />
            <p>Jump Path: </p>
            <input type="text"
                id="jump_path"
                name="jump_path"
                required={true}
                placeholder="/jump"
                onChange={(event) =>
                  setInputForm({ ...inputform, jump_path: event.target.value })
                }
                value={inputform.jump_path}
            />
            <p>Jumps: </p>
            <input type="text"
                id="jump"
                name="jump"
                required={true}
                placeholder="http://localhost"
                onChange={(event) =>
                  setInputForm({ ...inputform, jumps: [event.target.value] })
                }
                value={inputform.jumps[0]}
            />
            <div>
              <button type="submit">Jump</button>
            </div>
        </form>
      </header>
    </div>
  );
}

export default App;


