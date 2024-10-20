export default function User({user}){
    
    const {name,email,address}=user;
  
    return(
       <div>
            <h4>name: {name}</h4>
            <p>email: {email} </p>
            <p>address: {address.geo.lat}</p>
       </div>
    )
}