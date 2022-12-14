import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
//import { resolve } from 'dns';
import { Observable } from 'rxjs';

interface ErrorValidate {
  [s: string]: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class ValidadoresService {
  constructor() {}

  existeUsuario(
    control: FormControl
  ): Promise<ErrorValidate> | Observable<ErrorValidate> {
    if (!control.value) {
      return Promise.resolve({});
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'strider') {
          resolve({ existe: true });
        } else {
          resolve({});
        }
      }, 3500);
    });
  }

  noLoayza(control: FormControl): ErrorValidate {
    if (control.value?.toLowerCase() === 'loayza') {
      return {
        noLoayza: true,
      };
    }
    return {};
  }

  passwordsIguales(pass1Name: string, pass2Name: string) {
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.controls[pass1Name];
      const pass2Control = formGroup.controls[pass2Name];

      if (pass1Control.value === pass2Control.value) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ noEsIgual: true });
      }
    };
  }
}
