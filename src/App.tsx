import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSDK } from "@metamask/sdk-react";
function App() {
  const { sdk, ready, account } = useSDK();

  useEffect(() => {
    if (ready && sdk) {
      console.log("connecting...")
      sdk
        ?.connect()
        .then((accounts) => {
          console.log("connected.")
          console.log(accounts);
        })
        .catch((error) => console.error(error));
    }
  }, [ready, sdk]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Account: {account || "Connecting..."}</p>
    </>
  );
}

export default App;
