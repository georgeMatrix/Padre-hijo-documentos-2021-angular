import { Component, OnInit } from '@angular/core';
import {DocumentoService} from '../../services/documento.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PadreService} from '../../services/padre.service';
import {Padre} from '../../models/padre';

@Component({
  selector: 'app-documento-form',
  templateUrl: './documento-form.component.html',
  styleUrls: ['./documento-form.component.css']
})
export class DocumentoFormComponent implements OnInit {
formGroupDoc: FormGroup;
padres: Padre[];
  constructor(private documentoService: DocumentoService, private router: Router, private formBuilder: FormBuilder,
              private padreService: PadreService, private activatedRoute: ActivatedRoute) {
    this.formGroupDoc = formBuilder.group({
      id: ['', null],
      curp: ['', Validators.required],
      rfc: ['', Validators.required],
      padreId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.padreService.getPadres().subscribe(padres => this.padres = padres);
    this.getDocumentoById();
  }
  saveDocumento(valores: any): void{
    this.documentoService.saveDocumento(valores).subscribe(response => this.router.navigate(['/documentos']));
  }
  getDocumentoById(): void{
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      if (id){
        this.documentoService.getDocumentoById(id).subscribe(response => this.formGroupDoc.setValue(response));
      }
    });
  }

}
