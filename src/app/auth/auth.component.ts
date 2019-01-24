import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/StudentService';
import { Person } from '../models/base';
import {
  AuthService,
  VkontakteLoginProvider
} from 'angular-6-social-login-v2';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {
  @Input() out:any;
  showload = true;
  showauth = true;
  userId='';
  token ='';
  constructor(private ss:StudentService, private route:ActivatedRoute, private router:Router, private socialAuthService: AuthService) { }

  ngOnInit() {
  }
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if (socialPlatform == "vkontakte") {
      socialPlatformProvider = VkontakteLoginProvider.PROVIDER_ID;
    }
    
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        this.ss.SetUser(userData).subscribe(data => {
          localStorage.setItem('user',JSON.stringify(data));
          this.showauth = false;
          this.showload =false;
          
          if(data.Root>1){
            this.router.navigate(['/developer']);
          }
          else{
            this.router.navigate(['']);
          }
          location.reload();
        })
            
      }
    );
  }

}
