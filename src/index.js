import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Vuyisanani" 
                            timeAgo="Today at 3:17PM" 
                            avatar={faker.image.image()} 
                            blogPost="I like being more technical, I speak technical Jargon"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Robert" 
                            timeAgo="Yesterday at 5:00PM" 
                            avatar={faker.image.image()} 
                            blogPost="I write code with javaScript"
                />
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail author="Boniswa" 
                           timeAgo="Today at 8:19PM" 
                           avatar={faker.image.image()} 
                           blogPost="I love writting functional reusable components"
            />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'))