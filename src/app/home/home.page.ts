import { Component } from '@angular/core';
// import { audioconat } from '../../../node_modules/audioconcat';
// var audioconcat = require('audioconcat');
import Crunker from 'crunker';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  songs: any = [
    '../../assets/music/demo.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  ]
  preloaded: any = [{ image: 'assets/img/m1.jpeg', music: '' }, { image: 'assets/img/m2.png', music: '' }, { image: 'assets/img/m3.png', music: '' }, { image: 'assets/img/m4.jpeg', music: '' },{ image: 'assets/img/m6.png', music: '' }]


  constructor(private sanitizer: DomSanitizer) { }

  merge() {
    debugger;
    // const audio = new Crunker();
    // // let audio = new crunker.Crunker();
    // audio
    // .fetchAudio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3")
    // .then(buffers => {
    //   // => [AudioBuffer, AudioBuffer]
    //   audio.mergeAudio(buffers);
    // })
    // .then(merged => {
    //   // => AudioBuffer
    //   audio.export(merged, "audio/mp3");
    // })
    // .then(output => {
    //   // => {blob, element, url}
    //   audio.download(output.blob);
    //   document.append(output.element);
    //   console.log(output.url);
    // })
    // .catch(error => {
    //   // => Error Message
    // });


    let audio = new Crunker()
    audio
      .fetchAudio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3")
      .then(buffers => {
        console.log({ buffers })
        return audio.mergeAudio(buffers);
      })
      .then(merged => {
        // => AudioBuffer
        console.log({ merged })
        return audio.export(merged, "audio/mp3");
      })
      .then(output => {
        // => {blob, element, url}
        console.log({ output })
        document.body.append(output.element)
        return audio.download(output.blob)
      })
      .catch(error => {
        console.log({ error })
      });
  }
}
