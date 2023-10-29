import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css'],
})
export class StudentManagementComponent {
  studentForm: FormGroup;
  students: any[] = [];
  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      personalNumber: ['', Validators.required],
      address: this.fb.group({
        city: ['', Validators.required],
        street: ['', Validators.required],
      }),
      languages: this.fb.array(['']), // You can add validators here if needed
    });
  }
  addLanguage() {
    const languages = this.studentForm.get('languages') as FormArray;

    languages.push(this.fb.control(''));
  }

  // Function to remove a language form control
  getLanguageControls(): FormControl[] {
    return (this.studentForm.get('languages') as FormArray)
      .controls as FormControl[];
  }

  removeLanguage(index: number) {
    const languages = this.studentForm.get('languages') as FormArray;
    languages.removeAt(index);
  }

  clearLanguages() {
    const languages = this.studentForm.get('languages') as FormArray;
    while (languages.length !== 1) {
      languages.removeAt(0);
    }
  }
  addStudent() {
    if (this.studentForm.valid) {
      const languages = this.studentForm.get('languages') as FormArray;
      const filteredLanguages = languages.controls
        .map((languageControl) => languageControl.value.trim())
        .filter((language) => language !== '');

      const newStudent = {
        ...this.studentForm.value,
        languages: filteredLanguages,
      };

      this.students.push(newStudent);
      this.studentForm.reset();
      this.clearLanguages();
    } else {
      alert('Please fill all fields');
    }
  }
}
