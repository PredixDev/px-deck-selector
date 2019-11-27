const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="px-deck-selector-styles">
<template>
<style>
@charset "UTF-8";/*! normalize.css v3.0.2 | MIT License | git.io/normalize */html{background-color:var(--px-base-background-color,#fff);font-size:15px;overflow-y:scroll;min-height:100%;box-sizing:border-box}:host,html{color:var(--px-base-text-color,#2c404c);line-height:1.33333;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}body,figure{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}address,blockquote,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,ol,p,pre,table,ul{margin-bottom:1rem}li>ol,li>ul{margin-bottom:0}dd,ol,ul{margin-left:2rem}img{max-width:100%;border:0}svg:not(:root){overflow:hidden}hr{box-sizing:content-box;height:0}pre{overflow:auto}*,:after,:before{box-sizing:inherit}:host{/*! Comment to prevent cssmin munging this rule with html above and borking Safari */box-sizing:border-box}a{background-color:transparent}a:link,a:visited{color:#007acc}a:hover{color:#005c99}a:active{color:#003d66}a:active,a:hover{outline:0}.float--right{float:right!important}.float--left{float:left!important}.float--none{float:none!important}.text--left{text-align:left!important}.text--center{text-align:center!important}.proceed,.text--right{text-align:right!important}.full-height{height:100%!important}.informative{cursor:help!important}.pointer{cursor:pointer!important}.muted{opacity:.5!important}.caps{text-transform:uppercase!important}.hidden{display:none!important;visibility:hidden}.a11y,.visuallyhidden{position:absolute!important;overflow:hidden!important;width:1px!important;height:1px!important;margin:-1px!important;border:0!important;padding:0!important;clip:rect(0 0 0 0)!important}.a11y.focusable:active,.a11y.focusable:focus,.visuallyhidden.focusable:active,.visuallyhidden.focusable:focus{position:static;overflow:visible;width:auto;height:auto;margin:0;clip:auto}@media screen and (min-width:45em) and (max-width:63.9375em){.a11y-lap,.visuallyhidden-lap{position:absolute!important;overflow:hidden!important;width:1px!important;height:1px!important;margin:-1px!important;border:0!important;padding:0!important;clip:rect(0 0 0 0)!important}}@media screen and (max-width:63.9375em){.a11y-portable,.visuallyhidden-portable{position:absolute!important;overflow:hidden!important;width:1px!important;height:1px!important;margin:-1px!important;border:0!important;padding:0!important;clip:rect(0 0 0 0)!important}}@media screen and (max-width:44.9375em){.a11y-palm,.visuallyhidden-palm{position:absolute!important;overflow:hidden!important;width:1px!important;height:1px!important;margin:-1px!important;border:0!important;padding:0!important;clip:rect(0 0 0 0)!important}}@media screen and (min-width:45em){.a11y-lap-and-up,.visuallyhidden-lap-and-up{position:absolute!important;overflow:hidden!important;width:1px!important;height:1px!important;margin:-1px!important;border:0!important;padding:0!important;clip:rect(0 0 0 0)!important}}@media screen and (min-width:64em){.a11y-desk,.a11y-desk-and-up,.visuallyhidden-desk,.visuallyhidden-desk-and-up{position:absolute!important;overflow:hidden!important;width:1px!important;height:1px!important;margin:-1px!important;border:0!important;padding:0!important;clip:rect(0 0 0 0)!important}}@media screen and (min-width:120em){.a11y-large-and-up,.visuallyhidden-large-and-up{position:absolute!important;overflow:hidden!important;width:1px!important;height:1px!important;margin:-1px!important;border:0!important;padding:0!important;clip:rect(0 0 0 0)!important}}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi),(min-resolution:2dppx){.a11y-retina,.visuallyhidden-retina{position:absolute!important;overflow:hidden!important;width:1px!important;height:1px!important;margin:-1px!important;border:0!important;padding:0!important;clip:rect(0 0 0 0)!important}}.invisible{visibility:hidden!important}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.list-bare{margin:0;padding:0;list-style:none;line-height:20px}.actionable{height:auto;border:0;border-radius:0;padding:0;box-shadow:none;background:0 0;white-space:nowrap;line-height:inherit;text-decoration:none;font:inherit;-webkit-font-smoothing:antitodoed;cursor:pointer;transition:color .4s}.actionable,.actionable:active,.actionable:focus,.actionable:link,.actionable:visited{color:var(--px-actionable-text-color,#007acc);outline:inherit}.actionable:hover{color:var(--px-actionable-text-color--hover,#005c99)}.actionable:active{color:var(--px-actionable-text-color--active,#003d66)}.actionable--select,.actionable--select:active,.actionable--select:focus,.actionable--select:link,.actionable--select:visited{color:var(--px-selectable-text-color,#09819c)}.actionable--select:hover{color:var(--px-selectable-text-color--hover,#065769)}.actionable--select:active{color:var(--px-selectable-text-color--active,#032c36)}.actionable--action,.actionable--action:active,.actionable--action:focus,.actionable--action:link,.actionable--action:visited,.actionable--secondary,.actionable--secondary:active,.actionable--secondary:focus,.actionable--secondary:link,.actionable--secondary:visited{color:var(--px-actionable-alt-text-color,#2c404c)}.actionable--action:hover,.actionable--secondary:hover{color:var(--px-actionable-alt-text-color--hover,#007acc)}.actionable--action:active,.actionable--secondary:active{color:var(--px-actionable-alt-text-color--active,#003d66)}.actionable--disabled,.actionable--disabled:active,.actionable--disabled:hover,.actionable--disabled:link,.actionable--disabled:visited,.actionable[disabled],.actionable[disabled]:active,.actionable[disabled]:hover,.actionable[disabled]:link,.actionable[disabled]:visited{cursor:not-allowed;color:var(--px-actionable-disabled-text-color,rgba(0,0,0,.3))}.actionable--small{font-size:.8rem}.actionable--large{font-size:1.33333rem}.actionable--huge{font-size:2rem}:host>*{--iron-icon-height:15px;--iron-icon-width:15px}px-icon{margin-left:5px}.dropdown-text{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-left:15px;display:flex;flex-direction:row;align-items:center;transition:color .4s}.dropdown-text span{max-width:16rem}.dropdown-menu{cursor:pointer;position:absolute;max-width:20rem;word-wrap:break-word;margin-top:.33333rem;z-index:99;border:1px solid var(--px-deck-selector-border-color,#d3d3d3);background-color:var(--px-deck-selector-background-color,#fff);box-shadow:0 1px 3px 0 var(--px-deck-selector-shadow-color,rgba(0,0,0,.2))}.dropdown-menu__item{padding-left:1rem;padding-right:1rem;height:2rem;display:flex;align-items:center;color:var(--px-deck-selector-text-color,#000)}.dropdown-menu__item:hover{color:var(--px-deck-selector-text-color--hover,#000);background-color:var(--px-deck-selector-background-color--hover,#d3d3d3)}.dropdown-menu__item.selected{color:var(--px-deck-selector-text-color--selected,#fff);background-color:var(--px-deck-selector-background-color--selected,#00f)}.dropdown-menu__item--deck-editor{border-top:1px solid var(--px-deck-selector-li-border,#d3d3d3)}
</style>
</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
;