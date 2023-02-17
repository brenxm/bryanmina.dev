import * as THREE from "three"
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

function imbed3D(){
    const scene = new THREE.Scene();
    const loader = new GLTFLoader();

    loader.load('/assets/models/iphone.glb', function (gltf) {

        scene.add(gltf.scene);

    }, undefined, function (error) {

        console.error(error);

    });

    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const controls = new OrbitControls( camera, renderer.domElement);
    controls.update();

    
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    
    camera.position.z = 10;
    
    // Iphone 3d model
    
    const light = new THREE.AmbientLight( 0x404040);
    scene.add(light);
    scene.background = {color: 0xFFFFFF};
    light.intensity = 10;


    function animate() {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;


        renderer.render(scene, camera);
    };

    animate();
};

export default imbed3D;