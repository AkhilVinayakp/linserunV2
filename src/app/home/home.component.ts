import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../core/services/electron/electron.service';
//importing data serives
import { DataService } from '../data.service';
const { spawn } = require("child_process");
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
  data_api:Object={
    out_flag:1,
    out_stream:null,

  }
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
    if(this.action_selected=="RUN")
      this.run_command();
    else
      this.search_text();


  }
  run_command()
  {
    let out_data = spawn(this.cmd_ser_text);
    out_data.stdout.on('data',(data)=>{this.run_command_stdout(data)})
    out_data.stderr.on('data',(data)=>{this.run_command_stderr(data)})
    out_data.on('data',(data)=>{this.run_command_on(data)})
  }

  run_command_stdout(data:any){
      console.log(data.toString());
  }
  run_command_stderr(data:any){
    console.log(data.toString());
  }
  run_command_on(data:any){
    console.log(data.toString());
  }


  search_text()
  {

  }

}
