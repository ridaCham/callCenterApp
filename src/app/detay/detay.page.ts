import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detay',
  templateUrl: './detay.page.html',
  styleUrls: ['./detay.page.scss'],
})
export class DetayPage implements OnInit {
  public firmaNo:any;
  public firmalar:any;
  public firma:any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.firmaNo = this.activatedRoute.snapshot.paramMap.get('no');
    console.log(this.firmaNo);
    this.firmalar=[
      {id:0,ad:'Vakif Bank',sube:[{subeadi:'aksaray',tel:56444565},{subeadi:'ankara',tel:545656665},{subeadi:'bartin',tel:555654565}],img:'assets/vakif.jpg',kategory:'Banka',aciklama:'Örnek açiklama....'},
      {id:1,ad:'Ziraat Bank',sube:[{subeadi:'mardin',tel:555464646},{subeadi:'batman',tel:666545465},{subeadi:'kars',tel:454564564}],img:'assets/ziraat.jpg',kategory:'Banka',aciklama:'Örnek açiklama....'},
      {id:2,ad:'İş Bank',sube:[{subeadi:'hatay',tel:445454664},{subeadi:'konya',tel:54446566645},{subeadi:'kayseri',tel:66554545}],img:'assets/iş.jpg',kategory:'Banka',aciklama:'Örnek açiklama....'},
      {id:3,ad:'Elektrik Arıza',sube:[{subeadi:'istanbul',tel:6644654565},{subeadi:'izmir',tel:6644656665},{subeadi:'sakarya',tel:5655654465}],img:'assets/elektrik.jpg',kategory:'Servis',aciklama:'Örnek açiklama....'},
    ];
  
    this.firma=this.firmalar[this.firmaNo];
  }

}
