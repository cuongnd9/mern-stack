import React from 'react';
import { 
  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input
} from 'reactstrap';

class CreateCat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.save = this.save.bind(this);
  }

  componentWillMount() {
    this.setState({
      modal: this.props.modal
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      modal: nextProps.modal
    });
  }

  toggle() {
    this.props.toggleModal(!this.state.modal);
  }

  save() {
    this.props.toggleModal(!this.state.modal);
  }

  render() {
      const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
      return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader className='text-primary' toggle={this.toggle} close={closeBtn}>New Cat</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" placeholder="Enter cat name..." />
              </FormGroup>
              <FormGroup>
                <Label for="color">Color</Label>
                <Input type="text" name="color" id="color" placeholder="Enter cat color..." />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Image</Label>
                <Input type="text" name="color" id="color" placeholder="Enter cat image..." />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.save}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CreateCat;