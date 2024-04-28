import React from 'react';
import {
  Textarea,
  Button,
  Input,
  FormControl,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

function AddNewCheck() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState('xl');
  const handleSizeClick = newSize => {
    setSize(newSize);
    onOpen();
  };

  return (
    <>
      <Button onClick={() => handleSizeClick(size)}>Новая проверка</Button>
      <Modal isOpen={isOpen} onClose={onClose} size={size}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Данные эксперта</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input placeholder="ФИО" />
            </FormControl>
            <FormControl mt={4}>
              <Input placeholder="Дата рождения" />
            </FormControl>
            <FormControl mt={4}>
              <Input placeholder="ИНН" />
            </FormControl>
            <FormControl mt={4}>
              <Input placeholder="Адрес" />
            </FormControl>
            <FormControl mt={4}>
              <Input placeholder="Заявитель" />
            </FormControl>
            <FormControl mt={4}>
              <Input placeholder="Место работы" />
            </FormControl>
            <FormControl mt={4}>
              <Input placeholder="Должность" />
            </FormControl>
            <FormControl mt={4}>
              <Input placeholder="Заключение" />
            </FormControl>
            <FormControl mt={4}>
              <Textarea placeholder="Доп. информация" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Сохранить
            </Button>
            <Button onClick={onClose}>Отмена</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddNewCheck;
