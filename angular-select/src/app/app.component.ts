import { Injectable ,Component, Input } from '@angular/core';
import { Http, Response,RequestOptions, Headers } from '@angular/http';
import { Produto } from './produto';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private data;
  @Input() produtoSelecionado: Produto;
  private valor;
  private postResponse: any;
  constructor(private http:Http){}

  ngOnInit(){
  	this.getData();
  }

  getData(){
  	this.http.get("http://localhost/Estudos%20Web/PHP%20e%20Angular%202/Teste%20de%20Select/processa.php").subscribe(res => this.data = res.json()) ;
  }

  exibeInfo(produto: Produto){
  	this.produtoSelecionado = produto;
  }

  clicado(){
  	//alert(this.produtoSelecionado.nomeProduto);
  	let headers = new Headers({'Content-Type': 'application/json'});
  	let options = new RequestOptions({ headers: headers });

  	this.http.post("http://localhost/Estudos%20Web/PHP%20e%20Angular%202/Teste%20de%20Select/update.php", JSON.stringify( {nomeProduto:this.produtoSelecionado.nomeProduto,idProduto:this.produtoSelecionado.idProduto} ),{headers: headers}).map((res: Response) => res.json()).subscribe((res:'') => this.postResponse = res ) ;
  }

}
