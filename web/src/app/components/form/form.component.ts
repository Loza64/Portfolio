import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  standalone: true
})
export class FormComponent {

  fg: FormGroup

  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({
      firts_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.fg.invalid) {
      this.fg.markAllAsTouched();
      return;
    }
    console.log(this.fg.value);
  }

}
