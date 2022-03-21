import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./modules/material.module";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { DoughnutComponent } from './components/doughnut/doughnut.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { LogoComponent } from './components/logo/logo.component';
import { HttpClientModule } from "@angular/common/http";
import { LoadingBoxComponent } from './components/loading-box/loading-box.component';

@NgModule({
    declarations: [
        ShortenPipe,
        HeaderComponent,
        FooterComponent,
        ErrorPageComponent,
        DoughnutComponent,
        LineChartComponent,
        DataTableComponent,
        LogoComponent,
        LoadingBoxComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        HttpClientModule
    ],
    exports: [
        MaterialModule,
        HeaderComponent,
        FooterComponent,
        ErrorPageComponent,
        DoughnutComponent,
        LineChartComponent,
        DataTableComponent,
        LogoComponent,
        LoadingBoxComponent
    ],
    providers: []
})
export class SharedModule { }