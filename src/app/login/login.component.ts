import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  valueUsername: string;
  valuePassword: string;
  isVisible = false;

  ngOnInit() {
  }

  handleLogin(): void {
    if ((this.valueUsername === 'yss') && (this.valuePassword === '123456')) {
      this.router.navigate(['/navbar']);
    } else {
      this.showModal();
    }
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
