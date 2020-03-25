import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../core/services/electron/electron.service';
//importing data serives
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private electron_window:ElectronService, private data:DataService) { 

    this.placeholde_changer();
  }

  ngOnInit(): void { }
  placeholde_changer(){

    if(this.action_selected=="RUN"){
      this.placeh_text="command here";
    }
    else{
      this.placeh_text="search now";
    }
  }
  cmd_ser_text:any;
  placeh_text:any;
  action_selected="RUN";
  close_window(){
    this.electron_window.window.close();
  }
  min_window()
  {
    this.electron_window.window.minimize();
  }
  action_changed(){
    console.log(this.action_selected);
    this.placeholde_changer();

  }
  text_changed(){
    console.log(this.cmd_ser_text);
  }

}
