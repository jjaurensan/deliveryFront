import { Component, OnInit } from '@angular/core';
import { CarrierService } from '../../../webservice/carrier.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Carrier } from 'src/app/shared/class/carrier';
@Component({
  selector: 'app-add-carrier',
  templateUrl: './add-carrier.component.html',
  styleUrls: ['./add-carrier.component.scss']
})
export class AddCarrierComponent implements OnInit {

  carrierForm: FormGroup;

  constructor(
    private carrierService: CarrierService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.carrierForm = this.formBuilder.group({
      name: '',
      streetOne: '',
      streetTwo: '',
      cityCode: '',
      city: '',
      phone: ''
    });
  }
  onSubmitForm() {
    console.log(this.carrierForm.value);
    const formValue = this.carrierForm.value;
    console.log(formValue);

    const newCarrier = new Carrier(
      formValue.name,
      formValue.streetOne,
      formValue.streetTwo,
      formValue.cityCode,
      formValue.city,
      formValue.phone
    );
    this.carrierService
      .addCarrier(newCarrier)
      .subscribe();
    console.log('OK add Carrier');
  }
}