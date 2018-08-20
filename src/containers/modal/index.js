import React, { Component } from 'react';
import CustomButton from '../../components/customButton';
import CustomModal from '../../components/modal';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <h2>
      Modal
        </h2>
        <p>This page contains Modal Rakyat standardized controls for standard
       Modal.
        </p>
        <p>Click button below to try modal behavior.</p>
        <CustomButton size="small" type="primary" onClick={this.toggle}>
          Open Modal
        </CustomButton>
        <CustomModal
          isModalOpen={isOpen}
          toggleModal={this.toggle}
          titleModal="My Modal"
          body="Lorem ipsum dolor sit amet,
          consecstetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua."
          labelOnClose="Tutup"
          labelOnSave="Simpan"
          onClose={this.toggle}
          onSave={this.toggle}
        />
      </div>
    );
  }
}
