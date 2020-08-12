import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form = this.fb.group({
    selectData: ['', [Validators.required]],
    keywords: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  get selectData(): FormControl {
    return this.form.get('selectData') as FormControl;
  }

  get keywords(): FormControl {
    return this.form.get('keywords') as FormControl;
  }

  ngOnInit(): void {}

  submit() {
    console.log(this.form.value);
  }
}
