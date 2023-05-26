import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private userService: UserService) { }

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
      alert('Username is required');
      return;
    }

    this.userService.addUser(this.user).subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err),
      complete: () => console.log("completed")
    });
  }

}
