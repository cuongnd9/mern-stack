import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import swal from '@sweetalert/with-react';
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
			.catch(() => 
				swal("Oops!", "Seems like we couldn't fetch the cats", "error")
			); 
	}

	handleClick() {
		this.setState({
			modal: true
		});
	}

	handleToggleModal(value) {
		this.setState({
			modal: value
		});
	}

	handleCreateCat(cat) {
		const { name, color, image } = cat;
		axios.post('http://localhost:8080/api/cats', {
			name, color, image
		})
			.then(() => {
				swal("Good job!", "The new cat is created!", "success");
				const { cats } = this.state;
				this.setState({
					cats: [...cats, {...cat}]
				});
			})
			.catch(() => 
				swal("Oops!", "Seems like we couldn't create the new cat", "error")
			);
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
					modal 
					? <CreateCat 
							modal={modal} 
							toggleModal={this.handleToggleModal.bind(this)}
							createCat={this.handleCreateCat.bind(this)}
						/> 
					: null
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
	),
	modal: PropTypes.bool
}

export default Cats;