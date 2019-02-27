import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConsultFormModel } from '../consult-form-model/consult-form-model.component';
import { ConsultServiceService } from '../consult-service.service';

@Component({
  selector: 'app-language-detail',
  templateUrl: './language-detail.component.html',
  styleUrls: ['./language-detail.component.css']
})
export class LanguageDetailComponent implements OnInit {
  public language='';
  constructor(private router: Router, private route: ActivatedRoute,private _consultService:ConsultServiceService) {}
  userModel=new ConsultFormModel('Mukesh Joshi','admin@Iammukesh.com',8006444711);
  ngOnInit() {
    let d =this.route.snapshot.paramMap.get('id');
    this.language = d;
  }

  consultRequest(){
    this._consultService.consult(this.userModel)
    .subscribe(
      data => console.log('Success',data),
      error => console.log(error.statusText)
    );
  }

}
