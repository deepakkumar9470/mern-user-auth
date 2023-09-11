import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormInputs';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { setCredentials } from '../redux/authSlice';
import { useUpdateMutation } from '../redux/usersApiSlice';

const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
   
const { userInfo } = useSelector((state) => state.auth);

const [updateProfile, {isLoading}] = useUpdateMutation()
  useEffect(() => {
    setFirstName(userInfo.firstName)
    setLastName(userInfo.lastName)
    setEmail(userInfo.email)
   
  }, [userInfo.firstName,userInfo.lastName,userInfo.email])
  
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await updateProfile({
        _id : userInfo._id,
        firstName : userInfo.firstName,
        lastName : userInfo.lastName,
        email : userInfo.email,
      });
       dispatch(setCredentials({...res}))
       toast.success('Profile updated success')
    } catch (error) {
       console.log(error)
    }
   
  };
  return (
    <FormContainer>
      <h1>Update Profile</h1>

      <Form onSubmit={submitHandler}>
      <Form.Group className='my-2' controlId='name'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='my-2' controlId='name'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter last name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
      

        <Button type='submit' variant='primary' className='mt-3'>
          Update
        </Button>

        {isLoading && <Loader />}
      </Form>
    </FormContainer>
  );
};

export default Profile;