import { Component, OnInit, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from '../../../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, AfterViewInit, OnDestroy {

  isLoading = false;
  loadingSubscription: Subscription;

  constructor(
    public loadingService: LoadingService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.loadingSubscription = this.loadingService.loading.subscribe((status:boolean) => {
      this.isLoading = status;
      this.changeDetectorRef.detectChanges();
    })
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

}
