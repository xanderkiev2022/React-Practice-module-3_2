import React, { Component } from 'react';
import { Backdrop, ModalContent, Button } from './Modal.styled';

export class Modal extends Component {
  render() {
    const {
      currentImg: { src, alt },
    } = this.props;
    return (
      <Backdrop>
        <ModalContent>
          <img src={src} alt={alt} />
          <Button type="button">Close</Button>
        </ModalContent>
      </Backdrop>
    );
  }
}
