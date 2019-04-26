import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../api/youtube';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount(){
        this.getUserInput("Sports");
    }

    getUserInput = async(input) => {
        const response = await youtube.get('/search', {
            params: {
                q: input
            }
        });

        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.getUserInput}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="nine wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="seven wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;