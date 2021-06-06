import React, { useMemo } from 'react'

export default function StarsYellow({ count = 50 }) {
  const positions = useMemo(() => {
    let positions = []

        for (let i = 0; count > i; i++) {
          const r = 4000
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
          <bufferGeometry>
            <bufferAttribute attachObject={['attributes', 'position']} count={positions.length / 2} array={positions} itemSize={2} />
          </bufferGeometry>
          <pointsMaterial size={10} sizeAttenuation color="yellow" fog={false} />
        </points>
      )
    }