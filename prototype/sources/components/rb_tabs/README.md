#Tabs
<p class="docs-intro">Creates a tab seperated layout, where multiple content panels are displayed in the same space with a intuitive navigation</p>

##Usage

- To apply the tab component add the `rb-tab` class and attribute `data-module="tab"` to a container element.
- Panel animations can be applied by adding an modifier class to the component, for example `is-fade`.

<h3 class="docs-example-title">Demo</h3>
<div class="docs-example">
{{#with rb_tabs.default}}
{{> rb_tabs }}
{{/with}}
</div>


<h3 class="docs-example-title">Markup</h3>

```html
<div class="rb-tabs js-rb-life" data-module="tabs">
    <ul class="tabs-nav">
         <li class="tabs-nav-item">
             <button type="button" class="tabs-btn">Heading</button>
         </li>
        ...
    </ul>
    <div class="tabs-panel-wrapper">
        <div class="tabs-panel">
            <div class="tabs-content">
                content here!
            </div>
        </div>
        ...
    </div>
</div>
```

{{> docs_js_life }}

<hr>
