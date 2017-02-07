/**
 * Created by Edward_J_Apostol on 2017-02-07.
 */

export default class VideoPlayer{

    constructor(){
        this.player = document.getElementById("video_player");
        this.video = this.player.getElementsByTagName("video")[0];

        // this.links = this.player.getElementsByTagName('a');
        this.links = this.player.getElementsByTagName("figcaption")[0]; // there is only one figcaption

        this.linkList = []; // create an array of links
        this.path = "";
        this.currentVid = 0;
        this.allLinks = this.links.children;
        this.numLinks = this.allLinks.length;


        //this.videotarget = "";
        //this.fileName = "";

        this.source = this.video.getElementsByTagName("source");

        //this.initLinks(this.links);

        this.video.removeAttribute("controls");
        this.video.removeAttribute("poster");

        this.initPlayList(this);
    }

    initPlayList(thisScope){

        let playVid = (index) =>{
            thisScope.links.children[index].classList.add(thisScope.currentVid);
            thisScope.source[0].src = this.linkList[index];

        }


    }



    /*
    initLinks(links){
        for (let i=0; i<links.length; i++) {
            // this.links[i].onclick = handler;
            (links[i]).addEventListener("click",this.linkHandler,false)
        }
    }
    */

    /*
    linkHandler(e){
        // e.stopPropagation();
        e.preventDefault();
        this.videotarget = this.getAttribute("href");
        this.fileName = this.videotarget.substr(0, this.videotarget.lastIndexOf('.')) || this.videotarget;
        this.video = document.querySelector("#video_player video");
        this.video.removeAttribute("controls");
        this.video.removeAttribute("poster");

        this.source = document.querySelectorAll("#video_player video source");
        this.source[0].src = this.fileName + ".mp4";
        this.source[1].src = this.fileName + ".webm";
        this.video.load();
        this.video.play();
    }
    */
}
