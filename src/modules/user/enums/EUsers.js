const UserType = {
    ADMIN: 'ADMIN',
    USER: 'USER',
  };
  
  Object.freeze(UserType); // Impede alterações no objeto para simular um enum
  
  export default UserType;