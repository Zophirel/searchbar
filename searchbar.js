const template = document.createElement('template');
template.innerHTML = 
`
<style>
.search {
    display: block;
    border: none;
    margin: auto;
    margin-top: 5vh;
    padding-left: 10px;
    font-size: 15px;
    font-weight: 500;
    width: 70vw;
    height: 100px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
</style>
<input type="text" class="search">
`;

class SearchBar extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        //this.shadowRoot.querySelector('div').innerHTML= "ciao";
    }
}
window.customElements.define("search-bar", SearchBar);