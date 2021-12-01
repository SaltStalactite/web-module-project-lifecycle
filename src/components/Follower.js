import React from 'react'

class Follower extends React.Component {

    render() {
        return (
            <div className='followerCards'>
                <img className='followerImg' src={this.props.follower.avatar_url} alt='follower avatar' />
                <p>{this.props.follower.login}</p>
            </div>
        )
    }
}

export default Follower