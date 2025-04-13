function ContactOwner({ onClick }){
    
    return (
      <div>
        <p>HERE ARE OWNER DETAILS</p>
        <button className='Msg' onClick={onClick}>
            send the message by pressing HERE
        </button>
      </div>
    )
  }
  
  export default ContactOwner
