import { Component, OnInit } from '@angular/core';
import { CreateMember } from 'src/app/_interfaces/create-member';
import { MemberService } from 'src/app/_services/member.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import { Member } from 'src/app/_interfaces/member';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  checkoutForm: FormGroup = new FormGroup({});

  constructor(private MemberService: MemberService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      email: '',
      semester: 0,
      career: '',
    });
   }

  Miembro: CreateMember | undefined;
  respuesta: string = '';
  errorMessage: string = '';

  ngOnInit(): void {
  }


  crear(){
    this.MemberService.createMember(this.checkoutForm.value).subscribe( {
      next: (result) => {
        this.respuesta = 'Miembro creado';
      },
      error: (result) => {
        if (typeof result.error === 'string') {
          this.errorMessage = result.error;
        } else {
          this.errorMessage = 'Intente nuevamente';
        }
      },
    });
  }
}
