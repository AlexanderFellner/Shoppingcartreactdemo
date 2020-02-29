import React, { useState } from 'react'

const speechSynthesis=window.speechSynthesis;



export const ProductSearchForm=()=>{

    const[title,setTitle]=useState('')
    const[titles,setTitles]=useState([])
    const[images,setImages]=useState([])
    const[speechstart,setSpeechStart]=useState(false)

    function myTimeOut(utter,titles,index){
        setTimeout(()=>{
            utter.text="The next result is "+titles[index];
            console.log("titles["+index+"] "+titles[index]);
            speechSynthesis.speak(utter);
           // index++;       
       
        },3000);
    }
    let speechcanceled=false;
    const TextToSpeech= (titles,setSpeechStart)=>{
        setSpeechStart(false); 
        const utter = new SpeechSynthesisUtterance();
        utter.rate = 0.7;
        utter.pitch = 1.5;
        var voices = speechSynthesis.getVoices();
        utter.voice = voices[5];
        utter.lang="de-at";
        utter.text = 'Here are the results : ';
        speechSynthesis.speak(utter);
        let index=-1;
        speechcanceled=false;
        utter.onend=function(event){
            console.log("speech ended");
            index++;
            if(titles.length>0 && index<titles.length && speechcanceled==false){
                myTimeOut(utter,titles,index);
            }
           
        }  
       
    };
    const SearchProduct=(event)=>{
        speechSynthesis.cancel();
        speechcanceled=true;
        event.preventDefault()
        // console.log(product)
        const product={
            title:title,
        };
        console.log(product)
        fetch('http://localhost:5000/product',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(product),
        }).then(response=>response.json()).then((titlesandimages)=>{setTitles(titlesandimages.titles);console.log(titlesandimages.titles);setImages(titlesandimages.images);
            console.log(titlesandimages.images);setSpeechStart(true);}) 
        
      
        
    }
    const ChangeProduct=(event)=>{
        //  console.log(event.target.value)
         setTitle(event.target.value)
    }
    
        
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center',padding:'50px',height:'500px'}}>
            <form >
                <div style={{marginBottom:'20px'}}>
                <input type="text" name="searchproduct"  className="form-control" onChange={ChangeProduct}></input>
                </div>
                <div style={{marginBottom:'20px'}}>
                <input onClick={SearchProduct} readOnly className="btn btn-primary" name="searchbutton"  value="Search Product"/>
                {/* <input onClick={TextToSpeech} readOnly className="btn btn-primary" name="textospeechbutton"  value="Search Product"/> */}
                </div>
            </form>
            <div style={{marginTop:'50px'}}>
        
              {titles.length>0  || images.length>0 ? titles.map((title,index)=>{ 
                    return (<div key={Math.random(1,1000)} >
                        <table key={Math.random(1,1000)} className="table table-bordered">
                            <tbody key={Math.random(1,1000)}>
                            <tr  key={Math.random(1,1000)}>
                                <td   key={Math.random(1,1000)} width="200">
                                <h5 key={Math.random(1,1000)}>{title}</h5>
                                </td></tr><tr>
                                <td  key={Math.random(1,1000)} width="200">
                                <img  key={Math.random(1,1000)} width="200" height="200"  src={images[index]}/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                            </div>);
                    }):''
                    
                    }
                    {
                        speechstart==true && titles.length>0 ? TextToSpeech(titles,setSpeechStart):''
                    }
           
            </div>
        </div>
    )
}