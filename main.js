import "./style.css";
import * as THREE from "three";

// Import Images:
import navHelpImg from "./images/nav_help.png";
import aboutImg from "./images/about.jpg";

import educationImg from "./images/education.jpg";

import progSkillImg from "./images/program_skills.jpg";
import softSkillImg from "./images/soft_skills.jpg";

import projOneImg from "./images/proj_1.jpg";
import projTwoImg from "./images/proj_2.jpg";
import projImg from "./images/proj.jpg";

import exOneImg from "./images/ex_1.jpg";
import exTwoImg from "./images/ex_2.jpg";

import exitImg from "./images/exit_message.png";

import selfImg from "./images/me.png";
import selfTrippyImg from "./images/trippy_me.png";
import vicImg from "./images/vic_scene.png";

// Setup:
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

//Adding Window Ratio
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth,window.innerHeight );

//Initial Camera When Page is Loaded
camera.position.setZ(50);
camera.position.setY(5);
renderer.render( scene, camera );

//Building RoadWay
const road_geometry = new THREE.BoxGeometry( 10,1,200 )
const road_material = new THREE.MeshStandardMaterial( { color: 0xFF6347 } );
const road = new THREE.Mesh( road_geometry, road_material );
scene.add(road)

//Adding Scene Lighting
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5,5,5)
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight)



//Adding Stars To the Scene
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff})
  const star = new THREE.Mesh( geometry,material );
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ) );
  star.position.set(x, y, z);
  scene.add(star)
}
Array(200).fill().forEach(addStar)

//Grid Array 
const gridHelper = new THREE.GridHelper(200,50)
scene.add(gridHelper)

//--------------------------------------------------
// Walking Guide
//--------------------------------------------------
//Nav Help
const nav_help_overlay = new THREE.TextureLoader().load(navHelpImg)
const nav_help = new THREE.Mesh(
  new THREE.BoxGeometry( 12,12,0.1 ),
  new THREE.MeshBasicMaterial( {map: nav_help_overlay})
)
scene.add(nav_help)
nav_help.position.setX(12)
nav_help.position.setY(6)
nav_help.position.setZ(36)
//--------------------------------------------------
// Intro Section
//--------------------------------------------------
//Intro Block
const intro_overlay = new THREE.TextureLoader().load(aboutImg)
const intro = new THREE.Mesh(
  new THREE.BoxGeometry( 12,12,0.1 ),
  new THREE.MeshBasicMaterial( {map: intro_overlay})
)
scene.add(intro)
intro.position.setX(-12)
intro.position.setY(-20)
intro.position.setZ(30)

//--------------------------------------------------
// Education Section
//--------------------------------------------------
//Education Block
const education_overlay = new THREE.TextureLoader().load(educationImg)
const education = new THREE.Mesh(
  new THREE.BoxGeometry( 12,12,0.1 ),
  new THREE.MeshBasicMaterial( {map: education_overlay})
)
scene.add(education)
education.position.setX(12)
education.position.setY(-20)
education.position.setZ(15)


//--------------------------------------------------
// Skills Section
//--------------------------------------------------
//Programming skills Block
const prog_skill_overlay = new THREE.TextureLoader().load(progSkillImg)
const prog_skills = new THREE.Mesh(
  new THREE.BoxGeometry( 12,12,0.1 ),
  new THREE.MeshBasicMaterial( {map: prog_skill_overlay})
)
scene.add(prog_skills)
prog_skills.position.setX(12)
prog_skills.position.setY(-20)
prog_skills.position.setZ(0)

//Soft Skills Block
const soft_skill_overlay = new THREE.TextureLoader().load(softSkillImg)
const soft_skills = new THREE.Mesh(
  new THREE.BoxGeometry( 12,12,0.1 ),
  new THREE.MeshBasicMaterial( {map: soft_skill_overlay})
)
scene.add(soft_skills)
soft_skills.position.setX(-12)
soft_skills.position.setY(-20)
soft_skills.position.setZ(0)

//--------------------------------------------------
// Project Section
//--------------------------------------------------
//Proj Intro Block
const proj_intro_overlay = new THREE.TextureLoader().load(projImg)
const proj_intro = new THREE.Mesh(
  new THREE.BoxGeometry( 12,12,0.1 ),
  new THREE.MeshBasicMaterial( {map: proj_intro_overlay})
)
scene.add(proj_intro)
proj_intro.position.setX(-12)
proj_intro.position.setY(-20)
proj_intro.position.setZ(-15)

//Highlight One  Block
const proj_one_overlay = new THREE.TextureLoader().load(projOneImg)
const proj_one = new THREE.Mesh(
  new THREE.BoxGeometry( 12,12,0.1 ),
  new THREE.MeshBasicMaterial( {map: proj_one_overlay})
)
scene.add(proj_one)
proj_one.position.setX(12)
proj_one.position.setY(-20)
proj_one.position.setZ(-15)

//Highlight Two Block
const proj_two_overlay = new THREE.TextureLoader().load(projTwoImg)
const proj_two = new THREE.Mesh(
  new THREE.BoxGeometry( 12,12,0.1 ),
  new THREE.MeshBasicMaterial( {map: proj_two_overlay})
)
scene.add(proj_two)
proj_two.position.setX(12)
proj_two.position.setY(-20)
proj_two.position.setZ(-30)

