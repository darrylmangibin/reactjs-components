import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetails';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return(
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail 
            author="Sam"
            timeAgo="Today at 4:445PM"
            content="Nice blog post!"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail 
            author="Alex"
            timeAgo="Today at 2:23PM"
            content = "I like the subject"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Jane"
            timeAgo="Yesterday at 8:12AM"
            content = "I like the wrinting"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
      </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));