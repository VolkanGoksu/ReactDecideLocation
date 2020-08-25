import React from 'react';

class DecideLoc extends React.Component{
    //state
    state = {
        //longitude başlangıç değerini ver
        longitude : 0,
        latitude :0,
        error : ''
    }
    render(){
        //kullanıcıdan bilgi almak için iki fonksiyon gönderiyor
        window.navigator.geolocation.getCurrentPosition(
             (position)=>{
                 console.log(position);
                 this.setState({
                     //longitude güncellemek için
                     longitude : position.coords.longitude,
                     latitude : position.coords.latitude
                 });
             },
             (err)=>{
                 console.log(err);
                 this.setState({
                     error : 'Kullanıcının enlem ve boylam bilgisine ulaşılamadı'
                 });
             }
        );
        const {longitude,error,latitude}=this.state;
        if(longitude !==0 && !error && latitude !==0){
            return(
                <div>
                 Enlem : {latitude}; <br></br>
                 Boylam : {longitude}; 
                
                </div>
            )
            
        }
        else if (longitude ===0 && latitude===0 && error){
            return(
                <div>
                  Hata : {error};
                </div>
            )
            
        
        }
       
            return(
                <div>
                    Bekleniyor...
                </div>
            )
        
        return(
            <div>
                 
                  longitude : {this.state.longitude} 
                  latitude : {this.state.latitude}
                  <br></br>
                  error : {this.state.error}
            </div>
             
        )
    }
}

export default DecideLoc;