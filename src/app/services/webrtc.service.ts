import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

declare let SimpleWebRTC: any; // this is important

@Injectable()
export class WebrtcService {

    webrtc: any; // declare global variable
    // construct the simplewebrtc object as service creation
    // constructor(private config: ConfigService) {
    constructor() {
      this.webrtc = new SimpleWebRTC({
            url: 'your signal server url here',
            socketio: {},
            connection: null,
            debug: false,
            localVideoEl: 'localVideo',
            // remoteVideosEl: 'remote-video',
            autoRequestMedia: false,
            adjustPeerVolume: false,
            media: {
                video: true, audio: true
            }
        });
    }

    /*
     * starts the local media with the media options provided
        in the config passed to the constructor
     */
    startLocalVideo() {
      console.log('======WebrtcService addLocalVideo=====');
      this.webrtc.startLocalVideo();
    }
    /*stops all local media streams*/
    stopLocalVideo() {
      console.log('======WebrtcService stopLocalVideo=====');
      this.webrtc.stopLocalVideo();
    }
    /* used internally to get the container that will hold the local video element*/
    getLocalVideoContainer() {
      console.log('======WebrtcService getLocalVideoContainer=====');
      this.webrtc.getLocalVideoContainer();
    }
    /*used internally to get the container that holds the remote video elements*/
    getRemoteVideoContainer() {
      console.log('======WebrtcService getRemoteVideoContainer=====');
      this.webrtc.getRemoteVideoContainer();
    }
    /*pauses sending video to peers*/
    pauseVideo() {
      console.log('======WebrtcService pauseVideo=====');
      this.webrtc.pauseVideo();
    }
    /*resume sending video to peers*/
    resumeVideo() {
      console.log('======WebrtcService resumeVideo=====');
      this.webrtc.resumeVideo();
    }
    /*pauses sending audio and video to all peers*/
    pause() {
      console.log('======WebrtcService pauseVideo=====');
      this.webrtc.pause();
    }
    /*resume sending audio and video to all  peers*/
    resume() {
      console.log('======WebrtcService resumeVideo=====');
      this.webrtc.resume();
    }
    /*mutes the local audio stream for all peers (pauses sending audio)*/
    mute() {
      console.log('======WebrtcService mute=====');
      this.webrtc.mute();
    }
    /*unmutes local audio stream for all peers (resumes sending audio)*/
    unmute() {
      console.log('======WebrtcService unmute=====');
      this.webrtc.unmute();
    }
    /*broadcasts a message to all peers in the room via the signaling channel (websocket)
     *  messageType: the key for the type of message being sent
     *  payload: an arbitrary value or object to send to peers
     */
    sendToAll(messageType, payload) {
      console.log('======WebrtcService sendToAll=====');
      this.webrtc.sendToAll(messageType, payload);
    }
    /* broadcasts a message to all peers in the room via a dataChannel
     *  channelLabel: the label for the dataChannel to send on
     *  messageType: the key for the type of message being sent
     *  payload: an arbitrary value or object to send to peers
     */
    sendDirectlyToAll(channelLabel, messageType, payload) {
      console.log('======WebrtcService sendDirectlyToAll=====');
      this.webrtc.sendDirectlyToAll(channelLabel, messageType, payload);
    }
    /*returns all peers by sessionId and/or type
     *  sessionId: the label for the dataChannel to send on
     *  type: the key for the type of message being sent
     */
    getPeers(sessionId, type) {
      console.log('======WebrtcService getPeers=====');
      this.webrtc.getPeers(sessionId, type);
    }
    /*create room*/
    createRoom(roomname, callback) {
      console.log('======WebrtcService createRoom=====' + roomname);
      this.webrtc.createRoom(roomname, callback);
    }
    /*Join specified room*/
    joinRoom(roomname, callback) {
      console.log('======WebrtcService joinRoom=====' + roomname);
      this.webrtc.joinRoom(roomname, callback);
    }
    /*leave room*/
    leaveRoom() {
      console.log('======WebrtcService leaveRoom=====');
      this.webrtc.leaveRoom();
    }
    /*initiates screen capture request to browser, then adds the stream to the conference*/
    shareScreen(callback) {
      console.log('======WebrtcService shareScreen=====');
      this.webrtc.shareScreen(callback);
    }
    /*returns the local screen stream*/
    getLocalScreen() {
      console.log('======WebrtcService getLocalScreen=====');
      this.webrtc.getLocalScreen();
    }
    /*stops the screen share stream and removes it from the room*/
    stopScreenShare() {
      console.log('======WebrtcService stopScreenShare=====');
      this.webrtc.stopScreenShare();
    }
    /* stops the screen share stream and removes it from the room
     * volume - the volume level, between 0 and 1
     */
    setVolumeForAll(volume) {
      console.log('======WebrtcService setVolumeForAll=====');
      this.webrtc.setVolumeForAll(volume);
    }
    /* calls disconnect on the signaling connection and deletes it*/
    disconnect() {
      console.log('======WebrtcService disconnect=====');
      this.webrtc.disconnect();
    }
    /* tests that the connection is ready and that (if media is enabled) streams have started*/
    testReadiness() {
      console.log('======WebrtcService testReadiness=====');
      this.webrtc.testReadiness();
    }
    /* used internally to attach media stream to the DOM and perform other setup*/
    handlePeerStreamAdded() {
      console.log('======WebrtcService handlePeerStreamAdded=====');
      this.webrtc.handlePeerStreamAdded();
    }
    /* used internally to remove the video container from the DOM and emit videoRemoved*/
    handlePeerStreamRemoved() {
      console.log('======WebrtcService handlePeerStreamRemoved=====');
      this.webrtc.handlePeerStreamRemoved();
    }

  // use webrtc functions as observables
    onError() {
        return new Observable<any>(observer => {
            this.webrtc.on('error', error => {
                observer.next(error);
            });
        });
    }
    onRoomReady() {
        return new Observable<any>(observer => {
            this.webrtc.connection.on('message', data => {
                if (data.type == 'roomReady') {
                    observer.next(data.payload);
                }
            });
        });
    }
    onConnectionReady() {
        return new Observable<any>(observer => {
            this.webrtc.on('connectionReady', sessionId => {
                observer.next(sessionId);
            });
        });
    }

    onReadyToCall() {
        return new Observable<any>(observer => {
            this.webrtc.on('readyToCall', () => {
                observer.next();
            });
        });
    }

    onVideoAdded() {
        return new Observable<any>(observer => {
            this.webrtc.on('videoAdded', (video, peer) => {
                observer.next({ video: video, peer: peer});
            });
        });
    }

    onVideoRemoved() {
        return new Observable<any>(observer => {
            this.webrtc.on('videoRemoved', (video, peer) => {
                observer.next({ video: video, peer: peer});
            });
        });
    }
}
