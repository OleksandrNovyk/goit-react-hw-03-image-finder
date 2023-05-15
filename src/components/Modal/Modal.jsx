import { Component } from 'react';
import propTypes from 'prop-types';

import {
  ModalOverlay,
  ModalWindow,
  ModalPic,
  ModalDescr,
} from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscPress);
  }

  onEscPress = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  onkBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {  
    return (
      <ModalOverlay 
      onClick={this.onkBackdropClick}>
        <ModalWindow>
          <ModalPic 
          src={this.props.src} 
          alt={this.props.alt} />
          <ModalDescr>{this.props.alt}</ModalDescr>
        </ModalWindow>
      </ModalOverlay>     
    );
  }
}

Modal.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  closeModal: propTypes.func.isRequired,
};
