import React, { Component } from 'react'
import { Grid, Header, Image, Menu, Popup, Segment, Visibility } from 'semantic-ui-react'
import puddlr from '../../assets/Puddlr.png'
import bb from '../../assets/bb.png'
import bow from '../../assets/bow.png'
import funcss from '../../assets/funcss.png'
import fc1 from '../../assets/fc1.png'
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
    this.state = { activeItem: 'FrancoCappitta V2', key: 0 }
  }

  handleItemClick(key, e, {name }) {
    this.setState({ activeItem: name, key: key })
  }

  content(key) {
    const projects = [
      ['FrancoCappitta V2', fc2, 'http://www.francocappitta.com', 'An update to my portfolio site, www.francocappitta.com', [[html5, 'HTML5'], [css3, 'CSS3'], [webpack, 'Webpack'], [babel2, 'Babel'], [react, 'React'], [semantic, 'Semantic UI React'], [git, 'Git'], [aws, 'Amazon Web Services']]],
      ['Fun With CSS3', funcss, 'http://css.francocappitta.com', 'A project to practice creating CSS Animations.', [[html5, 'HTML5'], [css3, 'CSS3'], [webpack, 'Webpack'], [babel2, 'Babel'], [react, 'React'], [semantic, 'Semantic UI React'], [git, 'Git'], [aws, 'Amazon Web Services']]],
      ['Puddlr', puddlr, 'http://www.puddlr.co', 'A demo displaying an easy way for employees to find carpools for their commute to work.', [[html5, 'HTML5'],[css3, 'CSS3'],[jquery, 'jQuery'],[materialize, 'Materialize'],[ruby, 'Ruby'], [rails, 'Ruby on Rails'],[rspec, 'RSpec'],[postgres, 'PostgreSQL'],[jwt, 'JSON Web Token'],[heroku, 'Heroku']]],
      ['FrancoCappitta V1', fc1, 'http://v1.francocappitta.com', 'My portfolio site!', [[html5, 'HTML5'],[css3, 'CSS3'],[javascript, 'JavaScript'],[jquery, 'jQuery'],[bootstrap, 'Bootstrap'], [aws, 'AWS']]],
      ['Budget Butler', bb, 'http://www.budgetbutler.co', 'A platform to budget money and analyze spending habits with real-time chart generation.', [[html5, 'HTML5'], [css3, 'CSS3'], [materialize, 'Materialize'], [react, 'React'], [redux, 'Redux'], [rails, 'Ruby on Rails'],[jwt, 'JSON Web Token'],[heroku, 'Heroku']]],
      ['Battle of Wits', bow, 'http://www.battleofwits.co','An online trivia game where friends can compete.',[[html5, 'HTML5'],[css3, 'CSS3'],[jquery, 'jQuery'],[javascript, 'JavaScript'],[materialize, 'Materialize'],[heroku, 'Heroku']]]
    ]

    function icons(arr) {
      return arr.map((icon, index) => {
        return (
        <Popup
          key={index}
          trigger={<Image style={{padding: '1em 0em'}} centered={true} src={icon[0]} as='a' size='mini' />}
          content={icon[1]}
          position='top center'
        />
      )
      })
    }

      return (
        <Segment style={{border: 'none', boxShadow: 'none'}}>
          <Header as='h3' style={{ fontSize: '1.5em', textAlign: 'center'}}>{projects[key][0]}</Header>
          <Grid>
            <Grid.Row>
              <Image
                style={{padding: '4em 0em'}}
                rounded={true}
                centered={true}
                src={projects[key][1]}
                as='a'
                size='medium'
                href={projects[key][2]}
                target='_blank'
              />
            </Grid.Row>
            <Grid.Row centered>
              <Header as='h3' style={{ fontSize: '1em', textAlign: 'center', paddingBottom: '1em'}}>{projects[key][3]}</Header>
            </Grid.Row>
            <Grid.Row>
                {icons(projects[key][4])}
            </Grid.Row>
          </Grid>
        </Segment>
      )
    }

  menu(activeItem) {
    const info = [ 'FrancoCappitta V2', 'Fun With CSS3', 'Puddlr', 'FrancoCappitta V1', 'Budget Butler', 'Battle of Wits']
      return info.map( (item, index) => {
        return (
          <Menu.Item key={index} name={item} active={this.state.activeItem === item} onClick={this.handleItemClick.bind(this, index)} />
        )
      })
    }


  render() {
    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            {this.menu()}
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
            {this.content(this.state.key)}
        </Grid.Column>
      </Grid>
    )
  }
}

export default Tabs
