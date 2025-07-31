import Swal from 'sweetalert2';

export const createAlert = (icon,text) => {

    return Swal.fire({
        icon: icon|| 'info',
        text: text|| 'Something went wrong',
        timer: 3000,
    });

};  