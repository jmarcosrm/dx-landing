import { useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function DotMesh() {
  const { size, viewport } = useThree()
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2() },
        dotColor: { value: new THREE.Color('#FF2D2D') },
        bgColor: { value: new THREE.Color('#000000') },
        rotation: { value: 0 },
        gridSize: { value: 80 },
        dotOpacity: { value: 0.06 },
      },
      vertexShader: /* glsl */`
        void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
      `,
      fragmentShader: /* glsl */`
        uniform float time;
        uniform vec2 resolution;
        uniform vec3 dotColor;
        uniform vec3 bgColor;
        uniform float rotation;
        uniform float gridSize;
        uniform float dotOpacity;

        vec2 rotate(vec2 uv, float angle) {
          float s = sin(angle);
          float c = cos(angle);
          mat2 m = mat2(c, -s, s, c);
          return m * (uv - 0.5) + 0.5;
        }

        vec2 coverUv(vec2 uv) {
          vec2 s = resolution.xy / max(resolution.x, resolution.y);
          vec2 newUv = (uv - 0.5) * s + 0.5;
          return clamp(newUv, 0.0, 1.0);
        }

        float sdfCircle(vec2 p, float r) { return length(p - 0.5) - r; }

        void main() {
          vec2 screenUv = gl_FragCoord.xy / resolution;
          vec2 uv = coverUv(screenUv);
          vec2 ruv = rotate(uv, rotation);

          vec2 gridUv = fract(ruv * gridSize);

          // subtle breathing animation
          float breathe = 0.06 + 0.02 * sin(time * 2.0 + (uv.x+uv.y)*10.0);
          float sdfDot = sdfCircle(gridUv, breathe);
          float dot = smoothstep(0.04, 0.0, sdfDot);

          vec3 color = mix(bgColor, dotColor, dot * dotOpacity);
          gl_FragColor = vec4(color, 1.0);
        }
      `,
    })
  }, [])

  useFrame((state) => {
    (material.uniforms.time.value as number) = state.clock.elapsedTime
    const { width, height } = size
    const dpr = viewport.dpr
    material.uniforms.resolution.value.set(width * dpr, height * dpr)
  })

  const scale = Math.max(viewport.width, viewport.height) / 2
  return (
    <mesh scale={[scale, scale, 1]}>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} />
    </mesh>
  )
}

export default function DotScreenBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas gl={{ antialias: true, powerPreference: 'high-performance' }}>
        <DotMesh />
      </Canvas>
    </div>
  )
}

