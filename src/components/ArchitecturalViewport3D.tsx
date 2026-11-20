import { Play, Pause } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { ARCHITECTURAL_STAGES } from '../data/consultancyData';
import { ArchitecturalFallbackSVG } from './ArchitecturalFallbackSVG';

interface ArchitecturalViewport3DProps {
  activeStageIndex: number;
  onSelectStage: (index: number) => void;
}

interface ElementPose {
  pos: [number, number, number];
  rot: [number, number, number];
  scale: [number, number, number];
}

interface ArchitecturalSpec {
  size: [number, number, number];
  tier: 'navy' | 'porcelain' | 'gold';
  staggerSpeed: number;
  stages: [ElementPose, ElementPose, ElementPose, ElementPose];
}

// 14 interlocking architectural members forming a multi-scale structural pavilion
// Stages: [0] Fragmentation -> [1] Understanding -> [2] Alignment -> [3] Optimisation
const ARCHITECTURAL_ELEMENTS: ArchitecturalSpec[] = [
  {
    size: [2.2, 0.24, 1.35],
    tier: 'navy',
    staggerSpeed: 4.4,
    stages: [
      { pos: [-1.45, -0.75, 0.55], rot: [0.18, -0.35, 0.22], scale: [1, 1, 1] },
      { pos: [-0.95, -0.95, 0.3], rot: [0, 0, 0], scale: [1, 1, 1] },
      { pos: [-0.62, -0.82, 0.14], rot: [0, 0, 0], scale: [1, 1, 1] },
      { pos: [-0.45, -0.78, 0.0], rot: [0, 0, 0], scale: [1, 1, 1] },
    ],
  },
  {
    size: [1.65, 0.24, 1.35],
    tier: 'navy',
    staggerSpeed: 4.8,
    stages: [
      { pos: [1.55, -0.55, -0.65], rot: [-0.24, 0.42, -0.15], scale: [1, 1, 1] },
      { pos: [1.05, -0.95, -0.3], rot: [0, 0, 0], scale: [1, 1, 1] },
      { pos: [0.85, -0.82, -0.14], rot: [0, 0, 0], scale: [1, 1, 1] },
      { pos: [0.72, -0.78, 0.0], rot: [0, 0, 0], scale: [1, 1, 1] },
    ],
  },
  {
    size: [0.28, 1.55, 1.15],
    tier: 'porcelain',
    staggerSpeed: 5.1,
    stages: [
      { pos: [-1.65, 0.35, -0.8], rot: [0.28, 0.5, -0.3], scale: [1, 1, 1] },
      { pos: [-1.35, 0.1, -0.25], rot: [0, 0, 0], scale: [1, 1, 1] },
      { pos: [-1.05, 0.06, -0.05], rot: [0, 0, 0], scale: [1, 1, 1] },
      { pos: [-0.92, 0.1, 0.0], rot: [0, 0, 0], scale: [1, 1, 1] },
    ],
  },
  {
    size: [0.28, 1.55, 1.15],
    tier: 'porcelain',
    staggerSpeed: 5.4,
    stages: [
      { pos: [1.35, 0.85, 0.9], rot: [-0.32, -0.4, 0.24], scale: [1, 1, 1] },
      { pos: [1.35, 0.1, 0.25], rot: [0, 0, 0], scale: [1, 1, 1] },
      { pos: [1.05, 0.06, 0.05], rot: [0, 0, 0], scale: [1, 1, 1] },
      { pos: [0.92, 0.1, 0.0], rot: [0, 0, 0], scale: [1, 1, 1] },
    ],
  },
  {
    size: [0.85, 1.28, 0.65],
    tier: 'navy',
    staggerSpeed: 4.9,
    stages: [
      { pos: [0.15, -0.15, -1.1], rot: [0.15, 0.65, 0.18], scale: [1, 1, 1] },
      { pos: [0.0, 0.0, -0.35], rot: [0, 0, 0], scale: [1, 1, 1] },
      { pos: [0.0, -0.02, -0.12], rot: [0, 0, 0], scale: [1, 1, 1] },
      { pos: [0.0, -0.02, 0.0], rot: [0, 0, 0], scale: [1, 1, 1] },
    ],
  },
  {
    size: [2.55, 0.12, 0.28],
    tier: 'gold',
    staggerSpeed: 5.9,
    stages: [
      { pos: [-0.65, 1.05, 0.85], rot: [0.22, -0.55, 0.36], scale: [1, 1, 1] },
      { pos: [0.0, 0.88, 0.45], rot: [0, 0, 0], scale: [1, 1, 1] },
      { pos: [0.0, 0.64, 0.34], rot: [0, 0, 0], scale: [1, 1, 1] },
      { pos: [0.0, 0.62, 0.34], rot: [0, 0, 0], scale: [1, 1, 1] },
    ],
  },
  {
    size: [2.55, 0.12, 0.28],
    tier: 'gold',
    staggerSpeed: 6.2,
    stages: [
      { pos: [0.85, -0.25, 1.15], rot: [-0.25, 0.45, -0.28], scale: [1, 1, 1] },
      { pos: [0.0, 0.88, -0.45], rot: [0, 0, 0], scale: [1, 1, 1] },
      { pos: [0.0, 0.64, -0.34], rot: [0, 0, 0], scale: [1, 1, 1] },
      { pos: [0.0, 0.62, -0.34], rot: [0, 0, 0], scale: [1, 1, 1] },
    ],
  },
  {
    size: [2.75, 0.18, 1.38],
    tier: 'porcelain',
    staggerSpeed: 4.5,
    stages: [
      { pos: [0.45, 1.45, -0.55], rot: [-0.18, -0.32, 0.22], scale: [1, 1, 1] },
      { pos: [0.0, 1.38, 0.0], rot: [0, 0, 0], scale: [1, 1, 1] },
      { pos: [0.0, 1.02, 0.0], rot: [0, 0, 0], scale: [1, 1, 1] },
      { pos: [0.0, 0.94, 0.0], rot: [0, 0, 0], scale: [1, 1, 1] },
    ],
  },
  {
    size: [1.58, 0.12, 0.96],
    tier: 'navy',
    staggerSpeed: 5.6,
    stages: [
      { pos: [-1.15, 0.55, 0.95], rot: [0.35, 0.25, -0.3], scale: [1, 1, 1] },
      { pos: [-0.35, 0.46, 0.32], rot: [0, 0, 0], scale: [1, 1, 1] },
      { pos: [-0.15, 0.28, 0.1], rot: [0, 0, 0], scale: [1, 1, 1] },
      { pos: [0.0, 0.24, 0.0], rot: [0, 0, 0], scale: [1, 1, 1] },
    ],
  },
  {
    size: [0.09, 1.62, 0.09],
    tier: 'gold',
    staggerSpeed: 6.5,
    stages: [
      { pos: [-1.85, -0.25, -0.2], rot: [0.42, 0.15, 0.48], scale: [1, 1, 1] },
      { pos: [-1.18, 0.08, 0.55], rot: [0, 0, 0], scale: [1, 1, 1] },
      { pos: [-1.12, 0.1, 0.48], rot: [0, 0, 0], scale: [1, 1, 1] },
      { pos: [-1.08, 0.1, 0.48], rot: [0, 0, 0], scale: [1, 1, 1] },
    ],
  },
  {
    size: [0.09, 1.62, 0.09],
    tier: 'gold',
    staggerSpeed: 6.8,
    stages: [
      { pos: [1.75, 0.35, -0.95], rot: [-0.35, -0.2, -0.42], scale: [1, 1, 1] },
      { pos: [1.18, 0.08, 0.55], rot: [0, 0, 0], scale: [1, 1, 1] },
      { pos: [1.12, 0.1, 0.48], rot: [0, 0, 0], scale: [1, 1, 1] },
      { pos: [1.08, 0.1, 0.48], rot: [0, 0, 0], scale: [1, 1, 1] },
    ],
  },
  {
    size: [0.09, 1.62, 0.09],
    tier: 'gold',
    staggerSpeed: 7.0,
    stages: [
      { pos: [-0.95, 1.15, -1.15], rot: [0.28, 0.45, -0.35], scale: [1, 1, 1] },
      { pos: [-1.18, 0.08, -0.55], rot: [0, 0, 0], scale: [1, 1, 1] },
      { pos: [-1.12, 0.1, -0.48], rot: [0, 0, 0], scale: [1, 1, 1] },
      { pos: [-1.08, 0.1, -0.48], rot: [0, 0, 0], scale: [1, 1, 1] },
    ],
  },
  {
    size: [0.09, 1.62, 0.09],
    tier: 'gold',
    staggerSpeed: 7.2,
    stages: [
      { pos: [1.05, -0.85, 0.35], rot: [-0.45, 0.3, 0.32], scale: [1, 1, 1] },
      { pos: [1.18, 0.08, -0.55], rot: [0, 0, 0], scale: [1, 1, 1] },
      { pos: [1.12, 0.1, -0.48], rot: [0, 0, 0], scale: [1, 1, 1] },
      { pos: [1.08, 0.1, -0.48], rot: [0, 0, 0], scale: [1, 1, 1] },
    ],
  },
  {
    size: [1.65, 0.08, 0.42],
    tier: 'gold',
    staggerSpeed: 5.5,
    stages: [
      { pos: [0.1, 1.7, 0.9], rot: [0.3, -0.5, 0.4], scale: [1, 1, 1] },
      { pos: [0.0, 1.72, 0.0], rot: [0, 0, 0], scale: [1, 1, 1] },
      { pos: [0.0, 1.24, 0.0], rot: [0, 0, 0], scale: [1, 1, 1] },
      { pos: [0.0, 1.07, 0.0], rot: [0, 0, 0], scale: [1, 1, 1] },
    ],
  },
];

