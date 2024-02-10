import { Component, OnInit } from '@angular/core';
import { PromotionAdsService } from 'src/app/Services/promotion-ads.service';
import { StroeData } from 'src/app/ViewModels/stroe-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  storeInfo: StroeData;
  isImageShown:boolean;

  constructor(private promotion: PromotionAdsService){
    this.storeInfo = new StroeData("Iti", "assets/csharp.png", ["Cairo", "Alex", "Mansoura"]);
    this.isImageShown = true;
  }
  ngOnInit(): void {
    this.promotion.getScheduledAds(3).subscribe({
      next: (data: string) => {console.log(data);},
      error: (err: string) => {console.log(err);},
      complete: ()=> { console.log("No ads left.");}
    });
  }

  toggleImage() : void{
    this.isImageShown = !this.isImageShown;
  }

}
