import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [`.dark-modal .modal-content {
    background-color: #292b2c;
    color: white;
  }
  .dark-modal .close {
    color: white;
  }
  .light-blue-backdrop {
    background-color: #5cb3fd;
  }
  `]

})

export class ContactFormComponent {
  
  comment = '';
  postComment: string[] = [];
  firstName = '';

  closeResult: string = '';
  
  constructor(private modalService: NgbModal) { }

  openBackDropCustomClass(content: any) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openScrollableContent(longContent: any) {
    this.modalService.open(longContent, { scrollable: true });
  }

  post() {
    
    this.postComment.push(this.firstName);
    this.postComment.push(this.comment);
    this.comment = '';
    this.firstName = '';
    
  }

  

  ngOnInit() {
      
  }

}




