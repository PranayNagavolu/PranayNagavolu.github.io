import { Component, OnInit, SecurityContext} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],

  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [ // :enter is alias for void => *, :leave is alias for * => void
        animate('1s ease-in')
      ]),
    ]),
  ]
})
export class LandingComponent implements OnInit {
  pdfSrc: SafeResourceUrl;
  showContent: boolean = false;
  constructor(private sanitizer: DomSanitizer) {
    this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl('/assets/resume.pdf');  
   }
  ngOnInit(): void {
  }
  
  openPdf(): void {
    // Cast the SafeResourceUrl back to a string
    const unsafeUrl = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, this.pdfSrc);
    if (unsafeUrl) {
      window.open(unsafeUrl, '_blank');
    }
  }
  scroll(element){   
    const ele = document.getElementById(element);   
    window.scrollTo(ele.offsetLeft,ele.offsetTop);
  }
  toggleContent(): void {
    this.showContent = !this.showContent;
  }
  

  experience = [
    {
      company: 'Spark, University of North Texas',
      position: 'Lead Technology Engagement Specialist',
      duration: 'Jan 2022 to May 2023',
      description: ['Maintain and troubleshoot technical equipment in laptops, cameras to 3D printers and laser cutters.',
      'Conducting hands-on workshops on python programming and problem solving.',
      'Training and managing a team of 12 as a lead supervising their work and resolving any internal disputes.']
    },
    {
      company: 'Working with Caarya',
      position: 'Junior Software Developer',
      duration: 'Oct 2020 to Mar 2021',
      description: ['Designed web applications with unique structures and aesthetics using Angular and Node, enhancing cross-functional collaboration, and delivering innovative solutions with 25% increased project efficiency following Agile SDLC.',
      'Incorporated AWS Cloud Services for web operations, reducing costs by 15% while maintaining peak performance with AWS RDS.']
    },
    {
      company: 'Working with Fountane',
      position: 'Junior Software Developer Intern',
      duration: 'Jun 2020 to Sep 2020',
      description: ['Facilitated a design thinking research program, collaborating with cross-functional teams to redefine problems and discover effective solutions.',
      'Awarded Most Outstanding Student Intern for contributions and leadership and guiding 4 other interns through the internship experience.',
      'Utilized AWS Cloud Services for web operations and demonstrated competence in cloud computing with AWS RDS.']
    },
    {
      company: 'Working with DeltaNow',
      position: 'Front-End Software Engineer',
      duration: 'Jun 2020 to Sep 2020',
      description: ["Facilitated effective collaboration among design and development teams, reducing Datatrove's product development time by 20% and accelerating feature delivery by 30% for the DoAA Data Management Solution.",
      'Headed front-end UI development and integration for various product modules, using Bootstrap, Angular, Node, SQL, MongoDB, and Django; improved load times by 50% and enhanced customer retention by 15%.',]
    },
    {
      company: 'Work at IEEE Student Chapter',
      position: 'Designing and Management',
      duration: 'Dec 2017 to Jun 2021',
      description: ['Played the role of a designer and an administrator in the IEEE student chapter for 3 years. My duties involved designing templates and banners for events, maintaining the website, managing and organizing events, constant monitoring of work done by members in all domains. Mentioned below are a few events I worked and organzed',
      'NIRVANA 2.0',
      'IMITOR 2k18']
    },
  ]

}
