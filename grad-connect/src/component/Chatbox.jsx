export default function Chatbox({ user, onClose }) {
  return (
    <div className="chat">

      <header className="chat-header">
        <h3>{user.name}</h3>
        <button onClick={onClose}>X</button>
      </header>

      <main className="chat-body">
        <p>Start conversation...</p>
      </main>

      <footer className="chat-input">
        <input type="text" placeholder="Type a message..." />
        <button>Send</button>
      </footer>

    </div>
  );
}