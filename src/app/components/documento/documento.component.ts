import { Component, OnInit } from '@angular/core';
import {DocumentoService} from '../../services/documento.service';
import {Documento} from '../../models/documento';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css']
})
export class DocumentoComponent implements OnInit {
documentos: Documento[];
  constructor(private documentoService: DocumentoService) { }

  ngOnInit(): void {
    this.documentoService.getDocumentos().subscribe(documentos => this.documentos = documentos);
  }

}
