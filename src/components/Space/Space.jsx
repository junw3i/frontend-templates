// react component
import React, { Suspense, createRoot } from 'react'
import * as RC from 'render-composer'
import { Canvas, useFrame } from '@react-three/fiber'
import { Loader } from '@react-three/drei'
import Scene from './Scene'

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={event => click(!clicked)}
      onPointerOver={event => hover(true)}
      onPointerOut={event => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const Space = () => {
  return (
    <>
      {/* <Loader />
    <RC.Canvas dpr={1}>
      <color attach="background" args={['#FFE9A0']} />
      <RC.RenderPipeline>
        <Suspense>
          <Scene />
        </Suspense>
      </RC.RenderPipeline>
    </RC.Canvas> */}
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
      <div>hello</div>
    </>
  )
}

export default Space
