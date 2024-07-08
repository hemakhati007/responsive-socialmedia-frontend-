//sidebar

const menuItems=document.querySelectorAll('.menu-items');

//remove active class from all menu items
const changeActiveItems= () =>{
    
    menuItems.forEach(items=>{
        items.classList.remove('active');
    })
}

menuItems.forEach(item=>{
    item.addEventListener('click',()=>{
         changeActiveItems();
        item.classList.add('active');
        if(item.id!='notification')
        {
               document.querySelector('.notification-popup').style.display='none';    
        }
       else{
        document.querySelector('.notification-popup').style.display='block';  
        document.querySelector('#notification .notification-count').style.display=('none');

       }
    })
})

////////////messages/////////////////////
const messagesNotification=document.querySelector('#messages-notification');
const messages=document.querySelector('.messages');

messagesNotification.addEventListener('click',()=>{
    messages.style.boxShadow='0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display='none';
    setTimeout(()=>{
        messages.style.boxShadow='none';
    },2000);
})

//SEARCH CHATTT???????????????????????????????????????


const searchMessage=()=>{

    const val=messageSearch.value.toLowerCase();
 
    message.forEach(chat=>{
        let name=chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val)!=-1)
        {
            chat.style.display='flex';
        }
        else{
            chat.style.display='none';
        }
    })

}


const message =messages.querySelectorAll('.message');

const messageSearch =document.querySelector('#message-search');
messageSearch.addEventListener('keyup',searchMessage);


////THEME COSTOMIZATION?????????????????????????????????////

const theme=document.querySelector('#theme')
const themeModel=document.querySelector('.customized-theme');
//oprning the cusztomization panel
const openThemeModel=()=>{
    themeModel.style.display='grid';
}
theme.addEventListener('click', openThemeModel);

//model close

const closeThemeModel =(e)=>{
    if(e.target.classList.contains('customized-theme')){
        themeModel.style.display='none';
    }
}
themeModel.addEventListener('click', closeThemeModel );

theme.addEventListener('click', openThemeModel);



// font size costomizaion


var root=document.querySelector(':root');//selecting root
const fontSizes=document.querySelectorAll('.choose-size span');

fontSizes.forEach(size=>{
    
  size.addEventListener('click',()=>{
    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');

    if(size.classList.contains('font-size-1')){
        fontSize='10px';
        root.style.setProperty('----sticky-top-left','5.4rem');
        root.style.setProperty('----sticky-top-right','5.4rem');
        
    }
    else if(size.classList.contains('font-size-2')){
        fontSize='13px';
        root.style.setProperty('----sticky-top-left','5.4rem');
        root.style.setProperty('----sticky-top-right','-7rem');
    }
    else if(size.classList.contains('font-size-3')){
        fontSize='16px';
        root.style.setProperty('----sticky-top-left','-2rem');
        root.style.setProperty('----sticky-top-right','-17rem');
    }
    else if(size.classList.contains('font-size-4')){
        fontSize='19px';
        root.style.setProperty('----sticky-top-left','-5rem');
        root.style.setProperty('----sticky-top-right','-25rem');
    }
    else if(size.classList.contains('font-size-5')){
        fontSize='22px';
        root.style.setProperty('----sticky-top-left','-12rem');
        root.style.setProperty('----sticky-top-right','-35rem');
    }

    //change html font size
    document.querySelector('html').style.fontSize=fontSize;
  })

})

//RE OVING THE ACTIVE CALSS FROM SPAN OR FONTSIZE SlKECTOR


const  removeSizeSelector=()=>{
    fontSizes.forEach(size=>{
        size.classList.remove('active');
    })
}


//CHANGE PRIMARY COLOR

const colorPalette=document.querySelectorAll('.choose-color span');

//removing active class
const changeActiveColorClass=()=>{
    colorPalette.forEach(colorpicker=>{
        colorpicker.classList.remove('active');
    })

}

colorPalette.forEach(color=>{
    color.addEventListener('click',()=>{
        let primaryHue;
        changeActiveColorClass();
        if(color.classList.contains('color-1')){
            primaryHue=252;

        }
        else if(color.classList.contains('color-2')){
            primaryHue=52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue=352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue=152;
        }
        else if(color.classList.contains('color-5')){
            primaryHue=202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})


///for the background

const Bg1=document.querySelector('.bg-1');
const Bg2=document.querySelector('.bg-2');
const Bg3=document.querySelector('.bg-3');

//theme background values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg =()=>{
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);

}


Bg1.addEventListener('click',()=>{
    Bg1.classList.add('active');
    //remove active class frome others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    //remove costomized changes from the local storage

    window.location.reload();
})

Bg2.addEventListener('click',()=>{
    darkColorLightness='95%';
    whiteColorLightness='20%';
    lightColorLightness='15%';

    //add active class
    Bg2.classList.add('active');
    //remove active class from others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBg();
})
Bg3.addEventListener('click',()=>{
    darkColorLightness='95%';
    whiteColorLightness='10%';
    lightColorLightness='0%';

    //add active class
    Bg3.classList.add('active');
    //remove active class from others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBg();
})





