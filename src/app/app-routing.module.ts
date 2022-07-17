import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FichePosteComponent } from './fiche-poste/fiche-poste.component';
import { PostesPageComponent } from './postes-page/postes-page.component';

import { DemandesCondidatComponent } from './demandes-condidat/demandes-condidat.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { EspaceCondidatComponent } from './espace-condidat/espace-condidat.component';
import { ErrorPopupComponent } from './error-popup/error-popup.component';
import { SuccessPopupComponent } from './success-popup/success-popup.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { ProfileComponent } from './profile/profile.component';
import { OffresComponent } from './offres/offres.component';
import { CandidaturesComponent } from './candidatures/candidatures.component';
import { TestTechniquesComponent } from './test-techniques/test-techniques.component';
import { EntretienRHsComponent } from './entretien-rhs/entretien-rhs.component';
import { AjoutOffreComponent } from './ajout-offre/ajout-offre.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UploadComponent } from './upload/upload.component';
import { AjoutCandidatureComponent } from './ajout-candidature/ajout-candidature.component';
import { NosOffresComponent } from './nos-offres/nos-offres.component';


const routes: Routes = [
{ path : '', component : PageAccueilComponent },
{ path : 'Register', component : RegisterComponent },
{ path : 'Login', component : LoginComponent},
{ path : 'FichePoste/:id', component : FichePosteComponent },
{ path : 'PostesPage', component : PostesPageComponent},
{ path : 'EspaceCondidat', component : EspaceCondidatComponent },
{ path : 'DemandesCondidat', component : DemandesCondidatComponent },
{ path : 'UpdateProfile', component : UpdateProfileComponent },
{ path : 'Error', component : ErrorPopupComponent },
{ path : 'Success', component : SuccessPopupComponent },
{ path : 'Profile', component : ProfileComponent },
{ path : 'AjoutCandidature', component : AjoutCandidatureComponent },
{ path : 'NosOffres', component : NosOffresComponent},

{path:'Offres',
    component: SidebarComponent,
    children:[
      {path:'', component:OffresComponent}
    ]
},
{path:'Candidatures',
    component: SidebarComponent,
    children:[
      {path:'', component:CandidaturesComponent}
    ]
},
{path:'TestTechniques',
    component: SidebarComponent,
    children:[
      {path:'', component:TestTechniquesComponent}
    ]
},
{path:'EntretienRHs',
    component: SidebarComponent,
    children:[
      {path:'', component:EntretienRHsComponent}
    ]
},

{ path : 'AjoutOffre', component : AjoutOffreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
