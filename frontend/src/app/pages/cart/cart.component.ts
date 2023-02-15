import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { isEmpty } from 'rxjs';
import { Cart } from 'src/app/models/cartModel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  displayedColumns: string[] = ['nome', 'data', 'qtde', 'valor', 'totais', 'delete'];


  email = new FormControl('', [Validators.required, Validators.email])
  nomeCliente = new FormControl('')
  numCartao = new FormControl('')
  dtExpiracao  = new FormControl('')
  cvv = new FormControl('')

  carrinho: Cart[] = []
  mensagem = false
  tableContent = [new Cart()]

  constructor( ) {}

  ngOnInit() {
   this.carrinho = JSON.parse(localStorage.getItem("cart") || '[]')
   this.carrinho.forEach(p => p.totais = p.qtde!*p.valor!)
   this.checkCarrinho()
  }


  checkCarrinho(){
    if(this.carrinho.length === 0){
      this.mensagem = true
     }
  }

  getTotalCost() {
    let total = this.carrinho.map(t => t.totais).reduce((acc, value) => acc! + value!, 0)
    return total
  }

  removeRow(element: Cart) {
    var index = this.carrinho.findIndex((u) => u.nome === element.nome && u.qtde === element.qtde && u.data === element.data);
    //console.log(index)
    this.carrinho.splice(index, 1)
    //console.log(this.carrinho)
    localStorage.setItem("cart", JSON.stringify(this.carrinho))
    this.ngOnInit()
  }

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessage() {
    if (this.nomeCliente.hasError('required')
    || this.numCartao.hasError('required')
    || this.dtExpiracao.hasError('required')
    || this.cvv.hasError('required')
    ) {
      return 'You must enter a value';
    } else {
      return '';
    }
  }


  finalizarPedido(){

  }
}
