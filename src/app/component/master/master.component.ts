import { Component, OnInit } from '@angular/core';
import { WebrtcService } from '../../services/webrtc.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  //dependency inject webrtc
  constructor(private webrtc: WebrtcService) { 
      webrtc.onError().subscribe(error => {
            console.warn(error);
        });

      webrtc.onRoomReady().subscribe(state => {
            console.log(state);
        });

        webrtc.onReadyToCall().subscribe(() => {
            console.log('ready');
        });

        webrtc.onVideoAdded().subscribe(data => {
            console.log("===On Video Added==="+data);
        });
  }

  ngOnInit() {
    
  }
  
//  onConnect(): void {
//    //this.selectedHero = hero;
//    console.log("======onConnect=====");
//    this.webrtc.connect();
//  }
  onStartLocalVideo(): void {
    console.log("======onStartLocalVideo=====");
    this.webrtc.startLocalVideo();
  }
  onStopLocalVideo(): void {
    console.log("======onStopLocalVideo=====");
    this.webrtc.stopLocalVideo();
  }
  onCreateRoom(): void {
    console.log("======onCreateRoom=====");
    this.webrtc.createRoom();
  }
  onRemoveLocalVideo(): void {
    console.log("======onRemoveLocalVideo=====");
  }
  onDisconnect(): void {
    console.log("======onDisconnect=====");
  }
}
