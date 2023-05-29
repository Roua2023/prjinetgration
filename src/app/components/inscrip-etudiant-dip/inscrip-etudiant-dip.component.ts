import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscrip-etudiant-dip',
  templateUrl: './inscrip-etudiant-dip.component.html',
  styleUrls: ['./inscrip-etudiant-dip.component.css']
})
export class InscripEtudiantDipComponent implements OnInit {
  etudiantDiplomeForm !: FormGroup;
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.etudiantDiplomeForm= this.fb.group({
      Nom:['',[Validators.required, Validators.minLength(3),Validators.pattern('^[A-Z][a-zA-Z]+$')]],
      Prenom:['',[Validators.required, Validators.minLength(3),Validators.pattern('^[A-Z][a-zA-Z]+$')]],
      Email :['',[Validators.required, Validators.pattern('^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+.[a-zA-Z.]{2,15}$'),Validators.pattern('^[A-Z][a-zA-Z]+$')] ],
      Adresse : ['', [Validators.required, Validators.pattern('^[A-Z][a-zA-Z]+$')]],
      Lettre : ['', [Validators.required, Validators.pattern('^[A-Z][a-zA-Z]+$')]],
      CV: ['', [Validators.required, this.fileTypeValidator(['pdf', 'doc', 'docx','png','jpg'])]],
      diplome : ['', [Validators.required, this.fileTypeValidator(['pdf', 'doc', 'docx','png','jpg'])]]
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
    return this.etudiantDiplomeForm.get('Nom');
  }
  public get prenom(){
    return this.etudiantDiplomeForm.get('Prenom');
  }
  public get adresse(){
    return this.etudiantDiplomeForm.get('Adresse');
  }
  public get lettre(){
    return this.etudiantDiplomeForm.get('Lettre');
  }
  public get cv(){
    return this.etudiantDiplomeForm.get('CV');
  }
  public get email(){
    return this.etudiantDiplomeForm.get('Email');
  }
  public get diplome(){
    return this.etudiantDiplomeForm.get('diplome');
  }
}
