import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscrip-sc',
  templateUrl: './inscrip-sc.component.html',
  styleUrls: ['./inscrip-sc.component.css']
})
export class InscripSCComponent implements OnInit {
  inscriSocieteForm !: FormGroup;
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.inscriSocieteForm = this.fb.nonNullable.group({
      Nom:['',[Validators.required, Validators.minLength(3),Validators.pattern('^[A-Z][a-zA-Z]+$')]],
      Activite:['',[Validators.required, Validators.minLength(3),Validators.pattern('^[A-Z][a-zA-Z]+$')]],
      Email :['',[Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}$'),Validators.pattern('^[A-Z][a-zA-Z]+$')] ],
      Adresse : ['', [Validators.required, Validators.pattern('^[A-Z][a-zA-Z]+$')]],
      Lettre : ['', [Validators.required, Validators.pattern('^[A-Z][a-zA-Z]+$')]],
      Logo: ['', [Validators.required, this.fileTypeValidator(['pdf', 'doc', 'docx','png','jpg'])]]
    })
  }
  fileTypeValidator(allowedTypes: string[]) {
    return (control: AbstractControl): ValidationErrors | null => {
      const file = control.value;
      if (file) {
        const fileType = file.name.split('.').pop().toLowerCase();
        if (!allowedTypes.includes(fileType)) {
          return { invalidFileType: true };
        }
      }
      return null;
    };
  }

  public get nom(){
    return this.inscriSocieteForm.get('Nom');
  }
  public get activite(){
    return this.inscriSocieteForm.get('Activite');
  }
  public get adresse(){
    return this.inscriSocieteForm.get('Adresse');
  }
  public get lettre(){
    return this.inscriSocieteForm.get('Lettre');
  }
  public get email(){
    return this.inscriSocieteForm.get('Email');
  }

}
