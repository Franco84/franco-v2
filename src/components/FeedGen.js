import React, {Component} from 'react'
import {Feed} from 'semantic-ui-react'

class FeedGen extends Component {
  constructor(props) {
    super(props)
    this.state = {items: ''}
    this.createFeed = this.createFeed.bind(this)
  }

  componentWillMount() {
    fetch('https://api.github.com/users/franco84/events?per_page=6')
    .then(response => response.json())
    .then(items => {
      this.setState({ items });
    })
  }



  createFeed() {
    if (this.state.items !== '') {
        return this.state.items.map( (item, index) => {
          let currDate = new Date(Date.parse(item.created_at)).toLocaleString()
          return (
          <Feed key={index}>
            <Feed.Event>
              <Feed.Label>
                <img src={item.actor.avatar_url} />
              </Feed.Label>
              <Feed.Content>
                <Feed.Summary>
                  <Feed.User><a style={{textDecortion: 'none', color: 'black'}} href="http://www.github.com/franco84" target="_blank">{item.actor.login}</a></Feed.User><a href={item.repo.url} target="_blank"> {item.type === 'PushEvent' ? 'updated' : 'created'} {item.repo.name} </a>
                  <Feed.Date>{currDate}</Feed.Date>
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        )
        })
    }
  }

  render() {
    return(
      <div>
        {this.createFeed()}
      </div>
    )
  }

}

export default FeedGen
