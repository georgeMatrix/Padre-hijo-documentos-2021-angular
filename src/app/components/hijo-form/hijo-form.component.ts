import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PadreService} from '../../services/padre.service';
import {Padre} from '../../models/padre';
import {HijoService} from '../../services/hijo.service';
import {Hijo} from '../../models/hijo';

@Component({
  selector: 'app-hijo-form',
  templateUrl: './hijo-form.component.html',
  styleUrls: ['./hijo-form.component.css']
})
export class HijoFormComponent implements OnInit {
formGroupHijo: FormGroup;
padres: Padre[];
  constructor(private router: Router, private formBuilder: FormBuilder, private padreService: PadreService,
              private hijoService: HijoService, private activatedRoute: ActivatedRoute) {
    this.formGroupHijo = formBuilder.group({
        id: [''],
        nombreHijo: ['', Validators.required],
        apellidoHijo: ['', Validators.required],
        edadHijo: ['', Validators.required],
        idPadre: ['', Validators.required]
      });
  }

  ngOnInit(): void {
    this.padreService.getPadres().subscribe(padres => this.padres = padres);
    this.getHijoById();
  }

  saveHijo(hijo: Hijo): void{
    this.hijoService.saveHijo(hijo).subscribe(response => this.router.navigate(['/hijos']));
  }
  getHijoById(): void{
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      if (id){
        this.hijoService.getHijoById(id).subscribe(response => {
          this.formGroupHijo.setValue(response);
          console.log(this.formGroupHijo.value.id);
        });
      }
    });
  }
  updateHijo(valores): void{
    this.hijoService.putHijo(valores).subscribe(response => this.router.navigate(['/hijos']));
  }
}
