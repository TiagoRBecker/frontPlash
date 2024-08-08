import Swal from 'sweetalert2';
import { signOut } from 'next-auth/react';

const showSessionExpiredAlert = async () => {
  await Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Sua sessão expirou!',
    confirmButtonColor:"blue",
    timer:4500
    
  });
};
export default showSessionExpiredAlert;