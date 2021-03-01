
import {useParams} from 'react-router-dom';

const Topic = (props) => {
    
    let { topicId }= useParams();

    return <h2>Requested topicId: {topicId}</h2>
}

export default Topic;