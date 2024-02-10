import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {
  private ads: string[];
  constructor() {
    this.ads = ["Big Discounts!", "Sale up to 50%", "20% off!", "Check our white friday offers!",
      "Special white friday offers up to 70%"];
  }


  getScheduledAds(intervalInSeconds: number) : Observable<string>{
    return new Observable<string>((observer) => {
      let counter = 0;
      let adsTimer = setInterval(() =>{
        if(counter == this.ads.length)
           observer.complete();

        if(this.ads[counter] == "")
          observer.error("Error: Empty Ad.");

        observer.next(this.ads[counter++]);      
      }, 
      intervalInSeconds * 1000);

      return {
        unsubscribe(){
          clearInterval(adsTimer);
        }
      }
    }
    );
  }

  getSerialAds() : Observable<string>{
    return from(this.ads);
  }
}
