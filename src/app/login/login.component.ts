import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private myserver: MyServiceService) { }

  valueUsername: string;
  valuePassword: string;
  isVisible = false;

  ngOnInit() {
    this.myserver.getHeroes().subscribe((data) => {
      console.log(data);
    });
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
