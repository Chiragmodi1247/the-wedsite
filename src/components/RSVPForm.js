// src/components/RSVPContainer.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
  Stack,
} from '@chakra-ui/react';
import { submitRSVP } from '../utils/firebaseUtils';

const RSVPForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attendance, setAttendance] = useState('yes');
  const [guests, setGuests] = useState(1);
  const [notes, setNotes] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const rsvpData = {
        guest_name: name,
        guest_email: email,
        attending: attendance === 'yes',
        number_of_guests: guests,
        notes,
        createdAt: new Date()
      };

      await submitRSVP(rsvpData);
      navigate('/thank-you');
    } catch (error) {
      alert('My bad! Something went wrong. Please try again.');
    }
  };

  return (
    <Box
      maxW="500px"
      mx="auto"
      p={5}
      borderWidth="1px"
      borderRadius="lg"
      bg="white"
      boxShadow="lg"
    >
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        RSVP
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="attendance" isRequired>
            <FormLabel>Will you attend?</FormLabel>
            <Select
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Select>
          </FormControl>
          {attendance === 'yes' && (
            <FormControl id="guests">
              <FormLabel>Number of Guests</FormLabel>
              <Input
                type="number"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                min="1"
                max="10"
              />
            </FormControl>
          )}
          <FormControl id="notes">
            <FormLabel>Any Notes</FormLabel>
            <Textarea
              placeholder="Add any special requests or dietary restrictions here."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </FormControl>
          <Button
            type="submit"
            colorScheme="blue"
            size="lg"
            mt={4}
            w="full"
            _hover={{ bg: 'blue.600' }}
          >
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default RSVPForm;