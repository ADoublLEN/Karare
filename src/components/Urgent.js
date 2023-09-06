import "./Urgent.css";
import UrgentData from "./UrgentData";

function Urgent() {
  return (
    <div className="urgent">
      <h1>WANTED IMMEDIATELY!</h1>
      <p>Get Employed Right Now!</p>
      <div className="tripcard">
        <UrgentData
          image="https://plus.unsplash.com/premium_photo-1673467010747-eaf170dd7a68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          heading="Artist"
          text="BIKASOH Inc. is hiring New-Grad Artist!"
        />
        <UrgentData
          image="https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          heading="Waiter"
          text="BIKIIK Restaurant at West Lafayette is hiring Full-Time Waiters"
        />
        <UrgentData
          image="https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80"
          heading="photographer"
          text="SONNNI is hiring Part-Time Photographer!"
        />
      </div>
    </div>
  );
}

export default Urgent;
