import './App.css';

function App() {
  const tag = ['T','E','A','M','A','I','M','E','D']
  return (
    <div className="App">
      <div className="intro">{tag.map((char,index)=><p key={index} style={{animationDelay:`${index/20}s`}} className="bouncy">{char}</p>)}</div>
      <div className="section">
          <div className="card">
            <h1>Starter</h1>
            <ul>
              <li>Centralized teams</li>
              <li>Version history</li>
              <li>Plugin administration</li>
            </ul>
            <div className="button">Get started</div>
          </div>
          <div className="card">
            <h1>Professional</h1>
            <ul>
              <li>Centralized teams</li>
              <li>Version history</li>
              <li>Plugin administration</li>
              <li>Facebook & Instagram Ads</li>
            </ul>
            <div className="button">Get started</div>
          </div>
          <div className="card">
            <h1>Organization</h1>
            <ul>
              <li>Centralized teams</li>
              <li>Version history</li>
              <li>Plugin administration</li>
              <li>Facebook & Instagram Ads</li>
              <li>Design System Analytics</li>
              <li>Unlimited cloud Storage</li>
            </ul>
            <div className="button">Get started</div>
        </div>
      </div>
    </div>
  );
}

export default App;
