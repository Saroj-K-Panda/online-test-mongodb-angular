import { Component, OnInit,Input  } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from "@angular/forms";
import { Router } from '@angular/router';
import { CandidateProfileService } from '../../services/candidate-profile.service';



@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.scss']
})
export class CandidateProfileComponent implements OnInit {
  candidateProfileForm: FormGroup;
  submitted = false;
  data;
  validatedata;
  loading = false;

  /* this.candidateProfileForm = new FormGroup({

  }); */

  constructor(private formBuilder: FormBuilder, private router: Router, private candidateProfileService: CandidateProfileService) {

  }

  ngOnInit() {
    this.candidateProfileForm = this.formBuilder.group({
      name: new FormControl('', [  
        Validators.required]),
      mobileno: new FormControl('', [  
        Validators.required,  
        Validators.minLength(10),   
        Validators.pattern('^[0-9]*$')]),  
       emailid: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ]),
      skill: new FormControl('', [  
        Validators.required
      ]),
      experience: new FormControl('', [  
        Validators.required   
      ])
    });
    this.onChanges();
  }

  onChanges(): void {
    console.log("hello");
  }
  get f() { return this.candidateProfileForm.controls; }

  onSubmit() {
    console.log("m inside submit()....................", this.candidateProfileForm);
    this.submitted = true;
    if (this.candidateProfileForm.invalid) {
      console.log("m inside candidateProfileForm.invalid....................");
      return;
    }
    console.log("m inside submit()");
    this.loading = true;
    console.log(this.candidateProfileForm.value);
    
    let postProfileData: any = {
      "name": this.candidateProfileForm.value.name,
      "mobileno": this.candidateProfileForm.value.mobileno,
      "emailid": this.candidateProfileForm.value.emailid,
      "skill": this.candidateProfileForm.value.skill,
      "experience": this.candidateProfileForm.value.experience
    }
    console.log('postProfileData:', postProfileData);

    

    this.candidateProfileService.save_candidate_profile(postProfileData).subscribe(resp => {
      console.log(resp, "res");
      this.data = resp;
      
    }),
      error => {
        alert("Error....");
      }  
  }

  onReset() {
    this.submitted = false;
    this.candidateProfileForm.reset();
  }
}
