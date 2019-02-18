import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Container, Row, Button } from 'reactstrap';

import Cat from '../components/Cat';
import CreateCat from '../components/CreateCat';

class Cats extends Component {
	constructor(props) {
    super(props);
    this.state = {
			cats: [],
			modal: false
    }
  }

  componentDidMount() {
		axios.get('http://localhost:8080/api/cats')
			.then(res => this.setState({
				cats: res.data
			}))
			.catch(err => console.error(err)); 
	}

	handleClick() {
		// axios.post('http://localhost:8080/api/cats', {
		// 	name: '4chan',
		// 	color: 'grey',
		// 	image: 'https://www.humanesociety.org/sites/default/files/2018/06/cat-217679.jpg'
		// })
		this.setState({
			modal: true
		});
	}

	handleToggleModal(value) {
		this.setState({
			modal: value
		});
	}
	
	render() {
		const { cats, modal } = this.state;
		return (
			<Container>
				<h3 className='text-danger my-3'>Cats</h3>
				<Button color='success' className='mb-2' onClick={this.handleClick.bind(this)} >
					New Cat
				</Button>
				<Row>
					{
						cats.map((cat, index) => 
							<Cat key={index}>{cat}</Cat>
						)
					}
				</Row>
				{
					modal ? <CreateCat modal={modal} toggleModal={this.handleToggleModal.bind(this)}/> : null
				}
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