import { Component, OnInit } from '@angular/core';
import {PadreService} from '../../services/padre.service';
import {Padre} from '../../models/padre';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
padres: Padre[];
  constructor(private padreService: PadreService) { }

  ngOnInit(): void {
    this.padreService.getPadres().subscribe(padres => this.padres = padres);
  }
}
