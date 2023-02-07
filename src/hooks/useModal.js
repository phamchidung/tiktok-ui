import { useState } from 'react';

const useModal = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    function openModal() {
        setModalOpen(true);
    }

    function closeModal() {
        setModalOpen(false);
    }

    return { isModalOpen, openModal, closeModal };
};

export default useModal;
