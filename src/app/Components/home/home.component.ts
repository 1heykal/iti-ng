import { Component, OnInit } from '@angular/core';
import { StroeData } from 'src/app/ViewModels/stroe-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  storeInfo: StroeData;
  isImageShown:boolean;

  constructor(){
    this.storeInfo = new StroeData("Iti", "assets/csharp.png", ["Cairo", "Alex", "Mansoura"]);
    this.isImageShown = true;
  }
  ngOnInit(): void {
  }

  toggleImage() : void{
    this.isImageShown = !this.isImageShown;
  }

}
