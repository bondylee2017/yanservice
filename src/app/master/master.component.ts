import { Component, OnInit } from '@angular/core';
import { WebrtcService } from '../core/services/webrtc.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

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
            console.log(data);
        });
  }

  ngOnInit() {
  }

}
