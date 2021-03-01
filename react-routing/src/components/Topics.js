
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import Topic from './Topic';

const Topics = () => {

    let { path, url } = useRouteMatch();

    return (
        <div>
            <div>
                <ul>
                    <li>
                        <Link to={`${url}/topic1`}>Topic 1</Link>
                    </li>
                    <li>
                        <Link to={`${url}/topic2`}>Topic 2</Link>
                    </li>
                </ul>
            </div>

            <Switch>
                <Route exact path={path}>
                    <h1>Please select a topic!</h1>
                </Route>

                <Route path={`${path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>

        </div>
    );
}

export default Topics;