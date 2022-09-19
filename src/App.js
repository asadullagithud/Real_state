import {Route, Routes, Navigate} from 'react-router-dom'
import {Component} from 'react'
import './App.css';
import Header from './components/Header'
import ContactUs from './components/ContactUs'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'

class App extends Component {
  render() {
    return(
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contactUs' element={<ContactUs/>} />
          <Route path='/bad-path' element={<NotFound/>} />
          <Route path="*" element={<Navigate to ="/bad-path" />}/>
        </Routes>
    </div>
    )
  }
}

export default App;
