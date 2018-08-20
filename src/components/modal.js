import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CustomButton from './customButton';

const CustomModal = ({
  titleModal, body, labelOnClose, labelOnSave, isModalOpen, toggleModal, onClose, onSave
}) => (
  <div>
    <Modal isOpen={isModalOpen} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>{titleModal}</ModalHeader>
      <ModalBody>{body}</ModalBody>
      <ModalFooter>
        <CustomButton size="small" type="outline" onClick={onClose}>
          {labelOnClose}
        </CustomButton>{' '}
        <CustomButton size="small" type="primary" onClick={onSave}>
          {labelOnSave}
        </CustomButton>
      </ModalFooter>
    </Modal>
  </div>
);

CustomModal.defaultProps = {
  titleModal: '',
  body: '',
  labelOnClose: 'Tutup',
  labelOnSave: 'Simpan',
  isModalOpen: false,
  toggleModal: () => { },
  onClose: () => { },
  onSave: () => { }
};

CustomModal.propTypes = {
  titleModal: PropTypes.string,
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  labelOnClose: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  labelOnSave: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  isModalOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
  onClose: PropTypes.func,
  onSave: PropTypes.func
};

export default CustomModal;
