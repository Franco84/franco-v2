import React, { Component } from 'react'
import { Button, Container, Divider, Feed, Grid, Header, Icon, Image, List, Menu, Segment, Visibility } from 'semantic-ui-react'
import {Parallax} from 'react-parallax'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import FeedGen from './FeedGen'
import Tabs from './Tabs'
import background from '../../assets/2.jpg'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {visible: false, fade: 'hidden'}
  }

  FixedMenu() {
    return (
      <Menu fixed='top' borderless size='small'>
        <Container>
          <Menu.Item as='a'><Link activeClass="active" className="test1" to="about" spy={true} smooth={true} duration={500} >About</Link></Menu.Item>
          <Menu.Item as='a'><Link activeClass="active" className="test1" to="projects" spy={true} smooth={true} duration={500} >Projects</Link></Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <a href='/resume.pdf' target="_blank"><Icon name='file text outline' link={true} size='big' /></a>
            </Menu.Item>
            <Menu.Item>
              <a href='mailto:franco84@gmail.com' target="_blank"><Icon name='mail square' link={true} size='big' /></a>
            </Menu.Item>
            <Menu.Item>
              <a href='http://www.linkedin.com/in/franco84' target="_blank"><Icon name='linkedin square' link={true} size='big' /></a>
            </Menu.Item>
            <Menu.Item>
              <a href='http://www.github.com/franco84' target="_blank"><Icon name='github alternate' link={true} size='big' /></a>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }

  hideFixedMenu() {
    this.setState({ visible: false, fade: this.state.fade, projects: this.state.projects })
  }
  showFixedMenu() {
    this.setState({ visible: true, fade: this.state.fade, projects: this.state.projects})
  }
  showAbout() {
    this.setState({visible: this.state.visible, fade: 'bounce-in-left', projects: this.state.projects})
  }
  hideAbout() {
    this.setState({visible: this.state.visible, fade: 'hidden', projects: this.state.projects})
  }
  showProjects() {
    this.setState({visible: this.state.visible, fade: this.state.fade, projects: 'bounce-in-right'})
  }
  hideProjects() {
    this.setState({visible: this.state.visible, fade: this.state.fade, projects: 'hidden'})
  }

  render() {
    const { visible } = this.state

    return (
      <div>
        { visible ? this.FixedMenu() : null }

        <Visibility
          onBottomPassed={this.showFixedMenu.bind(this)}
          onBottomVisible={this.hideFixedMenu.bind(this)}
          once={false}
        >
          <Parallax bgImage={background} strength={400}>
          <Segment
            textAlign='center'
            style={{ minHeight: 800, padding: '1em 0em' }}
            vertical
          >

            <Container>
              <Menu inverted pointing secondary size='small'>
                <Menu.Item as='a'><Link activeClass="active" className="test1" to="about" spy={true} smooth={true} duration={500} >About</Link></Menu.Item>
                <Menu.Item as='a'><Link activeClass="active" className="test1" to="projects" spy={true} smooth={true} duration={500} >Projects</Link></Menu.Item>
                <Menu.Menu position='right'>
                  <Menu.Item>
                    <a href='/resume.pdf' target="_blank"><Icon name='file text outline' link={true} size='big' /></a>
                  </Menu.Item>
                  <Menu.Item>
                    <a href='mailto:franco84@gmail.com' target="_blank"><Icon name='mail square' link={true} size='big' /></a>
                  </Menu.Item>
                  <Menu.Item>
                    <a href='http://www.linkedin.com/in/franco84' target="_blank"><Icon name='linkedin square' link={true} size='big' /></a>
                  </Menu.Item>
                  <Menu.Item>
                    <a href='http://www.github.com/franco84' target="_blank"><Icon name='github alternate' link={true} size='big' /></a>
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
            </Container>

            <Container text>
              <Header
                as='h1'
                content='Franco Cappitta'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
              />
              <Header
                as='h2'
                content='Software Engineer'
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
            </Container>
          </Segment>
        </Parallax>
        </Visibility>

        <Visibility
          onOnScreen={this.showAbout.bind(this)}
          onOffScreen={this.hideAbout.bind(this)}
          once={false}
        >
          <a name="about"></a>
        <Segment style={{ padding: '4em 0em' }} className={this.state.fade} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em', textAlign: 'center' }}>About Me</Header>
                <p style={{ fontSize: '1.33em', textAlign: 'justify' }}>
                  I'm a New York City based software engineer with experience in JavaScript and Ruby. Some of the frameworks and libraries I use include React, Redux, Ruby on Rails, and Bootstrap. Creating things on the web started out as hobby. I'm always trying to improve, and with the way web development moves, there is no shortage of things to learn or practice! In my spare time I love traveling, snowboarding, and trying differend foods.
                </p>
                <br />
                <Header as='h3' style={{ fontSize: '2em', textAlign: 'center' }}>Upcoming Developer Focus</Header>
                <p style={{ fontSize: '1.33em', textAlign: 'justify' }}>
                  As of Dec 2017, I am currently taking a deep dive into the MEAN stack. Right now I am focusing on Node/Express/Mongo, where I can use my React experience to build out some full applications. I will then be creating some projects in Angular and moving onto Vue afterwards.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Header as='h3' style={{ fontSize: '2em', textAlign: 'center' }}>Recent Github Activity</Header>
                <br />
                <FeedGen />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        </Visibility>

        <Visibility
          onOnScreen={this.showProjects.bind(this)}
          onOffScreen={this.hideProjects.bind(this)}
          once={false}
        >
          <a name="projects"></a>
        <Segment className={this.state.projects} style={{ padding: '0em', border: 'none' }} vertical>
          <Grid>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>Projects</Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment className={this.state.projects} style={{ padding: '2em 4em 6em 4em' }} vertical>
            <Tabs />
        </Segment>

        </Visibility>

        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'><a href='mailto:franco84@gmail.com' target="_blank">Contact</a></List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Services' />
                  <List link inverted>
                    <List.Item as='a'>Let's build something together!</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <p>Built with React</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}

export default App
