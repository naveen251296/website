import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { DemoComponent } from './Pages/demo/demo.component';
import { HomeComponent } from './Pages/home/home.component';
import { InvoiceComponent } from './Pages/invoice/invoice.component';
import { RoutingComponent } from './Pages/routing/routing.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Home', component: HomeComponent },
    
    { path: 'Invoice', component: InvoiceComponent },
    
    { path: 'Routing', component: RoutingComponent },
    
    { path: 'Demo', component: DemoComponent },
    
    { path: 'Contact', component: ContactComponent }
    
];

