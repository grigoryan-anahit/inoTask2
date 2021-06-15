
import React from 'react';
import { Route} from "react-router-dom";

import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Project from './pages/project';
import Services from './pages/services';
import Team from './pages/team';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Nav from './nav/';

const navbarItems=[
   {
     id:1,
     title:'Home',
     path:'/',
     exact:true
   },
   {
     id:2,
     title:'About',
    path:'/about',
   
  },
  {
    id:3,
    title:'Project',
    path:'/project',
   
  },
  {id:4,
    title:'Services',
    path:'/services',
   
  },
  { id:5,
    title:'Team',
    path:'/team'
  },
  {id:6,
    title:'Blog',
    path:'/blog'
  },
  {id:7,
    title:'Contact',
    path:'/contact'
  }
];
class  App extends React.Component{
  state={
    menuIsOpen:false
  }
  toggleMenuOpen=()=>{
    this.setState({menuIsOpen:!this.state.menuIsOpen})
  }
  render(){
   
    return (
      
      <div className="App">
        <Nav navbarItems={navbarItems} menuIsOpen={this.state.menuIsOpen} toggleMenu={this.toggleMenuOpen}/>
      
       <Route path='/' component={Home} exact={true}  />
        <Route path='/about' component={About} />
        <Route path='/project' component={Project} />
        <Route path='/services' component={Services} />
        <Route path='/team' component={Team} />
        <Route path='/blog' component={Blog} />
        <Route path='/contact' component={Contact} />
   
      </div>
    );
  }
}

export default App;
