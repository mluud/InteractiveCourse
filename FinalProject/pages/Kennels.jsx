import KennelCard from "../components/KennelCard";

function Kennels(){
   
    return (
      <div>
      <h1>List of Kennels</h1>
      <KennelCard />
      <div className="viewMoreKennels">
        <p>Additional details on Estonian kennels</p>
        <a href="https://kennelliit.ee/meist/kennelid/">HERE</a>
      </div>
      </div>
    );
}


export default Kennels