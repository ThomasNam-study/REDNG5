import {Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {ChildComponentComponent} from './child-component.component';
import {Dialog} from 'primeng/dialog';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styles: []
})
export class MyComponentComponent implements OnInit {

  @ViewChild("temp") template;



  constructor(private vcr: ViewContainerRef, private resolver: ComponentFactoryResolver) {

  }

  items = ["hello", "world"];

  ngOnInit() {
    this.vcr.createEmbeddedView(this.template);


  }

  openDialog ()
  {
    let f = this.resolver.resolveComponentFactory(ChildComponentComponent);

    let t = this.vcr.createComponent(f);



    console.dir(t);




    t.instance.closeEvent.subscribe((r) => {
      console.log ("Close!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

      t.destroy();
    });

    t.instance.showDialog();
  }
}
