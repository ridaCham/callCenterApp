import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public firmalar:any;
  public loginType:any=false;
  public email:any;
  public password:any;
  public userEmail:any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.firmalar=[
      {id:0,ad:'Vakif Bank',sube:[{subeadi:'aksaray',tel:56446565},{subeadi:'ankara',tel:54466665},{subeadi:'bartin',tel:5645654565}],img:'assets/vakif.jpg',kategory:'Banka',aciklama:'Örnek açiklama....'},
      {id:1,ad:'Ziraat Bank',sube:[{subeadi:'mardin',tel:555464646},{subeadi:'batman',tel:666545445},{subeadi:'kars',tel:456454564}],img:'assets/ziraat.jpg',kategory:'Banka',aciklama:'Örnek açiklama....'},
      {id:2,ad:'İş Bank',sube:[{subeadi:'hatay',tel:445454664},{subeadi:'konya',tel:5444656665},{subeadi:'kayseri',tel:666554545}],img:'assets/iş.jpg',kategory:'Banka',aciklama:'Örnek açiklama....'},
      {id:3,ad:'Elektrik Arıza',sube:[{subeadi:'istanbul',tel:6644654565},{subeadi:'izmir',tel:6644656665},{subeadi:'sakarya',tel:565654465}],img:'assets/elektrik.jpg',kategory:'Servis',aciklama:'Örnek açiklama....'},
    ];
  
  }
  login(){
    this.loginType=true;
  }
  loginSave(){
    this.userEmail=this.email;
  }
}
