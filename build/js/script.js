addEventListener("DOMContentLoaded",()=>iniciar());

const iniciar=()=>{agregarImg(),prueba(),scrollNav(),navegacionFija()};

const agregarImg=()=>{
    const galeria=document.querySelector(".galeria-imagenes");

    for(let i=1;i<=4;i++){
        const imagen=document.createElement("picture");
        const titulo=document.createElement("h3")
        
        switch (i){
            case 1:titulo.innerText="Messeneger of the Gods";
                break;
            case 2:titulo.innerText="Mr Bad Guy";
                break;
            case 3:titulo.innerText="Never Boring";
                break;
            case 4:titulo.innerText="Lover of life";
                break;
            
        }
        
        imagen.innerHTML=`
        <source srcset="build/img/${i}.webp" type="imagen/webp">
        <img loading="lazy" src="img/${i}.webp" alt="galeria ${i}">`
        
        imagen.appendChild(titulo);
        imagen.onclick=()=>mostrarImg(i);

        galeria.appendChild(imagen);
    }


}

const mostrarImg=(id)=>{
    const imagen=document.createElement("picture");

    console.log("mostrando imagen",id)
    imagen.innerHTML=`
    <source srcset="build/img/${id}.webp" type="imagen/webp">
    <img loading="lazy" src="img/${id}.webp" alt="galeria ${id}">`

    const overlay=document.createElement("div");
    const contenedor_emergente=document.createElement("div");
    overlay.classList.add("overlay");
    const body=document.querySelector("body");
    body.classList.add("no-scroll");
    const info=document.createElement("p");
    info.classList.add("parrafo-emergente");
    


    contenedor_emergente.classList.add("c-emergente")
    overlay.appendChild(contenedor_emergente);
    contenedor_emergente.appendChild(imagen)

    if(id==1){
        info.innerText=`Messenger of the Gods: The Singles" es una recopilación de singles y canciones solistas del icónico Freddie Mercury, lanzada en 2016. El título del álbum se deriva de una de las canciones de Mercury llamada "Messenger of the Gods`;
    }
    else if(id==2){
        info.innerText=`"Mr. Bad Guy" es el primer álbum solista de Freddie Mercury de Queen, lanzado en 1985, con un estilo musical diferente al de la banda y con éxitos como "Living on My Own" y "I Was Born to Love You".`
    }

    else if(id==3){
        info.innerText=`"Never Boring" es una recopilación en 3 CD y un DVD de la carrera en solitario de Freddie Mercury, lanzada en 2019, que incluye versiones remasterizadas de sus canciones más conocidas, algunas canciones inéditas y un libro de tapa dura con fotografías y entrevistas.`
    }
    else{
        info.innerText=`"The Very Best of Freddie Mercury Solo: Lover of Life, Singer of Songs" es una compilación de dos discos lanzada en 2006, que incluye versiones remasterizadas de las mejores canciones en solitario de Freddie Mercury, como "I Was Born to Love You", "Barcelona" y "The Great Pretender".`
    }
    contenedor_emergente.appendChild(info)
    
    body.appendChild(overlay)

    //boton

    const boton=document.createElement("p");
    boton.classList.add("boton-cerrar");
    boton.innerText="X";
    overlay.appendChild(boton);

    boton.onclick=()=>{
        const body=document.querySelector("body");
        body.classList.remove("no-scroll")
        overlay.remove();
    }

    
     contenedor_emergente.onclick=()=>{
         overlay.remove()
    

}

}

const prueba=()=>{
    const contenedor=document.querySelector(".contenedor-canciones");
    for(let i=1;i<=5;i++){
        //Creacion de <li> con su respectiva clase
        const lista=document.createElement("li");
        lista.classList.add(`cancion`)
        
        //Creacion de span y agregamos al <li>
        const span=document.createElement("span");
        span.innerText=`${i}  `;
        
        //Creacion de img
        const img_cancion=document.createElement("img");
        
        
        //Creacion de titlo;
        const titulo=document.createElement("h4");
        
        
        
        //creacion del audio
        const audio=document.createElement("iframe");
        
        
        if(i==1){
            
            agg(img_cancion,titulo,i,"Bohemian Rhapsody",audio,"https://www.youtube.com/embed/fJ9rUzIMcZQ");
        }
        else if(i==2){
            agg(img_cancion,titulo,i,`Don´t stopt me now`,audio,"https://www.youtube.com/embed/HgzGwKwLmgM")
        }
        else if(i==3){
            
            img_cancion.src = `img/cancion_${i}.webp`;
            img_cancion.alt = `Somebody to Love`;
            img_cancion.setAttribute("loading","lazy")
            titulo.innerText=`Somebody to love`;


            audio.setAttribute("width", "200");
            audio.setAttribute("height", "200");
            audio.setAttribute("src", "https://www.youtube.com/embed/kijpcUv-b8M");
            audio.setAttribute("frameborder", "0");
            audio.setAttribute("allowfullscreen", "");

            
        }
        else if(i==4){
            agg(img_cancion,titulo,i,`We are the champions`,audio,"https://www.youtube.com/embed/04854XqcfCY")
        }
        else{
            audio.setAttribute("width", "200");
            audio.setAttribute("height", "200");
            audio.setAttribute("src", "https://www.youtube.com/embed/2ZBtPf7FOoM");
            audio.setAttribute("frameborder", "0");
            audio.setAttribute("allowfullscreen", "");
            img_cancion.src = `img/cancion_${i}.webp`;
            img_cancion.alt = `Killer queen`;
            img_cancion.setAttribute("loading","lazy")
            titulo.innerText=`Killer Queen`;
            
        }
        


        lista.appendChild(span);
        lista.appendChild(img_cancion)
        lista.appendChild(titulo);
        lista.appendChild(audio);
        console.log(lista);
        contenedor.appendChild(lista)
    }
    
}

function agg(img_cancion,titulo,cancion,t_cancion,audio,enlace){
    img_cancion.src = `img/cancion_${cancion}.jpg`;
    img_cancion.alt = `${t_cancion}`;
    img_cancion.setAttribute("loading","lazy")
    titulo.innerText=`${t_cancion}`;

    //video
    audio.setAttribute("width", "200");
    audio.setAttribute("height", "200");
    audio.setAttribute("src", `${enlace}`);
    audio.setAttribute("frameborder", "0");
    audio.setAttribute("allowfullscreen", "");
    
    
}



function scrollNav(){
    const enlaces=document.querySelectorAll(".nav-header a");
    
    enlaces.forEach(enlace=>{
        enlace.addEventListener("click", function(e){
            e.preventDefault();

            const scroll=e.target.attributes.href.value;
            const section=document.querySelector(scroll);
            console.log(scroll)
            section.scrollIntoView({behavior:'smooth'});
        });
    });
};



const navegacionFija=()=>{
    const barra=document.querySelector(".header-principal");
    const albums=document.querySelector(".info-conteiner");
    const body=document.querySelector("body")
    window.addEventListener("scroll",()=>{
        
        if(albums.getBoundingClientRect().bottom<0){
            barra.classList.add("fijo");
            body.classList.add("body-fijo");
            

        }
        else{
            barra.classList.remove("fijo");
            body.classList.remove("body-fijo")
        }
    })
}