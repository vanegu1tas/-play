import adidas from '../images/adidas.gif'
import moto from '../images/moto.gif'
import mundo from '../images/mundo.gif'
import planoz from '../images/planoz.gif'
import sonar from '../images/sonar.gif'
import topologias from '../images/topologias.gif'
import uber from '../images/uber.gif'
import nike from '../images/nike.gif'
import coca from '../images/coca.gif'
import cuerpos from '../images/cuerpos.gif'
import redbull from '../images/redbull.gif'
import redbullp from '../images/redbullp.gif'
import warm from '../images/warm.gif'
import freaky from '../images/freaky.gif'
import samsung from '../images/samsung.jpg'


const gifs = (param) => {
  if (param === 'mundo') {
    return{
      img: mundo,
      left: "50px",
      top: "200px",
      width: "250",
      route: "mundo",
      title: "Una observación al fin del mundo",
      titleEn: "Observation to the end of the world",
      year: "2017",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  } else if (param === 'planoz') {
    return{
      img: planoz,
      right: "263px",
      top: "451px",
      width: "250",
      route: "planoz",
      title: "Plano Z",
      titleEn: "Plano Z Eng",
      year: "2017",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  } else if (param === 'topologias') {
    return{
      img: topologias,
      left: "126px",
      top: "636px",
      route: "topologias",
      title: "Topologías urbanas",
      titleEn: "Urban topology",
      year: "2017",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  } else if (param === 'moto') {
    return{
      img: moto,
      right: "132px",
      top: "859px",
      width: "250",
      route: "moto",
      title: "Moto",
      titleEn: "Moto Eng",
      year: "2017",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  } else if (param === 'adidas') {
    return{
      img: adidas,
      left: "76px",
      top: "1045px",
      route: "adidas",
      title: "Adidas",
      titleEn: "Adidas Eng",
      year: "2017",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  } else if (param === 'sonar') {
    return{
      img: sonar,
      right: "244px",
      top: "1200px",
      width: "300",
      route: "sonar",
      title: "Sonar",
      titleEn: "Sonar Eng",
      year: "2017",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  } else if (param === 'uber') {
    return{
      img: uber,
      left: "221px",
      top: "1492px",
      route: "uber",
      title: "Uber",
      titleEn: "Uber Eng",
      year: "2017",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  } else if (param === 'nike') {
    return{
      img: nike,
      right: "30px",
      top: "1854px",
      route: "nike",
      title: "Nike",
      titleEn: "Nike Eng",
      year: "2017",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  } else if (param === 'coca') {
    return{
      img: coca,
      left: "175px",
      top: "2000px",
      width: "300",
      route: "coca",
      title: "Coca",
      titleEn: "Coca Eng",
      year: "2017",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  } else if (param === 'cuerpos') {
    return{
      img: cuerpos,
      right: "208px",
      top: "2161px",
      route: "cuerpos",
      title: "Cuerpos de agua",
      titleEn: "Water",
      year: "2017",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  } else if (param === 'redbull') {
    return{
      img: redbull,
      left: "202px",
      top: "2324px",
      route: "redbull",
      title: "Redbull",
      titleEn: "Redbull eng",
      year: "2017",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  } else if (param === 'redbullP') {
    return{
      img: redbullp,
      right: "140px",
      top: "60px",
      width: "500px",
      route: "redbullP",
      title: "RedbullP",
      titleEn: "RedbullP eng",
      year: "2017",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  } else if (param === 'warm') {
    return{
      img: warm,
      right: "200px",
      top: "2527px",
      route: "warm",
      title: "Sonar warm up",
      titleEn: "Sonar Warm up eng",
      year: "2017",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  } else if (param === 'samsung') {
    return{
      img: samsung,
      left: "114px",
      top: "2740px",
      width: "450",
      route: "samsung",
      title: "Samsung",
      titleEn: "Samsung Eng",
      year: "2017",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  }  else if (param === 'freaky') {
    return{
      img: freaky,
      right: "240px",
      top: "3005px",
      route: "freaky",
      title: "Freaky",
      titleEn: "Freaky Eng",
      year: "2017",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  }
}

export default gifs
