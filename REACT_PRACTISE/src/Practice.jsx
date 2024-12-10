const products=[
    {title:'Cabbage',isFruit:false,id:1},
    {title:'Garlic',isFruit:false,id:2},
    {title:'Apple',isFruit:true,id:3},
    {title:'Potato',isFruit:false,id:4},
    {title:'Mango',isFruit:true,id:5},
];

 function Practice(){
    const listItems=products.map(product=>
        <li 
            key={product.id}
            style={{
                color:product.isFruit ? 'magenta' : 'darkgreen'
            }}
        >
                {product.title}
        </li>
    );
    return(<>
        <ul>{listItems}</ul>
    </>);

}

export default Practice;