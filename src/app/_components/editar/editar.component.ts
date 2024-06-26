import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { MemberService } from 'src/app/_services/member.service';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  constructor(private MemberService: MemberService, private formBuilder: FormBuilder) {}

  respuesta: string = '';
  errorMessage: string = '';
  checkoutForm: FormGroup = this.formBuilder.group({
    name: '',
    email: '',
    semester: 0,
    career: '',
  });


  editar(){
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
