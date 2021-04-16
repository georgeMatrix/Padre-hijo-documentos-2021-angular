import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PadreService} from '../../services/padre.service';

@Component({
  selector: 'app-padre-form',
  templateUrl: './padre-form.component.html',
  styleUrls: ['./padre-form.component.css']
})
export class PadreFormComponent implements OnInit {
formGroupPadre: FormGroup;
  constructor(private router: Router, private padreService: PadreService, private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute) {
  this.formGroupPadre = formBuilder.group({
    id: ['', null],
    nombrePadre: ['', Validators.required],
    apellidoPadre: ['', Validators.required],
    edadPadre: ['', Validators.required]
  });
  }

  ngOnInit(): void {
    this.getPadreById();
  }

  guardarPadre(value: any): void{
    this.padreService.savePadres(value).subscribe(response => this.router.navigate(['/padres']));
  }
  getPadreById(): void{
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      if (id){
        this.padreService.getPadreById(id).subscribe(response => {
          this.formGroupPadre.setValue(response);
          console.log(this.formGroupPadre.value);
        });
      }
    });
  }
  updatePadre(valores): void{
    this.padreService.updatePadre(valores).subscribe(response => this.router.navigate(['/padres']));
    // console.log('update');
  }

}
