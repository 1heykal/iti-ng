import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription, catchError, filter, map, retry } from 'rxjs';
import { PromotionAdsService } from 'src/app/Services/promotion-ads.service';
import { StroeData } from 'src/app/ViewModels/stroe-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{
  storeInfo: StroeData;
  isImageShown:boolean;
  private subscribtions: Subscription[] = [];

  constructor(private promotion: PromotionAdsService){
    this.storeInfo = new StroeData("Iti", "assets/csharp.png", ["Cairo", "Alex", "Mansoura"]);
    this.isImageShown = true;
  }

  ngOnInit(): void {

    let observer = {
        next: (data: string) => {console.log(data);},
        error: (err: string) => {console.log(err);},
        complete: ()=> { console.log("No ads left.");}
      };

    //  let adsSubscribtion = this.promotion.getScheduledAds(3).subscribe({
    //   next: (data: string) => {console.log(data);},
    //   error: (err: string) => {console.log(err);},
    //   complete: ()=> { console.log("No ads left.");}
    // });

    // this.subscribtions.push(adsSubscribtion);

    let filtersObservable = this.promotion.getScheduledAds(3).pipe(
      //retry(3),
      filter(ad => ad.includes("white friday")),
      map(ad => "Ad: " + ad)
    );

    let adsSubscribtion = filtersObservable.subscribe(observer);
    this.subscribtions.push(adsSubscribtion);

    let adsSerial = this.promotion.getSerialAds().subscribe(ad => {
      console.log(ad);
    }
    );
    this.subscribtions.push(adsSerial);
  }

  ngOnDestroy(): void {
    for(let sub of this.subscribtions)
       sub.unsubscribe();
  }

  toggleImage() : void{
    this.isImageShown = !this.isImageShown;
  }

}
