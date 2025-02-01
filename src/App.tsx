// import { useState } from "react";
// import reactLogo from "../public/assets/react.svg";
// import viteLogo from "../public/vite.svg";
// import "./styles/App.css";
// // import { small } from "framer-motion/client";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           gap: "10px",
//         }}
//       >
//         <h3>Letscapes ...</h3>
//         <p style={{ fontSize: "small" }}>Version 1.0</p>
//       </div>

//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;

import React from "react";
import "./styles/globals.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <header className="hero">
        <h1>
          LetScapes... <span className="emoji">🌍</span> | Travel & Explore
        </h1>
      </header>

      <main className="content" style={{ margin: "20px" }}>
        <h2>Where Will Your Next Adventure Take You?</h2>
        <p>Click the button below and get inspired!</p>
        <button className="cta-button">
          Get Inspired <span className="emoji">🎲</span>
        </button>
      </main>

      <div className="prototype-notice">
        🌍✨ Welcome to <strong>LetScapes</strong>! 🚀 This is the **landing
        page** for our **prototype version**. The **full MVP** is in the works
        and launching soon! Stay tuned. 🎉
      </div>

      <footer className="footer">
        <p>
          © 2025 Letscapes | Follow us on{" "}
          <a href="https://twitter.com">Twitter</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
