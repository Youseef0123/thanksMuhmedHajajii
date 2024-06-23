import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavAuthComponent } from './component/nav-auth/nav-auth.component';
import { NavBlankComponent } from './component/nav-blank/nav-blank.component';
import { HomeComponent } from './component/home/home.component';
import { BrandsComponent } from './component/brands/brands.component';
import { CartComponent } from './component/cart/cart.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { ProductsComponent } from './component/products/products.component';
import { BlankLayoutComponent } from './component/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './component/auth-layout/auth-layout.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { NotfoundComponent } from './component/notfound/notfound.component';

const routes: Routes = [

  {path:"",component:BlankLayoutComponent, children:[
    {path:"",redirectTo:"home",pathMatch:'full'},
    {path:"home",component:HomeComponent},
    {path:"brands",component:BrandsComponent},
    {path:"categories",component:CategoriesComponent},
    {path:"products",component:ProductsComponent},
    {path:"cart",component:CartComponent},
  ],
},


  {path:"",component:AuthLayoutComponent,
  children:[
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
  ],



},

{path:'**',component:NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