//--------------------------------------------------
// Experience Section
//--------------------------------------------------
//Experience One
const xp_one_overlay = new THREE.TextureLoader().load(exOneImg)
const xp_one = new THREE.Mesh(
  new THREE.BoxGeometry( 12,12,0.1 ),
  new THREE.MeshBasicMaterial( {map: xp_one_overlay})
)
scene.add(xp_one)
xp_one.position.setX(-12)
xp_one.position.setY(-20)
xp_one.position.setZ(-45)

//Experience Two
const xp_two_overlay = new THREE.TextureLoader().load(exTwoImg)
const xp_two = new THREE.Mesh(
  new THREE.BoxGeometry( 12,12,0.1 ),
  new THREE.MeshBasicMaterial( {map: xp_two_overlay})
)
scene.add(xp_two)
xp_two.position.setX(12)
xp_two.position.setY(-20)
xp_two.position.setZ(-45)

//--------------------------------------------------
//Photo Blocks
//--------------------------------------------------
//Intro Photo
const me_overlay = new THREE.TextureLoader().load(selfImg)
const me_image = new THREE.Mesh(
  new THREE.BoxGeometry( 6,6,6 ),
  new THREE.MeshBasicMaterial( {map: me_overlay})
)
scene.add(me_image)
me_image.position.setX(12)
me_image.position.setY(6)
me_image.position.setZ(30)

//Trippy Photo
const me_trippy_overlay = new THREE.TextureLoader().load(selfTrippyImg)
const me_trippy_image = new THREE.Mesh(
  new THREE.BoxGeometry( 6,6,6 ),
  new THREE.MeshBasicMaterial( {map: me_trippy_overlay})
)
scene.add(me_trippy_image)
me_trippy_image.position.setX(-12)
me_trippy_image.position.setY(-20)
me_trippy_image.position.setZ(-30)

//Victoria Photo
const vic_overlay = new THREE.TextureLoader().load(vicImg)
const vic_image = new THREE.Mesh(
  new THREE.BoxGeometry( 6,6,6 ),
  new THREE.MeshBasicMaterial( {map: vic_overlay})
)
scene.add(vic_image)
vic_image.position.setX(-12)
vic_image.position.setY(6)
vic_image.position.setZ(15)

//--------------------------------------------------
//Exit Message
//--------------------------------------------------
const exit_message_overlay = new THREE.TextureLoader().load(exitImg)
const exit_message = new THREE.Mesh(
  new THREE.BoxGeometry( 15,15,0.1 ),
  new THREE.MeshBasicMaterial( {map: exit_message_overlay})
)
scene.add(exit_message)
exit_message.position.setX(0)
exit_message.position.setY(10)
exit_message.position.setZ(-60)

//--------------------------------------------------
// Running Logic within browser
//--------------------------------------------------
//Animation Loop (Essential the Game Loop/Scene Loop)
function animate() {
  requestAnimationFrame( animate );

  document.onkeydown = function (e){
    if (e.keyCode === 38){           //forward movement
      //if (camera.position > -55){ 
        camera.position.z -= 0.5;
      //}
    } 
    if (e.keyCode === 40){          //backward movement
      //if (camera.position < 50){ 
        camera.position.z += 0.5;
      //}
   } 
  }
  if (camera.position.z < 50){     // drop walk help
    if(nav_help.position.y > -20){
      nav_help.position.y -= 0.5;
    }
  }
  if (camera.position.z < 48){     // queue intro
    if(intro.position.y < 8){
      intro.position.y += 0.5;
    }
  }

  if (camera.position.z < 33){     // queue education
    if(education.position.y < 8){
      education.position.y += 0.5;
    }
  }

  if (camera.position.z < 18){     // queue soft skills
    if(soft_skills.position.y < 8){
      soft_skills.position.y += 0.5;
    }
  }

  if (camera.position.z < 18){     // queue programming skills
    if(prog_skills.position.y < 8){
      prog_skills.position.y += 0.5;
    }
  }

  if (camera.position.z < 3){     // queue project intro
    if(proj_intro.position.y < 8){
      proj_intro.position.y += 0.5;
    }
    if(me_trippy_image.position.y < 6){
      me_trippy_image.position.y += 0.5;
    }
  }

  if (camera.position.z < 3){     // queue project 1
    if(proj_one.position.y < 8){
      proj_one.position.y += 0.5;
    }
  }

  if (camera.position.z < 3){     // queue project 2
    if(proj_two.position.y < 8){
      proj_two.position.y += 0.5;
    }
  }
  
  if (camera.position.z < -27){     // queue experience 1
    if(xp_one.position.y < 8){
      xp_one.position.y += 0.5;
    }
  }

  if (camera.position.z < -27){     // queue experience 2
    if(xp_two.position.y < 8){
      xp_two.position.y += 0.5;
    }
  }

  me_image.rotation.x += 0.001;
  me_image.rotation.y += 0.0005;
  me_image.rotation.z += 0.001;
  
  me_trippy_image.rotation.x += 0.001;
  me_trippy_image.rotation.y += 0.0005;
  me_trippy_image.rotation.z += 0.001;

  vic_image.rotation.x += 0.001;
  vic_image.rotation.y += 0.0005;
  vic_image.rotation.z += 0.001;

  renderer.render(scene, camera);
}

animate()
