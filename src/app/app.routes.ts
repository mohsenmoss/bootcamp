import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { Form2Component } from './form2/form2.component';

export const routes: Routes = [
    {
        path:"form2",
         component: Form2Component

    },
    {
        path:"form",
        component: FormComponent

    }


];
