import React from 'react';
import axios from 'axios';
import Header from './Header';
import ContestPreview from './contestPreview';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests!!',
    contests: this.props.initialContests
  };
  componentDidMount() {
    //ajax
    axios.get('/api/contests')
      .then(resp => {
        this.setState({
          contests: resp.data.contests
        });
      })
      .catch(console.error);

  }
  componentWillUnMount() {
    //clean timers, listeners
  }

  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map(contest =>
            <ContestPreview key={contest.id} {...contest} />
          )}

        </div>
      </div>
    );
  }
};

export default App;
