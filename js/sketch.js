let scene, camera, renderer;

let controls;

let light1,light2;
//material related
//let boxcolor=[0xF9643B, 0xFC7847, 0xFE8B53, 0xFEAB6D, 0xFECA87, 0xFFE4C3, 0xFFFFFF, 0xBED1FD, 0x7DA2FA, 0x5D77DF, 0x3C4CC4, 0x2A359F];
let boxcolor=[0xF9643B, 0xE76D4C, 0xD4765E, 0xC27F6F, 0xB0BBB0, 0x9D9192, 0x8B9AA3, 0x78A3B5, 0x66ACC6 ,0x54B5D7, 0x41BEE9, 0x2FC7FA];

let axiscolor=0xFFFFFF;
let bg=0xCECECE;

//geometry related

// platform
let platform = new THREE.Group();
let axisXgeo = new THREE.BoxGeometry(0.04,0.08,14);
let axisYgeo = new THREE.BoxGeometry(10,0.1, 0.04);
let axisMaterial = new THREE.MeshPhongMaterial({color:axiscolor});
let axisX ={};
let axisY ={};

for(i=0; i<6; i++){
    axisX[i]=new THREE.Mesh(axisXgeo, axisMaterial);
    axisX[i].position.x=-5
    axisX[i].position.x+=i*2;
    platform.add(axisX[i]);
}
for(i=0;i<8;i++){
    axisY[i]=new THREE.Mesh(axisYgeo, axisMaterial);
    axisY[i].position.z=-7;
    axisY[i].position.z+=i*2;
    platform.add(axisY[i]);
}

//box
let outerBoxGeo = new THREE.BoxGeometry(1.8,1.8,1.8);
let frequency ={};
for(i=0;i<12;i++){
    frequency[i]= new THREE.MeshPhongMaterial({
        color: boxcolor[11-i],
        opacity: 0.5,
        transparent: true,
        side: THREE.DoubleSide,
    });
}
let mon0 = new THREE.Mesh(outerBoxGeo,frequency[4]);
mon0.position.set(-4,0,6);
let mon1 = new THREE.Mesh(outerBoxGeo,frequency[6]);
mon1.position.set(-2,0,6);
let mon2 = new THREE.Mesh(outerBoxGeo,frequency[3]);
mon2.position.set(0,0,6);
let mon3 = new THREE.Mesh(outerBoxGeo,frequency[3]);
mon3.position.set(2,0,6);
let mon4 = new THREE.Mesh(outerBoxGeo,frequency[1]);
mon4.position.set(4,0,6);
let tue0 = new THREE.Mesh(outerBoxGeo,frequency[1]);
tue0.position.set(-4,0,4);
let tue1 = new THREE.Mesh(outerBoxGeo,frequency[10]);
tue1.position.set(-2,0,4);
let tue2 = new THREE.Mesh(outerBoxGeo,frequency[8]);
tue2.position.set(0,0,4);
let tue3 = new THREE.Mesh(outerBoxGeo,frequency[3]);
tue3.position.set(2,0,4);
let tue4 = new THREE.Mesh(outerBoxGeo,frequency[0]);
tue4.position.set(4,0,4);
let wed0 = new THREE.Mesh(outerBoxGeo,frequency[2]);
wed0.position.set(-4,0,2);
let wed1 = new THREE.Mesh(outerBoxGeo,frequency[11]);
wed1.position.set(-2,0,2);
let wed2 = new THREE.Mesh(outerBoxGeo,frequency[4]);
wed2.position.set(0,0,2);
let wed3 = new THREE.Mesh(outerBoxGeo,frequency[3]);
wed3.position.set(2,0,2);
let wed4 = new THREE.Mesh(outerBoxGeo,frequency[0]);
wed4.position.set(4,0,2);
let thu0 = new THREE.Mesh(outerBoxGeo,frequency[1]);
thu0.position.set(-4,0,0);
let thu1 = new THREE.Mesh(outerBoxGeo,frequency[11]);
thu1.position.set(-2,0,0);
let thu2 = new THREE.Mesh(outerBoxGeo,frequency[3]);
thu2.position.set(0,0,0);
let thu3 = new THREE.Mesh(outerBoxGeo,frequency[0]);
thu3.position.set(2,0,0);
let thu4 = new THREE.Mesh(outerBoxGeo,frequency[0]);
thu4.position.set(4,0,0);
let fri0 = new THREE.Mesh(outerBoxGeo,frequency[3]);
fri0.position.set(-4,0,-2);
let fri1 = new THREE.Mesh(outerBoxGeo,frequency[5]);
fri1.position.set(-2,0,-2);
let fri2 = new THREE.Mesh(outerBoxGeo,frequency[4]);
fri2.position.set(0,0,-2);
let fri3 = new THREE.Mesh(outerBoxGeo,frequency[2]);
fri3.position.set(2,0,-2);
let fri4 = new THREE.Mesh(outerBoxGeo,frequency[0]);
fri4.position.set(4,0,-2);
let sat0 = new THREE.Mesh(outerBoxGeo,frequency[4]);
sat0.position.set(-4,0,-4);
let sat1 = new THREE.Mesh(outerBoxGeo,frequency[3]);
sat1.position.set(-2,0,-4);
let sat2 = new THREE.Mesh(outerBoxGeo,frequency[7]);
sat2.position.set(0,0,-4);
let sat3 = new THREE.Mesh(outerBoxGeo,frequency[2]);
sat3.position.set(2,0,-4);
let sat4 = new THREE.Mesh(outerBoxGeo,frequency[0]);
sat4.position.set(4,0,-4);
let sun0 = new THREE.Mesh(outerBoxGeo,frequency[4]);
sun0.position.set(-4,0,-6);
let sun1 = new THREE.Mesh(outerBoxGeo,frequency[4]);
sun1.position.set(-2,0,-6);
let sun2 = new THREE.Mesh(outerBoxGeo,frequency[4]);
sun2.position.set(0,0,-6);
let sun3 = new THREE.Mesh(outerBoxGeo,frequency[4]);
sun3.position.set(2,0,-6);
let sun4 = new THREE.Mesh(outerBoxGeo,frequency[1]);
sun4.position.set(4,0,-6);


