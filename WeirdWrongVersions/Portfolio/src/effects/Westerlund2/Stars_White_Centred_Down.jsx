import React, { useMemo } from 'react'

export default function StarsWhiteCentredDown({ count = 20 }) {
  const positions = useMemo(() => {
    let positions = []
    for (let i = 0; count > i; i++) {
      const r = 2
      const theta = 4 * Math.PI * Math.random()
      const phi = Math.acos(2 * Math.random() - 1)

      //down
      const dIII = 500 + r * Math.cos(theta) * Math.sin(phi) + (-100 + Math.random() * 300)
      const dIV = 200 + r * Math.cos(theta) * Math.sin(phi) + (100 + Math.random() * 150)
      positions.push(dIII)
      positions.push(dIV)
    }
    return new Float32Array(positions)
  }, [count])
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attachObject={['attributes', 'position']} count={positions.length / 3} array={positions} itemSize={2} />
      </bufferGeometry>
      <pointsMaterial size={25} sizeAttenuation color="white" fog={false} />
    </points>
  )
}
