(function(_ds){var window=this;var K1=_ds.hI([".button,.devsite-footer-utility-button>a,button,input[type=button],input[type=file],input[type=image],input[type=reset],input[type=submit]{-ms-flex-item-align:var(--devsite-button-align-self);-webkit-margin-end:var(--devsite-button-margin-x-end);-moz-margin-end:var(--devsite-button-margin-x-end);-webkit-align-self:var(--devsite-button-align-self);align-self:var(--devsite-button-align-self);-moz-appearance:none;-webkit-appearance:none;background:var(--devsite-button-background,var(--devsite-background-1));border:var(--devsite-button-border,0);border-radius:var(--devsite-button-border-radius,2px);box-shadow:var(--devsite-button-box-shadow,0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 1px 3px 1px var(--devsite-elevation-ambient-shadow-color));-moz-box-sizing:border-box;box-sizing:border-box;color:var(--devsite-button-color);cursor:pointer;display:inline-block;font:var(--devsite-button-font,500 14px/36px var(--devsite-primary-font-family));height:var(--devsite-button-height,36px);letter-spacing:var(--devsite-button-letter-spacing,0);line-height:var(--devsite-button-line-height,36px);margin:var(--devsite-button-margin,0);margin-inline-end:var(--devsite-button-margin-x-end);max-width:var(--devsite-button-max-width,none);min-width:36px;outline:0;overflow:hidden;padding:var(--devsite-button-padding,0 16px);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:var(--devsite-button-text-transform,uppercase);-webkit-transition:background-color .2s,border .2s,box-shadow .2s;transition:background-color .2s,border .2s,box-shadow .2s;vertical-align:middle;white-space:nowrap;width:var(--devsite-button-width,auto)}.button:focus,.button:hover,.devsite-footer-utility-button>a:focus,.devsite-footer-utility-button>a:hover,button:focus,button:hover,input[type=button]:focus,input[type=button]:hover,input[type=file]:focus,input[type=file]:hover,input[type=image]:focus,input[type=image]:hover,input[type=reset]:focus,input[type=reset]:hover,input[type=submit]:focus,input[type=submit]:hover{background:var(--devsite-button-background-hover);border:var(--devsite-button-border-hover,0);color:var(--devsite-button-color-hover,var(--devsite-button-color));font-weight:500;-webkit-text-decoration:var(--devsite-button-text-decoration-hover,none);-moz-text-decoration:var(--devsite-button-text-decoration-hover,none);text-decoration:var(--devsite-button-text-decoration-hover,none)}.button:focus,.devsite-footer-utility-button>a:focus,button:focus,input[type=button]:focus,input[type=file]:focus,input[type=image]:focus,input[type=reset]:focus,input[type=submit]:focus{box-shadow:var(--devsite-button-box-shadow-focus,none)}.button:active,.devsite-footer-utility-button>a:active,button:active,input[type=button]:active,input[type=file]:active,input[type=image]:active,input[type=reset]:active,input[type=submit]:active{background:var(--devsite-button-background-active);border:var(--devsite-button-border-active,0);box-shadow:var(--devsite-button-box-shadow-active,0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 2px 6px 2px var(--devsite-elevation-ambient-shadow-color));-webkit-transform:var(--devsite-button-transform-active,none);transform:var(--devsite-button-transform-active,none)}[foreground] .button,[foreground][background] .button{border-color:var(--devsite-foreground-button-border-color,transparent)}[foreground] .button,[foreground] .button:active,[foreground] .button:focus,[foreground] .button:hover,[foreground][background] .button,[foreground][background] .button:active,[foreground][background] .button:focus,[foreground][background] .button:hover{color:var(--devsite-foreground-button-color,var(--devsite-foreground-color,var(--devsite-primary-color,var(--devsite-button-color))))}[foreground] .button:active,[foreground] .button:focus,[foreground] .button:hover,[foreground][background] .button:active,[foreground][background] .button:focus,[foreground][background] .button:hover{background:var(--devsite-foreground-button-background-hover);border-color:var(--devsite-foreground-button-border-color-hover,transparent);color:var(--devsite-foreground-button-color-hover,var(--devsite-foreground-color,var(--devsite-primary-color,var(--devsite-button-color))))}[foreground] .button:active,[foreground][background] .button:active{background:var(--devsite-foreground-button-background-active,var(--devsite-foreground-button-background-hover));border-color:var(--devsite-foreground-button-border-color-active,transparent)}[background]:not(.devsite-landing-row-cards) .button:not([disabled]){background:var(--devsite-background-button-background,var(--devsite-background-1));border-color:var(--devsite-background-button-border-color,transparent);color:var(--devsite-foreground-button-color,var(--devsite-background-button-color,var(--devsite-button-color)))}[background]:not(.devsite-landing-row-cards) .button:not([disabled]):active,[background]:not(.devsite-landing-row-cards) .button:not([disabled]):focus,[background]:not(.devsite-landing-row-cards) .button:not([disabled]):hover{background:var(--devsite-background-button-background-hover,var(--devsite-button-background-hover));border-color:var(--devsite-background-button-border-color-hover,transparent);color:var(--devsite-foreground-button-color-hover,var(--devsite-foreground-button-color,var(--devsite-background-button-color-hover,var(--devsite-button-color))))}[background]:not(.devsite-landing-row-cards) .button:not([disabled]):active{border-color:var(--devsite-background-button-border-color-active,transparent)}.button.button-disabled,.button.button-disabled:active,.button.button-disabled:focus,.button.button-disabled:hover,[background] .button.button-disabled,[background] .button.button-disabled:active,[background] .button.button-disabled:focus,[background] .button.button-disabled:hover,[foreground] .button.button-disabled,[foreground] .button.button-disabled:active,[foreground] .button.button-disabled:focus,[foreground] .button.button-disabled:hover,body[theme] [background] .button.button-disabled,body[theme] [background] .button.button-disabled:active,body[theme] [background] .button.button-disabled:focus,body[theme] [background] .button.button-disabled:hover,body[theme] [foreground] .button.button-disabled,body[theme] [foreground] .button.button-disabled:active,body[theme] [foreground] .button.button-disabled:focus,body[theme] [foreground] .button.button-disabled:hover,button[disabled],button[disabled]:active,button[disabled]:focus,button[disabled]:hover,input[type=button][disabled],input[type=button][disabled]:active,input[type=button][disabled]:focus,input[type=button][disabled]:hover,input[type=file][disabled],input[type=file][disabled]:active,input[type=file][disabled]:focus,input[type=file][disabled]:hover,input[type=image][disabled],input[type=image][disabled]:active,input[type=image][disabled]:focus,input[type=image][disabled]:hover,input[type=reset][disabled],input[type=reset][disabled]:active,input[type=reset][disabled]:focus,input[type=reset][disabled]:hover,input[type=submit][disabled],input[type=submit][disabled]:active,input[type=submit][disabled]:focus,input[type=submit][disabled]:hover{background:var(--devsite-button-disabled-background,#ddd);border:var(--devsite-button-disabled-border,0);box-shadow:none;color:var(--devsite-button-disabled-color,var(--devsite-tertiary-text-rgba));cursor:default;line-height:var(--devsite-button-disabled-line-height,36px);pointer-events:none}.button-blue,.button-green,.button-primary,.button-red,body devsite-footer-utility .devsite-footer-utility-button>a{background:var(--devsite-button-primary-background,var(--devsite-button-color));color:var(--devsite-button-primary-color,var(--devsite-inverted-text-color));line-height:var(--devsite-button-primary-line-height,36px)}.button-blue,.button-blue:active,.button-blue:focus,.button-blue:hover,.button-green,.button-green:active,.button-green:focus,.button-green:hover,.button-primary,.button-primary:active,.button-primary:focus,.button-primary:hover,.button-red,.button-red:active,.button-red:focus,.button-red:hover,body devsite-footer-utility .devsite-footer-utility-button>a,body devsite-footer-utility .devsite-footer-utility-button>a:active,body devsite-footer-utility .devsite-footer-utility-button>a:focus,body devsite-footer-utility .devsite-footer-utility-button>a:hover{border:0}.button-blue:hover,.button-green:hover,.button-primary:hover,.button-red:hover,body devsite-footer-utility .devsite-footer-utility-button>a:hover{box-shadow:var(--devsite-button-primary-box-shadow-hover,0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 1px 3px 1px var(--devsite-elevation-ambient-shadow-color))}.button-blue:focus,.button-blue:hover,.button-green:focus,.button-green:hover,.button-primary:focus,.button-primary:hover,.button-red:focus,.button-red:hover,body devsite-footer-utility .devsite-footer-utility-button>a:focus,body devsite-footer-utility .devsite-footer-utility-button>a:hover{background:var(--devsite-button-primary-background-hover);border:var(--devsite-button-primary-border-hover);color:var(--devsite-button-primary-color-hover,var(--devsite-inverted-text-color))}.button-blue:active,.button-green:active,.button-primary:active,.button-red:active,body devsite-footer-utility .devsite-footer-utility-button>a:active{background:var(--devsite-button-primary-background-active);box-shadow:var(--devsite-button-primary-box-shadow-active,0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 2px 6px 2px var(--devsite-elevation-ambient-shadow-color));color:var(--devsite-button-primary-color-active,var(--devsite-inverted-text-color))}[background]:not(.devsite-landing-row-cards) .button-primary:not([disabled]){background:var(--devsite-background-button-primary-background,var(--devsite-background-1));color:var(--devsite-background-button-primary-color,var(--devsite-button-color))}[background]:not(.devsite-landing-row-cards) .button-primary:not([disabled]):active,[background]:not(.devsite-landing-row-cards) .button-primary:not([disabled]):focus,[background]:not(.devsite-landing-row-cards) .button-primary:not([disabled]):hover{color:var(--devsite-background-button-primary-color-hover,var(--devsite-background-button-primary-color,var(--devsite-button-color)))}[background]:not(.devsite-landing-row-cards) .button-primary:not([disabled]):active,[background]:not(.devsite-landing-row-cards) .button-primary:not([disabled]):focus,[background]:not(.devsite-landing-row-cards) .button-primary:not([disabled]):hover{background:var(--devsite-background-button-primary-background-hover)}[foreground] .button-primary,[foreground][background] .button-primary{background:var(--devsite-foreground-button-primary-background);color:var(--devsite-foreground-button-primary-color,var(--devsite-inverted-text-color))}[foreground] .button-primary:active,[foreground] .button-primary:focus,[foreground] .button-primary:hover,[foreground][background] .button-primary:active,[foreground][background] .button-primary:focus,[foreground][background] .button-primary:hover{background:var(--devsite-foreground-button-primary-background-hover);color:var(--devsite-foreground-button-primary-color-hover,var(--devsite-foreground-button-primary-color,var(--devsite-inverted-text-color)))}.button-white{background:0;line-height:var(--devsite-button-white-line-height,36px);padding-inline:8px}.button-white,.button-white:active,.button-white:focus,.button-white:hover{border:0;color:var(--devsite-button-white-color,var(--devsite-button-color))}.button-white,.button-white:hover{box-shadow:var(--devsite-button-white-box-shadow-hover,none)}.button-white:active,.button-white:focus,.button-white:hover{-webkit-text-decoration:var(--devsite-button-white-text-decoration-hover,none);-moz-text-decoration:var(--devsite-button-white-text-decoration-hover,none);text-decoration:var(--devsite-button-white-text-decoration-hover,none)}.button-white:focus,.button-white:hover{background:var(--devsite-button-white-background-hover,var(--devsite-button-background-hover))}.button-white:focus{box-shadow:var(--devsite-button-white-box-shadow-focus,none)}.button-white:active{background:var(--devsite-button-white-background-active,var(--devsite-button-background-active));box-shadow:var(--devsite-button-white-box-shadow-active,none)}[background]:not(.devsite-landing-row-cards) .button-white:not([disabled]){background:transparent}[background]:not(.devsite-landing-row-cards) .button-white:not([disabled]),[background]:not(.devsite-landing-row-cards) .button-white:not([disabled]):active,[background]:not(.devsite-landing-row-cards) .button-white:not([disabled]):focus,[background]:not(.devsite-landing-row-cards) .button-white:not([disabled]):hover{color:var(--devsite-background-button-white-color,var(--devsite-inverted-text-color))}[background]:not(.devsite-landing-row-cards) .button-white:not([disabled]):hover{background:var(--devsite-background-button-white-background-hover)}[background]:not(.devsite-landing-row-cards) .button-white:not([disabled]):focus{background:var(--devsite-background-button-white-background-focus)}[background][foreground] .button-white,[background][foreground] .button-white:active,[background][foreground] .button-white:focus,[background][foreground] .button-white:hover,[foreground] .button-white,[foreground] .button-white:active,[foreground] .button-white:focus,[foreground] .button-white:hover{color:var(--devsite-foreground-button-white-color,var(--devsite-foreground-button-color,var(--devsite-foreground-color)))}[background][foreground] .button-white:focus,[background][foreground] .button-white:hover,[foreground] .button-white:focus,[foreground] .button-white:hover{background:var(--devsite-foreground-button-white-background-hover,var(--devsite-foreground-button-background-hover))}[background][foreground] .button-white:active,[foreground] .button-white:active{background:var(--devsite-foreground-button-white-background-active,var(--devsite-foreground-button-background-active,var(--devsite-foreground-button-background-hover)))}[background=theme]:not(.devsite-landing-row-cards) .button-white{color:var(--devsite-text-color,var(--devsite-inverted-text-color))}.button-white.button-disabled,.button-white[disabled]{background:0}.button-raised{background:var(--devsite-button-raised-background,var(--devsite-background-1));box-shadow:0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 1px 3px 1px var(--devsite-elevation-ambient-shadow-color);line-height:var(--devsite-button-raised-line-height,36px)}.button-raised,.button-raised:active,.button-raised:focus,.button-raised:hover{border:0;color:var(--devsite-button-raised-color,var(--devsite-button-color))}.button-raised:focus,.button-raised:hover{background:var(--devsite-button-raised-background-hover,var(--devsite-button-background-hover));box-shadow:0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 2px 6px 2px var(--devsite-elevation-ambient-shadow-color)}.button-raised:active{background:var(--devsite-button-raised-background-active,var(--devsite-button-background-active));box-shadow:0 1px 3px 0 var(--devsite-elevation-key-shadow-color),0 4px 8px 3px var(--devsite-elevation-ambient-shadow-color)}[background]:not(.devsite-landing-row-cards) .button-raised{background:var(--devsite-background-1)}.button+.button,button+button,input[type=button]+input[type=button],input[type=file]+input[type=file],input[type=image]+input[type=image],input[type=reset]+input[type=reset],input[type=submit]+input[type=submit]{-webkit-margin-start:var(--devsite-button-sibling-gap-x,16px);-moz-margin-start:var(--devsite-button-sibling-gap-x,16px);margin-inline-start:var(--devsite-button-sibling-gap-x,16px)}.button-flat+.button-flat,.button-white+.button-white,button+.button{-webkit-margin-start:8px;-moz-margin-start:8px;margin-inline-start:8px}.button-flat{padding-inline:8px}.button-flat,.button-flat:active,.button-flat:focus,.button-flat:hover{background:0;border:0;box-shadow:none}.button-flat:disabled{background-color:transparent}[foreground] .button-primary:active,[foreground] .button-primary:focus,[foreground] .button-primary:hover,[foreground] .button-raised:active,[foreground] .button-raised:focus,[foreground] .button-raised:hover,[foreground] .button-white:active,[foreground] .button-white:focus,[foreground] .button-white:hover{border:0}.button-transparent{padding-inline:8px}.button-transparent,.button-transparent:focus,.button-transparent:hover{background-color:transparent;border:0;box-shadow:none}.button-text-white{color:var(--devsite-inverted-text-color)}.button-text-blue{color:var(--devsite-link-color)}.button-lowercase{text-transform:none}.button-unindented{-webkit-margin-start:var(--devsite-button-unindented-margin-x,-8px);-moz-margin-start:var(--devsite-button-unindented-margin-x,-8px);margin-inline-start:var(--devsite-button-unindented-margin-x,-8px)}.button-icon,.button>.material-icons,button>.material-icons{font-size:18px;height:18px;width:18px}.button.button-with-icon,.button.external{padding:var(--devsite-button-with-icon-padding,0 16px)}.button-primary.button-with-icon,.button-primary.external,.button-raised.button-with-icon,.button-raised.external{padding:var(--devsite-button-primary-with-icon-padding,0 16px)}.button-white.button-with-icon,.button-white.external{padding-inline:16px}.button>.material-icons,button>.material-icons{direction:unset;margin-inline:8px;position:relative;top:-2px;vertical-align:middle}.button>.button-icon,button>.button-icon{margin-inline:8px}.button-with-icon>.button-icon,.button-with-icon>.material-icons{margin-inline:-4px 8px}.button-with-icon>.icon-after,.button.external:not(.button-with-icon):after,button.external:not(.button-with-icon):after{margin-inline:8px -4px}.button:not(.button-with-icon)>.material-icons:not(.icon-after){-webkit-margin-start:var(--devsite-button-material-icon-margin-x,-4px);-moz-margin-start:var(--devsite-button-material-icon-margin-x,-4px);margin-inline-start:var(--devsite-button-material-icon-margin-x,-4px)}.button:not(.button-with-icon)>.icon-after{-webkit-margin-end:var(--devsite-button-material-icon-margin-x,-4px);-moz-margin-end:var(--devsite-button-material-icon-margin-x,-4px);margin-inline-end:var(--devsite-button-material-icon-margin-x,-4px)}.button-white:not(.button-with-icon)>.material-icons:not(.icon-after){-webkit-margin-start:var(--devsite-button-white-material-icon-margin-x,4px);-moz-margin-start:var(--devsite-button-white-material-icon-margin-x,4px);margin-inline-start:var(--devsite-button-white-material-icon-margin-x,4px)}.button-white:not(.button-with-icon)>.icon-after{-webkit-margin-end:var(--devsite-button-white-material-icon-margin-x,4px);-moz-margin-end:var(--devsite-button-white-material-icon-margin-x,4px);margin-inline-end:var(--devsite-button-white-material-icon-margin-x,4px)}.devsite-landing-row-item[foreground=grey] .button,[foreground=grey] .button{background:var(--devsite-secondary-text-color)}.devsite-landing-row-item[foreground=grey] .button:active,.devsite-landing-row-item[foreground=grey] .button:focus,.devsite-landing-row-item[foreground=grey] .button:hover,[foreground=grey] .button:active,[foreground=grey] .button:focus,[foreground=grey] .button:hover{background:#3c4043}:host{--devsite-popout-top:calc(100% + $NOTCH_HEIGHT + 3px);--devsite-popout-width:min(50vw,320px);position:relative}.parent{inset-block:100% 0;inset-inline-start:50%}.parent,.popout{position:absolute}.popout{-webkit-box-orient:vertical;-webkit-box-direction:normal;-moz-box-orient:vertical;-moz-box-direction:normal;background:var(--devsite-feature-tooltip-background-color);border-radius:var(--devsite-feature-tooltip-border-radius);box-shadow:0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 2px 6px 2px var(--devsite-elevation-ambient-shadow-color);-moz-box-sizing:border-box;box-sizing:border-box;color:var(--devsite-inverted-text-color);display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-width:232px;padding-block:24px;padding-inline:24px;pointer-events:all;top:calc(14px + var(--devsite-feature-tooltip-offset-y))}.notch{fill:none;inset-inline-start:-9px;position:absolute;top:var(--devsite-feature-tooltip-offset-y,0);z-index:3}.notch>path{fill:var(--devsite-feature-tooltip-background-color)}.controls{-webkit-box-pack:end;-moz-box-pack:end;-ms-flex-pack:end;-webkit-margin-before:24px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:8px;-webkit-justify-content:flex-end;justify-content:flex-end;margin-block-start:24px}.controls,.progress-steps{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.progress-steps{-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;-webkit-box-flex:100;-moz-box-flex:100;-webkit-align-items:center;align-items:center;block-size:var(--devsite-button-height,36px);-webkit-flex:100 0 auto;-ms-flex:100 0 auto;flex:100 0 auto;gap:16px}.progress-steps .progress-step{background:#174ea6;border-radius:8px;display:block;height:8px;width:8px}.progress-steps .progress-step.current{background:#fff}.buttons-container{-webkit-box-pack:end;-moz-box-pack:end;-ms-flex-pack:end;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:16px;-webkit-justify-content:flex-end;justify-content:flex-end}.button,.progress-steps+.buttons-container{-webkit-box-flex:1;-moz-box-flex:1;-ms-flex-positive:1;-webkit-flex-grow:1;flex-grow:1}.button{padding:var(--devsite-button-padding,0 16px)}.button+.button{margin:0}.button.button-white{background-color:#fff}.button.dismiss-button{background-color:transparent;border:0;color:#fff;padding:0 8px}slot[name=popout-heading]{font:var(--devsite-h4-font);font-family:Google Sans,Noto Sans,Noto Sans JP,Noto Sans KR,Noto Naskh Arabic,Noto Sans Thai,Noto Sans Hebrew,Noto Sans Bengali,sans-serif}slot[name=popout-contents]{font:14px/20px var(--devsite-primary-font-family)}"]);var L1=class extends _ds.KI{},M1=_ds.HK(L1),N1=function(){return"devsite-feature-tooltip"},P1=function(a,b=0){a.currentStep=b;O1(a,"popout-heading");O1(a,"popout-contents")},Q1=function(a){a.dispatchEvent(new CustomEvent("devsite-feature-tooltip-closed",{composed:!0,bubbles:!0}));a.hidePopout()},R1=async function(a){if(a.ackKey)if(await _ds.cL(_ds.dL))try{await _ds.kL(a.ackKey)}catch(b){_ds.Jl(`DevsiteFeatureTooltip - Failed to set Ack status: ${a.ackKey}`)}else a.localstorageFallback&&await (await _ds.u()).getStorage().set(N1(),
a.ackKey,"true");a.analyticsCategory&&a.analyticsActionClose&&a.analyticsLabel&&a.La({category:a.analyticsCategory,action:a.analyticsActionClose,label:a.analyticsLabel})},O1=function(a,b){let c,d,e;const f=null==(e=null==(d=null==(c=a.shadowRoot)?void 0:c.querySelector(`slot[name="${b}"]`))?void 0:d.assignedNodes())?void 0:e.filter(k=>k.matches(".step"));let g;null==(g=f.find(k=>null==k?void 0:k.matches(".current")))||g.classList.remove("current");let h;null==(h=f.find(k=>null==k?void 0:k.matches(`.step-${a.currentStep}`)))||
h.classList.add("current")},S1=class extends M1{constructor(){super(...arguments);this.ackKey="";this.localstorageFallback=!1;this.analyticsLabel=this.analyticsActionShow=this.analyticsActionClose=this.analyticsCategory="";this.closeButton=!0;this.closeButtonColor="white";this.closeButtonHref="";this.closeButtonText="Got it";this.currentStep=0;this.dismissButton=!1;this.dismissButtonText="Dismiss";this.dismissOnlyCloses=!1;this.offsetX=32;this.managed=!1;this.maxWidthBase=320;this.steps=1}static get styles(){return[_ds.IK,
K1]}connectedCallback(){super.connectedCallback();this.ackKey&&this.hidePopout();this.managed||this.showPopout();this.setAttribute("ready","")}Nb(){1<this.steps&&P1(this)}async showPopout(){let a;if(this.ackKey){try{a=await _ds.jL(this.ackKey)}catch(b){_ds.Jl(`DevsiteFeatureTooltip - Failed to get Ack status: ${this.ackKey}`);return}this.localstorageFallback&&!a&&(a=await (await _ds.u()).getStorage().get(N1(),this.ackKey))}a||null===a&&!this.localstorageFallback||(this.analyticsCategory&&this.analyticsActionShow&&
this.analyticsLabel&&this.La({category:this.analyticsCategory,action:this.analyticsActionShow,label:this.analyticsLabel}),super.showPopout())}render(){let a=this.closeButtonText,b=this.dismissButtonText;0<this.currentStep&&(a=this.hasAttribute(`close-button-text-${this.currentStep}`)?this.getAttribute(`close-button-text-${this.currentStep}`):this.closeButtonText,b=this.hasAttribute(`dismiss-button-text-${this.currentStep}`)?this.getAttribute(`dismiss-button-text-${this.currentStep}`):this.dismissButtonText);
return(0,_ds.S)`
      ${_ds.OH}
      <slot></slot>
      <div ${(0,_ds.GK)(this.positionParent)}
          class="parent"
          ?hidden="${!this.displayPopout}">
          <div class="popout" ${(0,_ds.GK)(this.popout)}>
            <slot name="popout-heading"></slot>
            <slot name="popout-contents"></slot>
            <div class="controls">
              ${_ds.gs(1<this.steps,()=>(0,_ds.S)`
                <div class="progress-steps">
                ${_ds.Us(_ds.Vs(0,this.steps),c=>(0,_ds.S)`<div class="progress-step progress-step-${c} ${this.currentStep===c?"current":""}"></div>`)}
                </div>
              `)}
              ${_ds.gs(this.dismissButton||this.closeButton,()=>(0,_ds.S)`
                <div class="buttons-container">
                  ${_ds.gs(this.dismissButton,()=>(0,_ds.S)`
                      <button
                          class="dismiss-button button button-flat"
                          @click=${this.Cw}>
                        ${b}
                      </button>`)}
                  ${_ds.gs(this.closeButton,()=>(0,_ds.S)`
                      ${_ds.gs(this.closeButtonHref,()=>(0,_ds.S)`
                            <a href="${this.closeButtonHref}"
                                class="close-button button button-${this.closeButtonColor}"
                                @click=${this.Cq}>
                              ${a}
                            </a>`,()=>(0,_ds.S)`
                            <button
                                class="close-button button button-${this.closeButtonColor}"
                                @click=${this.Cq}>
                              ${a}
                            </button>`)}
                    `)}
                </div>`)}
            </div>
          </div>
          <svg class="notch" width="18" height="14" viewBox="0 0 18 14"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M8.15882 1.3085C8.55246 0.696177 9.44754 0.696177 9.84118 1.3085L18 14L0 14L8.15882 1.3085Z"/>
          </svg>
      </div>`}async Cq(){0<this.steps&&this.currentStep<this.steps-1?P1(this,this.currentStep+1):(Q1(this),await R1(this))}async Cw(){1<this.steps&&0<this.currentStep?P1(this,this.currentStep-1):(Q1(this),this.dismissOnlyCloses||await R1(this))}};_ds.w([_ds.P({type:String,Aa:"ack-key"}),_ds.x(Object)],S1.prototype,"ackKey",void 0);_ds.w([_ds.P({type:Boolean,Aa:"localstorage-fallback"}),_ds.x(Object)],S1.prototype,"localstorageFallback",void 0);
_ds.w([_ds.P({type:String,Aa:"analytics-category"}),_ds.x(Object)],S1.prototype,"analyticsCategory",void 0);_ds.w([_ds.P({type:String,Aa:"analytics-action-close"}),_ds.x(Object)],S1.prototype,"analyticsActionClose",void 0);_ds.w([_ds.P({type:String,Aa:"analytics-action-show"}),_ds.x(Object)],S1.prototype,"analyticsActionShow",void 0);_ds.w([_ds.P({type:String,Aa:"analytics-label"}),_ds.x(Object)],S1.prototype,"analyticsLabel",void 0);
_ds.w([_ds.P({type:Boolean,Aa:"close-button"}),_ds.x(Object)],S1.prototype,"closeButton",void 0);_ds.w([_ds.P({type:String,Aa:"close-button-color"}),_ds.x(Object)],S1.prototype,"closeButtonColor",void 0);_ds.w([_ds.P({type:String,Aa:"close-button-href"}),_ds.x(Object)],S1.prototype,"closeButtonHref",void 0);_ds.w([_ds.P({type:String,Aa:"close-button-text"}),_ds.x(Object)],S1.prototype,"closeButtonText",void 0);
_ds.w([_ds.P({type:Number,Aa:"current-step",Pa:!0}),_ds.x(Object)],S1.prototype,"currentStep",void 0);_ds.w([_ds.P({type:Boolean,Aa:"dismiss-button"}),_ds.x(Object)],S1.prototype,"dismissButton",void 0);_ds.w([_ds.P({type:String,Aa:"dismiss-button-text"}),_ds.x(Object)],S1.prototype,"dismissButtonText",void 0);_ds.w([_ds.P({type:String,Aa:"dismiss-only-closes"}),_ds.x(Object)],S1.prototype,"dismissOnlyCloses",void 0);
_ds.w([_ds.P({type:Number,Aa:"offset-x"}),_ds.x(Object)],S1.prototype,"offsetX",void 0);_ds.w([_ds.P({type:Boolean,Aa:!0}),_ds.x(Object)],S1.prototype,"managed",void 0);_ds.w([_ds.P({type:Number,Aa:"max-width-base"}),_ds.x(Object)],S1.prototype,"maxWidthBase",void 0);_ds.w([_ds.P({type:Number,Aa:!0}),_ds.x(Object)],S1.prototype,"steps",void 0);try{customElements.define(N1(),S1)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteFeatureTooltip",a)};})(_ds_www);
