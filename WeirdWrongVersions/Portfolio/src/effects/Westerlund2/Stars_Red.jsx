import React, { useMemo } from 'react'

export default function StarsRed({ count = 200 }) {
  const positions = useMemo(() => {
    let positions = []
    for (let i = 0; count > i; i++) {
      const r = 10
      const theta = 4 * Math.PI * Math.random()
      const phi = Math.acos(2 * Math.random() - 1)

      const I = r * Math.cos(theta) * Math.sin(phi) + (-100 + Math.random() * 1000)
      const II = r * Math.cos(theta) * Math.sin(phi) + (-100 + Math.random() * 1500)
      const III = r * Math.cos(theta) * Math.sin(phi) + (-100 + Math.random() * 1000)
      const IV = r * Math.cos(phi) + (-100 + Math.random() * 1000)

      positions.push(I)
      positions.push(II)
      positions.push(III)
      positions.push(IV)
    }
    return new Float32Array(positions)
  }, [count])
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attachObject={['attributes', 'position']} count={positions.length / 4} array={positions} itemSize={4} />
      </bufferGeometry>
      <pointsMaterial size={15} sizeAttenuation color="red" fog={false} />
    </points>
  )
}
