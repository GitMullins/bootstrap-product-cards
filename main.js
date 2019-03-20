const products = [
    {
        title: 'product1',
        description: 'blah blah',
        imageUrl: '',
        size: '4" x 4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '1.49',
        price3: '$.99',
        validUntil: '04/01/2016'
    },
    {        
        title: 'product2',
        description: 'blah blah',
        imageUrl: '',
        size: '4" x 4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '1.49',
        price3: '$.99',
        validUntil: '04/01/2016'
},
{        
    title: 'product3',
    description: 'blah blah',
    imageUrl: '',
    size: '4" x 4"',
    weight: '8 oz.',
    price1: '$1.99',
    price2: '1.49',
    price3: '$.99',
    validUntil: '04/01/2016'
},
    {       
    title: 'product4',
    description: 'blah blah',
    imageUrl: '',
    size: '4" x 4"',
    weight: '8 oz.',
    price1: '$1.99',
    price2: '1.49',
    price3: '$.99',
    validUntil: '04/01/2016'
},
{ 
    title: 'product5',
    description: 'blah blah',
    imageUrl: '',
    size: '4" x 4"',
    weight: '8 oz.',
    price1: '$1.99',
    price2: '1.49',
    price3: '$.99',
    validUntil: '04/01/2016'
}
];

const printToDom = (divId, text) => {
    document.getElementById(divId).innerHTML = text;
};

const productsBuilder= (x) =>{
    let message = '';
    x.forEach((product) =>{
        message += `<div class='col-4 product'>`;
        message += `<h2>${product.title}</h2>`;
        message += `<div class="card" style="width: 18rem;">`
        message += `<img src=${product.imageUrl}class="card-img-top" alt="...">`
        message += `<div class="card-body">`
        message += `<p class="card-text">${product.description}</p>`
        message += `</div>`;
        message += `</div>`;
        message += `</div>`;
    })
    printToDom ('rowDiv', message);
};


const init = () => {
productsBuilder(products);
};

init();