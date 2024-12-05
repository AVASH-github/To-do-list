import transformerpic from './assets/transformer.png'

function Card(){

return (
    <><div className="card">
    <img className='card-image' src={transformerpic} alt="Transformer Image" ></img>
    <h2 className='card-title'>Optimus Prime</h2>
    <p className='card-text'>This is Transformer</p>
   
</div>
</>

);


}

export default Card;