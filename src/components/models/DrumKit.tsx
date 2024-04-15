import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { animated, useSpring, config } from "@react-spring/three";

type GLTFResult = GLTF & {
  nodes: {
    Cylinder007: THREE.Mesh;
    Cylinder007_1: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Snare_Bottom_Rim: THREE.Mesh;
    Snare_Top_Rim: THREE.Mesh;
    Cylinder001_1: THREE.Mesh;
    Cylinder001_2: THREE.Mesh;
    Snare_Top_Rim001: THREE.Mesh;
    Snare_Top_Rim002: THREE.Mesh;
    HiHat_Body: THREE.Mesh;
    Cone001: THREE.Mesh;
    Cone002: THREE.Mesh;
    Plane: THREE.Mesh;
    Suzanne: THREE.Mesh;
  };
  materials: {
    ["Material.007"]: THREE.MeshStandardMaterial;
    ["Material.008"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["Material.009"]: THREE.MeshStandardMaterial;
  };
};

export type DrumKitProps = {
  isSnareActive: boolean;
  isHatActive: boolean;
  isTomActive: boolean;
};

export const DrumKit = ({
  isSnareActive,
  isHatActive,
  isTomActive,
}: DrumKitProps) => {
  const { nodes, materials } = useGLTF("/model/drum-kit.glb") as GLTFResult;

  const { scale: snareScale } = useSpring({
    scale: isSnareActive ? 1.1 : 1,
    config: config.wobbly,
  });

  const { scale: hatScale } = useSpring({
    scale: isHatActive ? 1.1 : 1,
    config: config.wobbly,
  });

  const { scale: tomScale } = useSpring({
    scale: isTomActive ? 1.1 : 1,
    config: config.wobbly,
  });

  return (
    <group dispose={null}>
      <animated.group
        position={[-2.5, 2.75, -1.5]}
        rotation={[Math.PI, -0.01, Math.PI]}
        scale={snareScale}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_1.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["Material.001"]}
          position={[0, -1.5, 0]}
          rotation={[-Math.PI, 0.01, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Snare_Bottom_Rim.geometry}
          material={materials["Material.001"]}
          position={[0, -0.375, 0]}
          scale={[1, 0.75, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Snare_Top_Rim.geometry}
          material={materials["Material.001"]}
          position={[0, 0.412, 0]}
          scale={[1, 0.75, 1]}
        />
      </animated.group>
      <animated.group
        position={[0, 1.5, 0]}
        scale={tomScale}
        rotation={[0, 0, -Math.PI / 2]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Snare_Top_Rim001.geometry}
          material={materials["Material.001"]}
          position={[0, 1.1, 0]}
          scale={[1.4, 2, 1.4]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Snare_Top_Rim002.geometry}
          material={materials["Material.001"]}
          position={[0, -1.067, 0]}
          scale={[1.4, 2, 1.4]}
        />
      </animated.group>
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes.HiHat_Body.geometry}
        material={materials["Material.001"]}
        position={[-1, 2.5, -3]}
        scale={hatScale}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cone001.geometry}
          material={materials["Material.006"]}
          position={[0.096, 1.866, 0.01]}
          rotation={[Math.PI, 0, 0]}
          scale={[1.667, 1, 1.667]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cone002.geometry}
          material={materials["Material.006"]}
          position={[0.096, 2.158, 0.01]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[1.667, 1, 1.667]}
        />
      </animated.mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Suzanne.geometry}
        material={materials["Material.009"]}
        position={[3, 0.5, 3]}
        rotation={[-0.78, 0.618, 0.521]}
      />
    </group>
  );
};

export default DrumKit;

useGLTF.preload("/model/drum-kit.glb");
