import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { sentJump } from './infrastructure/postJump';
import { Jump } from './domain/Jump';
import { Response as ResponseBack } from './domain/Response';

function App() {

  let form: Jump = {} as Jump;
  form.jumps = []

  let res: ResponseBack = {} as ResponseBack;
  
  const [inputForm, setInputForm] = useState(form);
  const [jumps, setJumps] = useState([""]);
  const [resBack, setResBack] = useState(res);
  const [response, setResponse] = useState(false);
  const [calls, setCalls] = useState(1);
  const [callsInterval, setCallsInterval] = useState(1);
  const [backend, setBackend] = useState(1);
  const [url, setUrl] = useState("http://golang-demo-git-myapp.apps.68.sandbox1017.opentlc.com/jump");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const jump: ResponseBack = await sentJump(url, inputForm, calls, callsInterval);
    console.log(jump)
    setResBack({...jump})
    setResponse(true)
  };

  const addInput = () => {
    jumps.push("");
    setJumps([...jumps]);
    setInputForm({ ...inputForm, jumps })
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body className="App-body">
        <form onSubmit={handleSubmit}>
          <div className="App-body-settings">
            <p>Backend URL: </p>
            <input type="text"
                id="url"
                name="url"
                required={true}
                placeholder="http://back-project-a.apps.68.sandbox1017.opentlc.com/jump"
                onChange={(event) =>
                  setUrl(event.target.value)
                }
                value={url}
            />
            <p>Message: </p>
            <input type="text"
                id="message"
                name="message"
                required={true}
                placeholder="My First Jump Message"
                onChange={(event) =>
                  setInputForm({ ...inputForm, message: event.target.value })
                }
                value={inputForm.message}
            />
            <p>Last Path: </p>
            <input type="text"
                id="last_path"
                name="last_path"
                required={true}
                placeholder="/jump"
                onChange={(event) =>
                  setInputForm({ ...inputForm, last_path: event.target.value })
                }
                value={inputForm.last_path}
            />
            <p>Jump Path: </p>
            <input type="text"
                id="jump_path"
                name="jump_path"
                required={true}
                placeholder="/jump"
                onChange={(event) =>
                  setInputForm({ ...inputForm, jump_path: event.target.value })
                }
                value={inputForm.jump_path}
            />
            <p>Jumps: </p>

            {jumps.map((n, i) => (
              <input
                key={i}
                value={n}
                required={true}
                onChange={e => {
                  jumps[i] = e.target.value;
                  setJumps([...jumps]);
                  setInputForm({ ...inputForm, jumps })
                }}
              />
            ))}
            <button className="add-button" type="button" onClick={addInput}>Add empty input</button>

          </div>  

          <div className="App-body-calls">
          
            <p>Calls: </p>
            <input type="number"
                id="calls"
                name="calls"
                required={true}
                placeholder="80"
                onChange={(event) =>
                  setCalls(parseInt(event.target.value))
                }
                value={calls}
            />

            <p>Calls Interval (Seconds): </p>
            <input type="number"
                id="callsinterval"
                name="callsinterval"
                required={true}
                placeholder="5"
                onChange={(event) =>
                  setCallsInterval(parseInt(event.target.value))
                }
                value={callsInterval}
            />

            <div>
              <button className="jump-button" type="submit">Jump</button>
            </div>
          
          </div>
        
        </form>
        
        <div className="App-body-result">

            {response ? (
            <div className="App-response">
                
                  <p>Code: {resBack.code}</p>
                  <p>Message: {resBack.message}</p>
                
            </div>
            ) : null}
        
        </div>  
      
      </body>
    </div>
  );
}

export default App;


