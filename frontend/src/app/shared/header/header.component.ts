import { Component, OnInit,  } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from 'src/app/pages/signin/signin.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{

	token = ''
	showLogin = true
	constructor(private modalService: NgbModal) {}

    ngOnInit(): void {
		this.showButton()
	  }

	  openModal() {
		const modalRef = this.modalService.open(SigninComponent);
		modalRef.result
	  }

	  showButton(){
		if (localStorage.getItem("authToken") === null) {
			this.showLogin = true
		  } else {
			this.showLogin = false
		  }
	  }

    logout(){

      localStorage.removeItem('authToken');
      window.location.reload()
    }

}

