import React, {Component} from 'react'
import { Grid, Header} from 'semantic-ui-react'
import FeedGen from './FeedGen'

class About extends Component {
  render() {
    return (
    <Grid container stackable verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as='h3' style={{ fontSize: '2em', textAlign: 'center' }}>About Me</Header>
          <p style={{ fontSize: '1.33em', textAlign: 'justify' }}>
            Creating things on the web started out as hobby, but quickly turned into my passion. As a New York based software engineer,  I'm always trying to hone my skills. With the way web development moves, there is no shortage of things to learn or practice! In my spare time I love traveling, snowboarding, and trying different foods.
          </p>
          <br />
          <Header as='h3' style={{ fontSize: '2em', textAlign: 'center' }}>Upcoming Developer Focus</Header>
          <p style={{ fontSize: '1.33em', textAlign: 'justify' }}>
            As of Dec 2017, I am currently taking a deep dive into the MEAN stack. Right now I am focusing on Node/Express/Mongo, where I can use my React experience to build out some full applications. I will then be creating some projects in Angular and moving onto Vue afterwards.
          </p>
        </Grid.Column>
        <Grid.Column className='fix-align' floated='right' width={6}>
          <Header as='h3' style={{ fontSize: '2em', textAlign: 'center' }}>Recent Github Activity</Header>
          <br />
          <FeedGen />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    )
  }
}

export default About
