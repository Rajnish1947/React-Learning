const WelcomeMessage = ({ onGetPostsClick }) => {
    return (
      <center>
        <h1 className="Welcome-message">There are no posts</h1>
        <button type="button" className="btn btn-primary fetch" onClick={onGetPostsClick}>
          Get Fetch from Server
        </button>
      </center>
    );
  };
  
  export default WelcomeMessage;
  
