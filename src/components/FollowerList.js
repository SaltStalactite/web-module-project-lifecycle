import React from 'react'
import Follower from './Follower'

class FollowerList extends React.Component {

    render() {
        return (
            <>
                <h3>Followers</h3>
                <div className="followerCardDiv">
                    {this.props.followers.map(follower => (
                        <Follower key={follower.id} follower={follower} />
                    ))}
                </div>
            </>
        )
    }

}

export default FollowerList