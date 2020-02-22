import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Content from './component/Content';

function App() {
  return (
	<BrowserRouter>
		<div className="App">
			<Navbar />
			<Route exact path='/' component={Home} />
			<Route path='/about' component={About} />
			<Route path='/contact' component={Contact} />
			<Route path='/:content_id' component={Content} />
		</div>
	</BrowserRouter>
  );
}

export default App;
