import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Destino } from 'src/app/models/destinoModel';
import { DestinoService } from 'src/app/services/destinoServices/destino.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent {
  subscription!: Subscription;
  destinos: Destino[] = [];
  constructor(private destinoService: DestinoService) { }

  ngOnInit() {
    
    this.subscription = this.destinoService.getDestinosList().subscribe((response:any) => {
      this.destinos = response
      this.destinos.forEach(e => {
        var urlString = "..\\..\\assets\\images\\cardImages\\" + `${e.id}.jpg`
        e.url = urlString
      });
    })
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
}

  errorhandler(event: any) {
    event.target.src = "..\\..\\assets\\images\\Cinnabar.jpg"
  }
}
