import "./App.css";
import xss from "xss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          利用 xss 包防御 攻击
        </p>
        {xss("<script>alert(111)</script>")}
      </header>
    </div>
  );
}

export default App;