let material1= new THREE.MeshLambertMaterial({
    color:0x179999, 
    wireframe:false, 
    opacity:0.6,
    transparent:true, 
    depthWrite: false});

let randcor={};
for (i=0;i<5;i++){
    randcor[i]=Math.random()*1.4;
}
let itemGeo = new THREE.BoxGeometry(0.2,0.2,0.2);
let white = new THREE.MeshPhongMaterial({
    color:0xFFFFFF
});
let hollow = new THREE.MeshPhongMaterial({
    color:0xFFFFFF,
    wireframe:true
});

let box={};
for(i=0;i<4;i++){
    box[i]=new THREE.Mesh(itemGeo, white);
    box[i].position.x=-2+Math.random()*1.4;
}




let item = {};
let item2 ={};
let item3 ={};
let item4 ={};
let item5 ={};
let item6 ={};
let item7 ={};
let item8 ={};
let item9 ={};
let item10 ={};

let empty={};
for (i=0;i<7;i++){
    empty[i] = new THREE.Mesh(itemGeo, hollow);
    empty[i].position.x = -4;
    empty[i].position.z = -6+(i*2);
}
for(i=0;i<7;i++){
    item[i] = new THREE.Mesh(itemGeo,white);
    item[i].position.set(-2,0,-6);
    item[i].position.z += i*2;
}
for(i=0;i<7;i++){
    item2[i] = new THREE.Mesh(itemGeo,white);
    item2[i].position.set(0.2,0,-6);
    item2[i].position.z += i*2;
    item3[i] = new THREE.Mesh(itemGeo,white);
    item3[i].position.set(-0.2,0,-6);
    item3[i].position.z += i*2;
}
for(i=0;i<7;i++){
    item4[i] = new THREE.Mesh(itemGeo,white);
    item4[i].position.set(2.3,0,-6);
    item4[i].position.z += i*2;
    item5[i] = new THREE.Mesh(itemGeo,white);
    item5[i].position.set(2,0,-6);
    item5[i].position.z += i*2;
    item6[i] = new THREE.Mesh(itemGeo,white);
    item6[i].position.set(1.7,0,-6);
    item6[i].position.z += i*2;
}
for(i=0;i<7;i++){
    item7[i] = new THREE.Mesh(itemGeo,white);
    item7[i].position.set(4.45,0,-6);
    item7[i].position.z += i*2;
    item8[i] = new THREE.Mesh(itemGeo,white);
    item8[i].position.set(4.15,0,-6);
    item8[i].position.z += i*2;
    item9[i] = new THREE.Mesh(itemGeo,white);
    item9[i].position.set(3.85,0,-6);
    item9[i].position.z += i*2;
    item10[i] = new THREE.Mesh(itemGeo,white);
    item10[i].position.set(3.55,0,-6);
    item10[i].position.z += i*2;
}


init();
update();

function init(){
    scene= new THREE.Scene();
    scene.background=new THREE.Color(bg);
    
    camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
    
    light1= new THREE.AmbientLight(0xffffff,1);
    light1.position.set(-10,6,8);
    light2= new THREE.DirectionalLight(0xffffff,0.5);
    light2.position.set(0,6,1);
    //adding the light
    scene.add(light1,light2);

    //then render
    renderer=new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement)

    //orbit control library must be imported separately
    controls= new THREE.OrbitControls(camera,renderer.domElement);
    camera.position.set(0,10,0);
    controls.target.set(0,0,0);
    controls.update();
    
    //add in the scene
    scene.add(platform,mon0,mon1,mon2,mon3,mon4,tue0,tue1,tue2,tue3,tue4,wed0,wed1,wed2,wed3,wed4,thu0,thu1,thu2,thu3,thu4,fri0,fri1,fri2,fri3,fri4,sat0,sat1,sat2,sat3,sat4,sun0,sun1,sun2,sun3,sun4);
    
    for(i=0;i<7;i++){
        scene.add(item[i],item2[i],item3[i],item4[i],item5[i],item5[i],item6[i],item7[i],item8[i],item9[i],item10[i]);
    }
    for (i=0;i<7;i++){
        scene.add(empty[i]);
    }


    window.addEventListener('resize',resize,false); 
}


function update(){
    renderer.render(scene, camera);
    requestAnimationFrame(update);
    
}


function resize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

