import './ContactOwner.css'

function ContactOwner({ onClick }){
    
    return (
      <div>
        <p id="contactKennel">Contact kennel Carmina Gadelica</p>
        <form id="msgKennel">
          <label for="name">Your name:</label>
          <input id="nameInput" type="text"></input>
          <label for="message">Your message:</label>
          <input id="msgInput"type="text"></input>
        </form>
        <button className='Msg' onClick={onClick}>
            Send message
        </button>
      </div>
    )
  }
  
  export default ContactOwner
