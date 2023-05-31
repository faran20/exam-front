import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private userService: UserService, private snack: MatSnackBar) { }

  public user = {
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    userName: ''
  };

  formSubmit() {
    console.log(this.user);
    if (this.user.userName == '' || this.user.userName == null) {
      // alert('Username is required');
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Username required',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

    this.userService.addUser(this.user).subscribe({
      next: (data) => Swal.fire({
        position: 'center',
        icon: 'info',
        title: String(data),
        showConfirmButton: false,
        timer: 1500
      }),
      error: (err) => Swal.fire({
        position: 'center',
        icon: 'error',
        title: err,
        showConfirmButton: false,
        timer: 1500
      }),
      complete: () => Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registered Successfully',
        showConfirmButton: false,
        timer: 1500
      })
    });
  }

}
