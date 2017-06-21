(function(a){a.TextTexture=class extends a.Texture{constructor({text:h='',fontStyle:i='normal',fontVariant:j='normal',fontWeight:k='normal',fontSize:l=16,fontFamily:m='sans-serif',padding:n=1/8,lineHeight:o=1,magFilter:p=a.LinearFilter,minFilter:q=a.LinearFilter,mapping:b,wrapS:c,wrapT:d,format:e,type:f,anisotropy:g}={}){super(document.createElement('canvas'),b,c,d,p,q,e,f,g),this._text=h,this._fontStyle=i,this._fontVariant=j,this._fontWeight=k,this._fontSize=l,this._fontFamily=m,this._padding=n,this._lineHeight=o,this._updateLines(),this._redrawCanvas()}_updateLines(){this.lines=this.text?[this.text]:[],this.linesCount=this.lines.length}_redrawCanvas(){(function(b){if(b.clearRect(0,0,b.canvas.width,b.canvas.height),this._text&&this._fontSize){let c=this.font;b.font=c;let d=b.measureText(this._text).width;if(d)return b.canvas.width=d+2*(this._fontSize*this._padding),b.canvas.height=this._fontSize+2*(this._fontSize*this._padding),b.font=c,b.textAlign='center',b.textBaseline='middle',b.fillStyle='white',void b.fillText(this._text,b.canvas.width/2,b.canvas.height/2)}b.canvas.width=b.canvas.height=1}).call(this,this.image.getContext('2d')),this.needsUpdate=!0}get text(){return this._text}set text(b){this._text!==b&&(this._text=b,this._updateLines(),this._redrawCanvas())}get font(){return[this._fontStyle,this._fontVariant,this._fontWeight,`${this._fontSize}px`,this._fontFamily].join(' ')}get fontStyle(){return this._fontStyle}set fontStyle(b){this._fontStyle!==b&&(this._fontStyle=b,this._redrawCanvas())}get fontVariant(){return this._fontVariant}set fontVariant(b){this._fontVariant!==b&&(this._fontVariant=b,this._redrawCanvas())}get fontWeight(){return this._fontWeight}set fontWeight(b){this._fontWeight!==b&&(this._fontWeight=b,this._redrawCanvas())}get fontSize(){return this._fontSize}set fontSize(b){this._fontSize!==b&&(this._fontSize=b,this._redrawCanvas())}get fontFamily(){return this._fontFamily}set fontFamily(b){this._fontFamily!==b&&(this._fontFamily=b,this._redrawCanvas())}get lineHeight(){return this._lineHeight}set lineHeight(b){this._lineHeight!==b&&(this._lineHeight=b,this._redrawCanvas())}get padding(){return this._padding}set padding(b){this._padding!==b&&(this._padding=b,this._redrawCanvas())}get aspect(){return this.image.width&&this.image.height?this.image.width/this.image.height:1}}}).call(this,THREE);