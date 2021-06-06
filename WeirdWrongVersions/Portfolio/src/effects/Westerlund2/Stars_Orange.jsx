import React, { useMemo } from 'react'
import * as THREE from 'three'

export default function StarsOrange({ count = 50 }) {
  const positions = useMemo(() => {
    let positions = []
    let scene;
    scene = new THREE.Scene();
    const particleLight = new THREE.SphereGeometry( 4, 8, 8 )
    scene.add(particleLight)

    for (let i = 0; count > i; i++) {
      const r = 5000
      const theta = 3 * Math.PI * Math.random()
      const phi = Math.acos(2 * Math.random() - 1)

      const I = r * Math.cos(theta) * Math.sin(phi) + (-500 + Math.random() * 2550)
      const II = r * Math.cos(theta) * Math.sin(phi) + (-500 + Math.random() * 2550)
      const III = r * Math.cos(theta) * Math.sin(phi) + (-500 + Math.random() * 2550)
      const IV = r * Math.cos(phi) + (-500 + Math.random() * 2550)

      positions.push(I)
      positions.push(II)
      positions.push(III)
      positions.push(IV)
    }
    return new Float32Array(positions)
  }, [count])
  return (
    <points>
      <sphereGeometry>
        <bufferAttribute attachObject={['attributes', 'position']} count={positions.length / 2} array={positions} itemSize={2} Sprit />
        
      </sphereGeometry>
      <pointsMaterial size={30} sizeAttenuation color="#FF8C00" fog={false} />
    </points>
  )
}