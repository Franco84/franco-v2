import React, { Component } from 'react'
import { Button, Grid, Header, Icon, Image, Menu, Modal, Popup, Reveal, Segment, Visibility } from 'semantic-ui-react'
import puddlr from '../../assets/puddlr.jpg'
import bb from '../../assets/bb.jpg'
import bow from '../../assets/bow.jpg'
import funcss from '../../assets/cssfun.png'
import fc1 from '../../assets/fc1.jpg'
import fc2 from '../../assets/v2.png'
import aws from '../../assets/icons/aws.svg'
import babel1 from '../../assets/icons/babel1.svg'
import babel2 from '../../assets/icons/babel2.png'
import bootstrap from '../../assets/icons/bootstrap.svg'
import css3 from '../../assets/icons/css3.svg'
import git from '../../assets/icons/git.svg'
import heroku from '../../assets/icons/heroku.svg'
import html5 from '../../assets/icons/html5.svg'
import javascript from '../../assets/icons/javascript.svg'
import jquery from '../../assets/icons/jquery.svg'
import jwt from '../../assets/icons/jwt.svg'
import materialize from '../../assets/icons/materialize.png'
import postgres from '../../assets/icons/postgres.svg'
import rails from '../../assets/icons/rails.svg'
import react from '../../assets/icons/react.svg'
import redux from '../../assets/icons/redux.svg'
import rspec from '../../assets/icons/rspec.png'
import ruby from '../../assets/icons/ruby.svg'
import semantic from '../../assets/icons/semantic.png'
import webpack from '../../assets/icons/webpack.svg'


class Tabs extends Component {
  constructor(props) {
    super(props)
    this.state = { modalOpen: false }
  }

  handleOpen(index) {
    this.setState({ modalOpen: true, index: index })
  }

  handleClose() {
    this.setState({ modalOpen: false })
  }

  content() {
    const projects = [
      ['FrancoCappitta V2', fc2, 'http://www.francocappitta.com', 'An update to my portfolio site, www.francocappitta.com', [[html5, 'HTML5'], [css3, 'CSS3'], [webpack, 'Webpack'], [babel2, 'Babel'], [react, 'React'], [semantic, 'Semantic UI React'], [git, 'Git'], [aws, 'Amazon Web Services']], 'https://github.com/Franco84/franco-v2'],
      ['Fun With CSS3', funcss, 'http://css.francocappitta.com', 'A project to practice creating CSS Animations.', [[html5, 'HTML5'], [css3, 'CSS3'], [webpack, 'Webpack'], [babel2, 'Babel'], [react, 'React'], [semantic, 'Semantic UI React'], [git, 'Git'], [aws, 'Amazon Web Services']], 'https://github.com/Franco84/fun_with_css3'],
      ['Puddlr', puddlr, 'http://www.puddlr.co', 'A demo displaying an easy way for employees to find carpools for their commute to work.', [[html5, 'HTML5'],[css3, 'CSS3'],[jquery, 'jQuery'],[materialize, 'Materialize'],[ruby, 'Ruby'], [rails, 'Ruby on Rails'],[rspec, 'RSpec'],[postgres, 'PostgreSQL'],[jwt, 'JSON Web Token'],[heroku, 'Heroku']], 'https://github.com/Franco84/Puddlr'],
      ['FrancoCappitta V1', fc1, 'http://v1.francocappitta.com', 'My portfolio site!', [[html5, 'HTML5'],[css3, 'CSS3'],[javascript, 'JavaScript'],[jquery, 'jQuery'],[bootstrap, 'Bootstrap'], [aws, 'AWS']],'https://github.com/Franco84/franco'],
      ['Budget Butler', bb, 'http://www.budgetbutler.co', 'A platform to budget money and analyze spending habits with real-time chart generation.', [[html5, 'HTML5'], [css3, 'CSS3'], [materialize, 'Materialize'], [react, 'React'], [redux, 'Redux'], [rails, 'Ruby on Rails'],[jwt, 'JSON Web Token'],[heroku, 'Heroku']], 'https://github.com/Franco84/BudgetButler'],
      ['Battle of Wits', bow, 'http://www.battleofwits.co','An online trivia game where friends can compete.',[[html5, 'HTML5'],[css3, 'CSS3'],[jquery, 'jQuery'],[javascript, 'JavaScript'],[rails, 'Ruby on Rails'],[materialize, 'Materialize'],[heroku, 'Heroku']], 'https://github.com/Franco84/BattleOfWits']
    ]

    function icons(arr) {
      return arr.map((icon, index) => {
        return (
        <Popup
          key={index}
          inline='true'
          trigger={<Image style={{padding: '1em 0em'}} centered={true} src={icon[0]} as='a' size='mini' />}
          content={icon[1]}
          position='top center'
        />
      )
      })
    }

      return projects.map((project, index) => {
        const directions = ['move', 'move up', 'move right', 'move', 'move down', 'move right']
          return (
            <Grid.Column key={index}>
                  <Reveal animated={directions[index]}>
                    <Reveal.Content style={{padding: '4em 0em'}} visible>
                      <Image centered={true} verticalAlign='middle' rounded={true} target='_blank'
                        src={project[1]}
                      />
                    </Reveal.Content>
                    <Reveal.Content style={{textAlign: 'center'}} hidden>
                      <Modal
                        trigger={
                          <Header onClick={this.handleOpen.bind(this, index)} as='h3' textAlign='center' style={{ fontSize: '1.5em', paddingTop: 'calc(50% - 0.75em)', cursor: 'pointer'}}>{project[0]}</Header>
                        }
                        open={this.state.modalOpen && (this.state.index === index)}
                        onClose={this.handleClose.bind(this)}
                        >
                          <Header as='h3' textAlign='center' style={{fontSize: '1.5em'}}>{project[0]}</Header>
                        <Modal.Content>
                          <Grid>
                            <Grid.Row>
                              <Image style={{padding: '1em 0em'}} size='medium'  centered={true} verticalAlign='middle' rounded={true} target='_blank'
                                src={project[1]}
                                href={project[2]}
                              />
                            </Grid.Row>
                            <Grid.Row centered>
                              <p style={{fontSize: '1.33em'}}>{project[3]}</p>
                            </Grid.Row>
                            <Grid.Row centered>
                              <Button.Group>
                                <a href={project[2]} target='_blank'><Button color='grey'><Icon name='globe'/> See it live</Button></a>
                                <Button.Or />
                                <a href={project[5]} target='_blank'><Button color='grey'>See the code  <Icon name='github'/></Button></a>
                              </Button.Group>
                            </Grid.Row>
                            <Grid.Row centered>
                              <p style={{fontSize: '1.33em'}}>Created with:</p>
                            </Grid.Row>
                            <Grid.Row>
                                {icons(project[4])}
                            </Grid.Row>
                          </Grid>
                        </Modal.Content>
                        <Modal.Actions style={{textAlign: 'center'}}>
                          <Button color='green' onClick={this.handleClose.bind(this)} inverted>
                            Close
                          </Button>
                        </Modal.Actions>
                      </Modal>
                    </Reveal.Content>
                  </Reveal>
            </Grid.Column>
          )
          })
    }

  render() {
    return (
      <Grid columns={3} container stackable verticalAlign='middle'>
        <Grid.Row>
            {this.content()}
        </Grid.Row>
      </Grid>
    )
  }
}

export default Tabs
