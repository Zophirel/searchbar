const template = document.createElement('template');
template.innerHTML = 
`
<style>
#search {
    display: block;
    border: none;
    margin: auto;
    margin-top: 5vh;
    padding-left: 10px;
    font-size: 15px;
    font-weight: 500;
    width: 85vw;
    height: 35px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
    ul{
        position: relative;
        list-style: none;
        font-family: sans-serif;
        font-weight: 500;
        font-size: 17px;
        padding-left: 0;
        border-radius: 5px;
    }
    
    li:first-child{
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    li:last-child{
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .shadow{
        position: relative;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        width: 85vw;
        margin: auto;
        border-radius: 5px;
    }
    li{
        background-color: white;
        margin-top: 0px;
        padding-left: 10px;
        padding-top: 10px;
        height: 30px; 
    }
    a{
        text-decoration: none;
        color: black;
    }
}
</style>
<div class="search">
    <input id="search" type="text">
    <div class="shadow">
        <ul>
        </ul>
    </div>
</div
`;


class SearchBar extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        //this.shadowRoot.querySelector('div').innerHTML= "ciao";
        const book = [{ title: 'Book One', link:'https://wikipedia.it' }, { title: 'Book otwo', link:'https://wiki.it' }, { title: 'Book three', link:'https://wikipedia.it' }];
        book.push({title: 'Book four', link:'https://wik.it'});
        let books = book.map(book => book.title);
        let links = book.map(book => book.link);
        let i = 0;
        var searchb = $('search-bar')[0].shadowRoot.children[1].children[0];
        
        searchb.addEventListener('input', function search(e){ 
            function createEntry(i){
                li = ul.appendChild(document.createElement('li'));
                a = li.appendChild(document.createElement('a'));
                a.href = `${links[i]}`;
                a.innerText = `${books[i]}`;
            }

            function deleteEntry(i){
                ul.removeChild(ul.children[i]);
            }
            // Declare variables
            var filter, li, a, ul, i, txtValue;
            //input = document.getElementById('myInput');
            filter = searchb.value.toUpperCase();
            ul = document.querySelector('search-bar').shadowRoot.children[1].children[1].children[0];
            //li = ul.appendChild(document.createElement('li'));
            // Loop through all list items, and hide those who don't match the search query
            for (i = 0; i < books.length; i++) {
                txtValue = e.target.value;
                console.log(txtValue);
                console.log(books[i].includes(txtValue.toUpperCase()) || books[i].includes(txtValue.toLowerCase()));
                if(books[i].toUpperCase().includes(txtValue.toUpperCase())){
                    createEntry(i);
                }
                else{
                    console.log(i);
                    deleteEntry(i);
                }
            }
        })
    }
}
window.customElements.define("search-bar", SearchBar);