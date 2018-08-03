import React from "react";
import Person from './Person';
import { Link, Route, Switch} from 'react-router-dom';

class Card extends React.Component {
    render() {
        return (
          <div>
          <section>
            <h1 className="userName"><Link to = '/person'>{this.props.name}</Link></h1>
          </section>
          <main>
            <Switch>
              <Route path = '/person' component = {Person} />
              </Switch>
          </main>
          </div>
        );
      }
    }


export default Card;