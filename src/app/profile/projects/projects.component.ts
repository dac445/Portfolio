import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  config: any;
  projects = [
    {
      id: 1,
      title: 'VB Attorneys',
      desc: '',
      livedemo: 'https://www.vbattorneys.com/',
      githurl: '#0',
      cssClass: 'disabled btn btn-primary stretched-link',
      mediumlink: '',
      imgUrl: 'assets/images/vbattorneys1.png',
      tech: 'Adobe XD, Photoshop & Illustrator, Wordpress, JQuery, PHP, HTML, CSS '
    },

    {
      id: 2,
      title: 'Digital Reality Scanning',
      desc: '',
      livedemo: 'https://www.digitalrealityscanning.com/',
      githurl: '#0',
      cssClass: 'disabled btn btn-primary stretched-link',
      mediumlink: '',
      imgUrl: 'assets/images/digitalreality.PNG',
      tech: 'Wordpress, JQuery, PHP, HTML, CSS'
    },


    {
      id: 3,
      title: 'Will Powerel Ectrical Services',
      desc: '',
      livedemo: 'https://willpowerelectricalservices.com/',
      githurl: '#0',
      cssClass: 'disabled btn btn-primary stretched-link',
      mediumlink: '',
      imgUrl: 'assets/images/willpower.PNG',
      tech: 'Wordpress, JQuery, PHP, HTML, CSS'
    },

    {
      id: 4,
      title: 'Random Password Generator',
      desc: '',
      livedemo: 'https://random-password-generator-tau.vercel.app/',
      githurl: 'https://github.com/dac445/Random-Password-Generator',
      cssClass: 'btn btn-primary stretched-link',
      mediumlink: '',
      imgUrl: 'assets/images/rpg.PNG',
      tech: 'Angular, Node.js, HTML, CSS'
    },

  ]
  constructor() { }

  ngOnInit() {
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.projects.length
    };
  }

  pageChanged(event){
    this.config.currentPage = event;
  }
}
