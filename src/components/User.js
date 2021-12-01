import React from 'react'

class User extends React.Component {



    render() {
        return (
            <div>
                <div>
                    <h2>{this.props.user.login}</h2>
                    <img id='userImg' src={this.props.user.avatar_url} alt='user avatar' />
                    <p>{this.props.user.name}</p>
                    <p>Github: {this.props.user.html_url}</p>
                    <p>Repos: {this.props.user.public_repos}</p>
                    <p>followers: {this.props.user.followers}</p>
                    <p>following: {this.props.user.following}</p>
                </div>
            </div>
        )
    }
}

export default User