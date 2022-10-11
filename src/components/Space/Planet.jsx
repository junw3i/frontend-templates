import { GroupProps } from '@react-three/fiber'
import { composable, Layer, modules } from 'material-composer-r3f'
import { Fresnel, Vec3 } from 'shader-composer'
import { Color } from 'three'
// import { AsteroidBelt } from './vfx/AsteroidBelt'
// import { Nebula } from './vfx/Nebula'

export const Planet = props => {
  return (
    <group {...props}>
      {/* The actual planet */}
      <mesh scale={10}>
        <sphereGeometry args={[1, 32, 32]} />

        <composable.meshStandardMaterial metalness={0} roughness={1}>
          {/* Base color of the planet */}
          <modules.Color color={new Color('#F8CB2E')} />

          {/* Fresnel effect */}
          <Layer opacity={Fresnel({ power: 3 })}>
            <modules.Color color={new Color('#F8CB2E').multiplyScalar(2)} />
          </Layer>
        </composable.meshStandardMaterial>
      </mesh>

      {/* Some funky clouds! */}
      {/* <Nebula
        dimensions={Vec3([40, 10, 40])}
        amount={60}
        opacity={0.2}
        rotationSpeed={0.05}
        minSize={10}
        maxSize={30}
        color={new Color('#FFE9A0').multiplyScalar(15)}
      /> */}

      {/* The asteroid belt. */}
      {/* <AsteroidBelt /> */}
    </group>
  )
}
