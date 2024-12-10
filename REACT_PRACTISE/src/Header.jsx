import imagePath from './assets/math.jpg';

function Header(){
    var name="XYZ";

    const user={
        name1:'MATH',
        imageSrc:imagePath,
        imageSize:90,
    };
    return ( 
      
    <header>
        <h1>
            Website By {name}
        </h1>
        <h2>{user.name1}</h2>
           <img
        src={user.imageSrc} // Dynamically use imageSrc here
        alt={user.name1} // Set the alt text dynamically
        width={user.imageSize} // Dynamically set the size
        height={user.imageSize} // Optional: set height as well
        style={{ borderRadius: "50%" }} // Optional: Add styles, e.g., circular image
      />
        <nav>
            <ul>
                <li> <a href="#">Home </a></li>
                <li><a href="#">About</a> </li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        
       
    </header>
    );
}
export default Header