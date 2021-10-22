var data = [
    {
        name: 'Basic',
        info: {
            price: '$10/month',
            user: '10 users included',
            storage: '2GB of storage',
            support: 'Email support',
            help: 'Help center access'
        }
    },
    {   name: 'Pro',
        info: {
            price: '$30/month',
            user: '20 users included',
            storage: '20 GB of storage',
            support: 'Priority email support',
            help: 'Help center access'
        }
    }
]

var container = document.createElement("div");

Object.assign(container.style, {
    display: 'flex',
    margin: '0 auto',
    width: '880px',
    height: '246px'
})
document.body.appendChild(container);

var listOption = document.createElement("ul");
Object.assign(listOption.style, {
    display: 'flex',
    width: '100%',
    listStyle: 'none',
    textAlign: 'center'
})

data.forEach(item => {
    var itemOption = document.createElement("li");
    Object.assign(itemOption.style, {
        width: 'calc(50%)',
        marginRight: '20px',
        border: '1px solid #CCCCCC',
    })
    var title = document.createElement("h3");
    Object.assign(title.style, {
        borderBottom: '1px solid #E6E6E6',
    })
    var textTilte = document.createTextNode(item.name);
    title.appendChild(textTilte);
    var price = document.createElement("p");
    var textPrice = document.createTextNode(item.info['price']);
    price.appendChild(textPrice);
    var storage = document.createElement("p");
    var textStorage = document.createTextNode(item.info['storage']);
    storage.appendChild(textStorage);
    var support = document.createElement("p");
    var textSupport = document.createTextNode(item.info['support']);
    support.appendChild(textSupport);

    var button = document.createElement("button");
    button.className = "btn";
    itemOption.appendChild(title);
    itemOption.appendChild(price);
    itemOption.appendChild(storage);
    itemOption.appendChild(storage);
    itemOption.appendChild(support);
    itemOption.appendChild(button)
    listOption.appendChild(itemOption);
})

container.appendChild(listOption);

var btn = document.getElementsByClassName('btn');
btn[0].innerHTML = "Get Started";
Object.assign(btn[0].style, {
    color: '#4599FC',
    border: '1px solid #4599FC',
    backgroundColor: '#FFFFFF',
    padding: '10px 150px',
    borderRadius: '5px'
})
btn[1].innerHTML = "Buy Now";
Object.assign(btn[1].style, {
    color: '#FFFFFF',
    border: '1px solid #4599FC',
    backgroundColor: '#157FFB',
    padding: '10px 150px',
    borderRadius: '5px'
})
