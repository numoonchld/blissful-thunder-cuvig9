import "./styles.css";

export default function App() {
  const submitAcknowledgement = () => {
    window.alert("You win!");
  };

  return (
    <div>
      <h1>Why do you want to live?</h1>
      <form onSubmit={() => submitAcknowledgement()}>
        <textarea> (upto 10 pages allowed) </textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