// Camera vantage preset per stage (smoothly interpolated unless user drags)
const STAGE_CAMERAS: [number, number, number][] = [
  [4.8, 2.85, 5.4],
  [5.2, 3.3, 5.0],
  [4.4, 2.45, 4.9],
  [4.2, 2.3, 4.65],
];

// Pre-allocated math helpers outside render loop (zero GC)
const _targetPos = new THREE.Vector3();
const _targetEuler = new THREE.Euler();
const _targetQuat = new THREE.Quaternion();
const _camTargetPos = new THREE.Vector3();

export function ArchitecturalViewport3D({
  activeStageIndex,
  onSelectStage,
}: ArchitecturalViewport3DProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<number>(activeStageIndex);
  const reducedMotionRef = useRef<boolean>(false);
  const requestRenderRef = useRef<(() => void) | null>(null);
  const cameraPresetActiveRef = useRef<boolean>(false);

  const [webglUnavailable, setWebglUnavailable] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isAutoCycling, setIsAutoCycling] = useState(false);

  useEffect(() => {
    stageRef.current = activeStageIndex;
    cameraPresetActiveRef.current = true;
    requestRenderRef.current?.();
  }, [activeStageIndex]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => {
      reducedMotionRef.current = mq.matches;
      setPrefersReducedMotion(mq.matches);
      if (mq.matches) {
        setIsAutoCycling(false);
      }
      requestRenderRef.current?.();
    };
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  // Optional guided sequence playback across the 4 stages
  useEffect(() => {
    if (!isAutoCycling || prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      onSelectStage((stageRef.current + 1) % ARCHITECTURAL_STAGES.length);
    }, 3400);
    return () => window.clearInterval(timer);
  }, [isAutoCycling, prefersReducedMotion, onSelectStage]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const probeCanvas = document.createElement('canvas');
    const probeGl = probeCanvas.getContext('webgl2') || probeCanvas.getContext('webgl');
    if (!probeGl) {
      setWebglUnavailable(true);
      return;
    }

    const debugExt = probeGl.getExtension('WEBGL_debug_renderer_info');
    const gpuParam = debugExt ? debugExt.UNMASKED_RENDERER_WEBGL : probeGl.RENDERER;
    const gpuRenderer = String(probeGl.getParameter(gpuParam) || '');
    probeGl.getExtension('WEBGL_lose_context')?.loseContext();
    const isSoftwareGl = /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(
      gpuRenderer
    );

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isSoftwareGl,
        powerPreference: 'high-performance',
        alpha: false,
      });
    } catch {
      setWebglUnavailable(true);
      return;
    }

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.16;
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x101b2d, 1);

    const width = Math.max(container.clientWidth, 300);
    const height = Math.max(container.clientHeight, 300);
    renderer.setSize(width, height);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x101b2d);
    scene.fog = new THREE.FogExp2(0x101b2d, 0.04);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const roomEnv = new RoomEnvironment();
    const envTarget = pmremGenerator.fromScene(roomEnv, 0.04);
    scene.environment = envTarget.texture;
    roomEnv.dispose();
    pmremGenerator.dispose();

    const camera = new THREE.PerspectiveCamera(37, width / height, 0.1, 60);
    camera.position.set(...STAGE_CAMERAS[stageRef.current]);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = !isSoftwareGl;
    controls.dampingFactor = 0.06;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.minPolarAngle = Math.PI / 5;
    controls.maxPolarAngle = Math.PI / 2.15;
    controls.target.set(0, 0.05, 0);
    controls.update();

    // 3-Point Architectural Lighting Rig
    const hemiLight = new THREE.HemisphereLight(0xaec0d8, 0x0b121f, 1.1);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xfff5e4, 2.25);
    keyLight.position.set(5, 7.5, 5);
    if (!isSoftwareGl) {
      keyLight.castShadow = true;
      keyLight.shadow.mapSize.set(1024, 1024);
      keyLight.shadow.camera.near = 1;
      keyLight.shadow.camera.far = 20;
      keyLight.shadow.camera.left = -4;
      keyLight.shadow.camera.right = 4;
      keyLight.shadow.camera.top = 4;
      keyLight.shadow.camera.bottom = -4;
      keyLight.shadow.bias = -0.0005;
      keyLight.shadow.normalBias = 0.02;
    }
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xe2c89d, 1.35);
    rimLight.position.set(-5.5, 3.8, -4.5);
    scene.add(rimLight);

    // Architectural Materials
    const navyMaterial = new THREE.MeshStandardMaterial({
      color: 0x1b2d4a,
      roughness: 0.4,
      metalness: 0.38,
    });

    const porcelainMaterial = new THREE.MeshStandardMaterial({
      color: 0xf2eee5,
      roughness: 0.7,
      metalness: 0.06,
    });

    const goldMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xb69a70,
      roughness: 0.2,
      metalness: 0.94,
      clearcoat: 0.4,
      clearcoatRoughness: 0.16,
      anisotropy: 0.75,
    });

    const materialMap = {
      navy: navyMaterial,
      porcelain: porcelainMaterial,
      gold: goldMaterial,
    };

    // Grounded Architectural Plinth + Champagne Gold Datum Collar
    const plinthGroup = new THREE.Group();
    const plinthGeo = new THREE.BoxGeometry(4.25, 0.08, 2.85);
    const plinthMat = new THREE.MeshStandardMaterial({
      color: 0x142238,
      roughness: 0.62,
      metalness: 0.22,
    });
    const plinthMesh = new THREE.Mesh(plinthGeo, plinthMat);
    plinthMesh.position.set(0, -1.26, 0);
    plinthMesh.receiveShadow = !isSoftwareGl;
    plinthGroup.add(plinthMesh);

    const collarGeo = new THREE.BoxGeometry(4.28, 0.015, 2.88);
    const collarMesh = new THREE.Mesh(collarGeo, goldMaterial);
    collarMesh.position.set(0, -1.215, 0);
    plinthGroup.add(collarMesh);

    const gridHelper = new THREE.GridHelper(12, 24, 0x263a57, 0x192942);
    gridHelper.position.y = -1.31;
    plinthGroup.add(gridHelper);

    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const sCtx = shadowCanvas.getContext('2d');
    if (sCtx) {
      const grad = sCtx.createRadialGradient(128, 128, 12, 128, 128, 124);
      grad.addColorStop(0, 'rgba(6, 10, 18, 0.58)');
      grad.addColorStop(1, 'rgba(6, 10, 18, 0)');
      sCtx.fillStyle = grad;
      sCtx.fillRect(0, 0, 256, 256);
    }
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const contactPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(3.85, 2.55),
      new THREE.MeshBasicMaterial({
        map: shadowTex,
        transparent: true,
        depthWrite: false,
      })
    );
    contactPlane.rotation.x = -Math.PI / 2;
    contactPlane.position.y = -1.2;
    plinthGroup.add(contactPlane);

    scene.add(plinthGroup);

    // Procedural Architectural Assembly Group
    const assemblyGroup = new THREE.Group();
    scene.add(assemblyGroup);

    const createdGeometries: THREE.BufferGeometry[] = [
      plinthGeo,
      collarGeo,
      contactPlane.geometry,
    ];
    const meshes: THREE.Mesh[] = [];

    ARCHITECTURAL_ELEMENTS.forEach((spec, idx) => {
      const geo = new THREE.BoxGeometry(spec.size[0], spec.size[1], spec.size[2]);
      createdGeometries.push(geo);
      const mesh = new THREE.Mesh(geo, materialMap[spec.tier]);
      mesh.castShadow = !isSoftwareGl;
      mesh.receiveShadow = !isSoftwareGl;

      const initialPose = spec.stages[stageRef.current] ?? spec.stages[0];
      mesh.position.set(...initialPose.pos);
      mesh.rotation.set(...initialPose.rot);
      mesh.scale.set(...initialPose.scale);
      mesh.userData.specIndex = idx;

      if (spec.tier !== 'gold') {
        const edgeGeo = new THREE.EdgesGeometry(geo, 20);
        createdGeometries.push(edgeGeo);
        const edgeMat = new THREE.LineBasicMaterial({
          color: spec.tier === 'navy' ? 0x425e85 : 0xb69a70,
          transparent: true,
          opacity: spec.tier === 'navy' ? 0.58 : 0.38,
        });
        const edges = new THREE.LineSegments(edgeGeo, edgeMat);
        mesh.add(edges);
      }

      assemblyGroup.add(mesh);
      meshes.push(mesh);
    });

    const axisPoints = [
      new THREE.Vector3(-2.1, 0, 0),
      new THREE.Vector3(2.1, 0, 0),
      new THREE.Vector3(0, -1.2, 0),
      new THREE.Vector3(0, 1.5, 0),
      new THREE.Vector3(0, 0, -1.4),
      new THREE.Vector3(0, 0, 1.4),
    ];
    const axisGeo = new THREE.BufferGeometry().setFromPoints(axisPoints);
    createdGeometries.push(axisGeo);
    const axisMat = new THREE.LineBasicMaterial({
      color: 0xb69a70,
      transparent: true,
      opacity: 0.25,
    });
    const axisLines = new THREE.LineSegments(axisGeo, axisMat);
    assemblyGroup.add(axisLines);

    if (!isSoftwareGl) {
      renderer.compile(scene, camera);
    }

    let frameId = 0;
    let disposed = false;
    let userDragging = false;
    const clock = new THREE.Clock();

    const onControlsStart = () => {
      userDragging = true;
      cameraPresetActiveRef.current = false;
    };
    const onControlsEnd = () => {
      userDragging = false;
    };
    const onControlsChange = () => {
      requestRender();
    };
    controls.addEventListener('start', onControlsStart);
    controls.addEventListener('end', onControlsEnd);
    controls.addEventListener('change', onControlsChange);

    let renderBusy = false;
    let renderDirty = false;
    let continuousMode = !reducedMotionRef.current && !isSoftwareGl;

    function afterDraw(cb: () => void) {
      const gl = renderer.getContext() as WebGL2RenderingContext;
      if (!gl || typeof gl.fenceSync !== 'function') {
        frameId = window.setTimeout(cb, 80);
        return;
      }
      const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
      gl.flush();
      const poll = () => {
        if (disposed) return;
        const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
        if (state === gl.UNSIGNALED) {
          frameId = window.setTimeout(poll, 6);
        } else {
          if (sync) gl.deleteSync(sync);
          frameId = window.setTimeout(cb, 80);
        }
      };
      frameId = window.setTimeout(poll, 6);
    }

    function stepScene(delta: number, elapsed: number) {
      const currentStage = stageRef.current;
      const clampedDelta = Math.min(delta, 0.05);
      let maxDelta = 0;

      for (let i = 0; i < meshes.length; i++) {
        const mesh = meshes[i];
        const spec = ARCHITECTURAL_ELEMENTS[i];
        const pose = spec.stages[currentStage];
        _targetPos.set(pose.pos[0], pose.pos[1], pose.pos[2]);

        if (currentStage === 0 && !reducedMotionRef.current && !isSoftwareGl) {
          _targetPos.y += Math.sin(elapsed * 0.95 + i * 0.65) * 0.055;
        }

        _targetEuler.set(pose.rot[0], pose.rot[1], pose.rot[2]);
        _targetQuat.setFromEuler(_targetEuler);

        const prevDist = mesh.position.distanceTo(_targetPos);
        const angleDist = mesh.quaternion.angleTo(_targetQuat);
        maxDelta = Math.max(maxDelta, prevDist, angleDist);

        if (reducedMotionRef.current) {
          mesh.position.copy(_targetPos);
          mesh.quaternion.copy(_targetQuat);
        } else {
          const alpha = 1 - Math.exp(-spec.staggerSpeed * clampedDelta);
          mesh.position.lerp(_targetPos, alpha);
          mesh.quaternion.slerp(_targetQuat, alpha);
        }
      }

      // Smoothly transition camera vantage per stage unless user is orbiting
      if (cameraPresetActiveRef.current && !userDragging) {
        const camPreset = STAGE_CAMERAS[currentStage] ?? STAGE_CAMERAS[0];
        _camTargetPos.set(camPreset[0], camPreset[1], camPreset[2]);
        if (reducedMotionRef.current) {
          camera.position.copy(_camTargetPos);
          cameraPresetActiveRef.current = false;
        } else {
          const camAlpha = 1 - Math.exp(-3.4 * clampedDelta);
          camera.position.lerp(_camTargetPos, camAlpha);
          if (camera.position.distanceTo(_camTargetPos) < 0.02) {
            cameraPresetActiveRef.current = false;
          }
        }
      }

      const targetAxisOpacity =
        currentStage === 1 ? 0.48 : currentStage === 2 ? 0.34 : 0.12;
      axisMat.opacity = THREE.MathUtils.damp(
        axisMat.opacity,
        targetAxisOpacity,
        6,
        clampedDelta
      );

      // Slow dignified architectural rotation when idle and motion permitted
      if (!userDragging && !reducedMotionRef.current && !isSoftwareGl) {
        assemblyGroup.rotation.y += delta * 0.13;
        plinthGroup.rotation.y = assemblyGroup.rotation.y;
      }

      controls.update();
      return maxDelta;
    }

    function requestRender() {
      if (disposed || continuousMode) return;
      if (renderBusy) {
        renderDirty = true;
        return;
      }
      renderBusy = true;
      frameId = requestAnimationFrame(() => {
        if (disposed) return;
        renderDirty = false;
        const delta = Math.max(clock.getDelta(), 0.016);
        const remaining = stepScene(delta, clock.elapsedTime);
        renderer.render(scene, camera);

        const done = () => {
          renderBusy = false;
          if (!disposed && (renderDirty || remaining > 0.004)) {
            requestRender();
          }
        };
        if (isSoftwareGl) afterDraw(done);
        else done();
      });
    }

    requestRenderRef.current = requestRender;

    function tick() {
      if (disposed) return;
      continuousMode = !reducedMotionRef.current && !isSoftwareGl;
      if (!continuousMode) {
        requestRender();
        return;
      }
      const delta = clock.getDelta();
      stepScene(delta, clock.elapsedTime);
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(tick);
    }

    if (continuousMode) {
      frameId = requestAnimationFrame(tick);
    } else {
      requestRender();
    }

    const resizeObserver = new ResizeObserver((entries) => {
      if (disposed) return;
      for (const entry of entries) {
        const w = Math.max(entry.contentRect.width, 280);
        const h = Math.max(entry.contentRect.height, 260);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
        requestRender();
      }
    });
    resizeObserver.observe(container);

    const handleContextLost = (event: Event) => {
      event.preventDefault();
      cancelAnimationFrame(frameId);
      clearTimeout(frameId);
      setWebglUnavailable(true);
    };
    const handleContextRestored = () => {
      setWebglUnavailable(false);
      requestRender();
    };

    renderer.domElement.addEventListener('webglcontextlost', handleContextLost);
    renderer.domElement.addEventListener('webglcontextrestored', handleContextRestored);

    return () => {
      disposed = true;
      requestRenderRef.current = null;
      cancelAnimationFrame(frameId);
      clearTimeout(frameId);
      resizeObserver.disconnect();
      controls.removeEventListener('start', onControlsStart);
      controls.removeEventListener('end', onControlsEnd);
      controls.removeEventListener('change', onControlsChange);
      controls.dispose();
      renderer.domElement.removeEventListener('webglcontextlost', handleContextLost);
      renderer.domElement.removeEventListener(
        'webglcontextrestored',
        handleContextRestored
      );
      createdGeometries.forEach((g) => g.dispose());
      navyMaterial.dispose();
      porcelainMaterial.dispose();
      goldMaterial.dispose();
      plinthMat.dispose();
      axisMat.dispose();
      shadowTex.dispose();
      envTarget.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  const currentStage = ARCHITECTURAL_STAGES[activeStageIndex] ?? ARCHITECTURAL_STAGES[0];

  return (
    <div className="relative w-full h-[460px] sm:h-[520px] lg:h-[590px] border border-[#24344D] bg-[#101B2D] overflow-hidden flex flex-col">
      {/* Minimal Top Architectural Spec Caption */}
      <div className="relative z-10 flex items-center justify-between gap-4 px-5 py-3 border-b border-[#24344D] bg-[#101B2D]">
        <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-[#8994A3]">
          <span className="tabular-nums text-[#B69A70] font-semibold">
            {currentStage.index} / 04
          </span>
          <span aria-hidden="true">·</span>
          <span className="text-[#F5F3EE] font-medium">{currentStage.label}</span>
        </div>

        <div className="flex items-center gap-3">
          {!prefersReducedMotion && (
            <button
              type="button"
              onClick={() => setIsAutoCycling((prev) => !prev)}
              aria-pressed={isAutoCycling}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] uppercase tracking-wider border border-[#2A3D5A] text-[#C6CED9] hover:border-[#B69A70] hover:text-[#F5F3EE] transition-colors whitespace-nowrap"
            >
              {isAutoCycling ? (
                <>
                  <Pause className="w-3 h-3 text-[#B69A70]" />
                  <span>Pause Sequence</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-[#B69A70]" />
                  <span>Play Sequence</span>
                </>
              )}
            </button>
          )}
          <span className="text-xs text-[#8994A3] hidden sm:inline">
            {webglUnavailable
              ? 'Schematic'
              : prefersReducedMotion
                ? 'Static View'
                : 'Drag to orbit'}
          </span>
        </div>
      </div>

      {/* Central 3D Canvas or Graceful Fallback */}
      <div className="relative flex-1 w-full min-h-0">
        {webglUnavailable ? (
          <ArchitecturalFallbackSVG activeStageIndex={activeStageIndex} />
        ) : (
          <div
            ref={mountRef}
            className="w-full h-full cursor-grab active:cursor-grabbing"
            aria-label={`Interactive 3D architectural model depicting ${currentStage.label}`}
          />
        )}
      </div>

      {/* Unified Bottom Stage Control Dock */}
      <div className="relative z-10 border-t border-[#24344D] bg-[#0D1625] px-4 py-3 sm:px-5">
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-2"
          role="tablist"
          aria-label="Architectural transformation stages"
        >
          {ARCHITECTURAL_STAGES.map((stage, idx) => {
            const isActive = idx === activeStageIndex;
            return (
              <button
                key={stage.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setIsAutoCycling(false);
                  onSelectStage(idx);
                }}
                className={`text-left px-3 py-2.5 border transition-colors duration-150 whitespace-nowrap overflow-hidden text-ellipsis min-h-[44px] flex items-center gap-2 ${
                  isActive
                    ? 'border-[#B69A70] bg-[#18273E] text-[#F5F3EE]'
                    : 'border-[#24344D] bg-[#101B2D] text-[#8994A3] hover:text-[#F5F3EE] hover:border-[#3A5070]'
                }`}
              >
                <span
                  className={`text-xs tabular-nums font-semibold shrink-0 ${
                    isActive ? 'text-[#B69A70]' : 'text-[#8994A3]'
                  }`}
                >
                  {stage.index}
                </span>
                <span className="text-xs sm:text-[13px] font-medium truncate">
                  {stage.label}
                </span>
              </button>
            );
          })}
        </div>
        <p className="mt-2.5 text-xs text-[#C6CED9] leading-relaxed">
          {currentStage.headline}
        </p>
      </div>
    </div>
  );
}
