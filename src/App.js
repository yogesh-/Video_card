import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Video Card</h1>
      <div className="video-container">
        <img
          className="thumbnail"
          src="http://unsplash.it/250/150?gravity=center"
          alt="kheech"
        ></img>
        <p className="duration">1:01:18</p>
        <div className="video-text">
          <img src="http://unsplash.it/36/36?gravity=center" alt="icon"></img>
          <div className="channel-details">
            <p>Fastest way to load JavaScript</p>

            <div className="channel-stats">
              <p>Channel Name </p>
              <div className="date-views">
                <p>1000 views • 1 week ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
