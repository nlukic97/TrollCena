var ready = false;

/* Add images here, and  random one will be generated every time this happens */
const imageList = {
  trol:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Ftrollface%2Ftrollface_PNG41.png&f=1&nofb=1',
  cenaGif:'https://c.tenor.com/KfmfcxuOI1YAAAAC/wwe.gif'
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function getRandomImage(){
  const keys = Object.keys(imageList)
  return imageList[keys[getRandomIntInclusive(0, keys.length - 1)]]
}

(function activate(){
  var num = 0;
  var monitor = setInterval(()=>{
    var elem = document.activeElement;
    if(elem && elem.tagName == 'IFRAME' && ready === true){
      setTimeout(function(){
        let theBox = document.createElement('div')
        theBox.id = 'theBox'
        document.body.prepend(theBox)
        
        let img = document.createElement('img')
        img.id='trol'
        img.src= getRandomImage()
        img.alt = 'trol'
        document.getElementById('theBox').appendChild(img)
        
        let text = document.createElement('h2')
        text.innerHTML='You\'ve been hacked !'
        text.id='mesg'
        document.getElementById('theBox').appendChild(text)
      },2000)
      clearInterval(monitor)
    }
    
    num+=1
    if(num >= 750){
      clearInterval(monitor)
      activate()
    }
  }, 500);
})()


//totally new for the chrome extension
function setupEverything(){
  let ceena = document.createElement('div')
  ceena.id = 'ceena'
  document.body.appendChild(ceena)
  
  let frejm = document.createElement('IFRAME')
  frejm.id='frame'
  frejm.width='3000'
  frejm.height='4000'
  frejm.src="https://www.youtube.com/embed/ynmvEJ9Llvs" 
  frejm.title="YouTube video player"
  frejm.frameborder="0" 
  frejm.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  frejm.allowfullscreen='true'
  document.getElementById('ceena').appendChild(frejm)
  
  
  ready = true
}

setTimeout(function(){
  setupEverything()
},1000)