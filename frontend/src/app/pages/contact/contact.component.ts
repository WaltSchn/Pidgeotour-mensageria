import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MensageriaService } from 'src/app/services/mensageriaService/mensageria.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  txtValue: string = '';
  verificar: boolean = false;
  processadoOk: boolean = false;
  resposta: any
constructor(
  private mensageriaService: MensageriaService,

 ){}

 ngOnInit(): void {
  this.onTextChange("")
 }

 onTextChange(value: string)
 {
   this.txtValue = value;
   if(this.txtValue == '')
   {
     this.verificar=true
   } else {
    this.verificar=false
   }

 }

enviarMensagem(){
  this.mensageriaService.sendMessage("\""+this.txtValue+"\"").subscribe((response:any) => {
    this.resposta = response.message.toString()
    console.log(typeof(this.resposta))
  })
  this.txtValue = ''
  this.onTextChange("")
  if(typeof(this.resposta === String)){

    alert("mensagem enviada com sucesso!!")
  }

}


}
