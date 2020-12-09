(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,a,t){e.exports={App:"App_App__27lx2",loaderWrap:"App_loaderWrap__1WTz5"}},23:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__3mxJX"}},24:function(e,a,t){e.exports={Button:"Button_Button__IEmP7"}},3:function(e,a,t){e.exports={Searchbar:"Searchbar_Searchbar__2oKTN",SearchForm:"Searchbar_SearchForm__2RKnY",SearchFormButton:"Searchbar_SearchFormButton__1zJNF",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__20Ohz",SearchFormInput:"Searchbar_SearchFormInput__1fyAM"}},70:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(21),c=t.n(o),l=t(11),i=t(4),m=t(5),u=t(7),s=t(6),h=t(22),d=t.n(h),p=t(3),g=t.n(p),f=function(e){var a=e.onSubmit,t=e.onChange,n=e.value;return r.a.createElement("header",{className:g.a.Searchbar},r.a.createElement("form",{className:g.a.SearchForm,onSubmit:a},r.a.createElement("button",{type:"submit",className:g.a.SearchFormButton},r.a.createElement("span",{className:g.a.SearchFormButtonLabel},"Search")),r.a.createElement("input",{className:g.a.SearchFormInput,type:"text",autoComplete:"off",placeholder:"Search images and photos",value:n,onChange:t})))},y=t(8),v=t.n(y),b=function(e){var a=e.url,t=e.onOpenModal;return r.a.createElement("li",{className:v.a.ImageGalleryItem,onClick:t,onKeyPress:t,role:"button",tabIndex:0},r.a.createElement("img",{src:a,alt:"",className:v.a.ImageGalleryItemImage}))},I=t(23),S=t.n(I),_=function(e){var a=e.images,t=e.onModalImgSelect;return r.a.createElement("ul",{className:S.a.ImageGallery},a.map((function(e){var a=e.id,n=e.webformatURL;return r.a.createElement(b,{key:a,url:n,onOpenModal:function(){return t(a)}})})))},E=t(24),M=t.n(E),w=function(e){var a=e.onLoadMoreImgs;return r.a.createElement("button",{className:M.a.Button,type:"button",onClick:a},"Load more")},L=t(9),k=t.n(L),O=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=a.call.apply(a,[this].concat(o))).overlayRef=Object(n.createRef)(),e.handleEscapePress=function(a){"Escape"===a.key&&e.props.onModalClose()},e.handleOverlayClick=function(a){var t=e.overlayRef.current;t&&a.target!==t||e.props.onModalClose()},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleEscapePress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleEscapePress)}},{key:"render",value:function(){var e=this.props.img;return r.a.createElement("div",{className:k.a.Overlay,role:"button",tabIndex:0,onClick:this.handleOverlayClick},r.a.createElement("div",{className:k.a.Modal},r.a.createElement("img",{src:e,alt:""})))}}]),t}(n.PureComponent),F=t(25),C=t.n(F),N="13203870-f88321e1576e2ee35198d8add",x="https://thingproxy.freeboard.io/fetch/",G=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t="".concat(x,"https://pixabay.com/api/?key=").concat(N,"&q=").concat(e,"&page=").concat(a,"&image_type=photo&orientation=horizontal&per_page=12");return C.a.get(t).then((function(e){return e.data.hits})).catch((function(e){throw new Error(e)}))},j=function(e){return e.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL}}))},B=(t(69),t(10)),R=t.n(B),A=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={query:"",page:1,images:[],selectedImage:"",isLoading:!1,openModal:!1},e.handleSearchQuery=function(a){e.setState({query:a.target.value})},e.handleSearchSubmit=function(a){a.preventDefault(),e.handleFetch()},e.handleFetch=function(){var a=e.state,t=a.query,n=a.page;e.setState({isLoading:!0}),G(0===t.length?"cat":t,n).then((function(e){return j(e)})).then((function(a){return e.setState({images:a,isLoading:!1})})).catch((function(e){throw new Error(e)}))},e.handleModalImageSelection=function(a){var t=e.state.images.filter((function(e){return e.id===a}))[0];e.setState({selectedImage:t.largeImageURL,openModal:!0})},e.handleModal=function(){e.setState((function(e){return{openModal:!e.openModal}}))},e.handleLoadMoreImgs=function(){e.setState((function(e){return{page:e.page+1,isLoading:!0}}))},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.handleFetch()}},{key:"componentDidUpdate",value:function(e,a){var t=this,n=this.state,r=n.query,o=n.page;a.page!==o&&(G(0===r.length?"cat":r,o).then((function(e){return j(e)})).then((function(e){return t.setState((function(a){return{images:[].concat(Object(l.a)(a.images),Object(l.a)(e)),isLoading:!1}}))})).catch((function(e){throw new Error(e)})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}))}},{key:"render",value:function(){var e=this.state,a=e.query,t=e.images,n=e.selectedImage,o=e.isLoading,c=e.openModal;return r.a.createElement("div",{className:R.a.App},r.a.createElement(f,{onSubmit:this.handleSearchSubmit,onChange:this.handleSearchQuery,value:a}),r.a.createElement(_,{images:t,onModalImgSelect:this.handleModalImageSelection}),t.length>0&&r.a.createElement(w,{onLoadMoreImgs:this.handleLoadMoreImgs}),r.a.createElement("div",{className:R.a.loaderWrap},r.a.createElement(d.a,{type:"ThreeDots",color:"#3f51b5",height:40,width:60,visible:o})),c&&r.a.createElement(O,{img:n,onModalClose:this.handleModal}))}}]),t}(n.Component);t(70);c.a.render(r.a.createElement(A,null),document.getElementById("root"))},8:function(e,a,t){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3VHq2",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__36E4P"}},9:function(e,a,t){e.exports={Overlay:"Modal_Overlay__uCTck",Modal:"Modal_Modal__20fg5"}}},[[71,1,2]]]);
//# sourceMappingURL=main.584f277a.chunk.js.map