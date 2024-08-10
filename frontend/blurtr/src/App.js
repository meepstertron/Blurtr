
import './App.css';

function App() {
  return (
    <div class="main">
      <div class="sidebar-container">
        <div class="sidebar-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
          <p class="sidebar-text">Feed</p>
        </div>
      </div>
      <div class="feed-container">
        <div class="post-container"></div>
      </div>
    </div>
  );
}

export default App;
