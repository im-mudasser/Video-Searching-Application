import React from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import axios from "axios";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  // constructor(props) {
  //   super(props);
  //   const KEY = "AIzaSyB_fE-s3ov_5x79SZINhvd8wfwNaz-S0s8";
  // }

  onTermSubmit = async (term) => {
    const KEY = "AIzaSyB_fE-s3ov_5x79SZINhvd8wfwNaz-S0s8";
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          q: term,
          part: "snippet",
          type: "video",
          maxResults: 5,
          key: KEY,
        },
      }
    );

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  componentDidMount() {
    this.onTermSubmit("welcome to youtube");
  }
  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                sendVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
