import {Component, Input, OnInit} from '@angular/core';
import {Hijo} from '../../models/hijo';
import {HijoService} from '../../services/hijo.service';
import {PadreService} from '../../services/padre.service';
import {Padre} from '../../models/padre';

@Component({
  selector: 'app-hijo-nombre-padre',
  templateUrl: './hijo-nombre-padre.component.html',
  styleUrls: ['./hijo-nombre-padre.component.css']
})
export class HijoNombrePadreComponent implements OnInit {
@Input() idPadre: number;
padre: Padre = new Padre();
  constructor(private padreService: PadreService) { }

  ngOnInit(): void {
    this.getNombrePadre(this.idPadre);
  }

  getNombrePadre(id: number): void{
    console.log('iniciando..' + id);
    this.padreService.getPadreById(id).subscribe(response => this.padre = response);
  }

}
