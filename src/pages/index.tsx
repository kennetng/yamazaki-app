import React from 'react'
import { NavBar } from '../components/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from '../components/Home'
import { OrderOnline } from '../components/OrderOnline'

export const notFinished = () => {
  return <h1>notFinished</h1>
}

export const Pages = () => (
    <Router>
        <NavBar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={notFinished} />
            <Route path="/menu" component={notFinished} />
            <Route path="/order-online" component={OrderOnline} />
            <Route path="/contact" component={notFinished} />
        </Switch>
    </Router>
)
