import { Component, OnInit } from '@angular/core';
import { WebrtcService } from '../../services/webrtc.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-slave1',
  templateUrl: './slave1.component.html',
  styleUrls: ['./slave1.component.css']
})
export class Slave1Component implements OnInit {

  //dependency inject webrtc
  constructor(private webrtc: WebrtcService) { }

  ngOnInit() {
  }

  onStartLocalVideo(): void {
    console.log("======onStartLocalVideo=====");
    this.webrtc.startLocalVideo();
  }
  onStopLocalVideo(): void {
    console.log("======onStopLocalVideo=====");
    this.webrtc.stopLocalVideo();
  }
  onJoinRoom(): void {
    console.log("======onJoinRoom=====");
    this.webrtc.joinRoom();
  }
}
