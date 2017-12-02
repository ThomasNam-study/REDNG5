import {
  Directive, DoCheck, EmbeddedViewRef, Input, IterableChangeRecord, IterableChanges, IterableDiffer,
  IterableDiffers,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector : '[myTree]'
})
export class MyTreeDirective {
  template: TemplateRef<any> = null;

  depth = 0;
}

@Directive({
  selector : '[myTreeNode]'
})
export class MyTreeNodeDirective implements OnChanges, DoCheck
{
  @Input() treeNodeOf: any;

  private _differ: IterableDiffer<any> = null;

  constructor( private myTree: MyTreeDirective,
               private template: TemplateRef<any>,
               private viewContainer: ViewContainerRef,
               private _differs: IterableDiffers) {
    this.myTree.template = this.template;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('treeNodeOf' in changes)
    {
      const value = changes['treeNodeOf'].currentValue;

      if (!this._differ && value)
      {
        try
        {
          this._differ = this._differs.find(value).create();
        }
        catch (e)
        {
          throw new Error ('error');
        }
      }
    }
  }

  ngDoCheck ()
  {
    if (this._differ)
    {
      const changes = this._differ.diff((this.treeNodeOf));

      if (changes)
      {
        this._applyChanges(changes);
      }
    }
  }

  private _applyChanges(changes: IterableChanges<any>)
  {
    // myTree 에 지정된 depth 를 지정해두고, myTree 에 새로운 depth 를 설정한다. (루트 노드이므로 0 이다.)

    let prevDepth = this.myTree.depth;

    this.myTree.depth = 0;

    const insertTuples = [];

    changes.forEachOperation( (item: IterableChangeRecord<any>, adjustedPreviousIndex: number, currentIndex: number) => {
      if (item.previousIndex == null)
      {
        const view = this.viewContainer.createEmbeddedView(this.template, null, currentIndex);

        insertTuples.push ({view: view, record: item});
      }
      else if (currentIndex == null)
      {
        this.viewContainer.remove(adjustedPreviousIndex);
      }
      else {
        const view = this.viewContainer.get(adjustedPreviousIndex);
        this.viewContainer.move(view, currentIndex);
        insertTuples.push(({view:view, record: item}));
      }
    });

    for (let i = 0; i < insertTuples.length; i++)
    {
      insertTuples[i].view.context.$implicit = insertTuples[i].record.item;
    }

    for (let i = 0, ilen = this.viewContainer.length; i < ilen; i++)
    {
      let viewRef = <EmbeddedViewRef<any>> this.viewContainer.get(i);

      viewRef.context.index = i;
      viewRef.context.depth = 0;
      viewRef.context.count = ilen;
    }

    changes.forEachIdentityChange((record: any) => {
      let viewRef = <EmbeddedViewRef<any>> this.viewContainer.get(record.currentIndex);
      viewRef.context.$implicit = record.item;
    });

    // myTree에 원래 depth 를 복구한다.
    this.myTree.depth = prevDepth;

  }
}

@Directive({
  selector : 'tree-children'
})
export class TreeChildren implements OnChanges, DoCheck
{
  @Input() children;

  private template;

  private depth;

  private _differ : IterableDiffer<any> = null;

  constructor (private myTree: MyTreeDirective, private viewContainer: ViewContainerRef, private _differs: IterableDiffers)
  {
    this.template = this.myTree.template;
    this.depth = this.myTree.depth + 1;
  }

  ngOnChanges(changes: SimpleChanges): void {

    if ('children' in changes)
    {
      const value = changes['children'].currentValue;

      if (!this._differ && value)
      {
        try
        {
          this._differ = this._differs.find(value).create();
        }
        catch (e)
        {
          throw new Error ('error');
        }
      }
    }
  }


  ngDoCheck(): void {
    if (this._differ)
    {
      const changes = this._differ.diff((this.children));

      if (changes)
      {
        this._applyChanges(changes);
      }
    }
  }

  private _applyChanges(changes: IterableChanges<any>)
  {
    // myTree 에 지정된 depth 를 지정해두고, myTree 에 새로운 depth 를 설정한다. (루트 노드이므로 0 이다.)

    let prevDepth = this.myTree.depth;
    this.myTree.depth = this.depth;

    const insertTuples = [];

    changes.forEachOperation( (item: IterableChangeRecord<any>, adjustedPreviousIndex: number, currentIndex: number) => {
      if (item.previousIndex == null)
      {
        const view = this.viewContainer.createEmbeddedView(this.template, null, currentIndex);

        insertTuples.push ({view: view, record: item});
      }
      else if (currentIndex == null)
      {
        this.viewContainer.remove(adjustedPreviousIndex);
      }
      else {
        const view = this.viewContainer.get(adjustedPreviousIndex);
        this.viewContainer.move(view, currentIndex);
        insertTuples.push(({view:view, record: item}));
      }
    });

    for (let i = 0; i < insertTuples.length; i++)
    {
      insertTuples[i].view.context.$implicit = insertTuples[i].record.item;
    }

    for (let i = 0, ilen = this.viewContainer.length; i < ilen; i++)
    {
      let viewRef = <EmbeddedViewRef<any>> this.viewContainer.get(i);

      viewRef.context.index = i;
      viewRef.context.depth = this.depth;
      viewRef.context.count = ilen;
    }

    changes.forEachIdentityChange((record: any) => {
      let viewRef = <EmbeddedViewRef<any>> this.viewContainer.get(record.currentIndex);
      viewRef.context.$implicit = record.item;
    });

    // myTree에 원래 depth 를 복구한다.
    this.myTree.depth = prevDepth;

  }
}
