import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper, ModalWrapper, InnerWrapper, CloseButton } from './styles'
import Content from './Content';

const Google2FAModal = ({
    inLineMode,
    isModalOpen,
    toggleModal,
    hoverMode,
    backdropClose,
}) => {
    const handleToggleModal = e => {
        e.preventDefault();

        if (backdropClose) {
            toggleModal();
        }
    }
    return (
        ReactDOM.createPortal(
            <Wrapper
                hoverMode={hoverMode}
                inLineMode={inLineMode}
                className={inLineMode && (isModalOpen ? 'animate-appear' : 'animate-disappear')}
                onClick={handleToggleModal}
            >
                <ModalWrapper>
                    <InnerWrapper
                        onClick={e => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                    >
                        <Content isModalOpen={isModalOpen} toggleModal={toggleModal} />
                        <CloseButton onClick={toggleModal} />
                    </InnerWrapper>
                </ModalWrapper>
            </Wrapper>,
            document.getElementById('modal'),
        )
    );
}

export default Google2FAModal;
