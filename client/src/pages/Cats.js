import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { 
	Container, 
	Row
} from 'reactstrap';

import Cat from '../components/Cat';

class Cats extends Component {
	constructor(props) {
    super(props);
    this.state = {
      cats: []
    }
  }

  componentDidMount() {
		axios.get('http://localhost:8080/api/cats')
			.then(res => this.setState({
				cats: res.data
			}))
			.catch(err => console.error(err)); 

	}
	
	render() {
		const { cats } = this.state;
		return (
			<Container>
				<h3 className='text-danger my-3'>Cats</h3>
				<Row>
					{
						cats.map((cat, index) => 
							<Cat key={index}>{cat}</Cat>
						)
					}
				</Row>
			</Container>
		);
	}
}

Cats.propTypes = {
  cats: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
      image: PropTypes.string
    })
  )
}

export default Cats;