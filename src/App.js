import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './App.css'
import Menu from './components/Menu'
import Gifs from './components/Gifs'
import VRScene from './components/VRScene'
import Project from './components/Project'
import palma from './images/palma.png'

const routes = ["mundo",
                "planoz",
                "topologias",
                "moto",
                "adidas",
                "sonar",
                "uber",
                "nike",
                "coca",
                "cuerpos",
                "redbull",
                "redbullP",
                "warm",
                "samsung",
                "freaky",
              ]

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      lang: 'es',
    }
    this.handleLang = this.handleLang.bind(this)
  }

  handleLang(newLang){
    this.setState(state => {
      if (state.lang === newLang) {
        return null;
      }
      return {
        lang: newLang
      }
    })
  }

  render() {
    const { lang } = this.state
    return (
      <Router>
        <div className="contenedor">
          <Menu changeLang={this.handleLang} lang={lang}/>
          <div className="contenido">
            <Route render={({ location }) =>
              <TransitionGroup exit={false}>
                <CSSTransition key={location.pathname.split('/')[1]} timeout={250} classNames="fade">
                  <Switch location={location}>
                      <Route exact path="/" render={() => <Gifs height={'1750px'} lang={lang} param="home"/>} />
                      <Route path="/motion" render={() => <Gifs height={'600px'}  lang={lang} param="motion"/>} />
                      <Route path="/space" render={() => <Gifs height={'600px'} lang={lang} param="space"/>}/>
                      <Route path="/360" render={() => <Gifs height={'1200px'} lang={lang} param="360"/>}/>
                      <Route path="/about" component={About}/>
                      <Route path="/reel" component={Reel}/>
                      {routes.map((item) =>
                        <Route key={item} path={`/${item}`} render={() => <Project param={item} lang={lang}/>}/>
                      )}
                      <Route render={() => <h1>Page not found</h1>} />
                  </Switch>
                 </CSSTransition>
               </TransitionGroup>
            }/>
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

const About = () =>
  <div className="about-box">
    About component
    {/* <VRScene img={city} /> */}
  </div>

const Reel = () =>
  <div>
    Reel component
  </div>

const Footer = () =>
  <div className="footer">
    <img src={palma} alt="footer" width="62"/>
  </div>

export default App;
