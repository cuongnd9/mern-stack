import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import swal from '@sweetalert/with-react';
import { Container, Row, Button } from 'reactstrap';

import Cat from '../components/Cat';
import CatCreate from '../components/CatCreate';
import CatEdit from '../components/CatEdit';

class Cats extends Component {
	constructor(props) {
    super(props);
    this.state = {
			cats: [],
			catEdit: {},
			createModal: false,
			editModal: false
    }
  }

  componentDidMount() {
		document.title = 'Cats | Simple MERN Stack';

		axios.get('http://localhost:8080/api/cats')
			.then(res => this.setState({
				cats: res.data
			}))
			.catch(() => 
				swal("Oops!", "Seems like we couldn't fetch the cats", "error")
			); 
	}

	handleShowCreateModal() {
		this.setState({
			createModal: true
		});
	}

	handleShowEditModal(cat) {
		this.setState({
			catEdit: {...cat},
			editModal: true
		});
	}

	handleToggleCreateModal(value) {
		this.setState({
			createModal: value
		});
	}

	handleToggleEditModal(value) {
		this.setState({
			editModal: value
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

	handleEditCat(cat) {
		const { _id, name, color, image } = cat;
		axios.put(`http://localhost:8080/api/cats/${_id}`, {
			name, color, image
		})
			.then(() => {
				swal("Good job!", "The new cat is updated!", "success");
				const { cats } = this.state;
				const index = this.findIndex(cats, cat);
				this.setState({
					cats: [...cats.slice(0, index), {...cat}, ...cats.slice(index)]
				});
			})
			.catch(() => 
				swal("Oops!", "Seems like we couldn't update this cat", "error")
			);
	}

	findIndex(cats, cat) {
		let result = -1;
		cats.forEach((item, index) => {
			if (item._id === cat._id) {
				result = index;
			}
		});
		return result;
	}
	
	render() {
		const { cats, catEdit, createModal, editModal } = this.state;
		return (
			<Container>
				<h3 className='text-danger my-3'>Cats</h3>
				<Button color='success' className='mb-2' onClick={this.handleShowCreateModal.bind(this)} >
					New Cat
				</Button>
				<Row>
					{
						cats.map((cat, index) => 
							<Cat key={index} editCat={this.handleShowEditModal.bind(this)}>
								{cat}
							</Cat>
						)
					}
				</Row>
				{
					createModal
					? <CatCreate
							modal={createModal} 
							toggleModal={this.handleToggleCreateModal.bind(this)}
							createCat={this.handleCreateCat.bind(this)}
						/> 
					: null
				}
				{
					editModal
					? <CatEdit
							modal={editModal}
							catEdit={catEdit}
							toggleModal={this.handleToggleEditModal.bind(this)}
							editCat={this.handleEditCat.bind(this)}
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
	catEdit: PropTypes.shape({
		name: PropTypes.string,
		color: PropTypes.string,
		image: PropTypes.string
	}),
	createModal: PropTypes.bool,
	editModal: PropTypes.bool
}

export default Cats;