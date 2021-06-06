import React, { useMemo } from 'react'

export default function StarsWhiteCentredUp({ count = 2 }) {
  const positions = useMemo(() => {
    let positions = []
    for (let i = 0; count > i; i++) {
      const r = 2
      const theta = 4 * Math.PI * Math.random()
      const phi = Math.acos(2 * Math.random() - 1)

      // up
      const uI = 300 + r * Math.cos(theta) * Math.sin(phi) + (-100 + Math.random() * 500)
      const uII = 500 + r * Math.cos(theta) * Math.sin(phi) + (-100 + Math.random() * 800)
      const uIII = 300 + r * Math.cos(theta) * Math.sin(phi) + (-100 + Math.random() * 500)
      const uIV = 500 + r * Math.cos(theta) * Math.sin(phi) + (-100 + Math.random() * 500)
      positions.push(uI)
      positions.push(uII)
      positions.push(uIII)
      positions.push(uIV)
    }
    return new Float32Array(positions)
  }, [count])
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attachObject={['attributes', 'position']} count={positions.length / 3} array={positions} itemSize={2} />
      </bufferGeometry>
      <pointsMaterial size={30} sizeAttenuation color="white" fog={false} />
    </points>
  )
}
