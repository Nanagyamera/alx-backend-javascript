import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promises = [
    uploadPhoto(),
    createUser()
  ];

  Promise.all(promises)
    .then(([photoResponse, userResponse]) => {
      console.log('Body:', userResponse.body);
      console.log('First Name:', userResponse.firstName);
      console.log('Last Name:', userResponse.lastName);
    })
    .catch(error => {
      console.error('Error:', error);
    });
};
