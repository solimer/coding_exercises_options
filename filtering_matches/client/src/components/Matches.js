import React, {
  Component
} from 'react';
import axios from 'axios';

class Matches extends Component {
  state = {
    matches: null,
  };

  async componentDidMount() {
    const {
      data
    } = await axios.get('/api/matches');
    this.setState({
      matches: result
    });
  }

  render() {
    return ( <div> MATCHES </div>);
    }
  }

  export default Matches;