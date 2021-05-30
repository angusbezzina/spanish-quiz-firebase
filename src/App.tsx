import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './components/Home';
import HighScores from './components/HighScores';
import Game from './components/Game';
import { AppStyles } from './styles/AppStyles';


function App() {
  return (
    <Router>
      <AppStyles>
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/high-scores" component={HighScores} />
      </AppStyles>
    </Router>
  );
}

export default App;
