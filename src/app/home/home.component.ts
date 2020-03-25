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

  constructor(private electron_window:ElectronService, private data:DataService) { }

  ngOnInit(): void { }

  cmd_ser_text:any;
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
  }
  text_changed(){
    console.log(this.cmd_ser_text);
  }

}
