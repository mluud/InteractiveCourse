function SendMsg({ onClick }){
    
    return (
      <div>
        <p>your message has been sent!</p>
        <button className='MsgSent' onClick={onClick}>
        BACK TO START!!
        </button>
      </div>
    )
  }
  
  export default SendMsg