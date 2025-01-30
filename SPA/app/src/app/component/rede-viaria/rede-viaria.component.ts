import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { Group, Loader, Vector3 } from 'three';

@Component({
  selector: 'app-rede-viaria',
  templateUrl: './rede-viaria.component.html',
  styleUrls: ['./rede-viaria.component.css']
})
export class RedeViariaComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef;

  //* Cube Properties

  @Input() public rotationSpeedX: number = 0.05;

  @Input() public rotationSpeedY: number = 0.01;

  @Input() public size: number = 200;

  //* Stage Properties

  @Input() public cameraZ: number = 400;

  @Input() public fieldOfView: number = 1;

  @Input('nearClipping') public nearClippingPlane: number = 1;

  @Input('farClipping') public farClippingPlane: number = 1000;

  //? Helper Properties (Private Properties);

  private camera!: THREE.PerspectiveCamera;

  private loader!: GLTFLoader;

  //GTFL Scene
  private root3!: THREE.Object3D;
  private root32!: THREE.Object3D;

  private mixer!: THREE.AnimationMixer;

  private keyStates = { w: false, s: false, a: false, d: false };

  private lastI: number = 0;
  private lastJ: number = 0;

  private stream = 'assets/mixkit-truck-accelerates-1622.wav';
  private listener = new THREE.AudioListener();
  private audio = new THREE.Audio(this.listener);
  private audioLoader = new THREE.AudioLoader();


  private listener2 = new THREE.AudioListener();
  private audio2 = new THREE.Audio(this.listener2);
  private audioLoader2 = new THREE.AudioLoader();



  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private renderer!: THREE.WebGLRenderer;

  private scene!: THREE.Scene;

  private controls!: OrbitControls;

  //vetor posicao camiao
  private camiaoPosicao!: THREE.Vector3;
  private camiaoPosicao2!: THREE.Vector3;

  private camiaoRotacao!: THREE.Vector3;

  //controls = null;



  private createScene() {
    //renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.body.appendChild(this.renderer.domElement);
    //* Scene
    this.scene = new THREE.Scene();
    const sky = new Sky();
    sky.scale.setScalar(100000);

    const sun = new THREE.Vector3();

    const effectController = {
      //sol pouco brilhante
      turbidity: 10,
      //brilho do sol
      rayleigh: 0.9,
      //brilho do sol
      mieCoefficient: 0.003,
      //brilho do sol
      mieDirectionalG: 0.5,
      //posicao do sol
      elevation: 2,
      //posicao do sol
      azimuth: 180,
      //exposicao
      exposure: this.renderer.toneMappingExposure
    };

    const uniforms = sky.material.uniforms;
    uniforms['turbidity'].value = effectController.turbidity;
    uniforms['rayleigh'].value = effectController.rayleigh;
    uniforms['mieCoefficient'].value = effectController.mieCoefficient;
    uniforms['mieDirectionalG'].value = effectController.mieDirectionalG;

    const phi = THREE.MathUtils.degToRad(90 - effectController.elevation);
    const theta = THREE.MathUtils.degToRad(effectController.azimuth);

    sun.setFromSphericalCoords(1, phi, theta);

    uniforms['sunPosition'].value.copy(sun);

    this.scene.add(sky);

    //fog
    this.scene.fog = new THREE.FogExp2(0x000000, 0.0007);




    //camera
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 60;


    var ArmazemAroucaLat = 8.2451;
    var ArmazemAroucaLong = 40.9321;
    var ArmazemAroucaAlt = 250;

    var ArmazemEspinhoLat = 8.6410;
    var ArmazemEspinhoLong = 41.0072;
    var ArmazemEspinhoAlt = 550;

    var ArmazemGondomarLat = 8.7613;
    var ArmazemGondomarLong = 41.0072;
    var ArmazemGondomarAlt = 200;

    var ArmazemMaiaLat = 8.6210;
    var ArmazemMaiaLong = 41.2279;
    var ArmazemMaiaAlt = 700;

    var ArmazemMatosinhosLat = 8.6963;
    var ArmazemMatosinhosLong = 41.1844;
    var ArmazemMatosinhosAlt = 350;

    var ArmazemOliveiraAzeméisLat = 8.4770;
    var ArmazemOliveiraAzeméisLong = 40.8387;
    var ArmazemOliveiraAzeméisAlt = 750;

    var ArmazemParedesLat = 8.3304;
    var ArmazemParedesLong = 41.2052;
    var ArmazemParedesAlt = 0;

    var ArmazemPortoLat = 8.6291;
    var ArmazemPortoLong = 41.1579;
    var ArmazemPortoAlt = 600;

    var ArmazemPovoaVarzimLat = 8.7609;
    var ArmazemPovoaVarzimLong = 41.3804;
    var ArmazemPovoaVarzimAlt = 400;

    var ArmazemSantaMariaFeiraLat = 8.5483;
    var ArmazemSantaMariaFeiraLong = 41.9268;
    var ArmazemSantaMariaFeiraAlt = 100;

    var ArmazemSantoTirsoLat = 8.4738;
    var ArmazemSantoTirsoLong = 41.3431;
    var ArmazemSantoTirsoAlt = 650;

    var ArmazemSaoJoaoMadeiraLat = 8.4907;
    var ArmazemSaoJoaoMadeiraLong = 40.9005;
    var ArmazemSaoJoaoMadeiraAlt = 300;

    var ArmazemTrofaLat = 8.5600;
    var ArmazemTrofaLong = 41.3391;
    var ArmazemTrofaAlt = 450;

    var ArmazemValeCambraLat = 8.3956;
    var ArmazemValeCambraLong = 40.8430;
    var ArmazemValeCambraAlt = 50;

    var ArmazemValongoLat = 8.4983;
    var ArmazemValongoLong = 41.1887;
    var ArmazemValongoAlt = 800;

    var ArmazemVilaCondeLat = 8.7479;
    var ArmazemVilaCondeLong = 41.3517;
    var ArmazemVilaCondeAlt = 150;


    var quantidadeArmazens = 16;
    let armazens = new Array(quantidadeArmazens);
    armazens[0] = new THREE.Vector3(ArmazemParedesLat, ArmazemParedesAlt, ArmazemParedesLong);
    armazens[1] = new THREE.Vector3(ArmazemValeCambraLat, ArmazemValeCambraAlt, ArmazemValeCambraLong);
    armazens[2] = new THREE.Vector3(ArmazemSantaMariaFeiraLat, ArmazemSantaMariaFeiraAlt, ArmazemSantaMariaFeiraLong);
    armazens[3] = new THREE.Vector3(ArmazemVilaCondeLat, ArmazemVilaCondeAlt, ArmazemVilaCondeLong);
    armazens[4] = new THREE.Vector3(ArmazemGondomarLat, ArmazemGondomarAlt, ArmazemGondomarLong);
    armazens[5] = new THREE.Vector3(ArmazemAroucaLat, ArmazemAroucaAlt, ArmazemAroucaLong);
    armazens[6] = new THREE.Vector3(ArmazemSaoJoaoMadeiraLat, ArmazemSaoJoaoMadeiraAlt, ArmazemSaoJoaoMadeiraLong);
    armazens[7] = new THREE.Vector3(ArmazemMatosinhosLat, ArmazemMatosinhosAlt, ArmazemMatosinhosLong);
    armazens[8] = new THREE.Vector3(ArmazemPovoaVarzimLat, ArmazemPovoaVarzimAlt, ArmazemPovoaVarzimLong);
    armazens[9] = new THREE.Vector3(ArmazemTrofaLat, ArmazemTrofaAlt, ArmazemTrofaLong);
    armazens[10] = new THREE.Vector3(ArmazemEspinhoLat, ArmazemEspinhoAlt, ArmazemEspinhoLong);
    armazens[11] = new THREE.Vector3(ArmazemPortoLat, ArmazemPortoAlt, ArmazemPortoLong);
    armazens[12] = new THREE.Vector3(ArmazemSantoTirsoLat, ArmazemSantoTirsoAlt, ArmazemSantoTirsoLong);
    armazens[13] = new THREE.Vector3(ArmazemMaiaLat, ArmazemMaiaAlt, ArmazemMaiaLong);
    armazens[14] = new THREE.Vector3(ArmazemOliveiraAzeméisLat, ArmazemOliveiraAzeméisAlt, ArmazemOliveiraAzeméisLong);
    armazens[15] = new THREE.Vector3(ArmazemValongoLat, ArmazemValongoAlt, ArmazemValongoLong);

    /* Passar vectores de coordenadas para vectores de posições 
    𝑥 =((50 − (−50))/(8.7613 − 8.2451)) ∗ (𝑙𝑜𝑛𝑔 − 8.2451) + (−50)
    𝑦 =((50 − 0)/(800 − 0))∗ (𝑎𝑙𝑡 − 0) + 0
    𝑧 =((50 − (−50))/(42.1115 − 40.8387)) ∗ (𝑙𝑎𝑡 − 40.8387) + (−50)
    */

    var x, y, z;
    var xMin = -50;
    var xMax = 50;
    var yMin = 0;
    var yMax = 50;
    var zMin = -50;
    var zMax = 50;

    var xMinCoord = 8.2451;
    var xMaxCoord = 8.7613;
    var yMinCoord = 0;
    var yMaxCoord = 800;
    var zMinCoord = 40.8387;
    var zMaxCoord = 42.1115;

    for (var i = 0; i < quantidadeArmazens; i++) {
      x = ((xMax - xMin) / (xMaxCoord - xMinCoord)) * (armazens[i].x - xMinCoord) + xMin;
      y = ((yMax - yMin) / (yMaxCoord - yMinCoord)) * (armazens[i].y - yMinCoord) + yMin;
      z = ((zMax - zMin) / (zMaxCoord - zMinCoord)) * (armazens[i].z - zMinCoord) + zMin;
      armazens[i] = new THREE.Vector3(x, y, z);
    }

    /* Armazens */
    const loader = new GLTFLoader();
    let url = '../assets/warehouse.glb';

    loader.load(url, (gltf) => {
      gltf.scene.castShadow = true;
      gltf.scene.scale.set(0.0008, 0.0008, 0.0008);
      gltf.scene.position.set(armazens[0].x - 4, armazens[0].y, armazens[0].z + 6);
      gltf.scene.rotation.set(0, 2.5, 0)
      const root = gltf.scene;
      this.nomeArmazém(armazens[0].x - 4, armazens[0].y, armazens[0].z + 6, 150, 20, 'Armazém de Paredes');
      root.name = 'Armazem de Paredes';
      this.scene.add(root);
    });
    loader.load(url, (gltf) => {
      gltf.scene.castShadow = true;
      console.log(gltf.scene.children[0].name)
      gltf.scene.scale.set(0.0008, 0.0008, 0.0008);
      gltf.scene.position.set(armazens[1].x, armazens[1].y, armazens[1].z - 7);
      const root = gltf.scene;
      this.nomeArmazém(armazens[1].x, armazens[1].y, armazens[1].z - 7, 150, 20, 'Armazém Vale de Cambra');
      root.name = 'Armazem Vale de Cambra';
      this.scene.add(root);
    });
    loader.load(url, (gltf) => {
      gltf.scene.castShadow = true;
      gltf.scene.scale.set(0.0008, 0.0008, 0.0008);
      gltf.scene.position.set(armazens[2].x, armazens[2].y, armazens[2].z + 7);
      gltf.scene.rotation.set(0, 3.2, 0);
      const root = gltf.scene;
      this.nomeArmazém(armazens[2].x, armazens[2].y, armazens[2].z + 7, 150, 20, 'Armazém Santa Maria da Feira');
      root.name = 'Armazem Santa Maria da Feira';
      this.scene.add(root);
    });

    loader.load(url, (gltf) => {
      gltf.scene.castShadow = true;
      gltf.scene.scale.set(0.00035, 0.0008, 0.0006);
      gltf.scene.position.set(armazens[3].x, armazens[3].y, armazens[3].z + 6);
      gltf.scene.rotation.set(0, 3, 0);
      const root = gltf.scene;
      //Rotulo
      this.nomeArmazém(armazens[3].x, armazens[3].y, armazens[3].z + 6, 150, 20, 'Armazém Vila de Conde');
      root.name = 'Armazem Vila de Conde';
      this.scene.add(root);
    });

    loader.load(url, (gltf) => {
      gltf.scene.castShadow = true;
      gltf.scene.scale.set(0.0006, 0.0006, 0.0006);
      gltf.scene.position.set(armazens[4].x, armazens[4].y, armazens[4].z - 6);
      const root = gltf.scene;
      //Rotulo
      this.nomeArmazém(armazens[4].x, armazens[4].y, armazens[4].z - 6, 150, 20, 'Armazém Gondomar');
      root.name = 'Armazem Gondomar';
      this.scene.add(root);
    });

    loader.load(url, (gltf) => {
      gltf.scene.castShadow = true;
      gltf.scene.scale.set(0.0008, 0.0008, 0.0008);
      gltf.scene.position.set(armazens[5].x, armazens[5].y, armazens[5].z - 7);
      const root = gltf.scene;
      //Rotulo
      this.nomeArmazém(armazens[5].x, armazens[5].y, armazens[5].z - 7, 150, 20, 'Armazém Arouca');
      root.name = 'Armazem Arouca';
      this.scene.add(root);
    });

    loader.load(url, (gltf) => {
      gltf.scene.castShadow = true;
      gltf.scene.scale.set(0.0008, 0.0008, 0.0008);
      gltf.scene.position.set(armazens[6].x, armazens[6].y, armazens[6].z - 7);
      const root = gltf.scene;
      //Rotulo
      this.nomeArmazém(armazens[6].x, armazens[6].y, armazens[6].z - 7, 150, 20, 'Armazém São João da Madeira');
      root.name = 'Armazem São João da Madeira';
      this.scene.add(root);
    });

    loader.load(url, (gltf) => {
      gltf.scene.castShadow = true;
      gltf.scene.scale.set(0.0003, 0.0006, 0.0006);
      gltf.scene.position.set(armazens[7].x - 1, armazens[7].y, armazens[7].z - 6);
      const root = gltf.scene;
      //Rotulo
      this.nomeArmazém(armazens[7].x - 1, armazens[7].y, armazens[7].z - 6, 150, 20, 'Armazém Matosinhos');
      root.name = 'Armazem Matosinhos';
      this.scene.add(root);
    });

    loader.load(url, (gltf) => {
      gltf.scene.castShadow = true;
      gltf.scene.scale.set(0.0006, 0.0006, 0.0008);
      gltf.scene.position.set(armazens[8].x + 3, armazens[8].y, armazens[8].z + 6.5);
      gltf.scene.rotation.set(0, 3.6, 0);
      const root = gltf.scene;
      //Rotulo
      this.nomeArmazém(armazens[8].x + 3, armazens[8].y, armazens[8].z + 6.5, 150, 20, 'Armazém Póvoa de Varzim');
      root.name = 'Armazem Póvoa de Varzim';
      this.scene.add(root);
    });

    loader.load(url, (gltf) => {
      gltf.scene.castShadow = true;
      gltf.scene.scale.set(0.0007, 0.0007, 0.0007);
      gltf.scene.position.set(armazens[9].x, armazens[9].y, armazens[9].z + 7);
      gltf.scene.rotation.set(0, 3.2, 0);
      const root = gltf.scene;
      //Rotulo
      this.nomeArmazém(armazens[9].x, armazens[9].y, armazens[9].z + 7, 150, 20, 'Armazém Trofa');
      root.name = 'Armazem Trofa';
      this.scene.add(root);
    });

    loader.load(url, (gltf) => {
      gltf.scene.castShadow = true;
      gltf.scene.scale.set(0.0006, 0.0004, 0.0009);
      gltf.scene.position.set(armazens[10].x, armazens[10].y, armazens[10].z - 7);
      const root = gltf.scene;
      //Rotulo
      this.nomeArmazém(armazens[10].x, armazens[10].y, armazens[10].z - 7, 150, 20, 'Armazém Espinho');
      root.name = 'Armazem Espinho';
      this.scene.add(root);
    });

    loader.load(url, (gltf) => {
      gltf.scene.castShadow = true;
      gltf.scene.scale.set(0.0005, 0.0005, 0.0005);
      gltf.scene.position.set(armazens[11].x + 5.8, armazens[11].y, armazens[11].z);
      gltf.scene.rotation.set(0, 4.6, 0);
      const root = gltf.scene;
      //Rotulo
      this.nomeArmazém(armazens[11].x + 5.8, armazens[11].y, armazens[11].z, 150, 20, 'Armazém Porto');
      root.name = 'Armazem Porto';
      this.scene.add(root);
    });

    loader.load(url, (gltf) => {
      gltf.scene.castShadow = true;
      gltf.scene.scale.set(0.0005, 0.0005, 0.0005);
      gltf.scene.position.set(armazens[12].x, armazens[12].y, armazens[12].z + 5.6);
      gltf.scene.rotation.set(0, 3, 0);
      const root = gltf.scene;
      //Rotulo
      this.nomeArmazém(armazens[12].x, armazens[12].y, armazens[12].z + 5.6, 150, 20, 'Armazém SantoTirso');
      root.name = 'Armazem SantoTirso';
      this.scene.add(root);
    });

    loader.load(url, (gltf) => {
      gltf.scene.castShadow = true;
      gltf.scene.scale.set(0.0007, 0.0007, 0.0007);
      gltf.scene.position.set(armazens[13].x, armazens[13].y, armazens[13].z + 6.5);
      gltf.scene.rotation.set(0, 3.2, 0);
      const root = gltf.scene;
      //Rotulo
      this.nomeArmazém(armazens[13].x, armazens[13].y, armazens[13].z + 6.5, 150, 20, 'Armazém Maia');
      root.name = 'Armazem Maia';
      this.scene.add(root);
    });

    loader.load(url, (gltf) => {
      gltf.scene.castShadow = true;
      gltf.scene.scale.set(0.0007, 0.0007, 0.0007);
      gltf.scene.position.set(armazens[14].x, armazens[14].y, armazens[14].z - 6.5);
      const root = gltf.scene;
      //Rotulo
      this.nomeArmazém(armazens[14].x, armazens[14].y, armazens[14].z - 6.5, 150, 20, 'Armazém Oliveira de Azeméis');
      root.name = 'Armazem Oliveira de Azeméis';
      this.scene.add(root);
    });

    loader.load(url, (gltf) => {
      //cast shadow
      gltf.scene.castShadow = true;
      gltf.scene.scale.set(0.0007, 0.0007, 0.0007);
      gltf.scene.position.set(armazens[15].x, armazens[15].y, armazens[15].z + 7);
      gltf.scene.rotation.set(0, 3.2, 0);
      const root = gltf.scene;
      //Rotulo
      this.nomeArmazém(armazens[15].x, armazens[15].y, armazens[15].z + 7, 150, 20, 'Armazém Valongo');
      root.name = 'Armazem Valongo';
      this.scene.add(root);
    });

   

    //AmbientLight
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    this.scene.add(ambientLight);

    //DirectionalLight
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.3);
    directionalLight.position.set(0, 1, 0);
    directionalLight.castShadow = true;
    this.scene.add(directionalLight);


    var wi = 2.1;
    var K_CIRCULO = 3.1;
    var raio = K_CIRCULO * wi / 2;

    /* Criar Rotundas */
    //Geometria de circulo
    //Circulo com raio = raio
    var geometry = new THREE.CircleGeometry(raio, 32);
    //Texture 
    var texture = new THREE.TextureLoader().load('../assets/roadRound.png');
    var material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
    //Rodar o circulo 90º para que fique na horizontal
    geometry.rotateX(Math.PI / 2);
    var round = new THREE.Mesh(geometry, material);
    for (var i = 0; i < quantidadeArmazens; i++) {
      round = new THREE.Mesh(geometry, material);
      round.position.set(armazens[i].x, armazens[i].y, armazens[i].z);
      this.scene.add(round);
    }
    //Criar matriz bidimensional   
    var pontos = new Array(quantidadeArmazens);
    for (var i = 0; i < quantidadeArmazens; i++) {
      pontos[i] = new Array(quantidadeArmazens);
    }

    //Textura ponto de ligação
    var texture = new THREE.TextureLoader().load(/*imagem da pasta do projeto*/ '../assets/estrada.png');


    var material = new THREE.MeshBasicMaterial({ map: texture });
    //Dupla face
    material.side = THREE.DoubleSide;
    for (var i = 0; i < quantidadeArmazens; i++) {
      for (var j = i; j < i + 3; j++) {
        if (i != j && j < quantidadeArmazens && (i != 11 || j != 13) && (i != 10 || j != 11)) {

          var geometryLigacao = new THREE.PlaneGeometry(wi, raio * 2.1);
          console.log(raio * 2.1);
          //Rodar o plano 90º para que fique na horizontal
          geometryLigacao.rotateX(Math.PI / 2);
          var translate = raio * 2.1 / 2;
          //Posicionar o plano no centro do caminho
          geometryLigacao.translate(0, -0.002, translate);
          //Criar o plano
          var plane = new THREE.Mesh(geometryLigacao, material);
          //Posicionar o plano no centro do caminho
          plane.position.set(armazens[i].x, armazens[i].y, armazens[i].z);
          //Rotacionar o plano para que fique na direção certa
          //Look at with angle in radians  αij = arctan^2((yj - yi) / (xj - xi)) (em radianos);
          var alpha = Math.atan2(armazens[j].z - armazens[i].z, armazens[j].x - armazens[i].x);
          plane.rotation.y = Math.PI / 2 - alpha;
          var planePosition = new THREE.Vector3();
          //Calcular ponto final da plataforma ou seja plane.position + comprimento da ponto de ligação
          planePosition.x = plane.position.x + Math.cos(alpha) * raio * 2.1;
          planePosition.y = plane.position.y;
          planePosition.z = plane.position.z + Math.sin(alpha) * raio * 2.1;
          //Guardar no array de pontos
          pontos[i][j] = planePosition;
          //Adicionar o plano à cena
          this.scene.add(plane);

          //Igual para o caminho inverso
          var plane2 = new THREE.Mesh(geometryLigacao, material);
          plane2.position.set(armazens[j].x, armazens[j].y, armazens[j].z);
          var alpha2 = Math.atan2(armazens[i].z - armazens[j].z, armazens[i].x - armazens[j].x);
          plane2.rotation.y = Math.PI / 2 - alpha2;
          var planePosition2 = new THREE.Vector3();
          planePosition2.x = plane2.position.x + Math.cos(alpha2) * raio * 2.1;
          planePosition2.y = plane2.position.y;
          planePosition2.z = plane2.position.z + Math.sin(alpha2) * raio * 2.1;
          pontos[j][i] = planePosition2;
          this.scene.add(plane2);

        }
      }
    }

    //Ligar pontos pontos[i][j] com pontos[j][i]
    for (var i = 0; i < quantidadeArmazens; i++) {
      for (var j = i; j < i + 3; j++) {
        if (i != j && j < quantidadeArmazens && (i != 11 || j != 13) && (i != 10 || j != 11)) {

          var pontosAux = new Array(2);
          pontosAux[0] = pontos[i][j];
          pontosAux[1] = pontos[j][i];
          //comprimenro é de pontosAux[0] a pontosAux[1]
          var comprimento = Math.sqrt(Math.pow(pontosAux[0].x - pontosAux[1].x, 2) + Math.pow(pontosAux[0].z - pontosAux[1].z, 2) + Math.pow(pontosAux[0].y - pontosAux[1].y, 2));
          var geometryRampa = new THREE.PlaneGeometry(wi, comprimento);
          //Rodar o plano 90º para que fique na horizontal
          geometryRampa.rotateX(Math.PI / 2);
          var translate = comprimento / 2;
          //Posicionar o plano no centro do caminho
          geometryRampa.translate(0, 0, translate);
          //Criar o plano
          var plane2 = new THREE.Mesh(geometryRampa, material);
          //Posicionar o plano no centro do caminho
          plane2.position.set(pontosAux[0].x, pontosAux[0].y, pontosAux[0].z);
          //Rotacionar o plano para que fique na direção do caminho
          plane2.lookAt(pontosAux[1].x, pontosAux[1].y, pontosAux[1].z);
          //Adicionar o plano à cena
          this.scene.add(plane2);
        }
      }
    }

    //a,w,s,d to mixer
    //a,w,s,d to move the camiao
    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        //rotation and movement
        case 'a':
          this.root3.rotation.y += 0.07;
          this.keyStates[event.key] = true;

          break;
        case 'd':
          this.root3.rotation.y -= 0.07;
          this.keyStates[event.key] = true;

          break;
        case 'w':

          if (this.checkIfCanMovear(armazens, pontos)) {
            if (!this.audio.isPlaying) {
              this.audioLoader.load(this.stream, (buffer) => {
                this.audio.setBuffer(buffer);
                this.audio.setLoop(false);
                this.audio.play();
              });
            }
            this.root3.position.x += 0.15 * Math.sin(this.root3.rotation.y - Math.PI / 2);
            this.root3.position.z += 0.15 * Math.cos(this.root3.rotation.y - Math.PI / 2);


          } else {
            this.root3.position.x -= 0.15 * Math.sin(this.root3.rotation.y - Math.PI / 2);
            this.root3.position.z -= 0.15 * Math.cos(this.root3.rotation.y - Math.PI / 2);
            alert("Não pode sair do mapa");
          }
          this.keyStates[event.key] = true;
          break;
        case 's':

          if (this.checkIfCanMovear(armazens, pontos)) {
            if (this.audio.isPlaying) {
              this.audio.stop();
            }
            if (this.checkIfCanMovear(armazens, pontos)) {
              var stream2 = 'assets/mixkit-truck-reversing-beeps-loop-1077.wav';
              if (!this.audio.isPlaying) {
                this.audioLoader.load(stream2, (buffer) => {
                  this.audio.setBuffer(buffer);
                  this.audio.setLoop(false);
                  this.audio.play();
                });
              }
            }
            this.root3.position.x -= 0.15 * Math.sin(this.root3.rotation.y - Math.PI / 2);
            this.root3.position.z -= 0.15 * Math.cos(this.root3.rotation.y - Math.PI / 2);
          } else {
            this.root3.position.x += 0.15 * Math.sin(this.root3.rotation.y - Math.PI / 2);
            this.root3.position.z += 0.15 * Math.cos(this.root3.rotation.y - Math.PI / 2);
            alert("Não pode sair do mapa");
          }
          this.keyStates[event.key] = true;
          break;

        case 'j':
          this.root32.rotation.y += 0.07;
          break;
        case 'l':
          this.root32.rotation.y -= 0.07;
          break;
        case 'i':
          if (this.checkIfCanMovear2(armazens, pontos)) {
            if (!this.audio2.isPlaying) {
              this.audioLoader2.load(this.stream, (buffer) => {
                this.audio2.setBuffer(buffer);
                this.audio2.setLoop(false);
                this.audio2.play();
              });
            }
            this.root32.position.x += 0.15 * Math.sin(this.root32.rotation.y - Math.PI / 2);
            this.root32.position.z += 0.15 * Math.cos(this.root32.rotation.y - Math.PI / 2);
          } else {
            this.root32.position.x -= 0.15 * Math.sin(this.root32.rotation.y - Math.PI / 2);
            this.root32.position.z -= 0.15 * Math.cos(this.root32.rotation.y - Math.PI / 2);
            alert("Não pode sair do mapa");
          }
          break;
        case 'k':
          if (this.checkIfCanMovear2(armazens, pontos)) {
            var stream2 = 'assets/mixkit-truck-reversing-beeps-loop-1077.wav';
            if (!this.audio.isPlaying) {
              this.audioLoader.load(stream2, (buffer) => {
                this.audio.setBuffer(buffer);
                this.audio.setLoop(false);
                this.audio.play();
              });
            }
            this.root32.position.x -= 0.15 * Math.sin(this.root32.rotation.y - Math.PI / 2);
            this.root32.position.z -= 0.15 * Math.cos(this.root32.rotation.y - Math.PI / 2);
          } else {
            this.root32.position.x += 0.15 * Math.sin(this.root32.rotation.y - Math.PI / 2);
            this.root32.position.z += 0.15 * Math.cos(this.root32.rotation.y - Math.PI / 2);
            alert("Não pode sair do mapa");
          }
          break;
      }
    });


    this.camiaoPosicao = new THREE.Vector3(armazens[15].x, armazens[15].y, armazens[15].z);
    this.camiaoPosicao2 = new THREE.Vector3(armazens[3].x, armazens[3].y, armazens[3].z);

    this.loadCamiao(this.camiaoPosicao.x, this.camiaoPosicao.y, this.camiaoPosicao.z);
    this.loadCamiao2(this.camiaoPosicao2.x, this.camiaoPosicao2.y, this.camiaoPosicao2.z);

  }

  //carrega o camiao para a scene
  private loadCamiao(x: number, y: number, z: number) {
    this.loader = new GLTFLoader();
    let url = '../assets/truck_one_material.glb';
    this.loader.load(url, (gltf) => {
      gltf.scene.scale.set(0.8, 0.8, 0.8);
      gltf.scene.position.set(x, y, z);
      gltf.scene.rotation.set(0, -Math.PI / 2 + 0.15, 0)
      this.root3 = gltf.scene;
      console.log(this.root3);
      console.log(gltf.scene);
      this.mixer = new THREE.AnimationMixer(this.root3);
      this.scene.add(this.root3);
    });
  }

  //carrega o camiao para a scene
  private loadCamiao2(x: number, y: number, z: number) {
    this.loader = new GLTFLoader();
    let url = '../assets/truck_one_material.glb';
    this.loader.load(url, (gltf) => {
      gltf.scene.scale.set(0.8, 0.8, 0.8);
      gltf.scene.position.set(x, y, z);
      gltf.scene.rotation.set(0, -Math.PI / 2 + 0.15, 0)
      this.root32 = gltf.scene;
      console.log(this.root32);
      console.log(gltf.scene);
      this.mixer = new THREE.AnimationMixer(this.root3);
      this.scene.add(this.root32);
    });
  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  private startRenderingLoop() {
    //* Renderer
    // Use canvas element in template
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.controls.update();
    let component: RedeViariaComponent = this;
    (function render() {
      requestAnimationFrame(render);
      //update position of GLTF model 
      component.renderer.setSize(component.canvas.clientWidth, component.canvas.clientHeight);
      //cube position update
      //component.root3.position.set(component.camiaoPosicao.x, component.camiaoPosicao.y, component.camiaoPosicao.z);
      component.controls.update();
      component.renderer.render(component.scene, component.camera);
      component.keyStates['a'] = false;
      component.keyStates['d'] = false;
      component.keyStates['w'] = false;
      component.keyStates['s'] = false;

    }());
  }

  /* Rotulos nos armazens */
  private makeLabelCanvas(baseWidth: number, size: number, name: string) {
    const borderSize = 1;
    let canvas: HTMLCanvasElement = document.createElement('canvas');
    let ctx: CanvasRenderingContext2D | null;
    if (!(ctx = canvas.getContext("2d"))) {
      throw new Error(`2d context not supported or canvas already initialized`);
    }
    //const font = `${size}px bold sans-serif`;
    const font = `${size}px helvetica sans-serif`;
    ctx.font = font;
    // measure how long the name will be
    const textWidth = ctx.measureText(name).width;

    const doubleBorderSize = borderSize * 2;
    const width = baseWidth + doubleBorderSize;
    const height = size + doubleBorderSize;
    ctx.canvas.width = width;
    ctx.canvas.height = height;

    // need to set font again after resizing canvas
    ctx.font = font;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';

    ctx.fillStyle = 'transparent';
    ctx.fillRect(0, 0, width, height);

    // scale to fit but don't stretch
    const scaleFactor = Math.min(1, baseWidth / textWidth);
    ctx.translate(width / 2, height / 2);
    ctx.scale(scaleFactor, 1);
    ctx.fillStyle = 'purple';
    ctx.fillText(name, 0, 0);

    return ctx.canvas;
  }

  private nomeArmazém(x: number, y: number, z: number, baseWidth: number, size: number, name: string) {
    const bodyRadiusTop = .1;
    const bodyRadiusBottom = .2;
    const bodyHeight = 5;
    const bodyRadialSegments = 3;
    const bodyGeometry = new THREE.CylinderGeometry(bodyRadiusTop, bodyRadiusBottom, bodyHeight, bodyRadialSegments);

    const headRadius = bodyRadiusTop * 0.8;
    const headLonSegments = 4;
    const headLatSegments = 1;
    const headGeometry = new THREE.SphereGeometry(headRadius, headLonSegments, headLatSegments);

    const canvas = this.makeLabelCanvas(baseWidth, size, name);
    const texture = new THREE.CanvasTexture(canvas);

    texture.minFilter = THREE.LinearFilter;
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;

    const labelMaterial = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
    });
    const bodyMaterial = new THREE.MeshPhongMaterial({
      opacity: 0,
      transparent: true,
      flatShading: true,
    });
    const root = new THREE.Object3D();
    root.position.x = x;
    root.position.y = y;
    root.position.z = z;
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    root.add(body);
    body.position.y = bodyHeight / 2;

    const head = new THREE.Mesh(headGeometry, bodyMaterial);
    root.add(head);
    head.position.y = bodyHeight + headRadius * 1.1;

    const label = new THREE.Sprite(labelMaterial);
    root.add(label);
    label.position.y = bodyHeight * 4 / 5;
    label.position.z = bodyRadiusTop * 1.01;

    const labelBaseScale = 0.1;
    label.scale.x = canvas.width * labelBaseScale;
    label.scale.y = canvas.height * labelBaseScale;

    this.scene.add(root);
    return root;
  };
  /*----------------*/

  constructor() {
    //this.scene = new THREE.Scene();
    //this.camera = new THREE.PerspectiveCamera(35, 800/640, 0.1, 1000)
  }

  ngOnInit(): void {

  }

  configControls() {
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableRotate = true;
    this.controls.enableZoom = true;
    this.controls.enablePan = true;
    this.controls.update();
  }

  ngAfterViewInit() {
    this.createScene();
    //this.getAspectRatio();
    this.configControls();
    this.startRenderingLoop();
  }

  checkIfCanMovear(armazens: Array<any>, pontos: Array<Array<THREE.Vector3>>) {
    //(x'P - xi)^2 + (y'P - yi)^2 ≤ ri^2.
    let canMove = false;

    let x = this.root3.position.x;
    let y = this.root3.position.y;
    let z = this.root3.position.z;

    //verificar se camioes 1 e 2 vão colidir um com o outro, tendo em conta um range lateral de 0.5 e 1 de comprimento
    if (this.root3.position.x > this.root32.position.x - 1.5 && this.root3.position.x < this.root32.position.x + 1.5 && this.root3.position.z > this.root32.position.z - 1.5 && this.root3.position.z < this.root32.position.z + 1.5) {
      alert("Camioes vão colidir");
      return false;
    }

    for (let i = 0; i < armazens.length; i++) {
      let xi = armazens[i].x;
      let yi = armazens[i].y;
      let zi = armazens[i].z;
      let ri = 3.255;

      if (Math.pow((x - xi), 2) + Math.pow((z - zi), 2) <= Math.pow(ri, 2) && y == yi) {
        return true;
      }

    }

    /*----------------*/

    let xP;
    let zP;
    //pontos is center of mesh plane rectangle
    let largura = 2.1;
    let comprimento = 6.835500000000001;
    let angulo = 0;

    for (i = 0; i < armazens.length; i++) {
      for (j = 0; j < armazens.length; j++) {
        let xi = armazens[i].x;
        let yi = armazens[i].y;
        let zi = armazens[i].z;
        let ri = 1;

        angulo = Math.atan2(armazens[j].z - armazens[i].z, armazens[j].x - armazens[i].x);
        angulo = angulo;

        /*
        • x''P = (x'P - xi) * cos(αij) + (y'P - yi) * sin(αij);
        • y''P = (y'P - yi) * cos(αij) - (x'P - xi) * sin(αij).
        */

        xP = (x - xi) * Math.cos(angulo) + (z - zi) * Math.sin(angulo);
        zP = (z - zi) * Math.cos(angulo) - (x - xi) * Math.sin(angulo);

        if (i == 15 && j == 14) {
          console.log("xP: " + xP + "comprimento: " + comprimento);
          console.log("zP: " + zP + "largura: " + largura / 2);
          console.log("y: " + y + "yi: " + yi);


        }

        if (xP >= 0 && xP <= comprimento && zP <= largura / 2 && zP >= -largura / 2 && (y == yi || (y + 0.2 > yi && y - 0.2 < yi)) && ((j < i + 3 && j > i) || (j > i - 3 && j < i))) {
          canMove = true;
          this.root3.position.y = yi;
          this.root3.rotation.x = 0;
          this.root3.rotation.z = 0;
        }
        if (canMove) {
          this.lastI = i;
          this.lastJ = j;
          return true;
        }
      }
    }
    if (canMove) {
      return true;
    }
    let x1 = 0;
    let y1 = 0;
    let z1 = 0;

    let x2 = 0;
    let y2 = 0;
    let z2 = 0;

    var i = 0;
    var j = 0;

    var apontos = new Array(armazens.length);
    for (var i = 0; i < armazens.length; i++) {
      apontos[i] = new Array(armazens.length);
    }
    j = 0;
    i = 0;
    // passar os pontos para um array apontos
    pontos.forEach(pontos => {
      for (j = 0; j < pontos.length; j++) {
        var aux = pontos[j];
        apontos[i][j] = aux;
      }

      ++i;
    });

    var k = 0;
    let t = 0;
    //verificar se está entre os pontos
    apontos.forEach(pontos => {
      //verificar se está entre os pontos
      console.log("ponto: " + pontos);
      pontos.forEach((ponto: { x: number; y: number; z: number; }) => {
        if (ponto != undefined) {
          //array de THREE.Vector3
          x1 = ponto.x;
          y1 = ponto.y;
          z1 = ponto.z;


          var xi = armazens[t].x;
          var yi = armazens[t].y;
          var zi = armazens[t].z;

          var xj = armazens[k].x;
          var yj = armazens[k].y;
          var zj = armazens[k].z;


          angulo = Math.atan2(armazens[t].z - armazens[k].z, armazens[t].x - armazens[k].x);
          angulo = angulo;


          xP = -((x - xi) * Math.cos(angulo) + (z - zi) * Math.sin(angulo));
          zP = (z - zi) * Math.cos(angulo) - (x - xi) * Math.sin(angulo);

          //distancia entre os pontos
          comprimento = Math.sqrt(Math.pow((xj - x1), 2) + Math.pow((zj - z1), 2)) - 6.835500000000001;

          largura = 2.1;

          if (xP >= 6.835500000000001 && xP <= comprimento + 6.835500000000001 && zP <= largura / 2 && zP >= -largura / 2 && this.lastI == t && this.lastJ == k) {
            canMove = true;
            comprimento = Math.sqrt(Math.pow((xj - x1), 2) + Math.pow((zj - z1), 2)) - 6.835500000000001;
            //colocar na altura da rampa
            this.root3.position.y = yi + ((xP - 6.835500000000001) * (yj - yi) / comprimento);
            //rotation x e z
            //posicao xj,yj,zj - 6.835500000000001 ca

            var aux = this.root3.rotation.y;
            if (aux <= Math.PI / 2 + 0.15 && aux >= -Math.PI / 2 + 0.15) {
              this.root3.rotation.x = - Math.atan2(yj - yi, comprimento);
              console.log(" Rotation: " + this.root3.rotation.x);

            } else {
              this.root3.rotation.z = - Math.atan2(yj - yi, comprimento);
              console.log("Z Rotation: " + this.root3.rotation.z);
            }
            console.log("Y Rotation: " + this.root3.rotation.y);
            //this.root3.rotation.z = Math.PI/2 + Math.atan2(zj - zi, xj - xi);





          }

        } ++k;
      });

      ++t;
      k = 0;

    });

    if (canMove) {
      return true;
    }

    return false;
  }


  checkIfCanMovear2(armazens: Array<any>, pontos: Array<Array<THREE.Vector3>>) {



    let canMove = false;

    let x = this.root32.position.x;
    let y = this.root32.position.y;
    let z = this.root32.position.z;

    if (this.root3.position.x > this.root32.position.x - 1.5 && this.root3.position.x < this.root32.position.x + 1.5 && this.root3.position.z > this.root32.position.z - 1.5 && this.root3.position.z < this.root32.position.z + 1.5) {
      alert("Camioes vão colidir");
      return false;
    }
    //verificar colisao entre camioes 
    if (this.root3.position.x == this.root32.position.x && this.root3.position.z == this.root32.position.z && this.root3.position.y == this.root32.position.y) {
      return false;
    }
    for (let i = 0; i < armazens.length; i++) {
      let xi = armazens[i].x;
      let yi = armazens[i].y;
      let zi = armazens[i].z;
      let ri = 3.255;

      if (Math.pow((x - xi), 2) + Math.pow((z - zi), 2) <= Math.pow(ri, 2) && y == yi) {
        return true;
      }

    }

    /*----------------*/

    let xP;
    let zP;
    //pontos is center of mesh plane rectangle
    let largura = 2.1;
    let comprimento = 6.835500000000001;
    let angulo = 0;

    for (i = 0; i < armazens.length; i++) {
      for (j = 0; j < armazens.length; j++) {
        let xi = armazens[i].x;
        let yi = armazens[i].y;
        let zi = armazens[i].z;
        let ri = 1;

        angulo = Math.atan2(armazens[j].z - armazens[i].z, armazens[j].x - armazens[i].x);
        angulo = angulo;

        /*
        • x''P = (x'P - xi) * cos(αij) + (y'P - yi) * sin(αij);
        • y''P = (y'P - yi) * cos(αij) - (x'P - xi) * sin(αij).
        */

        xP = (x - xi) * Math.cos(angulo) + (z - zi) * Math.sin(angulo);
        zP = (z - zi) * Math.cos(angulo) - (x - xi) * Math.sin(angulo);

        if (i == 15 && j == 14) {
          console.log("xP: " + xP + "comprimento: " + comprimento);
          console.log("zP: " + zP + "largura: " + largura / 2);
          console.log("y: " + y + "yi: " + yi);


        }

        if (xP >= 0 && xP <= comprimento && zP <= largura / 2 && zP >= -largura / 2 && (y == yi || (y + 0.2 > yi && y - 0.2 < yi)) && ((j < i + 3 && j > i) || (j > i - 3 && j < i))) {
          canMove = true;
          this.root32.position.y = yi;
          this.root32.rotation.x = 0;
          this.root32.rotation.z = 0;
        }
        if (canMove) {
          this.lastI = i;
          this.lastJ = j;
          return true;
        }
      }
    }
    if (canMove) {
      return true;
    }
    let x1 = 0;
    let y1 = 0;
    let z1 = 0;

    let x2 = 0;
    let y2 = 0;
    let z2 = 0;

    var i = 0;
    var j = 0;

    var apontos = new Array(armazens.length);
    for (var i = 0; i < armazens.length; i++) {
      apontos[i] = new Array(armazens.length);
    }
    j = 0;
    i = 0;
    // passar os pontos para um array apontos
    pontos.forEach(pontos => {
      for (j = 0; j < pontos.length; j++) {
        var aux = pontos[j];
        apontos[i][j] = aux;
      }

      ++i;
    });

    var k = 0;
    let t = 0;
    //verificar se está entre os pontos
    apontos.forEach(pontos => {
      //verificar se está entre os pontos
      console.log("ponto: " + pontos);
      pontos.forEach((ponto: { x: number; y: number; z: number; }) => {
        if (ponto != undefined) {
          //array de THREE.Vector3
          x1 = ponto.x;
          y1 = ponto.y;
          z1 = ponto.z;


          var xi = armazens[t].x;
          var yi = armazens[t].y;
          var zi = armazens[t].z;

          var xj = armazens[k].x;
          var yj = armazens[k].y;
          var zj = armazens[k].z;


          angulo = Math.atan2(armazens[t].z - armazens[k].z, armazens[t].x - armazens[k].x);
          angulo = angulo;


          xP = -((x - xi) * Math.cos(angulo) + (z - zi) * Math.sin(angulo));
          zP = (z - zi) * Math.cos(angulo) - (x - xi) * Math.sin(angulo);

          //distancia entre os pontos
          comprimento = Math.sqrt(Math.pow((xj - x1), 2) + Math.pow((zj - z1), 2)) - 6.835500000000001;

          largura = 2.1;

          if (xP >= 6.835500000000001 && xP <= comprimento + 6.835500000000001 && zP <= largura / 2 && zP >= -largura / 2 && this.lastI == t && this.lastJ == k) {
            canMove = true;
            comprimento = Math.sqrt(Math.pow((xj - x1), 2) + Math.pow((zj - z1), 2)) - 6.835500000000001;
            //colocar na altura da rampa
            this.root32.position.y = yi + ((xP - 6.835500000000001) * (yj - yi) / comprimento);
            //rotation x e z
            //posicao xj,yj,zj - 6.835500000000001 ca

            var aux = this.root32.rotation.y;
            if (aux <= Math.PI / 2 + 0.15 && aux >= -Math.PI / 2 + 0.15) {
              this.root32.rotation.x = - Math.atan2(yj - yi, comprimento);
              console.log(" Rotation: " + this.root32.rotation.x);

            } else {
              this.root32.rotation.z = - Math.atan2(yj - yi, comprimento);
              console.log("Z Rotation: " + this.root32.rotation.z);
            }
            console.log("Y Rotation: " + this.root32.rotation.y);





          }

        } ++k;
      });

      ++t;
      k = 0;

    });

    if (canMove) {
      return true;
    }

    return false;
  }
}