import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AboutComponent } from './pages/about/about.component';
import { DetailsComponent } from './pages/details/details.component';
import { SigninComponent } from './pages/signin/signin.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  { path: '', component:  HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'destinations', component: DestinationsComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'cart', component: CartComponent},
  { path: 'details/:id', component: DetailsComponent},
  { path: 'signin', component: SigninComponent},
];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
